"use strict";
/*
Aufgabe: <L10.2 Polymorphie>
Name: <Christina Däschner>
Matrikel: <266417>
Datum: <12.06.2021>
Quellen: <Zusammenarbeit mit: Huu Thien Phan Ngoc, Mona Kabelka, Timur Yildirim, Mariia Kolkutova>
*/
var BlumenwieseAdvanced;
(function (BlumenwieseAdvanced) {
    window.addEventListener("load", handleLoad);
    let moveables = [];
    let flowers = [];
    let imageData;
    function handleLoad() {
        BlumenwieseAdvanced.canvas = document.querySelector("canvas");
        BlumenwieseAdvanced.crc2 = BlumenwieseAdvanced.canvas.getContext("2d");
        BlumenwieseAdvanced.canvas.width = window.innerWidth;
        BlumenwieseAdvanced.canvas.height = window.innerHeight;
        setBackground();
        setFlowers();
        createCloud();
        imageData = BlumenwieseAdvanced.crc2.getImageData(0, 0, BlumenwieseAdvanced.canvas.width, BlumenwieseAdvanced.canvas.height);
        animate();
    }
    function setBackground() {
        BlumenwieseAdvanced.createBackground();
        BlumenwieseAdvanced.createMountains();
        BlumenwieseAdvanced.createTrees();
        createBees(10);
    }
    function setFlowers() {
        let xPos = 0;
        do {
            let flowerType = Math.floor(Math.random() * 2) + 1;
            if (flowerType == 1) {
                flowers.push(new BlumenwieseAdvanced.Tulip(xPos, 50 + (BlumenwieseAdvanced.crc2.canvas.height * 0.62), BlumenwieseAdvanced.crc2.canvas.height * 0.9));
            }
            else {
                flowers.push(new BlumenwieseAdvanced.Dandelion(xPos, 50 + (BlumenwieseAdvanced.crc2.canvas.height * 0.62), BlumenwieseAdvanced.crc2.canvas.height * 0.9));
            }
            xPos += 10 + Math.random() * (50 - 10);
        } while (xPos < BlumenwieseAdvanced.crc2.canvas.width);
    }
    function createBees(_sumBees) {
        for (let index = 0; index < _sumBees; index++) {
            let randomScale = 0.5 + Math.random() * (2.5 - 1.3);
            let randomSpeedX = (Math.random() - 0.5) * 5;
            let randomSpeedY = (Math.random() - 0.5) * 5;
            moveables.push(new BlumenwieseAdvanced.Bees(BlumenwieseAdvanced.crc2.canvas.width / 2, BlumenwieseAdvanced.crc2.canvas.height * 0.62, randomSpeedX, randomSpeedY, randomScale));
        }
    }
    function createCloud() {
        moveables.push(new BlumenwieseAdvanced.Clouds(BlumenwieseAdvanced.crc2.canvas.width * .10, BlumenwieseAdvanced.crc2.canvas.height * .10, 0.5, 1));
        moveables.push(new BlumenwieseAdvanced.Clouds(BlumenwieseAdvanced.crc2.canvas.width * .5, BlumenwieseAdvanced.crc2.canvas.height * .05, 0.5, 1));
    }
    function animate() {
        requestAnimationFrame(animate);
        BlumenwieseAdvanced.crc2.clearRect(0, 0, BlumenwieseAdvanced.crc2.canvas.width, BlumenwieseAdvanced.crc2.canvas.height);
        BlumenwieseAdvanced.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < moveables.length; index++) {
            moveables[index].update();
            moveables[index].draw();
        }
    }
})(BlumenwieseAdvanced || (BlumenwieseAdvanced = {}));
//# sourceMappingURL=L11.1_main.js.map