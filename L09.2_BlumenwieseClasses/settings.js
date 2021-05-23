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
    function createCloud() {
        L09_BlumenwieseClasses.crc2.beginPath();
        L09_BlumenwieseClasses.crc2.moveTo(170, 80);
        L09_BlumenwieseClasses.crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
        L09_BlumenwieseClasses.crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
        L09_BlumenwieseClasses.crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
        L09_BlumenwieseClasses.crc2.bezierCurveTo(450, 40, 370, 30, 340, 50);
        L09_BlumenwieseClasses.crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
        L09_BlumenwieseClasses.crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
        L09_BlumenwieseClasses.crc2.lineWidth = 2;
        L09_BlumenwieseClasses.crc2.fillStyle = "white";
        L09_BlumenwieseClasses.crc2.fill();
        L09_BlumenwieseClasses.crc2.strokeStyle = "white";
        L09_BlumenwieseClasses.crc2.closePath();
        L09_BlumenwieseClasses.crc2.stroke();
    }
    L09_BlumenwieseClasses.createCloud = createCloud;
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
})(L09_BlumenwieseClasses || (L09_BlumenwieseClasses = {}));
//# sourceMappingURL=settings.js.map