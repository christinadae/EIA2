"use strict";
/*
Aufgabe: <L10.2 Polymorphie>
Name: <Christina Däschner>
Matrikel: <266417>
Datum: <12.06.2021>
Quellen: <Zusammenarbeit mit: Huu Thien Phan Ngoc, Mona Kabelka, Timur Yildirim, Mariia Kolkutova>
*/
var Polymorphie;
(function (Polymorphie) {
    window.addEventListener("load", handleLoad);
    let moveables = [];
    let flowers = [];
    let imageData;
    function handleLoad() {
        Polymorphie.canvas = document.querySelector("canvas");
        Polymorphie.crc2 = Polymorphie.canvas.getContext("2d");
        Polymorphie.canvas.width = window.innerWidth;
        Polymorphie.canvas.height = window.innerHeight;
        setBackground();
        setFlowers();
        createCloud();
        imageData = Polymorphie.crc2.getImageData(0, 0, Polymorphie.canvas.width, Polymorphie.canvas.height);
        animate();
    }
    function setBackground() {
        Polymorphie.createBackground();
        Polymorphie.createMountains();
        Polymorphie.createTrees();
        createBees(10);
    }
    function setFlowers() {
        let xPos = 0;
        do {
            let flowerType = Math.floor(Math.random() * 2) + 1;
            if (flowerType == 1) {
                flowers.push(new Polymorphie.Tulip(xPos, 50 + (Polymorphie.crc2.canvas.height * 0.62), Polymorphie.crc2.canvas.height * 0.9));
            }
            else {
                flowers.push(new Polymorphie.Dandelion(xPos, 50 + (Polymorphie.crc2.canvas.height * 0.62), Polymorphie.crc2.canvas.height * 0.9));
            }
            xPos += 10 + Math.random() * (50 - 10);
        } while (xPos < Polymorphie.crc2.canvas.width);
    }
    function createBees(_sumBees) {
        for (let index = 0; index < _sumBees; index++) {
            let randomScale = 0.5 + Math.random() * (2.5 - 1.3);
            let randomSpeedX = (Math.random() - 0.5) * 5;
            let randomSpeedY = (Math.random() - 0.5) * 5;
            moveables.push(new Polymorphie.Bees(Polymorphie.crc2.canvas.width / 2, Polymorphie.crc2.canvas.height * 0.62, randomSpeedX, randomSpeedY, randomScale));
        }
    }
    function createCloud() {
        moveables.push(new Polymorphie.Clouds(Polymorphie.crc2.canvas.width * .10, Polymorphie.crc2.canvas.height * .10, 0.5, 1));
        moveables.push(new Polymorphie.Clouds(Polymorphie.crc2.canvas.width * .5, Polymorphie.crc2.canvas.height * .05, 0.5, 1));
    }
    function animate() {
        requestAnimationFrame(animate);
        Polymorphie.crc2.clearRect(0, 0, Polymorphie.crc2.canvas.width, Polymorphie.crc2.canvas.height);
        Polymorphie.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < moveables.length; index++) {
            moveables[index].update();
            moveables[index].draw();
        }
    }
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=L10.2_main.js.map