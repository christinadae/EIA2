"use strict";
var soccerSimulation;
(function (soccerSimulation) {
    window.addEventListener("load", handleLoad);
    //let moveables: Moveable[] = [];
    let imageData;
    function handleLoad() {
        soccerSimulation.canvas = document.querySelector("canvas");
        soccerSimulation.crc2 = soccerSimulation.canvas.getContext("2d");
        soccerSimulation.canvas.width = 1200;
        soccerSimulation.canvas.height = 700;
        setBasics();
        imageData = soccerSimulation.crc2.getImageData(0, 0, soccerSimulation.canvas.width, soccerSimulation.canvas.height);
    }
    function setBasics() {
        soccerSimulation.createFootballField();
    }
})(soccerSimulation || (soccerSimulation = {}));
//# sourceMappingURL=soccerMain.js.map