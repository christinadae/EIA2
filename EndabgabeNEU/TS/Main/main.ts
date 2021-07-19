namespace Endabgabe {
/*
Aufgabe: <EIA2-Endabgabe-Fußball Simulation>
Name: <Christina Däschner>
Matrikel: <266417>
Datum: <19.07.2021>
Quellen: <Zusammenarbeit mit: Huu Thien Phan Ngoc, Mona Kabelka, Timur Yildirim, Mariia Kolkutova>
*/
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    export enum Task { // für switch-case in player.ts
        lookForBall,
        walkToBall,
        shootBall,
        walkToOrigin
    }

    let imageData: ImageData;
    export let ball: Ball;
    export let key: boolean;
    export let animationKey: boolean = true; // Key für Animation
    export let shootKey: boolean = false; // -> überprüfen ob die nur Animation Key funktioniert // Key für den Ball, der das Schießen erlaubt (wenn es in seinem Radius ist)
    export let humans: Human[] = []; // // alle Personen werden darin gespeichert

    //HTML ELEMENTE & FORM ELEMENTE//
    //Form Left
    export let form: HTMLDivElement;
    export let playerNumberDOMElement: HTMLParagraphElement; //Spielernummer
    export let teamDOMElement: HTMLParagraphElement; //Team
    //Form Right
    export let teamADOMElement: HTMLButtonElement; //Team A
    export let teamBDOMElement: HTMLButtonElement; //Team B
    export let speedPlayer: HTMLParagraphElement; // Geschwindigkeit Spieler
    export let precPlayer: HTMLParagraphElement; // Präzision Spieler
    export let numberPlayer: HTMLParagraphElement; 
    export let teamPlayer: HTMLParagraphElement;

    export let speedSub: HTMLParagraphElement;
    export let precSub: HTMLParagraphElement;
    export let numberSub: HTMLParagraphElement;
    export let teamSub: HTMLParagraphElement;

    export let subPlayerDOMElement: HTMLSelectElement;

    export let scoreADOMElement: HTMLElement; // Score Team A
    export let scoreBDOMElement: HTMLElement; // Score Team B

    export let changeBtn: HTMLButtonElement;

    export let scoreA: number = 0; // Score-Zähler A
    export let scoreB: number = 0; // Score-Zähler B


    function handleLoad(): void {

        speedPlayer = <HTMLParagraphElement>document.querySelector("#speedPlayer");
        precPlayer = <HTMLParagraphElement>document.querySelector("#precPlayer");
        numberPlayer = <HTMLParagraphElement>document.querySelector("#numberPlayer");
        teamPlayer = <HTMLParagraphElement>document.querySelector("#teamPlayer");

        speedSub = <HTMLParagraphElement>document.querySelector("#speedSubstitute");
        precSub = <HTMLParagraphElement>document.querySelector("#precSubstitute");
        numberSub = <HTMLParagraphElement>document.querySelector("#numberSubstitute");
        teamSub = <HTMLParagraphElement>document.querySelector("#teamSubstitute");

        subPlayerDOMElement = <HTMLSelectElement>document.querySelector("#subPlayer");
        scoreADOMElement = <HTMLElement>document.querySelector("#scoreA");
        scoreBDOMElement = <HTMLElement>document.querySelector("#scoreB");
        changeBtn = <HTMLButtonElement>document.querySelector("#changeBtn");
        form = <HTMLDivElement>document.querySelector("#formLeft");
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        changeBtn.addEventListener("click", exchangePlayer);
        document.addEventListener("keydown", switchForm);
        subPlayerDOMElement.addEventListener("change", subChange);
        form.addEventListener("change", handleChange);
        canvas.addEventListener("click", shootBall);
        canvas.addEventListener("click", updateForm);
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.width = 900;
        canvas.height = 500;
        drawField(); //Fußballfeld wird gemalt
        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height); // Speichert das komplette Canvas + gezeichnete Inhalte von Canvas
        ball = new Ball(new Vector(canvas.width * 0.5, canvas.height * 0.5)); // Ball wird direkt zu Beginn einer festen Position zugewiesen

        createPlayer();
        handleChange();
        animate();
    }

    function createPlayer(): void {
         // Die Spieler werden generiert, die eine Position von der Klasse Vector erhalten; Ihre Eigenschaften erhalten sie von der Klasse Player;
        //  Es werden 14 pro Team erstellt -> 11 Spieler pro Team auf dem Feld und 3 Austauschspieler pro Team 
        for (let indexA: number = 0; indexA < 2; indexA++) {
           
            for (let indexB: number = 0; indexB < 11; indexB++) {
                let randomNumber: number = Math.floor(1 + Math.random() * (50 - 1));
                if (indexA == 0) {
                    humans.push(new Player(new Vector(positionsTeam1[indexB].x, positionsTeam1[indexB].y), "white", true, randomNumber, "A"));  //Team 1: Spieler für Spieler (mit eigenem Index) wird in ihren x und y Werten erstellt + Farbe zugewiesen
                }
                else {
                    
                    humans.push(new Player(new Vector(positionsTeam2[indexB].x, positionsTeam2[indexB].y), "white", true, randomNumber, "B")); //Team 1: Spieler für Spieler (mit eigenem Index) wird in ihren x und y Werten erstellt + Farbe zugewiesen

                }
            }
        }

        for (let indexA: number = 0; indexA < 2; indexA++) { //Austauschspieler
            for (let indexB: number = 11; indexB < 14; indexB++) {
                console.log(indexB);
                let randomNumber: number = Math.floor(1 + Math.random() * (50 - 1));
                if (indexA == 0) {
                    humans.push(new Player(new Vector(positionsTeam1[indexB].x, positionsTeam1[indexB].y), "white", false, randomNumber, "A"));
                }
                else {
                    humans.push(new Player(new Vector(positionsTeam2[indexB].x, positionsTeam2[indexB].y), "white", false, randomNumber, "B"));
                }
            }
        }

        console.log(humans);
    }

    function shootBall(_event: MouseEvent): void {
        if (shootKey == true) { // Ermöglicht, den Ball schießen zu können
            let rect: DOMRect = canvas.getBoundingClientRect(); // macht Verhältnis wieder normal
            let mouse: Vector = new Vector(_event.clientX - rect.left, _event.clientY - rect.top); // Ball wird dahin geschossen, wo geklickt wird mit Maus
            key = true; // ist im Player vorhanden
            ball.setnewPosition(mouse); // Ball erhält neue Position, die mit der Maus bestimmt wurde
            animationKey = true;
            shootKey = false;
            animate();
        }
    }

    function animate(): void {  // Animation (ca. 60x pro Sekunde)
        if (animationKey == true) {
            requestAnimationFrame(animate);
            crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            crc2.putImageData(imageData, 0, 0);

            for (let index: number = 0; index < humans.length; index++) { // human.length => Sodass alle im Array in der For-Schleife angesprochen werden + gezeichnet werden
                humans[index].update(); // Einzelner Spieler im gespeicherten Array wird aktualisiert
                humans[index].draw(); // und animiert bzw. gezeichnet
            }
            ball.update(); // Ball + seine Position wird aktualisiert
            ball.draw(); // und neu gezeichnet
        }
    }

  
    
}