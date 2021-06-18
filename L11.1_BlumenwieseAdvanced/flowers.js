"use strict";
var BlumenwieseAdvanced;
(function (BlumenwieseAdvanced) {
    class Flowers {
        constructor(_xPos, _minY, _maxY) {
            this.minY = 50 + (BlumenwieseAdvanced.crc2.canvas.height * 0.62);
            this.maxY = BlumenwieseAdvanced.crc2.canvas.height * 0.9;
            this.xPos = _xPos;
            this.minY = _minY;
            this.maxY = _maxY;
            this.draw();
        }
        draw() {
            //Draw
        }
    }
    BlumenwieseAdvanced.Flowers = Flowers;
    class Tulip extends Flowers {
        draw() {
            let randomScale = 0.5 + Math.random() * (0.8 - 0.5);
            let y = this.minY + Math.random() * (this.maxY - this.minY);
            let r1 = 5;
            let r2 = 13;
            BlumenwieseAdvanced.crc2.save();
            BlumenwieseAdvanced.crc2.translate(this.xPos, y);
            BlumenwieseAdvanced.crc2.scale(randomScale, randomScale);
            BlumenwieseAdvanced.crc2.fillStyle = "#698c67";
            BlumenwieseAdvanced.crc2.fillRect(-1, -2, 4, 55);
            for (let index = 0; index < 4; index++) {
                let gradient = BlumenwieseAdvanced.crc2.createRadialGradient(0, 3, r1, 0, 3, r2);
                gradient.addColorStop(0, "#c54f20");
                gradient.addColorStop(1, "HSLA(290,60%,70%,0.3)");
                BlumenwieseAdvanced.crc2.beginPath();
                BlumenwieseAdvanced.crc2.arc(2, 3, r2, 0, 2 * Math.PI);
                BlumenwieseAdvanced.crc2.closePath();
                BlumenwieseAdvanced.crc2.fillStyle = gradient;
                BlumenwieseAdvanced.crc2.fill();
            }
            BlumenwieseAdvanced.crc2.restore();
        }
    }
    BlumenwieseAdvanced.Tulip = Tulip;
    class Dandelion extends Flowers {
        draw() {
            let gradient = BlumenwieseAdvanced.crc2.createRadialGradient(0, 0, 2, 0, 0, 20);
            let randomScale = 0.5 + Math.random() * (0.8 - 0.5);
            let y = this.minY + Math.random() * (this.maxY - this.minY);
            BlumenwieseAdvanced.crc2.save();
            BlumenwieseAdvanced.crc2.translate(this.xPos, y);
            BlumenwieseAdvanced.crc2.scale(randomScale, randomScale);
            BlumenwieseAdvanced.crc2.fillStyle = "#698c67";
            BlumenwieseAdvanced.crc2.fillRect(-1, -2, 4, 55);
            gradient.addColorStop(0, "#776896");
            gradient.addColorStop(1, "#8f9fbb");
            BlumenwieseAdvanced.crc2.beginPath();
            BlumenwieseAdvanced.crc2.moveTo(0, 0);
            BlumenwieseAdvanced.crc2.lineTo(-15, -5);
            BlumenwieseAdvanced.crc2.lineTo(-25, -30);
            BlumenwieseAdvanced.crc2.lineTo(-10, -20);
            BlumenwieseAdvanced.crc2.lineTo(0, -40);
            BlumenwieseAdvanced.crc2.lineTo(10, -20);
            BlumenwieseAdvanced.crc2.lineTo(25, -30);
            BlumenwieseAdvanced.crc2.lineTo(15, -5);
            BlumenwieseAdvanced.crc2.closePath();
            BlumenwieseAdvanced.crc2.fillStyle = gradient;
            BlumenwieseAdvanced.crc2.fill();
            BlumenwieseAdvanced.crc2.restore();
        }
    }
    BlumenwieseAdvanced.Dandelion = Dandelion;
})(BlumenwieseAdvanced || (BlumenwieseAdvanced = {}));
//# sourceMappingURL=flowers.js.map