namespace Endabgabe {

    export class Player extends Human { //Human ist Superklasse und Player ist Subklasse davon
        private task: Task = Task.lookForBall;
        private origin: Vector; // Ursprungsposition
        private precision: number;
        private radius: number = 80;
        private jerseyNumber: number;
        private distancePlayerBall: number;
        private onField: boolean;
        private team: string;
        private newPosition: Vector;
        private selected: boolean = false;

        constructor(_position: Vector, _jerseyColor: string, _onField: boolean, _jerseyNumber: number, _team: string) {
            super(_position, _jerseyColor); // Die Spieler erben die Position und Trikotfarbe von der Superklasse Human
            this.onField = _onField;
            this.velocity = 0.5;
            this.jerseyNumber = _jerseyNumber;
            this.origin = this.position.copy();
            // Es wird einmal die Ursprungsposition einmal mit der aktuellen Position, die jeder Spieler zu Beginn hat, gespeichert
            // Somit wird es möglich, dass die Spieler wieder auf ihre Position zurückrennen können
    
            this.team = _team;
        }

        public get playerOrigin(): Vector {
            return this.origin;
        }

        public get jerseyNumberPlayer(): number {  //Gibt Trikotnummer der Spieler zurück
            return this.jerseyNumber;
        }

        public get playerSpeed(): number {
            return this.velocity;
        }

        public get distance(): number { // Die Entfernung von Ball und Spieler wird zurück gegeben
            return this.distancePlayerBall;
        }

        public get playerPrecision(): number {
            return this.precision;
        }

        public get playerOnField(): boolean {
            return this.onField;
        }

        public get playerTeam(): string {
            return this.team;
        }

        setOnField(_onField: boolean): void {
            this.onField = _onField;
        }
        setOrigin(_position: Vector): void {
            this.origin = _position;
        }

        setSelected(_selected: boolean): void {
            this.selected = _selected;
        }

        public setProperties(_minSpeed: number, _maxSpeed: number, _minPrecision: number, _maxPrecision: number): void {
            this.precision = _minPrecision + Math.random() * (_maxPrecision - _minPrecision);
            this.velocity = _minSpeed + Math.random() * (_maxSpeed - _minSpeed);
        }

        setDistance(): void {
            let ballPos: Vector = ball.ballPos;
            this.distancePlayerBall = Vector.getDistance(ballPos, this.position);
        }

        public draw(): void {
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            if (this.selected == true) {
                crc2.strokeStyle = "yellow";
                crc2.lineWidth = 2;
                crc2.stroke();
            }
            crc2.fillStyle = this.jerseyColor;
            crc2.fill();
            crc2.textBaseline = "middle";
            crc2.textAlign = "center";
            crc2.fillStyle = "white";
            crc2.fillText(String(this.jerseyNumber), this.position.x, this.position.y);
            
            crc2.closePath();
           
        }

        changePlayer(_position: Vector): void {
            this.newPosition = _position;
            console.log(this.newPosition);
            this.task = Task.changePlayer;
        }

        public drawRadius(): void {
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 100, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.closePath();
        }
        public update(): void {
            if (this.onField == true) {
                this.setDistance();
                switch (this.task) {
                    case Task.lookForBall:
                        if (this.distancePlayerBall < this.radius) {
                            this.task = Task.walkToBall;
                        }
                        break;
                    case Task.walkToBall:
                        if (this.distancePlayerBall > this.radius) {
                            this.task = Task.walkToOrigin;
                        }
                        else {
                            if (this.distancePlayerBall < 10) {
                                this.task = Task.shootBall;
                            }
                            this.movePlayer(ball.ballPos);
                        }
                        break;
                    case Task.shootBall:
                        console.log("shoot");
                        if (this.distancePlayerBall > 20) {
                            ball.setKey(true);
                            this.task = Task.walkToOrigin;
                        }
                        break;
                    case Task.walkToOrigin:
                        this.movePlayer(this.origin);
                        if (Vector.getDistance(this.origin, this.position) < 1) {
                            this.task = Task.lookForBall;
                        }
                        break;

                    case Task.changePlayer:
                        this.movePlayer(this.newPosition);
                        if (Vector.getDistance(this.newPosition, this.position) < 1) {
                            if (this.position.y > 470 || this.position.y < 30) {
                                this.setOnField(false);
                            }
                            else {
                                this.setOnField(true);
                                this.task = Task.lookForBall;
                            }
                        }
                }
            }
        }

        private movePlayer(_position: Vector): void {
            let playerDistance: Vector = Vector.getDifference(_position, this.position);

            if (playerDistance.x == 0 && playerDistance.y > 0) {
                this.position.y += this.velocity;
            }
            if (playerDistance.x == 0 && playerDistance.y < 0) {
                this.position.y -= this.velocity;
            }
            if (playerDistance.x > 0 && playerDistance.y == 0) {
                this.position.x += this.velocity;
            }
            if (playerDistance.x < 0 && playerDistance.y == 0) {
                this.position.x += -this.velocity;
            }
            if (playerDistance.x > 0 && playerDistance.y > 0) {
                this.position.x += this.velocity;
                this.position.y += this.velocity;
            }
            if (playerDistance.x < 0 && playerDistance.y < 0) {
                this.position.x += -this.velocity;
                this.position.y += -this.velocity;
            }
            if (playerDistance.x > 0 && playerDistance.y < 0) {
                this.position.x += this.velocity;
                this.position.y += -this.velocity;
            }
            if (playerDistance.x < 0 && playerDistance.y > 0) {
                this.position.x += -this.velocity;
                this.position.y += this.velocity;
            }
            this.draw();
            // this.drawRadius();
        }
    }
}