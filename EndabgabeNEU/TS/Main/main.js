"use strict";
var Endabgabe;
(function (Endabgabe) {
    /*
    Aufgabe: <EIA2-Endabgabe-Fußball Simulation>
    Name: <Christina Däschner>
    Matrikel: <266417>
    Datum: <19.07.2021>
    Quellen: <Zusammenarbeit mit: Huu Thien Phan Ngoc, Mona Kabelka, Timur Yildirim, Mariia Kolkutova>
    */
    window.addEventListener("load", handleLoad);
    let Task;
    (function (Task) {
        Task[Task["lookForBall"] = 0] = "lookForBall";
        Task[Task["walkToBall"] = 1] = "walkToBall";
        Task[Task["shootBall"] = 2] = "shootBall";
        Task[Task["walkToOrigin"] = 3] = "walkToOrigin";
    })(Task = Endabgabe.Task || (Endabgabe.Task = {}));
    let imageData;
    Endabgabe.animationKey = true; // Key für Animation
    Endabgabe.shootKey = false; // -> überprüfen ob die nur Animation Key funktioniert // Key für den Ball, der das Schießen erlaubt (wenn es in seinem Radius ist)
    Endabgabe.humans = []; // // alle Personen werden darin gespeichert
    Endabgabe.scoreA = 0; // Score-Zähler A
    Endabgabe.scoreB = 0; // Score-Zähler B
    function handleLoad() {
        Endabgabe.speedPlayer = document.querySelector("#speedPlayer");
        Endabgabe.precPlayer = document.querySelector("#precPlayer");
        Endabgabe.numberPlayer = document.querySelector("#numberPlayer");
        Endabgabe.teamPlayer = document.querySelector("#teamPlayer");
        Endabgabe.speedSub = document.querySelector("#speedSubstitute");
        Endabgabe.precSub = document.querySelector("#precSubstitute");
        Endabgabe.numberSub = document.querySelector("#numberSubstitute");
        Endabgabe.teamSub = document.querySelector("#teamSubstitute");
        Endabgabe.subPlayerDOMElement = document.querySelector("#subPlayer");
        Endabgabe.scoreADOMElement = document.querySelector("#scoreA");
        Endabgabe.scoreBDOMElement = document.querySelector("#scoreB");
        Endabgabe.changeBtn = document.querySelector("#changeBtn");
        Endabgabe.form = document.querySelector("#formLeft");
        Endabgabe.canvas = document.querySelector("canvas");
        Endabgabe.changeBtn.addEventListener("click", Endabgabe.exchangePlayer);
        document.addEventListener("keydown", Endabgabe.switchForm);
        Endabgabe.subPlayerDOMElement.addEventListener("change", Endabgabe.subChange);
        Endabgabe.form.addEventListener("change", Endabgabe.handleChange);
        Endabgabe.canvas.addEventListener("click", shootBall);
        Endabgabe.canvas.addEventListener("click", Endabgabe.updateForm);
        Endabgabe.crc2 = Endabgabe.canvas.getContext("2d");
        Endabgabe.canvas.width = 900;
        Endabgabe.canvas.height = 500;
        Endabgabe.drawField(); //Fußballfeld wird gemalt
        imageData = Endabgabe.crc2.getImageData(0, 0, Endabgabe.canvas.width, Endabgabe.canvas.height); // Speichert das komplette Canvas + gezeichnete Inhalte von Canvas
        Endabgabe.ball = new Endabgabe.Ball(new Endabgabe.Vector(Endabgabe.canvas.width * 0.5, Endabgabe.canvas.height * 0.5)); // Ball wird direkt zu Beginn einer festen Position zugewiesen
        createPlayer();
        Endabgabe.handleChange();
        animate();
    }
    function createPlayer() {
        // Die Spieler werden generiert, die eine Position von der Klasse Vector erhalten; Ihre Eigenschaften erhalten sie von der Klasse Player;
        //  Es werden 14 pro Team erstellt -> 11 Spieler pro Team auf dem Feld und 3 Austauschspieler pro Team 
        for (let indexA = 0; indexA < 2; indexA++) {
            for (let indexB = 0; indexB < 11; indexB++) {
                let randomNumber = Math.floor(1 + Math.random() * (50 - 1));
                if (indexA == 0) {
                    Endabgabe.humans.push(new Endabgabe.Player(new Endabgabe.Vector(Endabgabe.positionsTeam1[indexB].x, Endabgabe.positionsTeam1[indexB].y), "white", true, randomNumber, "A")); //Team 1: Spieler für Spieler (mit eigenem Index) wird in ihren x und y Werten erstellt + Farbe zugewiesen
                }
                else {
                    Endabgabe.humans.push(new Endabgabe.Player(new Endabgabe.Vector(Endabgabe.positionsTeam2[indexB].x, Endabgabe.positionsTeam2[indexB].y), "white", true, randomNumber, "B")); //Team 1: Spieler für Spieler (mit eigenem Index) wird in ihren x und y Werten erstellt + Farbe zugewiesen
                }
            }
        }
        for (let indexA = 0; indexA < 2; indexA++) { //Austauschspieler
            for (let indexB = 11; indexB < 14; indexB++) {
                console.log(indexB);
                let randomNumber = Math.floor(1 + Math.random() * (50 - 1));
                if (indexA == 0) {
                    Endabgabe.humans.push(new Endabgabe.Player(new Endabgabe.Vector(Endabgabe.positionsTeam1[indexB].x, Endabgabe.positionsTeam1[indexB].y), "white", false, randomNumber, "A"));
                }
                else {
                    Endabgabe.humans.push(new Endabgabe.Player(new Endabgabe.Vector(Endabgabe.positionsTeam2[indexB].x, Endabgabe.positionsTeam2[indexB].y), "white", false, randomNumber, "B"));
                }
            }
        }
        console.log(Endabgabe.humans);
    }
    function shootBall(_event) {
        if (Endabgabe.shootKey == true) { // Ermöglicht, den Ball schießen zu können
            let rect = Endabgabe.canvas.getBoundingClientRect(); // macht Verhältnis wieder normal
            let mouse = new Endabgabe.Vector(_event.clientX - rect.left, _event.clientY - rect.top); // Ball wird dahin geschossen, wo geklickt wird mit Maus
            Endabgabe.key = true; // ist im Player vorhanden
            Endabgabe.ball.setnewPosition(mouse); // Ball erhält neue Position, die mit der Maus bestimmt wurde
            Endabgabe.animationKey = true;
            Endabgabe.shootKey = false;
            animate();
        }
    }
    function animate() {
        if (Endabgabe.animationKey == true) {
            requestAnimationFrame(animate);
            Endabgabe.crc2.clearRect(0, 0, Endabgabe.crc2.canvas.width, Endabgabe.crc2.canvas.height);
            Endabgabe.crc2.putImageData(imageData, 0, 0);
            for (let index = 0; index < Endabgabe.humans.length; index++) { // human.length => Sodass alle im Array in der For-Schleife angesprochen werden + gezeichnet werden
                Endabgabe.humans[index].update(); // Einzelner Spieler im gespeicherten Array wird aktualisiert
                Endabgabe.humans[index].draw(); // und animiert bzw. gezeichnet
            }
            Endabgabe.ball.update(); // Ball + seine Position wird aktualisiert
            Endabgabe.ball.draw(); // und neu gezeichnet
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=main.js.map