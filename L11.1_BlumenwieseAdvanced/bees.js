"use strict";
var BlumenwieseAdvanced;
(function (BlumenwieseAdvanced) {
    class Bees extends BlumenwieseAdvanced.Moveable {
        constructor(_posX, _posY, _speedX, _speedY, _randomScale) {
            super(_posX, _posY, _speedX, _speedY);
            this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            this.counter = 0;
        }
        draw() {
            BlumenwieseAdvanced.crc2.save();
            BlumenwieseAdvanced.crc2.translate(this.posX, this.posY);
            BlumenwieseAdvanced.crc2.scale(this.randomScale, this.randomScale);
            //Bienenflügel
            BlumenwieseAdvanced.crc2.beginPath();
            BlumenwieseAdvanced.crc2.moveTo(0, 0);
            BlumenwieseAdvanced.crc2.ellipse(10, -45, 30, 20, 15, 0, Math.PI * 2, false);
            BlumenwieseAdvanced.crc2.fillStyle = "rgb(218, 232, 233)";
            BlumenwieseAdvanced.crc2.fill();
            BlumenwieseAdvanced.crc2.closePath();
            BlumenwieseAdvanced.crc2.beginPath();
            BlumenwieseAdvanced.crc2.moveTo(0, 0);
            BlumenwieseAdvanced.crc2.ellipse(-10, -45, 30, 20, 10, 0, Math.PI * 2, false);
            BlumenwieseAdvanced.crc2.fillStyle = "rgb(202, 215, 216)";
            BlumenwieseAdvanced.crc2.fill();
            BlumenwieseAdvanced.crc2.closePath();
            BlumenwieseAdvanced.crc2.beginPath();
            BlumenwieseAdvanced.crc2.moveTo(0, 0);
            BlumenwieseAdvanced.crc2.ellipse(0, 0, 50, 30, 0, 0, Math.PI * 2, false);
            BlumenwieseAdvanced.crc2.fillStyle = "rgb(223, 192, 16)";
            BlumenwieseAdvanced.crc2.fill();
            BlumenwieseAdvanced.crc2.closePath();
            BlumenwieseAdvanced.crc2.beginPath();
            BlumenwieseAdvanced.crc2.fillStyle = "black";
            BlumenwieseAdvanced.crc2.moveTo(0, 0);
            BlumenwieseAdvanced.crc2.fillRect(-20, -29, 10, 58);
            BlumenwieseAdvanced.crc2.fillRect(10, -29, 10, 58);
            // Bienenstachel
            BlumenwieseAdvanced.crc2.fillRect(-62, 0, 12, 3);
            BlumenwieseAdvanced.crc2.fill();
            BlumenwieseAdvanced.crc2.closePath();
            //Auge
            BlumenwieseAdvanced.crc2.beginPath();
            BlumenwieseAdvanced.crc2.fillStyle = "black";
            BlumenwieseAdvanced.crc2.arc(35, -5, 3, 0, Math.PI * 2, false);
            BlumenwieseAdvanced.crc2.fill();
            BlumenwieseAdvanced.crc2.closePath();
            BlumenwieseAdvanced.crc2.restore();
        }
        update() {
            if (this.posX > BlumenwieseAdvanced.crc2.canvas.width || this.posX < 0) {
                this.speedX = -this.speedX;
            }
            if (this.posY > BlumenwieseAdvanced.crc2.canvas.height || this.posY < BlumenwieseAdvanced.crc2.canvas.height * 0.40) {
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
        }
    }
    BlumenwieseAdvanced.Bees = Bees;
})(BlumenwieseAdvanced || (BlumenwieseAdvanced = {}));
//# sourceMappingURL=bees.js.map