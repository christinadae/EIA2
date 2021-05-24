namespace L09_BlumenwieseClasses {

export class Bees {
    posX: number; 
    posY: number;
    randomScale: number;

    randomNumber: number = (Math.floor(Math.random() * 2000) + 1000);
    counter: number = 0;

    speedX: number;
    speedY: number;

    constructor(_posX: number, _posY: number, _speedX: number, _speedY: number, _randomScale: number) {
        this.posX = _posX;
        this.posY = _posY;
        this.speedX = _speedX;
        this.speedY = _speedY;
        this.randomScale = _randomScale;

        this.draw();
    }

    draw(): void {
        crc2.save();
        crc2.translate(this.posX, this.posY);

        crc2.scale(this.randomScale, this.randomScale);
        
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.ellipse(0, 0, 50, 30, 0, 0, Math.PI * 2, false);
        crc2.fillStyle = "gold";
        crc2.fill();
        crc2.closePath();
       
        crc2.beginPath();
       
        
        crc2.fillStyle = "black";
        crc2.moveTo(0, 0);
        crc2.fillRect(-20, -29, 10, 58);
        crc2.fillRect(10, -29, 10, 58);
        // Bienenstachel
        crc2.fillRect(-62, 0, 12, 3);
       
        crc2.fill();
        crc2.closePath();
       // crc2.beginPath();
        //crc2.arc(0, 0, 8 , 0, Math.PI * 2, false);
        //crc2.stroke();
/*
        crc2.beginPath();
        crc2.fillStyle = "white";
        crc2.arc(-5, -11, 5 , 0, Math.PI * 2, false);
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = "white";
        crc2.arc(5, -11, 5 , 0, Math.PI * 2, false);
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.arc(-2, -1, 2 , 0, Math.PI * 2, false);
        crc2.stroke();
        crc2.beginPath();
        crc2.arc(2, -1, 2 , 0, Math.PI * 2, false);
        crc2.stroke();
*/
        crc2.restore();
       
    }
    
}

}