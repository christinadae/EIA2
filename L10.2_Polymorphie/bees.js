"use strict";
var Polymorphie;
(function (Polymorphie) {
    class Bees extends Polymorphie.Moveable {
        constructor(_posX, _posY, _speedX, _speedY, _randomScale) {
            super(_posX, _posY, _speedX, _speedY);
            this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            this.counter = 0;
        }
        draw() {
            Polymorphie.crc2.save();
            Polymorphie.crc2.translate(this.posX, this.posY);
            Polymorphie.crc2.scale(this.randomScale, this.randomScale);
            //Bienenflügel
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.moveTo(0, 0);
            Polymorphie.crc2.ellipse(10, -45, 30, 20, 15, 0, Math.PI * 2, false);
            Polymorphie.crc2.fillStyle = "rgb(218, 232, 233)";
            Polymorphie.crc2.fill();
            Polymorphie.crc2.closePath();
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.moveTo(0, 0);
            Polymorphie.crc2.ellipse(-10, -45, 30, 20, 10, 0, Math.PI * 2, false);
            Polymorphie.crc2.fillStyle = "rgb(202, 215, 216)";
            Polymorphie.crc2.fill();
            Polymorphie.crc2.closePath();
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.moveTo(0, 0);
            Polymorphie.crc2.ellipse(0, 0, 50, 30, 0, 0, Math.PI * 2, false);
            Polymorphie.crc2.fillStyle = "rgb(223, 192, 16)";
            Polymorphie.crc2.fill();
            Polymorphie.crc2.closePath();
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.fillStyle = "black";
            Polymorphie.crc2.moveTo(0, 0);
            Polymorphie.crc2.fillRect(-20, -29, 10, 58);
            Polymorphie.crc2.fillRect(10, -29, 10, 58);
            // Bienenstachel
            Polymorphie.crc2.fillRect(-62, 0, 12, 3);
            Polymorphie.crc2.fill();
            Polymorphie.crc2.closePath();
            //Auge
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.fillStyle = "black";
            Polymorphie.crc2.arc(35, -5, 3, 0, Math.PI * 2, false);
            Polymorphie.crc2.fill();
            Polymorphie.crc2.closePath();
            Polymorphie.crc2.restore();
        }
        update() {
            if (this.posX > Polymorphie.crc2.canvas.width || this.posX < 0) {
                this.speedX = -this.speedX;
            }
            if (this.posY > Polymorphie.crc2.canvas.height || this.posY < Polymorphie.crc2.canvas.height * 0.40) {
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
            this.counter++;
            this.draw();
        }
    }
    Polymorphie.Bees = Bees;
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=bees.js.map