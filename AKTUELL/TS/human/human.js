"use strict";
var EndabgabePROBE;
(function (EndabgabePROBE) {
    class Human {
        constructor(_position, _jerseyColor) {
            this.position = _position;
            this.jerseyColor = _jerseyColor;
            this.draw();
        }
        get playerPosition() {
            return this.position;
        }
        draw() {
            //polymorphie
        }
        update() {
            //polymorphie
        }
        setJersey(_color) {
            this.jerseyColor = _color;
        }
    }
    EndabgabePROBE.Human = Human;
})(EndabgabePROBE || (EndabgabePROBE = {}));
//# sourceMappingURL=human.js.map