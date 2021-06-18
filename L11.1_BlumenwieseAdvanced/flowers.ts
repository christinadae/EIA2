namespace  BlumenwieseAdvanced {

    export abstract class Flower {
        protected xPos: number;
        protected minY: number = 50 + (crc2.canvas.height * 0.62);
        protected maxY: number = crc2.canvas.height * 0.9;
        protected nectarValue: number = Math.floor(Math.random() * 2000) + 1000;
        protected nectarCounter: number = 0;
        protected yPos: number;
        protected randomScale: number = 0.5 + Math.random() * (0.8 - 0.5);
        protected nectarLength: number = 1;

        constructor(_xPos: number, _minY: number, _maxY: number) {
            this.xPos = _xPos;
            this.minY = _minY;
            this.maxY = _maxY;

            this.draw();
        }

        public draw(): void {
            //Draw
        }
        public updateNectar(): void {
            //;
        }

      
    }
   
        
   
}





    
           

