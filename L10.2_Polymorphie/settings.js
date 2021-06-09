"use strict";
var Polymorphie;
(function (Polymorphie) {
    function createBackground() {
        let gradient = Polymorphie.crc2.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "darkseagreen");
        Polymorphie.crc2.fillStyle = gradient;
        Polymorphie.crc2.fillRect(0, 0, Polymorphie.canvas.width, Polymorphie.canvas.height);
    }
    Polymorphie.createBackground = createBackground;
    function createMountains() {
        let x = 0;
        do {
            let randomScale = 0.8 + Math.random() * (1.3 - 0.8);
            Polymorphie.crc2.save();
            Polymorphie.crc2.translate(x, Polymorphie.crc2.canvas.height * 0.52);
            Polymorphie.crc2.scale(randomScale, randomScale);
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.moveTo(0, 0);
            Polymorphie.crc2.lineTo(150, -300);
            Polymorphie.crc2.lineTo(150, 0);
            Polymorphie.crc2.fillStyle = "rgb(95, 113, 113)";
            Polymorphie.crc2.fill();
            Polymorphie.crc2.closePath();
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.moveTo(150, 0);
            Polymorphie.crc2.lineTo(300, 0);
            Polymorphie.crc2.lineTo(150, -300);
            Polymorphie.crc2.fillStyle = "rgb(74, 87, 87)";
            Polymorphie.crc2.fill();
            Polymorphie.crc2.closePath();
            x += 20 + Math.random() * (80 - 20);
            Polymorphie.crc2.restore();
        } while (x < Polymorphie.crc2.canvas.width);
    }
    Polymorphie.createMountains = createMountains;
    function createTrees() {
        let xTranslate = 0;
        let minStep = 50;
        let maxStep = 120;
        let yTree = -75;
        do {
            Polymorphie.crc2.save();
            let randomScale = 0.5 + Math.random() * (0.8 - 0.5);
            let y = 20 + Math.random() * (50 - 20);
            Polymorphie.crc2.translate(xTranslate, y + Polymorphie.crc2.canvas.height * 0.52);
            Polymorphie.crc2.scale(randomScale, randomScale);
            //Baumstamm
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.fillStyle = "rgb(53, 40, 17)";
            Polymorphie.crc2.fillRect(0, 0, 40, -75);
            Polymorphie.crc2.fill();
            Polymorphie.crc2.closePath();
            for (let index = 0; index < 3; index++) {
                // Rechte Baumhälfte
                Polymorphie.crc2.beginPath();
                Polymorphie.crc2.fillStyle = "rgb(49, 67, 49)";
                Polymorphie.crc2.moveTo(20, yTree);
                Polymorphie.crc2.lineTo(120, yTree);
                Polymorphie.crc2.lineTo(20, -375);
                Polymorphie.crc2.fill();
                Polymorphie.crc2.closePath();
                // Linke Baumhälfte
                Polymorphie.crc2.beginPath();
                Polymorphie.crc2.fillStyle = "rgb(61, 82, 61)";
                Polymorphie.crc2.moveTo(20, yTree);
                Polymorphie.crc2.lineTo(-80, yTree);
                Polymorphie.crc2.lineTo(20, -375);
                Polymorphie.crc2.fill();
                Polymorphie.crc2.closePath();
                yTree -= 50;
            }
            yTree = -75;
            xTranslate += minStep + Math.random() * (maxStep - minStep);
            Polymorphie.crc2.restore();
        } while (xTranslate < Polymorphie.crc2.canvas.width);
    }
    Polymorphie.createTrees = createTrees;
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=settings.js.map