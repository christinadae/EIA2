
namespace L09_BlumenwieseClasses {

    window.addEventListener("load", handleLoad);


    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    let flowers: Flowers[] = [];
    let bees: Bees[] = [];
    let clouds: Clouds[] = [];
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
            flowers.push(new Flowers(Math.floor(Math.random() * 2) + 1, xPos));
            xPos += 10 + Math.random() * (50 - 10);
        }
        while (xPos < crc2.canvas.width);
       
    }



    function createBees(_sumBees: number): void {
        for (let index: number = 0; index < _sumBees; index ++) {
            let randomScale: number = 0.5 + Math.random() * (2.5 - 1.3);

            let randomSpeedX: number = (Math.random() - 0.5) * 5;
            let randomSpeedY: number = (Math.random() - 0.5) * 5;

          
            bees.push(new Bees(crc2.canvas.width / 2, crc2.canvas.height * 0.62, randomSpeedX, randomSpeedY, randomScale));
        }
    }

    function createCloud(): void {
    
        clouds.push(new Clouds(crc2.canvas.width * .05, crc2.canvas.height * .25));
        clouds.push(new Clouds(crc2.canvas.width * .07, crc2.canvas.height * .95));
    }

    function animate(): void {
        requestAnimationFrame(animate);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);
        for (let index: number = 0; index < bees.length; index ++) {
            bees[index].update();
            
        }
        for (let index: number = 0; index < clouds.length; index ++) {
            clouds[index].update();
        }
    }
}
    
    