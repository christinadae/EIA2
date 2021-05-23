"use strict";
var L09_BlumenwieseClasses;
(function (L09_BlumenwieseClasses) {
    class Trees {
        constructor(_xPos) {
            this.xPos = _xPos;
            this.draw();
        }
        draw() {
            let minStep = 50;
            let maxStep = 120;
            let yTree = -75;
            let xTranslate = 0;
            L09_BlumenwieseClasses.crc2.save();
            let randomScale = 0.5 + Math.random() * (0.8 - 0.5);
            let y = 20 + Math.random() * (50 - 20);
            L09_BlumenwieseClasses.crc2.translate(xTranslate, y + L09_BlumenwieseClasses.crc2.canvas.height * 0.52);
            L09_BlumenwieseClasses.crc2.scale(randomScale, randomScale);
            //Baumstamm
            L09_BlumenwieseClasses.crc2.beginPath();
            L09_BlumenwieseClasses.crc2.fillStyle = "rgb(53, 40, 17)";
            L09_BlumenwieseClasses.crc2.fillRect(0, 0, 40, -75);
            L09_BlumenwieseClasses.crc2.fill();
            L09_BlumenwieseClasses.crc2.closePath();
            for (let index = 0; index < 3; index++) {
                // Rechte Baumhälfte
                L09_BlumenwieseClasses.crc2.beginPath();
                L09_BlumenwieseClasses.crc2.fillStyle = "rgb(49, 67, 49)";
                L09_BlumenwieseClasses.crc2.moveTo(20, yTree);
                L09_BlumenwieseClasses.crc2.lineTo(120, yTree);
                L09_BlumenwieseClasses.crc2.lineTo(20, -375);
                L09_BlumenwieseClasses.crc2.fill();
                L09_BlumenwieseClasses.crc2.closePath();
                // Linke Baumhälfte
                L09_BlumenwieseClasses.crc2.beginPath();
                L09_BlumenwieseClasses.crc2.fillStyle = "rgb(61, 82, 61)";
                L09_BlumenwieseClasses.crc2.moveTo(20, yTree);
                L09_BlumenwieseClasses.crc2.lineTo(-80, yTree);
                L09_BlumenwieseClasses.crc2.lineTo(20, -375);
                L09_BlumenwieseClasses.crc2.fill();
                L09_BlumenwieseClasses.crc2.closePath();
                yTree -= 50;
            }
            yTree = -75;
            xTranslate += minStep + Math.random() * (maxStep - minStep);
            L09_BlumenwieseClasses.crc2.restore();
        }
    }
    L09_BlumenwieseClasses.Trees = Trees;
})(L09_BlumenwieseClasses || (L09_BlumenwieseClasses = {}));
//# sourceMappingURL=trees.js.map