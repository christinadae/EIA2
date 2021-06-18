namespace BlumenwieseAdvanced {

    export class Dandelion extends Flower {

        public draw(): void {
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 2, 0, 0, 20);
            let randomScale: number = 0.5 + Math.random() * (0.8 - 0.5);
            let y: number = this.minY + Math.random() * (this.maxY - this.minY);
            this.yPos = y;
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
        crc2.arc(0, -10, this.nectarLength, 0, 2 * Math.PI);
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.restore();

    }
}



    }
}