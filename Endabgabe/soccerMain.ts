namespace soccerSimulation {

    window.addEventListener("load", handleLoad);

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    
    //let moveables: Moveable[] = [];
    let imageData: ImageData;

    function handleLoad(): void {
         canvas = <HTMLCanvasElement> document.querySelector("canvas");
         crc2 = <CanvasRenderingContext2D> canvas.getContext("2d");
        
         canvas.width = 900;
         canvas.height = 500;

         setBasics();
         imageData =  crc2.getImageData(0, 0, canvas.width, canvas.height);

        
    }

    function setBasics(): void {
        createFootballField();

    }


}
       
