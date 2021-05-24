namespace L09_BlumenwieseClasses {

export class Bees {
    posX: number;
    posY: number;
    randomScale: number;

    randomNumber: number = (Math.floor(Math.random() * 2000) + 1000);
    counter: number = 0;

    speedX: number;
    speedY: number;


    golden: number = 0.42;
    horizon: number = crc2.canvas.height * this.golden;

    minY: number = 50 + (crc2.canvas.height * 0.92);
    maxY: number = crc2.canvas.height * 0.9;


    constructor(_posX: number, _posY: number, _speedX: number, _speedY: number, _randomScale: number) {
        this.posX = _posX;
        this.posY = _posY;
        this.speedX = _speedX;
        this.speedY = _speedY;
        this.randomScale = _randomScale;

        this.draw();
    }

    draw(): void {

        let y: number = this.minY + (Math.floor(Math.random() * this.maxY - this.minY));
        let x: number = this.maxY + (Math.floor(Math.random() * this.maxY - this.minY));
        crc2.save();
        crc2.translate(x, y + (this.horizon - 400));
        

        crc2.scale(this.randomScale, this.randomScale);
        
        //Bienenflügel
   

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.ellipse(10, -45, 30, 20, 15, 0, Math.PI * 2, false);
        crc2.fillStyle = "rgb(218, 232, 233)";
 
        crc2.fill();
        crc2.closePath();
       

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.ellipse(-10, -45, 30, 20, 10, 0, Math.PI * 2, false);
        crc2.fillStyle = "rgb(202, 215, 216)";
        crc2.fill();
        crc2.closePath();
    
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.ellipse(0, 0, 50, 30, 0, 0, Math.PI * 2, false);
        crc2.fillStyle = "rgb(223, 192, 16)";
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

        //Auge
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.arc(35, -5, 3 , 0, Math.PI * 2, false);
        crc2.fill();
        crc2.closePath();
        

       
       
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