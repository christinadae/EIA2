namespace  BlumenwieseAdvanced {

export class Bees extends Moveable {
 

    public randomScale: number;
    public randomNumber: number = (Math.floor(Math.random() * 2000) + 1000);
    public counter: number = 0;



    constructor(_posX: number, _posY: number, _speedX: number, _speedY: number, _randomScale: number) {
        super(_posX, _posY, _speedX, _speedY);
    }

    draw(): void {


        crc2.save();
        crc2.translate(this.posX, this.posY);
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
    
        crc2.restore();
       
    }
 
    update(): void {

        if (this.posX > crc2.canvas.width || this.posX < 0) {
            this.speedX = -this.speedX;
        }

        if (this.posY > crc2.canvas.height || this.posY < crc2.canvas.height * 0.40) {
            this.speedY = -this.speedY;
        }

        if (this.counter == this.randomNumber) {
            this.speedX = -this.speedX;
            this.speedY = -this.speedY;
            this.counter = 0;
            this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
        }

        this.posX += this.speedX;
        this.posY += this.speedY;
        this.counter ++;

        this.draw();
       
    }
}
}

