"use strict";
var BlumenwieseAdvanced;
(function (BlumenwieseAdvanced) {
    class Tulip extends BlumenwieseAdvanced.Flower {
        draw() {
            let y = this.minY + Math.random() * (this.maxY - this.minY);
            this.yPos = y;
            let r1 = 5;
            let r2 = 13;
            BlumenwieseAdvanced.crc2.save();
            BlumenwieseAdvanced.crc2.translate(this.xPos, y);
            BlumenwieseAdvanced.crc2.scale(this.randomScale, this.randomScale);
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
                BlumenwieseAdvanced.crc2.arc(0, 0, this.nectarLength, 0, 2 * Math.PI);
                BlumenwieseAdvanced.crc2.fillStyle = "yellow";
                BlumenwieseAdvanced.crc2.fill();
                BlumenwieseAdvanced.crc2.restore();
            }
        }
    }
    BlumenwieseAdvanced.Tulip = Tulip;
})(BlumenwieseAdvanced || (BlumenwieseAdvanced = {}));
//# sourceMappingURL=dandelion.js.map