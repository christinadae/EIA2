"use strict";
var EndabgabePROBE;
(function (EndabgabePROBE) {
    class Ball {
        constructor(_position) {
            this.ballKey = true;
            this.precisionChecker = 100;
            this.position = _position;
            this.draw();
        }
        // public get indexPlayer(): number {
        //     return this.playerIndex;
        // }
        get ballPos() {
            return this.position;
        }
        setKey(_key) {
            this.ballKey = _key;
        }
        setnewPosition(_newPosition) {
            let distanceBall = EndabgabePROBE.Vector.getDistance(_newPosition, this.position);
            let chosenPlayer = EndabgabePROBE.humans[this.playerIndex];
            let random = Math.random();
            let newX;
            let newY;
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
            this.newPosition = new EndabgabePROBE.Vector(newX, newY);
        }
        draw() {
            EndabgabePROBE.crc2.beginPath();
            EndabgabePROBE.crc2.arc(this.position.x, this.position.y, 7, 0, 2 * Math.PI);
            EndabgabePROBE.crc2.fillStyle = "white";
            EndabgabePROBE.crc2.fill();
            EndabgabePROBE.crc2.closePath();
        }
        update() {
            if (EndabgabePROBE.key == true) {
                let diff = EndabgabePROBE.Vector.getDifference(this.newPosition, this.position);
                if (Math.abs(diff.x) < 1 && Math.abs(diff.y) < 1) {
                    EndabgabePROBE.key = false;
                    this.checkEnviroment();
                }
                else {
                    diff.scale(0.03);
                    this.position.add(diff);
                    this.checkEnviroment();
                }
            }
            else {
                this.draw();
                this.checkEnviroment();
            }
            this.checkOut();
            this.checkGoal();
        }
        checkGoal() {
            if (this.position.x < 30) {
                if (this.position.y < 300 && this.position.y > 200) {
                    EndabgabePROBE.scoreB++;
                    EndabgabePROBE.scoreBDOMElement.innerHTML = String(EndabgabePROBE.scoreB);
                    window.alert("Goal for Team B");
                    this.resetPosition();
                }
                else {
                    this.resetPosition();
                }
            }
            else if (this.position.x > 870) {
                if (this.position.y < 300 && this.position.y > 200) {
                    EndabgabePROBE.scoreA++;
                    EndabgabePROBE.scoreADOMElement.innerHTML = String(EndabgabePROBE.scoreA);
                    window.alert("Goal for Team A");
                    this.resetPosition();
                }
                else {
                    this.resetPosition();
                }
            }
        }
        checkOut() {
            if (this.position.y > 470 || this.position.y < 30) {
                this.resetPosition();
            }
        }
        resetPosition() {
            this.position.set(EndabgabePROBE.canvas.width / 2, EndabgabePROBE.canvas.height / 2);
            this.newPosition.set(EndabgabePROBE.canvas.width / 2, EndabgabePROBE.canvas.height / 2);
        }
        checkEnviroment() {
            if (this.ballKey == true) {
                for (let index = 0; index < EndabgabePROBE.humans.length; index++) {
                    let chosenPlayer = EndabgabePROBE.humans[index];
                    if (chosenPlayer.distance < 10) {
                        this.playerIndex = index;
                        EndabgabePROBE.posessionUpdate(index);
                        EndabgabePROBE.animationKey = false;
                        this.ballKey = false;
                        EndabgabePROBE.shootKey = true;
                        break;
                    }
                }
            }
        }
    }
    EndabgabePROBE.Ball = Ball;
})(EndabgabePROBE || (EndabgabePROBE = {}));
//# sourceMappingURL=ball.js.map