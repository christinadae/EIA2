"use strict";
var Polymorphie;
(function (Polymorphie) {
    class Clouds extends Polymorphie.Moveable {
        draw() {
            Polymorphie.crc2.save();
            Polymorphie.crc2.translate(this.posX, this.posY);
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.moveTo(-115, -20);
            Polymorphie.crc2.bezierCurveTo(-155, 0, -155, 50, -55, 50);
            Polymorphie.crc2.bezierCurveTo(-35, 80, 35, 80, 55, 50);
            Polymorphie.crc2.bezierCurveTo(135, 50, 135, 20, 105, 0);
            Polymorphie.crc2.bezierCurveTo(165, -60, 85, -70, 55, -50);
            Polymorphie.crc2.bezierCurveTo(35, -95, -35, -80, -35, -50);
            Polymorphie.crc2.bezierCurveTo(-85, -95, -135, -80, -115, -20);
            Polymorphie.crc2.lineWidth = 2;
            Polymorphie.crc2.fillStyle = "white";
            Polymorphie.crc2.fill();
            Polymorphie.crc2.strokeStyle = "white";
            Polymorphie.crc2.closePath();
            Polymorphie.crc2.stroke();
            Polymorphie.crc2.restore();
        }
        update() {
            if (this.posX > Polymorphie.crc2.canvas.width || this.posX < 0) {
                this.speedX = -this.speedX;
            }
            if (this.posY > Polymorphie.crc2.canvas.height * 0.20 || this.posY < 10) {
                this.speedY = -this.speedY;
            }
            this.posX += this.speedX;
            this.posY += this.speedY;
            this.draw();
        }
    }
    Polymorphie.Clouds = Clouds;
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=clouds.js.map