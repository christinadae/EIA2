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

    export enum Task {
        lookForBall,
        walkToBall,
        shootBall,
        walkToOrigin,
        changePlayer
    }

    export let imageData: ImageData;
    export let ball: Ball;
    export let key: boolean;
    export let animationKey: boolean = true;
    export let shootKey: boolean = false;
    export let players: Human[] = [];
    export let form: HTMLDivElement;
    export let playerNumberDOMElement: HTMLParagraphElement;
    export let teamDOMElement: HTMLParagraphElement;
    export let teamADOMElement: HTMLButtonElement;
    export let teamBDOMElement: HTMLButtonElement;
    export let speedPlayer: HTMLParagraphElement;
    export let precPlayer: HTMLParagraphElement;
    export let numberPlayer: HTMLParagraphElement;
    export let teamPlayer: HTMLParagraphElement;
    export let speedSub: HTMLParagraphElement;
    export let precSub: HTMLParagraphElement;
    export let numberSub: HTMLParagraphElement;
    export let teamSub: HTMLParagraphElement;
    export let subPlayerDOMElement: HTMLSelectElement;
    export let scoreADOMElement: HTMLElement;
    export let scoreBDOMElement: HTMLElement;
    export let changeBtn: HTMLButtonElement;
    export let scoreA: number = 0;
    export let scoreB: number = 0;
    export let posession: HTMLParagraphElement;

    function handleLoad(): void {
        //HTML Parapraphen
        speedPlayer = <HTMLParagraphElement>document.querySelector("#speedPlayer");
        precPlayer = <HTMLParagraphElement>document.querySelector("#precPlayer");
        numberPlayer = <HTMLParagraphElement>document.querySelector("#numberPlayer");
        teamPlayer = <HTMLParagraphElement>document.querySelector("#teamPlayer");
        posession = <HTMLParagraphElement>document.querySelector("#posession");
        speedSub = <HTMLParagraphElement>document.querySelector("#speedSubstitute");
        precSub = <HTMLParagraphElement>document.querySelector("#precSubstitute");
        numberSub = <HTMLParagraphElement>document.querySelector("#numberSubstitute");
        teamSub = <HTMLParagraphElement>document.querySelector("#teamSubstitute");
        //HTML Elemente
        form = <HTMLDivElement>document.querySelector("#formLeft");
        subPlayerDOMElement = <HTMLSelectElement>document.querySelector("#subPlayer");
        scoreADOMElement = <HTMLElement>document.querySelector("#scoreA");
        scoreBDOMElement = <HTMLElement>document.querySelector("#scoreB");
        changeBtn = <HTMLButtonElement>document.querySelector("#changeBtn");
       
        subPlayerDOMElement.addEventListener("change", subChange);
        changeBtn.addEventListener("click", exchangePlayer);
        document.addEventListener("keydown", switchForm);
        form.addEventListener("change", handleChange);
        //Canvas
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        canvas.addEventListener("click", shootBall);  
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.width = 900;
        canvas.height = 500;
       
        drawField();
        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        ball = new Ball(new Vector(canvas.width * 0.5, canvas.height * 0.5));
        createPlayer();
        createReferees();
        handleChange();
        formIntoHTML(0);
        animate();
    }

    function createPlayer(): void {
        for (let indexA: number = 0; indexA < 2; indexA++) {
            for (let indexB: number = 0; indexB < 11; indexB++) {
                let randomNumber: number = Math.floor(1 + Math.random() * (50 - 1));
                if (indexA == 0) {
                    players.push(new Player(new Vector(positionsTeam1[indexB].x, positionsTeam1[indexB].y), "white", true, randomNumber, "A"));
                }
                else {
                    players.push(new Player(new Vector(positionsTeam2[indexB].x, positionsTeam2[indexB].y), "white", true, randomNumber, "B"));
                }
            }
        }

        for (let indexA: number = 0; indexA < 2; indexA++) {
            for (let indexB: number = 11; indexB < 14; indexB++) {
                console.log(indexB);
                let randomNumber: number = Math.floor(1 + Math.random() * (50 - 1));
                if (indexA == 0) {
                    players.push(new Player(new Vector(positionsTeam1[indexB].x, positionsTeam1[indexB].y), "white", false, randomNumber, "A"));
                }
                else {
                    players.push(new Player(new Vector(positionsTeam2[indexB].x, positionsTeam2[indexB].y), "white", false, randomNumber, "B"));
                }
            }
        }
    }

    function createReferees(): void {
        players.push(new Referee(new Vector(450, 150), "white"));
        players.push(new Linereferee(new Vector(680, 15), "pink"));
        players.push(new Linereferee(new Vector(230, 485), "pink"));
    }

    function shootBall(_event: MouseEvent): void {
        console.log(shootKey);
        if (shootKey == true) {
            let rect: DOMRect = canvas.getBoundingClientRect();
            let mouse: Vector = new Vector(_event.clientX - rect.left, _event.clientY - rect.top);
            key = true; // ist im Player vorhanden
            ball.setnewPosition(mouse);
            animationKey = true;
            shootKey = false;
            animate();
        }
    }

    function animate(): void {
        
        if (animationKey == true) {
            requestAnimationFrame(animate);
            crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            crc2.putImageData(imageData, 0, 0);
            for (let index: number = 0; index < players.length; index++) {
                players[index].update();
                players[index].draw();
            }
            ball.update();
            ball.draw();
        }
    }
}