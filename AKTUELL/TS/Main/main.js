"use strict";
var EndabgabePROBE;
(function (EndabgabePROBE) {
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
        Task[Task["changePlayer"] = 4] = "changePlayer";
    })(Task = EndabgabePROBE.Task || (EndabgabePROBE.Task = {}));
    EndabgabePROBE.animationKey = true; // Key für Animation
    EndabgabePROBE.shootKey = false; // -> überprüfen ob die nur Animation Key funktioniert // Key für den Ball, der das Schießen erlaubt (wenn es in seinem Radius ist)
    EndabgabePROBE.humans = []; // alle Personen werden darin gespeichert
    EndabgabePROBE.scoreA = 0;
    EndabgabePROBE.scoreB = 0;
    function handleLoad() {
        EndabgabePROBE.speedPlayer = document.querySelector("#speedPlayer");
        EndabgabePROBE.precPlayer = document.querySelector("#precPlayer");
        EndabgabePROBE.numberPlayer = document.querySelector("#numberPlayer");
        EndabgabePROBE.teamPlayer = document.querySelector("#teamPlayer");
        EndabgabePROBE.posession = document.querySelector("#posession");
        EndabgabePROBE.speedSub = document.querySelector("#speedSubstitute");
        EndabgabePROBE.precSub = document.querySelector("#precSubstitute");
        EndabgabePROBE.numberSub = document.querySelector("#numberSubstitute");
        EndabgabePROBE.teamSub = document.querySelector("#teamSubstitute");
        EndabgabePROBE.subPlayerDOMElement = document.querySelector("#subPlayer");
        EndabgabePROBE.scoreADOMElement = document.querySelector("#scoreA");
        EndabgabePROBE.scoreBDOMElement = document.querySelector("#scoreB");
        EndabgabePROBE.changeBtn = document.querySelector("#changeBtn");
        EndabgabePROBE.form = document.querySelector("#formLeft");
        EndabgabePROBE.canvas = document.querySelector("canvas");
        EndabgabePROBE.changeBtn.addEventListener("click", EndabgabePROBE.exchangePlayer);
        document.addEventListener("keydown", EndabgabePROBE.switchForm);
        EndabgabePROBE.subPlayerDOMElement.addEventListener("change", EndabgabePROBE.subChange);
        EndabgabePROBE.form.addEventListener("change", EndabgabePROBE.handleChange);
        EndabgabePROBE.canvas.addEventListener("click", shootBall);
        //canvas.addEventListener("click", updateForm);
        EndabgabePROBE.crc2 = EndabgabePROBE.canvas.getContext("2d");
        EndabgabePROBE.canvas.width = 900;
        EndabgabePROBE.canvas.height = 500;
        EndabgabePROBE.drawField();
        EndabgabePROBE.imageData = EndabgabePROBE.crc2.getImageData(0, 0, EndabgabePROBE.canvas.width, EndabgabePROBE.canvas.height); // Speichert das komplette Canvas + gezeichnete Inhalte von Canvas
        EndabgabePROBE.ball = new Ball(new EndabgabePROBE.Vector(EndabgabePROBE.canvas.width * 0.5, EndabgabePROBE.canvas.height * 0.5)); // Ball wird direkt zu Beginn einer festen Position zugewiesen
        createPlayer();
        createReferees();
        EndabgabePROBE.handleChange();
        EndabgabePROBE.formIntoHTML(0);
        animate();
    }
    function createPlayer() {
        // Die Spieler werden generiert, die eine Position von der Klasse Vector erhalten; Ihre Eigenschaften erhalten sie von der Klasse Player;
        //  Es werden 14 pro Team erstellt -> 11 Spieler pro Team auf dem Feld und 3 Austauschspieler pro Team 
        for (let indexA = 0; indexA < 2; indexA++) {
            for (let indexB = 0; indexB < 11; indexB++) {
                let randomNumber = Math.floor(1 + Math.random() * (50 - 1));
                if (indexA == 0) {
                    EndabgabePROBE.humans.push(new EndabgabePROBE.Player(new EndabgabePROBE.Vector(EndabgabePROBE.positionsTeam1[indexB].x, EndabgabePROBE.positionsTeam1[indexB].y), "white", true, randomNumber, "A")); //Team 1: Spieler für Spieler (mit eigenem Index) wird in ihren x und y Werten erstellt + Farbe zugewiesen
                }
                else {
                    EndabgabePROBE.humans.push(new EndabgabePROBE.Player(new EndabgabePROBE.Vector(EndabgabePROBE.positionsTeam2[indexB].x, EndabgabePROBE.positionsTeam2[indexB].y), "white", true, randomNumber, "B")); //Team 1: Spieler für Spieler (mit eigenem Index) wird in ihren x und y Werten erstellt + Farbe zugewiesen
                }
            }
        }
        for (let indexA = 0; indexA < 2; indexA++) { //Austauschspieler
            for (let indexB = 11; indexB < 14; indexB++) {
                console.log(indexB);
                let randomNumber = Math.floor(1 + Math.random() * (50 - 1));
                if (indexA == 0) {
                    EndabgabePROBE.humans.push(new EndabgabePROBE.Player(new EndabgabePROBE.Vector(EndabgabePROBE.positionsTeam1[indexB].x, EndabgabePROBE.positionsTeam1[indexB].y), "white", false, randomNumber, "A"));
                }
                else {
                    EndabgabePROBE.humans.push(new EndabgabePROBE.Player(new EndabgabePROBE.Vector(EndabgabePROBE.positionsTeam2[indexB].x, EndabgabePROBE.positionsTeam2[indexB].y), "white", false, randomNumber, "B"));
                }
            }
        }
    }
    function createReferees() {
        EndabgabePROBE.humans.push(new EndabgabePROBE.Referee(new EndabgabePROBE.Vector(450, 150), "white"));
        EndabgabePROBE.humans.push(new EndabgabePROBE.Linereferee(new EndabgabePROBE.Vector(680, 15), "pink"));
        EndabgabePROBE.humans.push(new EndabgabePROBE.Linereferee(new EndabgabePROBE.Vector(230, 485), "pink"));
    }
    function shootBall(_event) {
        if (EndabgabePROBE.shootKey == true) { // Ermöglicht, den Ball schießen zu können
            let rect = EndabgabePROBE.canvas.getBoundingClientRect(); // macht Verhältnis wieder normal
            let mouse = new EndabgabePROBE.Vector(_event.clientX - rect.left, _event.clientY - rect.top); // Ball wird dahin geschossen, wo geklickt wird mit Maus
            EndabgabePROBE.key = true; // ist im Player vorhanden
            EndabgabePROBE.ball.setnewPosition(mouse); // Ball erhält neue Position, die mit der Maus bestimmt wurde
            EndabgabePROBE.animationKey = true;
            EndabgabePROBE.shootKey = false;
            animate();
        }
    }
    function animate() {
        if (EndabgabePROBE.animationKey == true) {
            requestAnimationFrame(animate);
            EndabgabePROBE.crc2.clearRect(0, 0, EndabgabePROBE.crc2.canvas.width, EndabgabePROBE.crc2.canvas.height);
            EndabgabePROBE.crc2.putImageData(EndabgabePROBE.imageData, 0, 0);
            for (let index = 0; index < EndabgabePROBE.humans.length; index++) { // human.length => Sodass alle im Array in der For-Schleife angesprochen werden + gezeichnet werden
                EndabgabePROBE.humans[index].update(); // Einzelner Spieler im gespeicherten Array wird aktualisiert
                EndabgabePROBE.humans[index].draw(); // und animiert bzw. gezeichnet
            }
            EndabgabePROBE.ball.update(); // Ball + seine Position wird aktualisiert
            EndabgabePROBE.ball.draw(); // und neu gezeichnet
        }
    }
})(EndabgabePROBE || (EndabgabePROBE = {}));
//# sourceMappingURL=main.js.map