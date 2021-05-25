"use strict";
var L09_BlumenwieseClasses;
(function (L09_BlumenwieseClasses) {
    class Bees {
        constructor(_posX, _posY, _speedX, _speedY, _randomScale) {
            this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            this.counter = 0;
            this.posX = _posX;
            this.posY = _posY;
            this.speedX = _speedX;
            this.speedY = _speedY;
            this.randomScale = _randomScale;
        }
        draw() {
            L09_BlumenwieseClasses.crc2.save();
            L09_BlumenwieseClasses.crc2.translate(this.posX, this.posY);
            L09_BlumenwieseClasses.crc2.scale(this.randomScale, this.randomScale);
            //Bienenflügel
            L09_BlumenwieseClasses.crc2.beginPath();
            L09_BlumenwieseClasses.crc2.moveTo(0, 0);
            L09_BlumenwieseClasses.crc2.ellipse(10, -45, 30, 20, 15, 0, Math.PI * 2, false);
            L09_BlumenwieseClasses.crc2.fillStyle = "rgb(218, 232, 233)";
            L09_BlumenwieseClasses.crc2.fill();
            L09_BlumenwieseClasses.crc2.closePath();
            L09_BlumenwieseClasses.crc2.beginPath();
            L09_BlumenwieseClasses.crc2.moveTo(0, 0);
            L09_BlumenwieseClasses.crc2.ellipse(-10, -45, 30, 20, 10, 0, Math.PI * 2, false);
            L09_BlumenwieseClasses.crc2.fillStyle = "rgb(202, 215, 216)";
            L09_BlumenwieseClasses.crc2.fill();
            L09_BlumenwieseClasses.crc2.closePath();
            L09_BlumenwieseClasses.crc2.beginPath();
            L09_BlumenwieseClasses.crc2.moveTo(0, 0);
            L09_BlumenwieseClasses.crc2.ellipse(0, 0, 50, 30, 0, 0, Math.PI * 2, false);
            L09_BlumenwieseClasses.crc2.fillStyle = "rgb(223, 192, 16)";
            L09_BlumenwieseClasses.crc2.fill();
            L09_BlumenwieseClasses.crc2.closePath();
            L09_BlumenwieseClasses.crc2.beginPath();
            L09_BlumenwieseClasses.crc2.fillStyle = "black";
            L09_BlumenwieseClasses.crc2.moveTo(0, 0);
            L09_BlumenwieseClasses.crc2.fillRect(-20, -29, 10, 58);
            L09_BlumenwieseClasses.crc2.fillRect(10, -29, 10, 58);
            // Bienenstachel
            L09_BlumenwieseClasses.crc2.fillRect(-62, 0, 12, 3);
            L09_BlumenwieseClasses.crc2.fill();
            L09_BlumenwieseClasses.crc2.closePath();
            //Auge
            L09_BlumenwieseClasses.crc2.beginPath();
            L09_BlumenwieseClasses.crc2.fillStyle = "black";
            L09_BlumenwieseClasses.crc2.arc(35, -5, 3, 0, Math.PI * 2, false);
            L09_BlumenwieseClasses.crc2.fill();
            L09_BlumenwieseClasses.crc2.closePath();
            L09_BlumenwieseClasses.crc2.restore();
        }
        update() {
            if (this.posX > L09_BlumenwieseClasses.crc2.canvas.width || this.posX < 0) {
                this.speedX = -this.speedX;
            }
            if (this.posY > L09_BlumenwieseClasses.crc2.canvas.height || this.posY < L09_BlumenwieseClasses.crc2.canvas.height * 0.40) {
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
    L09_BlumenwieseClasses.Bees = Bees;
})(L09_BlumenwieseClasses || (L09_BlumenwieseClasses = {}));
//# sourceMappingURL=bees.js.map