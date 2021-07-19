"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Ball {
        constructor(_position) {
            this.ballKey = true; // Der Key verhindert, dass der Spieler nicht sofort zum Ball läuft
            this.precisionChecker = 100;
            this.position = _position;
            this.draw(); // Methode, um Ball zu zeichnen
        }
        get ballPos() {
            return this.position;
        }
        setKey(_key) {
            this.ballKey = _key; // Der Key verhindert, dass der Spieler nicht sofort zum Ball läuft
        }
        setnewPosition(_newPosition) {
            let distanceBall = Endabgabe.Vector.getDistance(_newPosition, this.position); // Distanz von Ball zwischen neuer Position und aktueller Position
            let chosenPlayer = Endabgabe.humans[this.playerIndex]; // Spieler wird mit seinem Index erkannt
            let random = Math.random();
            let newX; // Neue x Position
            let newY; // Neue Y Position
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
            this.newPosition = new Endabgabe.Vector(newX, newY); // Neue Position mit neuen X und Y Werten
        }
        draw() {
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.position.x, this.position.y, 7, 0, 2 * Math.PI);
            Endabgabe.crc2.fillStyle = "white";
            Endabgabe.crc2.fill();
            Endabgabe.crc2.closePath();
        }
        update() {
            if (Endabgabe.key == true) {
                let diff = Endabgabe.Vector.getDifference(this.newPosition, this.position);
                // Aktuelle - neue Position, diff verweist auf Vector auf Stelle x => Differenzwert
                if (Math.abs(diff.x) < 1 && Math.abs(diff.y) < 1) {
                    Endabgabe.key = false;
                    this.checkEnviroment();
                }
                else {
                    // > 1, dann wird die Bewegung des Balles zum Ende hin immer langsamer
                    this.position.x += diff.x * 0.03;
                    this.position.y += diff.y * 0.03;
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
                    Endabgabe.scoreB++;
                    Endabgabe.scoreBDOMElement.innerHTML = String(Endabgabe.scoreB);
                    window.alert("Goal for Team B");
                    this.resetPosition();
                }
                else {
                    this.resetPosition();
                }
            }
            else if (this.position.x > 870) {
                if (this.position.y < 300 && this.position.y > 200) {
                    Endabgabe.scoreA++;
                    Endabgabe.scoreADOMElement.innerHTML = String(Endabgabe.scoreA);
                    window.alert("Goal for Team A");
                    this.resetPosition();
                }
                else {
                    this.resetPosition();
                }
            }
        }
        resetPosition() {
            this.position.set(Endabgabe.canvas.width / 2, Endabgabe.canvas.height / 2);
            this.newPosition.set(Endabgabe.canvas.width / 2, Endabgabe.canvas.height / 2);
        }
        checkEnviroment() {
            if (this.ballKey == true) { // Boolean = True, dann kann Spieler zum Ball laufen
                for (let index = 0; index < Endabgabe.humans.length; index++) {
                    let chosenPlayer = Endabgabe.humans[index];
                    if (chosenPlayer.distance < 10) {
                        this.playerIndex = index;
                        Endabgabe.posessionUpdate(index);
                        Endabgabe.animationKey = false; // Erst beim Klicken, wird animationKey wieder true
                        this.ballKey = false; // Spieler kann nun Ball schießen
                        Endabgabe.shootKey = true;
                        break;
                    }
                }
            }
        }
    }
    Endabgabe.Ball = Ball;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=ball.js.map