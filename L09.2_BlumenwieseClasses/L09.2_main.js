"use strict";
var L09_BlumenwieseClasses;
(function (L09_BlumenwieseClasses) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        L09_BlumenwieseClasses.canvas = document.querySelector("canvas");
        L09_BlumenwieseClasses.crc2 = L09_BlumenwieseClasses.canvas.getContext("2d");
        L09_BlumenwieseClasses.canvas.width = window.innerWidth;
        L09_BlumenwieseClasses.canvas.height = window.innerHeight;
        setBackground();
    }
    function setBackground() {
        L09_BlumenwieseClasses.createBackground();
        L09_BlumenwieseClasses.createCloud();
        L09_BlumenwieseClasses.createMountains();
    }
})(L09_BlumenwieseClasses || (L09_BlumenwieseClasses = {}));
//# sourceMappingURL=L09.2_main.js.map