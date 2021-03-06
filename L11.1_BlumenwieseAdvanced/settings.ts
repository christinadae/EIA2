namespace  BlumenwieseAdvanced {


    export function createBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "darkseagreen");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }



    export function createMountains(): void {
        let x: number = 0;

        do {

            let randomScale: number = 0.8 + Math.random() * (1.3 - 0.8);
            crc2.save();
            crc2.translate(x, crc2.canvas.height * 0.52);

            crc2.scale(randomScale, randomScale);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(150, -300);
            crc2.lineTo(150, 0);
            crc2.fillStyle = "rgb(95, 113, 113)";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(150, 0);
            crc2.lineTo(300, 0);
            crc2.lineTo(150, -300);
            crc2.fillStyle = "rgb(74, 87, 87)";
            crc2.fill();
            crc2.closePath();
            x += 20 + Math.random() * (80 - 20);

            crc2.restore();
        }
        while (x < crc2.canvas.width);
    }

    export function createTrees(): void {
        let xTranslate: number = 0;
        let minStep: number = 50;
        let maxStep: number = 120;
        let yTree: number = -75;

        do {             
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
        
                // Rechte Baumh??lfte
                crc2.beginPath();
                crc2.fillStyle = "rgb(49, 67, 49)";
                crc2.moveTo(20, yTree);
                crc2.lineTo(120, yTree);
                crc2.lineTo(20, -375);
                crc2.fill();
                crc2.closePath();
                
                // Linke Baumh??lfte
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

        while (xTranslate < crc2.canvas.width);

    }
        

    }





