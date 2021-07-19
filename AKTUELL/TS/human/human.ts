namespace EndabgabePROBE {

    export class Human {
        protected velocity: number;
        protected position: Vector;
        protected jerseyColor: string;
        
        constructor(_position: Vector, _jerseyColor: string) {
            this.position = _position;
            this.jerseyColor = _jerseyColor;
            this.draw();
        }   
        
        public get playerPosition(): Vector { // Gibt die Position des Spielers zurück
            return this.position;
        }

        public draw(): void {
            //polymorphie
        }

        public update(): void {
            //polymorphie
        }

        public setJersey(_color: string): void {
            this.jerseyColor = _color;
        }
    }
}