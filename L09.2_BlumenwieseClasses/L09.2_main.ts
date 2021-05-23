
namespace L09_BlumenwieseClasses {

    window.addEventListener("load", handleLoad);


    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    let flowers: Flowers[] = [];
    //let trees: Trees[] = [];
    //let bees: Bees[] = [];

    function handleLoad(): void {

        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        setBackground();
        setFlowers();
        //setTrees();
        

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
    
    }
