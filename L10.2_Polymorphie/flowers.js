"use strict";
var Polymorphie;
(function (Polymorphie) {
    class Flowers {
        constructor(_xPos, _minY, _maxY) {
            this.minY = 50 + (Polymorphie.crc2.canvas.height * 0.62);
            this.maxY = Polymorphie.crc2.canvas.height * 0.9;
            this.xPos = _xPos;
            this.minY = _minY;
            this.maxY = _maxY;
            this.draw();
        }
        draw() {
            //Draw
        }
    }
    Polymorphie.Flowers = Flowers;
    class Tulip extends Flowers {
        draw() {
            let randomScale = 0.5 + Math.random() * (0.8 - 0.5);
            let y = this.minY + Math.random() * (this.maxY - this.minY);
            let r1 = 5;
            let r2 = 13;
            Polymorphie.crc2.save();
            Polymorphie.crc2.translate(this.xPos, y);
            Polymorphie.crc2.scale(randomScale, randomScale);
            Polymorphie.crc2.fillStyle = "#698c67";
            Polymorphie.crc2.fillRect(-1, -2, 4, 55);
            for (let index = 0; index < 4; index++) {
                let gradient = Polymorphie.crc2.createRadialGradient(0, 3, r1, 0, 3, r2);
                gradient.addColorStop(0, "#c54f20");
                gradient.addColorStop(1, "HSLA(290,60%,70%,0.3)");
                Polymorphie.crc2.beginPath();
                Polymorphie.crc2.arc(2, 3, r2, 0, 2 * Math.PI);
                Polymorphie.crc2.closePath();
                Polymorphie.crc2.fillStyle = gradient;
                Polymorphie.crc2.fill();
            }
            Polymorphie.crc2.restore();
        }
    }
    Polymorphie.Tulip = Tulip;
    class Dandelion extends Flowers {
        draw() {
            let gradient = Polymorphie.crc2.createRadialGradient(0, 0, 2, 0, 0, 20);
            let randomScale = 0.5 + Math.random() * (0.8 - 0.5);
            let y = this.minY + Math.random() * (this.maxY - this.minY);
            Polymorphie.crc2.save();
            Polymorphie.crc2.translate(this.xPos, y);
            Polymorphie.crc2.scale(randomScale, randomScale);
            Polymorphie.crc2.fillStyle = "#698c67";
            Polymorphie.crc2.fillRect(-1, -2, 4, 55);
            gradient.addColorStop(0, "#776896");
            gradient.addColorStop(1, "#8f9fbb");
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.moveTo(0, 0);
            Polymorphie.crc2.lineTo(-15, -5);
            Polymorphie.crc2.lineTo(-25, -30);
            Polymorphie.crc2.lineTo(-10, -20);
            Polymorphie.crc2.lineTo(0, -40);
            Polymorphie.crc2.lineTo(10, -20);
            Polymorphie.crc2.lineTo(25, -30);
            Polymorphie.crc2.lineTo(15, -5);
            Polymorphie.crc2.closePath();
            Polymorphie.crc2.fillStyle = gradient;
            Polymorphie.crc2.fill();
            Polymorphie.crc2.restore();
        }
    }
    Polymorphie.Dandelion = Dandelion;
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=flowers.js.map