let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas");
let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext("2d");
/*
crc2.fillStyle = "burlywood";
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
crc2.strokeStyle = "grey";
crc2.lineWidth = 10;
crc2.strokeRect(0, 0, crc2.canvas.width, crc2.canvas.height);
*/
crc2.beginPath();
crc2.moveTo(100, 100);
crc2.lineTo(300, 100);
crc2.lineTo(200, 150);
crc2.closePath();
crc2.stroke();

