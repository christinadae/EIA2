"use strict";
var BlumenwieseAdvanced;
(function (BlumenwieseAdvanced) {
    class Clouds extends BlumenwieseAdvanced.Moveable {
        draw() {
            BlumenwieseAdvanced.crc2.save();
            BlumenwieseAdvanced.crc2.translate(this.posX, this.posY);
            BlumenwieseAdvanced.crc2.beginPath();
            BlumenwieseAdvanced.crc2.moveTo(-115, -20);
            BlumenwieseAdvanced.crc2.bezierCurveTo(-155, 0, -155, 50, -55, 50);
            BlumenwieseAdvanced.crc2.bezierCurveTo(-35, 80, 35, 80, 55, 50);
            BlumenwieseAdvanced.crc2.bezierCurveTo(135, 50, 135, 20, 105, 0);
            BlumenwieseAdvanced.crc2.bezierCurveTo(165, -60, 85, -70, 55, -50);
            BlumenwieseAdvanced.crc2.bezierCurveTo(35, -95, -35, -80, -35, -50);
            BlumenwieseAdvanced.crc2.bezierCurveTo(-85, -95, -135, -80, -115, -20);
            BlumenwieseAdvanced.crc2.lineWidth = 2;
            BlumenwieseAdvanced.crc2.fillStyle = "white";
            BlumenwieseAdvanced.crc2.fill();
            BlumenwieseAdvanced.crc2.strokeStyle = "white";
            BlumenwieseAdvanced.crc2.closePath();
            BlumenwieseAdvanced.crc2.stroke();
            BlumenwieseAdvanced.crc2.restore();
        }
        update() {
            if (this.posX > BlumenwieseAdvanced.crc2.canvas.width || this.posX < 0) {
                this.speedX = -this.speedX;
            }
            if (this.posY > BlumenwieseAdvanced.crc2.canvas.height * 0.20 || this.posY < 10) {
                this.speedY = -this.speedY;
            }
            this.posX += this.speedX;
            this.posY += this.speedY;
        }
    }
    BlumenwieseAdvanced.Clouds = Clouds;
})(BlumenwieseAdvanced || (BlumenwieseAdvanced = {}));
//# sourceMappingURL=clouds.js.map