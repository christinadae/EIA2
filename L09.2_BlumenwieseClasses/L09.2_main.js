"use strict";
var L09_BlumenwieseClasses;
(function (L09_BlumenwieseClasses) {
    window.addEventListener("load", handleLoad);
    let flowers = [];
    //let trees: Trees[] = [];
    //let bees: Bees[] = [];
    function handleLoad() {
        L09_BlumenwieseClasses.canvas = document.querySelector("canvas");
        L09_BlumenwieseClasses.crc2 = L09_BlumenwieseClasses.canvas.getContext("2d");
        L09_BlumenwieseClasses.canvas.width = window.innerWidth;
        L09_BlumenwieseClasses.canvas.height = window.innerHeight;
        setBackground();
        setFlowers();
        //setTrees();
    }
    function setBackground() {
        L09_BlumenwieseClasses.createBackground();
        L09_BlumenwieseClasses.createCloud();
        L09_BlumenwieseClasses.createMountains();
        L09_BlumenwieseClasses.createTrees();
    }
    function setFlowers() {
        let xPos = 0;
        do {
            flowers.push(new L09_BlumenwieseClasses.Flowers(Math.floor(Math.random() * 2) + 1, xPos));
            xPos += 10 + Math.random() * (50 - 10);
        } while (xPos < L09_BlumenwieseClasses.crc2.canvas.width);
    }
    /*
        function setTrees(): void {
     
            let xPos: number = 0;
    
            do {
                trees.push(new Trees(Math.floor(Math.random() * 2) + 1, xPos));
                xPos *= 10 + Math.random() * (50 - 10);
            }
    
            while (xPos < crc2.canvas.width);
        }
      
        */
})(L09_BlumenwieseClasses || (L09_BlumenwieseClasses = {}));
//# sourceMappingURL=L09.2_main.js.map