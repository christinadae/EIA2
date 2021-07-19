namespace Endabgabe {

    export class Ball {
        private position: Vector; //Aktuelle Position
        private newPosition: Vector; // Neue Position
        private playerIndex: number;
        private ballKey: boolean = true; // Der Key verhindert, dass der Spieler nicht sofort zum Ball läuft
        private precisionChecker: number = 100;

        constructor(_position: Vector) {
            this.position = _position;
            this.draw(); // Methode, um Ball zu zeichnen
        }

        public get ballPos(): Vector {
            return this.position;
        }

        public setKey(_key: boolean): void {
            this.ballKey = _key; // Der Key verhindert, dass der Spieler nicht sofort zum Ball läuft
        }



        public setnewPosition(_newPosition: Vector): void {
            let distanceBall: number = Vector.getDistance(_newPosition, this.position); // Distanz von Ball zwischen neuer Position und aktueller Position
            let chosenPlayer: Player = <Player> humans[this.playerIndex]; // Spieler wird mit seinem Index erkannt
            let random: number = Math.random();
            let newX: number; // Neue x Position
            let newY: number; // Neue Y Position
            if (random >= 0.5) {
                newX = _newPosition.x + ((distanceBall / this.precisionChecker) * chosenPlayer.playerPrecision);
            }
            else {
                newX = _newPosition.x - ((distanceBall / this.precisionChecker) * chosenPlayer.playerPrecision);
            }
            random = Math.random();
            if (random >= 0.5) {
                newY = _newPosition.y + ((distanceBall / this.precisionChecker) * chosenPlayer.playerPrecision);
            }
            else {
                newY = _newPosition.y - ((distanceBall / this.precisionChecker) * chosenPlayer.playerPrecision);
            }

            console.log(newX, newY);
            this.newPosition = new Vector(newX, newY); // Neue Position mit neuen X und Y Werten


        }

        public draw(): void { // Ball wird zum ersten Mal gezeichnet
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 7, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();
        }

        public update(): void {
            if (key == true) {
                let diff: Vector = Vector.getDifference(this.newPosition, this.position);
                // Aktuelle - neue Position, diff verweist auf Vector auf Stelle x => Differenzwert
                if (Math.abs(diff.x) < 1 && Math.abs(diff.y) < 1) {
                    key = false;
                    this.checkEnviroment();
                }
                else {
                    // > 1, dann wird die Bewegung des Balles zum Ende hin immer langsamer
                    this.position.x += diff.x * 0.01;
                    this.position.y += diff.y * 0.01;
                    this.checkEnviroment();
                }
            }
            else {
                this.draw();
                this.checkEnviroment();
            }

            if (this.position.y > 470 || this.position.y < 30) {
                this.resetPosition();
            }

            if (this.position.x < 30) {
                if (this.position.y < 300 && this.position.y > 200) {
                    scoreB++;
                    scoreBDOMElement.innerHTML = String(scoreB);
                    window.alert("Goal for Team B");
                    this.resetPosition();
                }
                else {
                    this.resetPosition();
                }
            }
            else if (this.position.x > 870) {
                if (this.position.y < 300 && this.position.y > 200) {
                    scoreA++;
                    scoreADOMElement.innerHTML = String(scoreA);
                    window.alert("Goal for Team A");
                    this.resetPosition();
                }
                else {
                    this.resetPosition();

                }
            }

        }

        private resetPosition(): void { 
            this.position.set(canvas.width / 2, canvas.height / 2);
            this.newPosition.set(canvas.width / 2, canvas.height / 2);
        }

        private checkEnviroment(): void { // Funktion dient dazu, zu überprüfen ob ein Spieler in der Nähe des Balles ist
            if (this.ballKey == true) { // Boolean = True, dann kann Spieler zum Ball laufen
                for (let index: number = 0; index < humans.length; index++) {
                    let chosenPlayer: Player = <Player>humans[index];
                    if (chosenPlayer.distance < 10) {
                        this.playerIndex = index;
                        animationKey = false; // Erst beim Klicken, wird animationKey wieder true
                        this.ballKey = false; // Spieler kann nun Ball schießen
                        shootKey = true;
                        break;
                    }
                }
            }
        }
    }
}