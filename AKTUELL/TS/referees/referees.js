"use strict";
var EndabgabePROBE;
(function (EndabgabePROBE) {
    class Referee extends EndabgabePROBE.Human {
        constructor(_position, _jerseyColor) {
            super(_position, _jerseyColor);
            this.velocity = 0.3;
            this.draw();
        }
        draw() {
            EndabgabePROBE.crc2.save();
            EndabgabePROBE.crc2.translate(this.position.x, this.position.y);
            EndabgabePROBE.crc2.beginPath();
            EndabgabePROBE.crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            EndabgabePROBE.crc2.fillStyle = this.jerseyColor;
            EndabgabePROBE.crc2.strokeStyle = "black";
            EndabgabePROBE.crc2.lineWidth = 2.5;
            EndabgabePROBE.crc2.stroke();
            EndabgabePROBE.crc2.fill();
            EndabgabePROBE.crc2.closePath();
            EndabgabePROBE.crc2.beginPath();
            EndabgabePROBE.crc2.lineWidth = 3;
            EndabgabePROBE.crc2.moveTo(0, -10);
            EndabgabePROBE.crc2.lineTo(0, 10);
            EndabgabePROBE.crc2.moveTo(-6, -8);
            EndabgabePROBE.crc2.lineTo(-6, 8);
            EndabgabePROBE.crc2.moveTo(6, -8);
            EndabgabePROBE.crc2.lineTo(6, 8);
            EndabgabePROBE.crc2.strokeStyle = "black";
            EndabgabePROBE.crc2.stroke();
            EndabgabePROBE.crc2.restore();
        }
        update() {
            let diff = EndabgabePROBE.Vector.getDifference(EndabgabePROBE.ball.ballPos, this.position);
            if (Math.abs(diff.x) < 30 && Math.abs(diff.y) < 30) {
                //nothing
            }
            else {
                diff.scale(0.005);
                this.position.add(diff);
            }
        }
    }
    EndabgabePROBE.Referee = Referee;
})(EndabgabePROBE || (EndabgabePROBE = {}));
//# sourceMappingURL=referees.js.map