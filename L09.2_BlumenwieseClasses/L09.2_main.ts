
namespace L09_BlumenwieseClasses {

    window.addEventListener("load", handleLoad);


    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    let flowers: Flowers[] = [];

    function handleLoad(): void {

        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        setBackground();
        setFlowers();

    }

    function setBackground(): void {

        createBackground();
        createCloud();
        createMountains();
        createTrees();

    }

    function setFlowers(): void {
        let xPos: number = 0;
        do {
            flowers.push(new Flowers(Math.floor(Math.random() * 2) + 1, xPos));
            xPos += 10 + Math.random() * (50 - 10);
        }
        while (xPos < crc2.canvas.width);
       
    }
    }
