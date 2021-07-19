"use strict";
var EndabgabePROBE;
(function (EndabgabePROBE) {
    class Player extends EndabgabePROBE.Human {
        constructor(_position, _jerseyColor, _onField, _jerseyNumber, _team) {
            super(_position, _jerseyColor); // Die Spieler erben die Position und Trikotfarbe von der Superklasse Human
            this.task = EndabgabePROBE.Task.lookForBall;
            this.radius = 80;
            this.selected = false;
            this.onField = _onField;
            this.velocity = 0.5;
            this.jerseyNumber = _jerseyNumber;
            this.origin = this.position.copy();
            this.team = _team;
            // Es wird einmal die Ursprungsposition einmal mit der aktuellen Position, die jeder Spieler zu Beginn hat, gespeichert
            // Somit wird es möglich, dass die Spieler wieder auf ihre Position zurückrennen können
        }
        get playerOrigin() {
            return this.origin;
        }
        get jerseyNumberPlayer() {
            return this.jerseyNumber;
        }
        get playerSpeed() {
            return this.velocity;
        }
        get distance() {
            return this.distancePlayerBall;
        }
        get playerPrecision() {
            return this.precision;
        }
        get playerOnField() {
            return this.onField;
        }
        get playerTeam() {
            return this.team;
        }
        setOnField(_onField) {
            this.onField = _onField;
        }
        setOrigin(_position) {
            this.origin = _position;
        }
        setProperties(_minSpeed, _maxSpeed, _minPrecision, _maxPrecision) {
            this.precision = _minPrecision + Math.random() * (_maxPrecision - _minPrecision);
            this.velocity = _minSpeed + Math.random() * (_maxSpeed - _minSpeed);
        }
        setDistance() {
            let ballPos = EndabgabePROBE.ball.ballPos;
            this.distancePlayerBall = EndabgabePROBE.Vector.getDistance(ballPos, this.position);
        }
        draw() {
            EndabgabePROBE.crc2.beginPath();
            EndabgabePROBE.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            if (this.selected == true) {
                EndabgabePROBE.crc2.strokeStyle = "yellow";
                EndabgabePROBE.crc2.lineWidth = 2;
                EndabgabePROBE.crc2.stroke();
            }
            EndabgabePROBE.crc2.fillStyle = this.jerseyColor;
            EndabgabePROBE.crc2.fill();
            EndabgabePROBE.crc2.textAlign = "center";
            EndabgabePROBE.crc2.fillStyle = "white";
            EndabgabePROBE.crc2.fillText(String(this.jerseyNumber), this.position.x, this.position.y);
            EndabgabePROBE.crc2.closePath();
        }
        changePlayer(_position) {
            this.newPosition = _position;
            console.log(this.newPosition);
            this.task = EndabgabePROBE.Task.changePlayer;
        }
        update() {
            if (this.onField == true) {
                this.setDistance();
                switch (this.task) {
                    case EndabgabePROBE.Task.lookForBall:
                        if (this.distancePlayerBall < this.radius) {
                            this.task = EndabgabePROBE.Task.walkToBall;
                        }
                        break;
                    case EndabgabePROBE.Task.walkToBall:
                        if (this.distancePlayerBall > this.radius) {
                            this.task = EndabgabePROBE.Task.walkToOrigin;
                        }
                        else {
                            if (this.distancePlayerBall < 10) {
                                this.task = EndabgabePROBE.Task.shootBall;
                            }
                            this.movePlayer(EndabgabePROBE.ball.ballPos);
                        }
                        break;
                    case EndabgabePROBE.Task.shootBall:
                        console.log("shoot");
                        if (this.distancePlayerBall > 20) {
                            EndabgabePROBE.ball.setKey(true);
                            this.task = EndabgabePROBE.Task.walkToOrigin;
                        }
                        break;
                    case EndabgabePROBE.Task.walkToOrigin:
                        this.movePlayer(this.origin);
                        if (EndabgabePROBE.Vector.getDistance(this.origin, this.position) < 1) {
                            this.task = EndabgabePROBE.Task.lookForBall;
                        }
                        break;
                    case EndabgabePROBE.Task.changePlayer:
                        this.movePlayer(this.newPosition);
                        if (EndabgabePROBE.Vector.getDistance(this.newPosition, this.position) < 1) {
                            if (this.position.y > 470 || this.position.y < 30) {
                                this.setOnField(false);
                            }
                            else {
                                this.setOnField(true);
                                this.task = EndabgabePROBE.Task.lookForBall;
                            }
                        }
                }
            }
        }
        movePlayer(_positon) {
            let playerDistance = EndabgabePROBE.Vector.getDistance(_positon, this.position);
            let playerDiffernce = EndabgabePROBE.Vector.getDifference(_positon, this.position);
            let ratio = this.velocity / playerDistance;
            playerDiffernce.scale(ratio);
            this.position.add(playerDiffernce);
            this.draw();
        }
    }
    EndabgabePROBE.Player = Player;
})(EndabgabePROBE || (EndabgabePROBE = {}));
//# sourceMappingURL=player.js.map