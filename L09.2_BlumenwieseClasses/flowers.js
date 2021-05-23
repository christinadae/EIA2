"use strict";
var L09_BlumenwieseClasses;
(function (L09_BlumenwieseClasses) {
    class Flowers {
        constructor(_flowerType, _xPos) {
            this.minY = 50 + (L09_BlumenwieseClasses.crc2.canvas.height * 0.62);
            this.maxY = L09_BlumenwieseClasses.crc2.canvas.height * 0.9;
            this.xPos = _xPos;
            this.flowerType = _flowerType;
            this.draw();
        }
        draw() {
            let randomScale = 0.5 + Math.random() * (0.8 - 0.5);
            let y = this.minY + Math.random() * (this.maxY - this.minY);
            L09_BlumenwieseClasses.crc2.save();
            L09_BlumenwieseClasses.crc2.translate(this.xPos, y);
            L09_BlumenwieseClasses.crc2.scale(randomScale, randomScale);
            L09_BlumenwieseClasses.crc2.fillStyle = "#698c67";
            L09_BlumenwieseClasses.crc2.fillRect(-1, -2, 4, 55);
            let r1 = 5;
            let r2 = 13;
            if (this.flowerType == 1) {
                for (let index = 0; index < 4; index++) {
                    let gradient = L09_BlumenwieseClasses.crc2.createRadialGradient(0, 3, r1, 0, 3, r2);
                    gradient.addColorStop(0, "#c54f20");
                    gradient.addColorStop(1, "HSLA(290,60%,70%,0.3)");
                    L09_BlumenwieseClasses.crc2.beginPath();
                    L09_BlumenwieseClasses.crc2.arc(2, 3, r2, 0, 2 * Math.PI);
                    L09_BlumenwieseClasses.crc2.closePath();
                    L09_BlumenwieseClasses.crc2.fillStyle = gradient;
                    L09_BlumenwieseClasses.crc2.fill();
                }
                L09_BlumenwieseClasses.crc2.restore();
            }
            else {
                let gradient = L09_BlumenwieseClasses.crc2.createRadialGradient(0, 0, 2, 0, 0, 20);
                gradient.addColorStop(0, "#776896");
                gradient.addColorStop(1, "#8f9fbb");
                L09_BlumenwieseClasses.crc2.beginPath();
                L09_BlumenwieseClasses.crc2.moveTo(0, 0);
                L09_BlumenwieseClasses.crc2.lineTo(-15, -5);
                L09_BlumenwieseClasses.crc2.lineTo(-25, -30);
                L09_BlumenwieseClasses.crc2.lineTo(-10, -20);
                L09_BlumenwieseClasses.crc2.lineTo(0, -40);
                L09_BlumenwieseClasses.crc2.lineTo(10, -20);
                L09_BlumenwieseClasses.crc2.lineTo(25, -30);
                L09_BlumenwieseClasses.crc2.lineTo(15, -5);
                L09_BlumenwieseClasses.crc2.closePath();
                L09_BlumenwieseClasses.crc2.fillStyle = gradient;
                L09_BlumenwieseClasses.crc2.fill();
                L09_BlumenwieseClasses.crc2.restore();
            }
        }
    }
    L09_BlumenwieseClasses.Flowers = Flowers;
})(L09_BlumenwieseClasses || (L09_BlumenwieseClasses = {}));
//# sourceMappingURL=flowers.js.map