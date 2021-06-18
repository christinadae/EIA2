namespace  BlumenwieseAdvanced {

    export class Flowers {
        public xPos: number;
        public minY: number = 50 + (crc2.canvas.height * 0.62);
        public maxY: number = crc2.canvas.height * 0.9;

        constructor(_xPos: number, _minY: number, _maxY: number) {
            this.xPos = _xPos;
            this.minY = _minY;
            this.maxY = _maxY;

            this.draw();
        }

        draw(): void {
            //Draw
        }
    }
    export class Tulip extends Flowers {
       
        

        draw(): void {

            let randomScale: number = 0.5 + Math.random() * (0.8 - 0.5);
            let y: number = this.minY + Math.random() * (this.maxY - this.minY);
            let r1: number = 5;
            let r2: number = 13;

            crc2.save();
            crc2.translate(this.xPos, y);
            crc2.scale(randomScale, randomScale);
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
    
        }
        
    export class Dandelion extends Flowers {
            
            draw(): void {
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 2, 0, 0, 20);
        let randomScale: number = 0.5 + Math.random() * (0.8 - 0.5);
        let y: number = this.minY + Math.random() * (this.maxY - this.minY);
        crc2.save();
        crc2.translate(this.xPos, y);
        crc2.scale(randomScale, randomScale);
        crc2.fillStyle = "#698c67";
        crc2.fillRect(-1, -2, 4, 55);
        gradient.addColorStop(0, "#776896");
        gradient.addColorStop(1, "#8f9fbb");

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(-15, -5);
        crc2.lineTo(-25, -30);
        crc2.lineTo(-10, -20);
        crc2.lineTo(0, -40);
        crc2.lineTo(10, -20);
        crc2.lineTo(25, -30);
        crc2.lineTo(15, -5);
        crc2.closePath();
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
}

    }
           

