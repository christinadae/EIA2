"use strict";
var BlumenwieseAdvanced;
(function (BlumenwieseAdvanced) {
    function createBackground() {
        let gradient = BlumenwieseAdvanced.crc2.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "darkseagreen");
        BlumenwieseAdvanced.crc2.fillStyle = gradient;
        BlumenwieseAdvanced.crc2.fillRect(0, 0, BlumenwieseAdvanced.canvas.width, BlumenwieseAdvanced.canvas.height);
    }
    BlumenwieseAdvanced.createBackground = createBackground;
    function createMountains() {
        let x = 0;
        do {
            let randomScale = 0.8 + Math.random() * (1.3 - 0.8);
            BlumenwieseAdvanced.crc2.save();
            BlumenwieseAdvanced.crc2.translate(x, BlumenwieseAdvanced.crc2.canvas.height * 0.52);
            BlumenwieseAdvanced.crc2.scale(randomScale, randomScale);
            BlumenwieseAdvanced.crc2.beginPath();
            BlumenwieseAdvanced.crc2.moveTo(0, 0);
            BlumenwieseAdvanced.crc2.lineTo(150, -300);
            BlumenwieseAdvanced.crc2.lineTo(150, 0);
            BlumenwieseAdvanced.crc2.fillStyle = "rgb(95, 113, 113)";
            BlumenwieseAdvanced.crc2.fill();
            BlumenwieseAdvanced.crc2.closePath();
            BlumenwieseAdvanced.crc2.beginPath();
            BlumenwieseAdvanced.crc2.moveTo(150, 0);
            BlumenwieseAdvanced.crc2.lineTo(300, 0);
            BlumenwieseAdvanced.crc2.lineTo(150, -300);
            BlumenwieseAdvanced.crc2.fillStyle = "rgb(74, 87, 87)";
            BlumenwieseAdvanced.crc2.fill();
            BlumenwieseAdvanced.crc2.closePath();
            x += 20 + Math.random() * (80 - 20);
            BlumenwieseAdvanced.crc2.restore();
        } while (x < BlumenwieseAdvanced.crc2.canvas.width);
    }
    BlumenwieseAdvanced.createMountains = createMountains;
    function createTrees() {
        let xTranslate = 0;
        let minStep = 50;
        let maxStep = 120;
        let yTree = -75;
        do {
            BlumenwieseAdvanced.crc2.save();
            let randomScale = 0.5 + Math.random() * (0.8 - 0.5);
            let y = 20 + Math.random() * (50 - 20);
            BlumenwieseAdvanced.crc2.translate(xTranslate, y + BlumenwieseAdvanced.crc2.canvas.height * 0.52);
            BlumenwieseAdvanced.crc2.scale(randomScale, randomScale);
            //Baumstamm
            BlumenwieseAdvanced.crc2.beginPath();
            BlumenwieseAdvanced.crc2.fillStyle = "rgb(53, 40, 17)";
            BlumenwieseAdvanced.crc2.fillRect(0, 0, 40, -75);
            BlumenwieseAdvanced.crc2.fill();
            BlumenwieseAdvanced.crc2.closePath();
            for (let index = 0; index < 3; index++) {
                // Rechte Baumhälfte
                BlumenwieseAdvanced.crc2.beginPath();
                BlumenwieseAdvanced.crc2.fillStyle = "rgb(49, 67, 49)";
                BlumenwieseAdvanced.crc2.moveTo(20, yTree);
                BlumenwieseAdvanced.crc2.lineTo(120, yTree);
                BlumenwieseAdvanced.crc2.lineTo(20, -375);
                BlumenwieseAdvanced.crc2.fill();
                BlumenwieseAdvanced.crc2.closePath();
                // Linke Baumhälfte
                BlumenwieseAdvanced.crc2.beginPath();
                BlumenwieseAdvanced.crc2.fillStyle = "rgb(61, 82, 61)";
                BlumenwieseAdvanced.crc2.moveTo(20, yTree);
                BlumenwieseAdvanced.crc2.lineTo(-80, yTree);
                BlumenwieseAdvanced.crc2.lineTo(20, -375);
                BlumenwieseAdvanced.crc2.fill();
                BlumenwieseAdvanced.crc2.closePath();
                yTree -= 50;
            }
            yTree = -75;
            xTranslate += minStep + Math.random() * (maxStep - minStep);
            BlumenwieseAdvanced.crc2.restore();
        } while (xTranslate < BlumenwieseAdvanced.crc2.canvas.width);
    }
    BlumenwieseAdvanced.createTrees = createTrees;
})(BlumenwieseAdvanced || (BlumenwieseAdvanced = {}));
//# sourceMappingURL=settings.js.map