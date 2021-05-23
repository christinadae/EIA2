namespace L09_BlumenwieseClasses {

    export class Trees {
        xPos: number;



        constructor(_xPos: number) {
            this.xPos = _xPos;
        
            this.draw();
        }

        draw(): void {

            let minStep: number = 50;
            let maxStep: number = 120;
            let yTree: number = -75;
            let xTranslate: number = 0;

            crc2.save();
            let randomScale: number = 0.5 + Math.random() * (0.8 - 0.5);
            let y: number = 20 + Math.random() * (50 - 20);
            crc2.translate(xTranslate, y + crc2.canvas.height * 0.52);
            crc2.scale(randomScale, randomScale);

        //Baumstamm
            crc2.beginPath();
            crc2.fillStyle = "rgb(53, 40, 17)";
            crc2.fillRect(0, 0, 40, -75);
            crc2.fill();
            crc2.closePath();

            for (let index: number = 0; index < 3; index++) {

                    // Rechte Baumhälfte
                    crc2.beginPath();
                    crc2.fillStyle = "rgb(49, 67, 49)";
                    crc2.moveTo(20, yTree);
                    crc2.lineTo(120, yTree);
                    crc2.lineTo(20, -375);
                    crc2.fill();
                    crc2.closePath();

                    // Linke Baumhälfte
                    crc2.beginPath();
                    crc2.fillStyle = "rgb(61, 82, 61)";
                    crc2.moveTo(20, yTree);
                    crc2.lineTo(-80, yTree);
                    crc2.lineTo(20, -375);
                    crc2.fill();
                    crc2.closePath();

                    yTree -= 50;
                }
            yTree = -75;
            xTranslate += minStep + Math.random() * (maxStep - minStep);
            crc2.restore();
         

        }
    }
}