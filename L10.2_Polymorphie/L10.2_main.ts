/*
Aufgabe: <L09.2 BlumenwieseClasses>
Name: <Christina Däschner>
Matrikel: <266417>
Datum: <28.05.2021>
Quellen: <Hilfe von: Huu Thien Phan Ngoc>
*/
namespace Polymorphie {

    window.addEventListener("load", handleLoad);


    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    let moveables: Moveable[] = [];
    let flowers: Flowers[] = [];
    let imageData: ImageData;

    function handleLoad(): void {

        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        setBackground();
        setFlowers();
        createCloud();
        imageData =  crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();

    }

    function setBackground(): void {

        createBackground();
        createMountains();
        createTrees();
        createBees(10);

    }

    function setFlowers(): void {

        let xPos: number = 0;
        do {
            let flowerType: number = Math.floor(Math.random() * 2) + 1;

            if (flowerType == 1) {
                flowers.push(new Tulip(xPos, 50 + (crc2.canvas.height * 0.62), crc2.canvas.height * 0.9));
            }
           else {
            flowers.push(new Dandelion(xPos, 50 + (crc2.canvas.height * 0.62), crc2.canvas.height * 0.9));
            
           }
            xPos += 10 + Math.random() * (50 - 10);
        }
        while (xPos < crc2.canvas.width);
       
    }

    function createBees(_sumBees: number): void {
        for (let index: number = 0; index < _sumBees; index ++) {
            let randomScale: number = 0.5 + Math.random() * (2.5 - 1.3);

            let randomSpeedX: number = (Math.random() - 0.5) * 5;
            let randomSpeedY: number = (Math.random() - 0.5) * 5;
            moveables.push(new Bees(crc2.canvas.width / 2, crc2.canvas.height * 0.62, randomSpeedX, randomSpeedY, randomScale));
        }
    }

    function createCloud(): void {
    
        moveables.push(new Clouds(crc2.canvas.width * .10, crc2.canvas.height * .10, 0.5, 1));
        moveables.push(new Clouds(crc2.canvas.width * .5, crc2.canvas.height * .05, 0.5, 1));
    }

    function animate(): void {
        requestAnimationFrame(animate);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);

        for (let index: number = 0; index < moveables.length; index ++) {
            moveables[index].update();
            moveables[index].draw();
            
        }
       
    }
}
    
    