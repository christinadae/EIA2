"use strict";
/*
Aufgabe: <L08.2 Blumenwiese: Canvas>
Name: <Christina Däschner>
Matrikel: <266417>
Datum: <14.05.2021>
Quellen: <Huu Thien Phan Ngoc & Mona Kabelka>
*/
var Blumenwiese;
(function (Blumenwiese) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let crc2;
    function handleLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        setBackground();
    }
    function setBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "darkseagreen");
        crc2.beginPath();
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
        getCloud();
        getMountains();
        getTrees();
        getFlowers(-10, -canvas.height);
        function getCloud() {
            // inspiriert von: https://stackoverflow.com/questions/19541192/how-to-draw-cloud-shape-in-html5-canvas
            crc2.beginPath();
            crc2.moveTo(170, 80);
            crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
            crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
            crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
            crc2.bezierCurveTo(450, 40, 370, 30, 340, 50);
            crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
            crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
            crc2.lineWidth = 2;
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.strokeStyle = "white";
            crc2.closePath();
            crc2.stroke();
        }
        function getMountains() {
            let x = 0;
            do {
                let randomScale = 0.8 + Math.random() * (1.3 - 0.8);
                crc2.save();
                crc2.translate(x, crc2.canvas.height * 0.52);
                crc2.scale(randomScale, randomScale);
                crc2.beginPath();
                crc2.moveTo(0, 0);
                crc2.lineTo(150, -300);
                crc2.lineTo(150, 0);
                crc2.fillStyle = "rgb(95, 113, 113)";
                crc2.fill();
                crc2.closePath();
                crc2.beginPath();
                crc2.moveTo(150, 0);
                crc2.lineTo(300, 0);
                crc2.lineTo(150, -300);
                crc2.fillStyle = "rgb(74, 87, 87)";
                crc2.fill();
                crc2.closePath();
                x += 20 + Math.random() * (80 - 20);
                crc2.restore();
            } while (x < crc2.canvas.width);
        }
        function getTrees() {
            let xTranslate = 0;
            let minStep = 50;
            let maxStep = 120;
            let yTree = -75;
            do {
                crc2.save();
                let randomScale = 0.5 + Math.random() * (0.8 - 0.5);
                let y = 20 + Math.random() * (50 - 20);
                crc2.translate(xTranslate, y + crc2.canvas.height * 0.52);
                crc2.scale(randomScale, randomScale);
                //Baumstamm
                crc2.beginPath();
                crc2.fillStyle = "rgb(53, 40, 17)";
                crc2.fillRect(0, 0, 40, -75);
                crc2.fill();
                crc2.closePath();
                for (let index = 0; index < 3; index++) {
                    // Rechte Baumhälfte
                    crc2.beginPath();
                    crc2.fillStyle = "rgb(49, 67, 49)";
                    crc2.moveTo(20, yTree);
                    crc2.lineTo(120, yTree);
                    crc2.lineTo(20, -375);
                    crc2.fill();
                    crc2.closePath();
                    // Linke Baumhälfte
                    crc2.beginPath();
                    crc2.fillStyle = "rgb(61, 82, 61)";
                    crc2.moveTo(20, yTree);
                    crc2.lineTo(-80, yTree);
                    crc2.lineTo(20, -375);
                    crc2.fill();
                    crc2.closePath();
                    yTree -= 50;
                }
                yTree = -75;
                xTranslate += minStep + Math.random() * (maxStep - minStep);
                crc2.restore();
            } while (xTranslate < crc2.canvas.width);
        }
        function getFlowers(_min, _max) {
            let stepMin = 2;
            let stepMax = 8;
            let x = 0;
            let horizon = crc2.canvas.height * 0.42;
            do {
                let y = -_min - Math.random() * (_max - _min);
                let r1 = 2;
                let r2 = 7;
                crc2.save();
                crc2.translate(x, y + (horizon + 110));
                let gradient = crc2.createRadialGradient(0, -26, r1, 0, -26, r2);
                gradient.addColorStop(0, "#e3c8cd");
                gradient.addColorStop(1, "HSLA(290,60%,70%,0.3)");
                crc2.fillStyle = "#698c67";
                crc2.fillRect(0, 0, 1.5, -20);
                crc2.beginPath();
                crc2.arc(0, -26, r2, 0, 2 * Math.PI);
                crc2.fillStyle = gradient;
                crc2.fill();
                x += stepMin + Math.random() * (stepMax - stepMin);
                crc2.restore();
            } while (x < crc2.canvas.width);
        }
    }
})(Blumenwiese || (Blumenwiese = {}));
//# sourceMappingURL=L08_Blumenwiese.js.map