namespace L08_Canvas {
window.addEventListener("load", handleLoad);

function handleLoad(): void {
    let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
    
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let colors: string[] = ["thistle", "sandybrown", "lightsalmon", "teal", "indianred"];

    for (let index: number = 0; index < 150; index++) {
        let x: number = Math.floor(Math.random() * Math.floor(canvas.width));
        let y: number = Math.floor(Math.random() * Math.floor(canvas.height));
        let x2: number = Math.floor(Math.random() * Math.floor(canvas.width));
        let y2: number = Math.floor(Math.random() * Math.floor(canvas.height));
        let x3: number = Math.floor(Math.random() * Math.floor(canvas.width));
        let y3: number = Math.floor(Math.random() * Math.floor(canvas.height));

        let pickColor: number = Math.floor(Math.random() * Math.floor(5));
/*
        crc2.beginPath();
        crc2.strokeStyle = colors[pickColor];
        crc2.moveTo(x, y);
        crc2.lineTo(x2, y2);
        crc2.lineTo(x3, y3);
        crc2.closePath();
        crc2.stroke();
*/
        crc2.beginPath();
        crc2.arc( x, y, 200, 0, 2 * Math.PI , false);
        crc2.fillStyle = colors[pickColor];
        crc2.strokeStyle = colors[pickColor];
        crc2.fill();
        crc2.stroke();
      
        
        
    }
}





}