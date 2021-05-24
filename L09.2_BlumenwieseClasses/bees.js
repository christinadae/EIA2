"use strict";
var L09_BlumenwieseClasses;
(function (L09_BlumenwieseClasses) {
    class Bees {
        constructor(_posX, _posY, _speedX, _speedY, _randomScale) {
            this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            this.counter = 0;
            this.golden = 0.42;
            this.horizon = L09_BlumenwieseClasses.crc2.canvas.height * this.golden;
            this.minY = 50 + (L09_BlumenwieseClasses.crc2.canvas.height * 0.92);
            this.maxY = L09_BlumenwieseClasses.crc2.canvas.height * 0.9;
            this.posX = _posX;
            this.posY = _posY;
            this.speedX = _speedX;
            this.speedY = _speedY;
            this.randomScale = _randomScale;
            this.draw();
        }
        draw() {
            let y = this.minY + (Math.floor(Math.random() * this.maxY - this.minY));
            let x = this.maxY + (Math.floor(Math.random() * this.maxY - this.minY));
            L09_BlumenwieseClasses.crc2.save();
            L09_BlumenwieseClasses.crc2.translate(x, y + (this.horizon - 400));
            L09_BlumenwieseClasses.crc2.scale(this.randomScale, this.randomScale);
            //Bienenflügel
            L09_BlumenwieseClasses.crc2.beginPath();
            L09_BlumenwieseClasses.crc2.moveTo(0, 0);
            L09_BlumenwieseClasses.crc2.ellipse(10, -45, 30, 20, 15, 0, Math.PI * 2, false);
            L09_BlumenwieseClasses.crc2.fillStyle = "rgb(218, 232, 233)";
            L09_BlumenwieseClasses.crc2.fill();
            L09_BlumenwieseClasses.crc2.closePath();
            L09_BlumenwieseClasses.crc2.beginPath();
            L09_BlumenwieseClasses.crc2.moveTo(0, 0);
            L09_BlumenwieseClasses.crc2.ellipse(-10, -45, 30, 20, 10, 0, Math.PI * 2, false);
            L09_BlumenwieseClasses.crc2.fillStyle = "rgb(202, 215, 216)";
            L09_BlumenwieseClasses.crc2.fill();
            L09_BlumenwieseClasses.crc2.closePath();
            L09_BlumenwieseClasses.crc2.beginPath();
            L09_BlumenwieseClasses.crc2.moveTo(0, 0);
            L09_BlumenwieseClasses.crc2.ellipse(0, 0, 50, 30, 0, 0, Math.PI * 2, false);
            L09_BlumenwieseClasses.crc2.fillStyle = "rgb(223, 192, 16)";
            L09_BlumenwieseClasses.crc2.fill();
            L09_BlumenwieseClasses.crc2.closePath();
            L09_BlumenwieseClasses.crc2.beginPath();
            L09_BlumenwieseClasses.crc2.fillStyle = "black";
            L09_BlumenwieseClasses.crc2.moveTo(0, 0);
            L09_BlumenwieseClasses.crc2.fillRect(-20, -29, 10, 58);
            L09_BlumenwieseClasses.crc2.fillRect(10, -29, 10, 58);
            // Bienenstachel
            L09_BlumenwieseClasses.crc2.fillRect(-62, 0, 12, 3);
            L09_BlumenwieseClasses.crc2.fill();
            L09_BlumenwieseClasses.crc2.closePath();
            //Auge
            L09_BlumenwieseClasses.crc2.beginPath();
            L09_BlumenwieseClasses.crc2.fillStyle = "black";
            L09_BlumenwieseClasses.crc2.arc(35, -5, 3, 0, Math.PI * 2, false);
            L09_BlumenwieseClasses.crc2.fill();
            L09_BlumenwieseClasses.crc2.closePath();
            /*
                    crc2.beginPath();
                    crc2.fillStyle = "white";
                    crc2.arc(-5, -11, 5 , 0, Math.PI * 2, false);
                    crc2.fill();
                    crc2.stroke();
                    crc2.beginPath();
                    crc2.fillStyle = "white";
                    crc2.arc(5, -11, 5 , 0, Math.PI * 2, false);
                    crc2.fill();
                    crc2.stroke();
            
                    crc2.beginPath();
                    crc2.arc(-2, -1, 2 , 0, Math.PI * 2, false);
                    crc2.stroke();
                    crc2.beginPath();
                    crc2.arc(2, -1, 2 , 0, Math.PI * 2, false);
                    crc2.stroke();
            */
            L09_BlumenwieseClasses.crc2.restore();
        }
    }
    L09_BlumenwieseClasses.Bees = Bees;
})(L09_BlumenwieseClasses || (L09_BlumenwieseClasses = {}));
//# sourceMappingURL=bees.js.map