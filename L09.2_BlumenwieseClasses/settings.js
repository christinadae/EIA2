"use strict";
var L09_BlumenwieseClasses;
(function (L09_BlumenwieseClasses) {
    function createBackground() {
        let gradient = L09_BlumenwieseClasses.crc2.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "darkseagreen");
        L09_BlumenwieseClasses.crc2.fillStyle = gradient;
        L09_BlumenwieseClasses.crc2.fillRect(0, 0, L09_BlumenwieseClasses.canvas.width, L09_BlumenwieseClasses.canvas.height);
    }
    L09_BlumenwieseClasses.createBackground = createBackground;
    function createMountains() {
        let x = 0;
        do {
            let randomScale = 0.8 + Math.random() * (1.3 - 0.8);
            L09_BlumenwieseClasses.crc2.save();
            L09_BlumenwieseClasses.crc2.translate(x, L09_BlumenwieseClasses.crc2.canvas.height * 0.52);
            L09_BlumenwieseClasses.crc2.scale(randomScale, randomScale);
            L09_BlumenwieseClasses.crc2.beginPath();
            L09_BlumenwieseClasses.crc2.moveTo(0, 0);
            L09_BlumenwieseClasses.crc2.lineTo(150, -300);
            L09_BlumenwieseClasses.crc2.lineTo(150, 0);
            L09_BlumenwieseClasses.crc2.fillStyle = "rgb(95, 113, 113)";
            L09_BlumenwieseClasses.crc2.fill();
            L09_BlumenwieseClasses.crc2.closePath();
            L09_BlumenwieseClasses.crc2.beginPath();
            L09_BlumenwieseClasses.crc2.moveTo(150, 0);
            L09_BlumenwieseClasses.crc2.lineTo(300, 0);
            L09_BlumenwieseClasses.crc2.lineTo(150, -300);
            L09_BlumenwieseClasses.crc2.fillStyle = "rgb(74, 87, 87)";
            L09_BlumenwieseClasses.crc2.fill();
            L09_BlumenwieseClasses.crc2.closePath();
            x += 20 + Math.random() * (80 - 20);
            L09_BlumenwieseClasses.crc2.restore();
        } while (x < L09_BlumenwieseClasses.crc2.canvas.width);
    }
    L09_BlumenwieseClasses.createMountains = createMountains;
    function createTrees() {
        let xTranslate = 0;
        let minStep = 50;
        let maxStep = 120;
        let yTree = -75;
        do {
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
        } while (xTranslate < L09_BlumenwieseClasses.crc2.canvas.width);
    }
    L09_BlumenwieseClasses.createTrees = createTrees;
})(L09_BlumenwieseClasses || (L09_BlumenwieseClasses = {}));
//# sourceMappingURL=settings.js.map