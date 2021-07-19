"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Vector {
        constructor(_x = 0, _y = 0) {
            this.set(_x, _y);
        }
        static getDifference(_v0, _v1) {
            return new Vector(_v0.x - _v1.x, _v0.y - _v1.y); // Vektor 1 (_v0) erhält x und y Wert; Vektor 2 (_v1) erhält x und y Wert; -> neuer Vektor wird erschaffen
        }
        static getDistance(_v0, _v1) {
            let distanceX = _v0.x - _v1.x;
            let distanceY = _v0.y - _v1.y;
            return Math.hypot(distanceX, distanceY);
            // Neuer Vektor wird ermittelt, indem die Distanz von Vektor 1 zu Vektor 2 errechnet wird. 
            // Distanz von Ball zu Spieler wird somit ermittelt (hypothenuse)
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    Endabgabe.Vector = Vector;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=vector.js.map