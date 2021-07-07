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
        soccerSimulation.crc2.arc(450, 250, 70, 0, 2 * Math.PI, false);
        soccerSimulation.crc2.strokeStyle = "white";
        soccerSimulation.crc2.fill();
        soccerSimulation.crc2.stroke();
        soccerSimulation.crc2.closePath();
        //Außenfeldlinie
        soccerSimulation.crc2.beginPath();
        soccerSimulation.crc2.strokeStyle = "white";
        soccerSimulation.crc2.moveTo(30, 30);
        soccerSimulation.crc2.lineTo(870, 30);
        soccerSimulation.crc2.lineTo(870, 470);
        soccerSimulation.crc2.lineTo(30, 470);
        soccerSimulation.crc2.lineTo(30, 30);
        soccerSimulation.crc2.stroke();
        soccerSimulation.crc2.closePath();
        //Mittellinie
        soccerSimulation.crc2.beginPath();
        soccerSimulation.crc2.strokeStyle = "white";
        soccerSimulation.crc2.moveTo(450, 30);
        soccerSimulation.crc2.lineTo(450, 470);
        soccerSimulation.crc2.closePath();
        soccerSimulation.crc2.stroke();
        //Torraum links
        soccerSimulation.crc2.beginPath();
        soccerSimulation.crc2.strokeStyle = "white";
        soccerSimulation.crc2.rect(30, 175, 50, 150);
        soccerSimulation.crc2.stroke();
        //Tor links
        soccerSimulation.crc2.beginPath();
        soccerSimulation.crc2.strokeStyle = "white";
        soccerSimulation.crc2.rect(5, 200, 25, 100);
        soccerSimulation.crc2.stroke();
        //Strafraum links
        soccerSimulation.crc2.beginPath();
        soccerSimulation.crc2.strokeStyle = "white";
        soccerSimulation.crc2.rect(30, 100, 120, 300);
        soccerSimulation.crc2.stroke();
        //Strafraumhalbkreis links
        soccerSimulation.crc2.beginPath();
        soccerSimulation.crc2.strokeStyle = "white";
        soccerSimulation.crc2.arc(150, 250, 60, 1.5 * Math.PI, 0.5 * Math.PI, false);
        soccerSimulation.crc2.stroke();
        //Torraum rechts
        soccerSimulation.crc2.beginPath();
        soccerSimulation.crc2.strokeStyle = "white";
        soccerSimulation.crc2.rect(820, 175, 50, 150);
        soccerSimulation.crc2.stroke();
        //Strafraum rechts
        soccerSimulation.crc2.beginPath();
        soccerSimulation.crc2.strokeStyle = "white";
        soccerSimulation.crc2.rect(750, 100, 120, 300);
        soccerSimulation.crc2.stroke();
        //Tor rechts
        soccerSimulation.crc2.beginPath();
        soccerSimulation.crc2.strokeStyle = "white";
        soccerSimulation.crc2.rect(870, 200, 25, 100);
        soccerSimulation.crc2.stroke();
        //Strafraumhalbkreis rechts
        soccerSimulation.crc2.beginPath();
        soccerSimulation.crc2.strokeStyle = "white";
        soccerSimulation.crc2.arc(750, 250, 60, 1.5 * Math.PI, 0.5 * Math.PI, true);
        soccerSimulation.crc2.stroke();
    }
    soccerSimulation.createFootballField = createFootballField;
})(soccerSimulation || (soccerSimulation = {}));
//# sourceMappingURL=footballfield.js.map