"use strict";
var soccerSimulation;
(function (soccerSimulation) {
    function createFootballField() {
        //Fußballfeld
        soccerSimulation.crc2.beginPath();
        soccerSimulation.crc2.fillStyle = "rgb(117, 159, 105)";
        soccerSimulation.crc2.fillRect(0, 0, soccerSimulation.canvas.width, soccerSimulation.canvas.height);
        soccerSimulation.crc2.fill();
        soccerSimulation.crc2.closePath();
        //Mittelkreis
        soccerSimulation.crc2.beginPath();
        soccerSimulation.crc2.arc(600, 350, 100, 0, 2 * Math.PI, false);
        soccerSimulation.crc2.strokeStyle = "white";
        soccerSimulation.crc2.fill();
        soccerSimulation.crc2.stroke();
        soccerSimulation.crc2.closePath();
        //Außenfeldlinie
        soccerSimulation.crc2.beginPath();
        soccerSimulation.crc2.strokeStyle = "white";
        soccerSimulation.crc2.moveTo(50, 50);
        soccerSimulation.crc2.lineTo(1150, 50);
        soccerSimulation.crc2.lineTo(1150, 650);
        soccerSimulation.crc2.lineTo(50, 650);
        soccerSimulation.crc2.lineTo(50, 50);
        soccerSimulation.crc2.stroke();
        soccerSimulation.crc2.closePath();
        //Mittellinie
        soccerSimulation.crc2.beginPath();
        soccerSimulation.crc2.strokeStyle = "white";
        soccerSimulation.crc2.moveTo(600, 50);
        soccerSimulation.crc2.lineTo(600, 650);
        soccerSimulation.crc2.closePath();
        soccerSimulation.crc2.stroke();
    }
    soccerSimulation.createFootballField = createFootballField;
})(soccerSimulation || (soccerSimulation = {}));
//# sourceMappingURL=footballfield.js.map