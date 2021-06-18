"use strict";
var BlumenwieseAdvanced;
(function (BlumenwieseAdvanced) {
    class Dandelion extends BlumenwieseAdvanced.Flower {
        draw() {
            let gradient = BlumenwieseAdvanced.crc2.createRadialGradient(0, 0, 2, 0, 0, 20);
            let randomScale = 0.5 + Math.random() * (0.8 - 0.5);
            let y = this.minY + Math.random() * (this.maxY - this.minY);
            this.yPos = y;
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
        updateNectar() {
            this.nectarCounter++;
            if (this.nectarLength < 15) {
                if (this.nectarValue == this.nectarCounter) {
                    this.nectarLength += 2;
                    this.nectarValue = Math.floor(Math.random() * 2000) + 1000;
                }
                BlumenwieseAdvanced.crc2.save();
                BlumenwieseAdvanced.crc2.translate(this.xPos, this.yPos);
                BlumenwieseAdvanced.crc2.scale(this.randomScale, this.randomScale);
                BlumenwieseAdvanced.crc2.beginPath();
                BlumenwieseAdvanced.crc2.arc(0, -10, this.nectarLength, 0, 2 * Math.PI);
                BlumenwieseAdvanced.crc2.fillStyle = "yellow";
                BlumenwieseAdvanced.crc2.fill();
                BlumenwieseAdvanced.crc2.restore();
            }
        }
    }
    BlumenwieseAdvanced.Dandelion = Dandelion;
})(BlumenwieseAdvanced || (BlumenwieseAdvanced = {}));
//# sourceMappingURL=tulip.js.map