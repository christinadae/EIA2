"use strict";
var Blumenwiese;
(function (Blumenwiese) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let crc2;
    function handleLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        canvas.height = 896;
        canvas.width = 414;
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
        // Wolken generieren; inspiriert von: https://stackoverflow.com/questions/19541192/how-to-draw-cloud-shape-in-html5-canvas
        crc2.beginPath();
        crc2.moveTo(170, 80);
        crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
        crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
        crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
        crc2.bezierCurveTo(450, 40, 370, 30, 340, 50);
        crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
        crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
        crc2.closePath();
        crc2.lineWidth = 2;
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.strokeStyle = "white";
        crc2.stroke();
        // Berge generieren
        //Berg 1
        crc2.beginPath();
        crc2.moveTo(100, 50);
        crc2.lineTo(0, 400);
        crc2.lineTo(300, 400);
        crc2.fillStyle = "rgb(95, 113, 113)";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(100, 50);
        crc2.lineTo(100, 400);
        crc2.lineTo(300, 400);
        crc2.closePath();
        crc2.lineWidth = 1;
        crc2.fillStyle = "rgb(74, 87, 87)";
        crc2.fill();
        // Berg 2
        crc2.beginPath();
        crc2.moveTo(350, 100);
        crc2.lineTo(250, 400);
        crc2.lineTo(500, 400);
        crc2.fillStyle = "rgb(95, 113, 113)";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(350, 100);
        crc2.lineTo(350, 400);
        crc2.lineTo(500, 400);
        crc2.closePath();
        crc2.lineWidth = 1;
        crc2.fillStyle = "rgb(74, 87, 87)";
        crc2.fill();
        //Berg 3
        crc2.beginPath();
        crc2.moveTo(20, 200);
        crc2.lineTo(10, 400);
        crc2.lineTo(400, 400);
        crc2.fillStyle = "rgb(95, 113, 113)";
        crc2.fill();
        crc2.closePath();
        // Berg 4
        crc2.beginPath();
        crc2.moveTo(200, 100);
        crc2.lineTo(0, 400);
        crc2.lineTo(400, 400);
        crc2.fillStyle = "rgb(95, 113, 113)";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(200, 100);
        crc2.lineTo(200, 400);
        crc2.lineTo(400, 400);
        crc2.closePath();
        crc2.lineWidth = 1;
        crc2.fillStyle = "rgb(74, 87, 87)";
        crc2.fill();
        /*
        context.moveTo(170, 80);
        context.bezierCurveTo(130, 100, 130, 150, 230, 150);
        context.bezierCurveTo(250, 180, 320, 180, 340, 150);
        context.bezierCurveTo(420, 150, 420, 120, 390, 100);
        context.bezierCurveTo(430, 40, 370, 30, 340, 50);
        context.bezierCurveTo(320, 5, 250, 20, 250, 50);
        context.bezierCurveTo(200, 5, 150, 20, 170, 80);
        context.closePath();
        context.lineWidth = 5;
        context.fillStyle = '#8ED6FF';
        context.fill();
        context.strokeStyle = '#0000ff';
        context.stroke();
        */
    }
})(Blumenwiese || (Blumenwiese = {}));
//# sourceMappingURL=L08_Blumenwiese.js.map