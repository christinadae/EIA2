"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Player extends Endabgabe.Human {
        constructor(_position, _jerseyColor, _onField, _jerseyNumber, _team) {
            super(_position, _jerseyColor); // Die Spieler erben die Position und Trikotfarbe von der Superklasse Human
            this.task = Endabgabe.Task.lookForBall;
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
            let ballPos = Endabgabe.ball.ballPos;
            this.distancePlayerBall = Endabgabe.Vector.getDistance(ballPos, this.position);
        }
        draw() {
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            if (this.selected == true) {
                Endabgabe.crc2.strokeStyle = "yellow";
                Endabgabe.crc2.lineWidth = 2;
                Endabgabe.crc2.stroke();
            }
            Endabgabe.crc2.fillStyle = this.jerseyColor;
            Endabgabe.crc2.fill();
            Endabgabe.crc2.textAlign = "center";
            Endabgabe.crc2.fillStyle = "black";
            Endabgabe.crc2.fillText(String(this.jerseyNumber), this.position.x, this.position.y);
            Endabgabe.crc2.closePath();
        }
        changePlayer(_position) {
            this.newPosition = _position;
            console.log(this.newPosition);
            this.task = Endabgabe.Task.changePlayer;
        }
        update() {
            if (this.onField == true) {
                this.setDistance();
                switch (this.task) {
                    case Endabgabe.Task.lookForBall:
                        if (this.distancePlayerBall < this.radius) {
                            this.task = Endabgabe.Task.walkToBall;
                        }
                        break;
                    case Endabgabe.Task.walkToBall:
                        if (this.distancePlayerBall > this.radius) {
                            this.task = Endabgabe.Task.walkToOrigin;
                        }
                        else {
                            if (this.distancePlayerBall < 10) {
                                this.task = Endabgabe.Task.shootBall;
                            }
                            this.movePlayer(Endabgabe.ball.ballPos);
                        }
                        break;
                    case Endabgabe.Task.shootBall:
                        console.log("shoot");
                        if (this.distancePlayerBall > 20) {
                            Endabgabe.ball.setKey(true);
                            this.task = Endabgabe.Task.walkToOrigin;
                        }
                        break;
                    case Endabgabe.Task.walkToOrigin:
                        this.movePlayer(this.origin);
                        if (Endabgabe.Vector.getDistance(this.origin, this.position) < 1) {
                            this.task = Endabgabe.Task.lookForBall;
                        }
                        break;
                    case Endabgabe.Task.changePlayer:
                        this.movePlayer(this.newPosition);
                        if (Endabgabe.Vector.getDistance(this.newPosition, this.position) < 1) {
                            if (this.position.y > 470 || this.position.y < 30) {
                                this.setOnField(false);
                            }
                            else {
                                this.setOnField(true);
                                this.task = Endabgabe.Task.lookForBall;
                            }
                        }
                }
            }
        }
        movePlayer(_positon) {
            let playerDistance = Endabgabe.Vector.getDistance(_positon, this.position);
            let playerDiffernce = Endabgabe.Vector.getDifference(_positon, this.position);
            let ratio = this.velocity / playerDistance;
            playerDiffernce.scale(ratio);
            this.position.add(playerDiffernce);
            this.draw();
        }
    }
    Endabgabe.Player = Player;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=player.js.map