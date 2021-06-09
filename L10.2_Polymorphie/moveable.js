"use strict";
var Polymorphie;
(function (Polymorphie) {
    class Moveable {
        constructor(_posX, _posY, _speedX, _speedY) {
            this.posX = _posX;
            this.posY = _posY;
            this.speedX = _speedX;
            this.speedY = _speedY;
        }
        draw() {
            //Draw
        }
        update() {
            //Update
        }
    }
    Polymorphie.Moveable = Moveable;
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=moveable.js.map