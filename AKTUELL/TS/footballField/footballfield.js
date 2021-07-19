"use strict";
var EndabgabePROBE;
(function (EndabgabePROBE) {
    function drawField() {
        //Fußballfeld
        EndabgabePROBE.crc2.beginPath();
        EndabgabePROBE.crc2.fillStyle = "rgb(117, 159, 105)";
        EndabgabePROBE.crc2.fillRect(0, 0, EndabgabePROBE.canvas.width, EndabgabePROBE.canvas.height);
        EndabgabePROBE.crc2.fill();
        EndabgabePROBE.crc2.closePath();
        //Mittelkreis
        EndabgabePROBE.crc2.beginPath();
        EndabgabePROBE.crc2.arc(450, 250, 70, 0, 2 * Math.PI, false);
        EndabgabePROBE.crc2.strokeStyle = "white";
        EndabgabePROBE.crc2.fill();
        EndabgabePROBE.crc2.stroke();
        EndabgabePROBE.crc2.closePath();
        //Außenfeldlinie
        EndabgabePROBE.crc2.beginPath();
        EndabgabePROBE.crc2.strokeStyle = "white";
        EndabgabePROBE.crc2.moveTo(30, 30);
        EndabgabePROBE.crc2.lineTo(870, 30);
        EndabgabePROBE.crc2.lineTo(870, 470);
        EndabgabePROBE.crc2.lineTo(30, 470);
        EndabgabePROBE.crc2.lineTo(30, 30);
        EndabgabePROBE.crc2.stroke();
        EndabgabePROBE.crc2.closePath();
        //Mittellinie
        EndabgabePROBE.crc2.beginPath();
        EndabgabePROBE.crc2.strokeStyle = "white";
        EndabgabePROBE.crc2.moveTo(450, 30);
        EndabgabePROBE.crc2.lineTo(450, 470);
        EndabgabePROBE.crc2.closePath();
        EndabgabePROBE.crc2.stroke();
        //Torraum links
        EndabgabePROBE.crc2.beginPath();
        EndabgabePROBE.crc2.strokeStyle = "white";
        EndabgabePROBE.crc2.rect(30, 175, 50, 150);
        EndabgabePROBE.crc2.stroke();
        //Tor links
        EndabgabePROBE.crc2.beginPath();
        EndabgabePROBE.crc2.strokeStyle = "white";
        EndabgabePROBE.crc2.rect(5, 200, 25, 100);
        EndabgabePROBE.crc2.stroke();
        //Strafraum links
        EndabgabePROBE.crc2.beginPath();
        EndabgabePROBE.crc2.strokeStyle = "white";
        EndabgabePROBE.crc2.rect(30, 100, 120, 300);
        EndabgabePROBE.crc2.stroke();
        //Strafraumhalbkreis links
        EndabgabePROBE.crc2.beginPath();
        EndabgabePROBE.crc2.strokeStyle = "white";
        EndabgabePROBE.crc2.arc(150, 250, 60, 1.5 * Math.PI, 0.5 * Math.PI, false);
        EndabgabePROBE.crc2.stroke();
        //Torraum rechts
        EndabgabePROBE.crc2.beginPath();
        EndabgabePROBE.crc2.strokeStyle = "white";
        EndabgabePROBE.crc2.rect(820, 175, 50, 150);
        EndabgabePROBE.crc2.stroke();
        //Strafraum rechts
        EndabgabePROBE.crc2.beginPath();
        EndabgabePROBE.crc2.strokeStyle = "white";
        EndabgabePROBE.crc2.rect(750, 100, 120, 300);
        EndabgabePROBE.crc2.stroke();
        //Tor rechts
        EndabgabePROBE.crc2.beginPath();
        EndabgabePROBE.crc2.strokeStyle = "white";
        EndabgabePROBE.crc2.rect(870, 200, 25, 100);
        EndabgabePROBE.crc2.stroke();
        //Strafraumhalbkreis rechts
        EndabgabePROBE.crc2.beginPath();
        EndabgabePROBE.crc2.strokeStyle = "white";
        EndabgabePROBE.crc2.arc(750, 250, 60, 1.5 * Math.PI, 0.5 * Math.PI, true);
        EndabgabePROBE.crc2.stroke();
    }
    EndabgabePROBE.drawField = drawField;
})(EndabgabePROBE || (EndabgabePROBE = {}));
//# sourceMappingURL=footballfield.js.map