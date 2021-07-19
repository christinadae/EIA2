namespace Endabgabe {

    crc2.beginPath();
    crc2.arc(0, 0, 10, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.strokeStyle = "black";
    crc2.lineWidth = 2.5;
    crc2.stroke();
    crc2.fill();
    crc2.closePath();

    crc2.beginPath();
    crc2.lineWidth = 3;
    crc2.moveTo(0, -10);
    crc2.lineTo(0, 10);
    crc2.moveTo(-6, -8);
    crc2.lineTo(-6, 8);
    crc2.moveTo(6, -8);
    crc2.lineTo(6, 8);
    crc2.strokeStyle = "black";
    crc2.stroke();

}