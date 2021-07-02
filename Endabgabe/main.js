"use strict";
var soccerSimulation;
(function (soccerSimulation) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        canvas.width = 1200;
        canvas.height = 700;
        //Fußballfeld
        crc2.beginPath();
        crc2.fillStyle = "rgb(117, 159, 105)";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.fill();
        crc2.closePath();
        //Mittelkreis
        crc2.beginPath();
        crc2.arc(600, 350, 100, 0, 2 * Math.PI, false);
        crc2.strokeStyle = "white";
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        //Außenfeldlinie
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.moveTo(50, 50);
        crc2.lineTo(1150, 50);
        crc2.lineTo(1150, 650);
        crc2.lineTo(50, 650);
        crc2.lineTo(50, 50);
        crc2.stroke();
        crc2.closePath();
        //Mittellinie
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.moveTo(600, 50);
        crc2.lineTo(600, 650);
        crc2.closePath();
        crc2.stroke();
    }
})(soccerSimulation || (soccerSimulation = {}));
//# sourceMappingURL=main.js.map