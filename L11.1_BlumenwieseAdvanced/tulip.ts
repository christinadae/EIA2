namespace BlumenwieseAdvanced {

    export class Tulip extends Flower {
       
        public draw(): void {

            let y: number = this.minY + Math.random() * (this.maxY - this.minY);
            this.yPos = y;
            let r1: number = 5;
            let r2: number = 13;

            crc2.save();
            crc2.translate(this.xPos, y);
            crc2.scale(this.randomScale, this.randomScale);
            crc2.fillStyle = "#698c67";
            crc2.fillRect(-1, -2, 4, 55);

            for (let index: number = 0; index < 4; index++) {

                let gradient: CanvasGradient = crc2.createRadialGradient(0, 3, r1, 0, 3, r2);
    
                gradient.addColorStop(0, "#c54f20");
                gradient.addColorStop(1, "HSLA(290,60%,70%,0.3)");
    
                crc2.beginPath();
                crc2.arc(2, 3, r2, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fillStyle = gradient;
                crc2.fill();
    
            }
            crc2.restore();
        }

        public updateNectar(): void {

            this.nectarCounter++;
            if (this.nectarLength < 15) {
                if (this.nectarValue == this.nectarCounter) {
                    this.nectarLength += 2;
                    this.nectarValue = Math.floor(Math.random() * 2000) + 1000;
                }
                crc2.save();
                crc2.translate(this.xPos, this.yPos);
                crc2.scale(this.randomScale, this.randomScale);
                crc2.beginPath();
                crc2.arc(0, 0, this.nectarLength, 0, 2 * Math.PI);
                crc2.fillStyle = "yellow";
                crc2.fill();
                crc2.restore();

            }
        }

    
        }
}