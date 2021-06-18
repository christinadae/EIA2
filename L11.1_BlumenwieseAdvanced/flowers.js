"use strict";
var BlumenwieseAdvanced;
(function (BlumenwieseAdvanced) {
    class Flower {
        constructor(_xPos, _minY, _maxY) {
            this.minY = 50 + (BlumenwieseAdvanced.crc2.canvas.height * 0.62);
            this.maxY = BlumenwieseAdvanced.crc2.canvas.height * 0.9;
            this.nectarValue = Math.floor(Math.random() * 2000) + 1000;
            this.nectarCounter = 0;
            this.randomScale = 0.5 + Math.random() * (0.8 - 0.5);
            this.nectarLength = 1;
            this.xPos = _xPos;
            this.minY = _minY;
            this.maxY = _maxY;
            this.draw();
        }
        draw() {
            //Draw
        }
        updateNectar() {
            //;
        }
    }
    BlumenwieseAdvanced.Flower = Flower;
})(BlumenwieseAdvanced || (BlumenwieseAdvanced = {}));
//# sourceMappingURL=flowers.js.map