"use strict";
var L09_BlumenwieseClasses;
(function (L09_BlumenwieseClasses) {
    window.addEventListener("load", handleLoad);
    let flowers = [];
    let bees = [];
    let clouds = [];
    let imageData;
    function handleLoad() {
        L09_BlumenwieseClasses.canvas = document.querySelector("canvas");
        L09_BlumenwieseClasses.crc2 = L09_BlumenwieseClasses.canvas.getContext("2d");
        L09_BlumenwieseClasses.canvas.width = window.innerWidth;
        L09_BlumenwieseClasses.canvas.height = window.innerHeight;
        setBackground();
        setFlowers();
        createCloud();
        imageData = L09_BlumenwieseClasses.crc2.getImageData(0, 0, L09_BlumenwieseClasses.canvas.width, L09_BlumenwieseClasses.canvas.height);
        animate();
    }
    function setBackground() {
        L09_BlumenwieseClasses.createBackground();
        L09_BlumenwieseClasses.createMountains();
        L09_BlumenwieseClasses.createTrees();
        createBees(10);
    }
    function setFlowers() {
        let xPos = 0;
        do {
            flowers.push(new L09_BlumenwieseClasses.Flowers(Math.floor(Math.random() * 2) + 1, xPos));
            xPos += 10 + Math.random() * (50 - 10);
        } while (xPos < L09_BlumenwieseClasses.crc2.canvas.width);
    }
    function createBees(_sumBees) {
        for (let index = 0; index < _sumBees; index++) {
            let randomScale = 0.5 + Math.random() * (2.5 - 1.3);
            let randomSpeedX = (Math.random() - 0.5) * 5;
            let randomSpeedY = (Math.random() - 0.5) * 5;
            bees.push(new L09_BlumenwieseClasses.Bees(L09_BlumenwieseClasses.crc2.canvas.width / 2, L09_BlumenwieseClasses.crc2.canvas.height * 0.62, randomSpeedX, randomSpeedY, randomScale));
        }
    }
    function createCloud() {
        clouds.push(new L09_BlumenwieseClasses.Clouds(L09_BlumenwieseClasses.crc2.canvas.width * .05, L09_BlumenwieseClasses.crc2.canvas.height * .25));
        clouds.push(new L09_BlumenwieseClasses.Clouds(L09_BlumenwieseClasses.crc2.canvas.width * .07, L09_BlumenwieseClasses.crc2.canvas.height * .95));
    }
    function animate() {
        requestAnimationFrame(animate);
        L09_BlumenwieseClasses.crc2.clearRect(0, 0, L09_BlumenwieseClasses.crc2.canvas.width, L09_BlumenwieseClasses.crc2.canvas.height);
        L09_BlumenwieseClasses.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < bees.length; index++) {
            bees[index].update();
        }
        for (let index = 0; index < clouds.length; index++) {
            clouds[index].update();
        }
    }
})(L09_BlumenwieseClasses || (L09_BlumenwieseClasses = {}));
//# sourceMappingURL=L09.2_main.js.map