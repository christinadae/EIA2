"use strict";
var L09_BlumenwieseClasses;
(function (L09_BlumenwieseClasses) {
    class Clouds {
        constructor(_posY, _posX) {
            this.speedX = 0.5;
            this.speedY = 1;
            this.posY = _posY;
            this.posX = _posX;
        }
        draw() {
            L09_BlumenwieseClasses.crc2.save();
            L09_BlumenwieseClasses.crc2.translate(this.posX, this.posY);
            L09_BlumenwieseClasses.crc2.beginPath();
            L09_BlumenwieseClasses.crc2.moveTo(-115, -20);
            L09_BlumenwieseClasses.crc2.bezierCurveTo(-155, 0, -155, 50, -55, 50);
            L09_BlumenwieseClasses.crc2.bezierCurveTo(-35, 80, 35, 80, 55, 50);
            L09_BlumenwieseClasses.crc2.bezierCurveTo(135, 50, 135, 20, 105, 0);
            L09_BlumenwieseClasses.crc2.bezierCurveTo(165, -60, 85, -70, 55, -50);
            L09_BlumenwieseClasses.crc2.bezierCurveTo(35, -95, -35, -80, -35, -50);
            L09_BlumenwieseClasses.crc2.bezierCurveTo(-85, -95, -135, -80, -115, -20);
            L09_BlumenwieseClasses.crc2.lineWidth = 2;
            L09_BlumenwieseClasses.crc2.fillStyle = "white";
            L09_BlumenwieseClasses.crc2.fill();
            L09_BlumenwieseClasses.crc2.strokeStyle = "white";
            L09_BlumenwieseClasses.crc2.closePath();
            L09_BlumenwieseClasses.crc2.stroke();
            L09_BlumenwieseClasses.crc2.restore();
        }
        update() {
            if (this.posX > L09_BlumenwieseClasses.crc2.canvas.width || this.posX < 0) {
                this.speedX = -this.speedX;
            }
            if (this.posY > L09_BlumenwieseClasses.crc2.canvas.height * 0.20 || this.posY < 10) {
                this.speedY = -this.speedY;
            }
            this.posX += this.speedX;
            this.posY += this.speedY;
            this.draw();
        }
    }
    L09_BlumenwieseClasses.Clouds = Clouds;
})(L09_BlumenwieseClasses || (L09_BlumenwieseClasses = {}));
//# sourceMappingURL=clouds.js.map