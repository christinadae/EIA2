namespace Blumenwiese {

    window.addEventListener("load", handleLoad);

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;

   

    function handleLoad(): void {
        canvas = <HTMLCanvasElement> document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D> canvas.getContext("2d");
        
        canvas.height = 896;
        canvas.width = 414;

        setBackground();
    }

    function setBackground(): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "darkseagreen");
        crc2.beginPath();
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.fill();
        crc2.closePath();

        // Wolken generieren; inspiriert von: https://stackoverflow.com/questions/19541192/how-to-draw-cloud-shape-in-html5-canvas
        crc2.beginPath();
        crc2.moveTo(170, 80);
        crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
        crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
        crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
        crc2.bezierCurveTo(450, 40, 370, 30, 340, 50);
        crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
        crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
        crc2.closePath();
        crc2.lineWidth = 2;
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.strokeStyle = "white";
        crc2.stroke();
       
        // Berge generieren

//Berg 1

        crc2.beginPath();
        crc2.moveTo(0, 120);
        crc2.lineTo(0, 400);
        crc2.lineTo(100, 400);
        crc2.fillStyle = "rgb(95, 113, 113)";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(0, 120);
        crc2.lineTo(40, 400);
        crc2.lineTo(100, 400);
        crc2.fillStyle = "rgb(74, 87, 87)";
        crc2.fill();
        crc2.closePath();
        
        
        
// Berg 2
        crc2.beginPath();
        crc2.moveTo(350, 100);
        crc2.lineTo(250, 400);
        crc2.lineTo(500, 400);
        crc2.fillStyle = "rgb(95, 113, 113)";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(350, 100);
        crc2.lineTo(350, 400);
        crc2.lineTo(500, 400);
       
        crc2.fillStyle = "rgb(74, 87, 87)";
        crc2.fill();
        crc2.closePath();
    

//Berg 3
        crc2.beginPath();
        crc2.moveTo(100, 50);
        crc2.lineTo(0, 400);
        crc2.lineTo(300, 400);
        crc2.fillStyle = "rgb(95, 113, 113)";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(100, 50);
        crc2.lineTo(100, 400);
        crc2.lineTo(300, 400);
        crc2.fillStyle = "rgb(74, 87, 87)";
        crc2.fill();
        crc2.closePath();
        
  
        
// Berg 4
        crc2.beginPath();
        crc2.moveTo(200, 100);
        crc2.lineTo(0, 400);
        crc2.lineTo(400, 400);
        crc2.fillStyle = "rgb(95, 113, 113)";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(200, 100);
        crc2.lineTo(200, 400);
        crc2.lineTo(400, 400);
        crc2.fillStyle = "rgb(74, 87, 87)";
        crc2.fill();
        crc2.closePath();
        
    // Baum
        // Baumstamm
        crc2.beginPath();
        crc2.fillStyle = "rgb(53, 40, 17)";
        crc2.fillRect(85, 350, 30, 100);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.fillStyle = "green";

        // 1. Baum / rechte Baumhälfte
        crc2.moveTo(100, 250);
        crc2.lineTo(100, 300);
        crc2.lineTo(200, 350);
      
        crc2.moveTo(100, 280);
        crc2.lineTo(100, 330);
        crc2.lineTo(200, 380);
    
        crc2.moveTo(100, 310);
        crc2.lineTo(100, 360);
        crc2.lineTo(200, 410);

        crc2.moveTo(100, 340);
        crc2.lineTo(100, 390);
        crc2.lineTo(200, 440);


    // 1. Baum / linke Baumhälfte
        crc2.moveTo(100, 250);
        crc2.lineTo(100, 300);
        crc2.lineTo(0, 350);

        crc2.moveTo(100, 280);
        crc2.lineTo(100, 330);
        crc2.lineTo(0, 380);

        crc2.moveTo(100, 310);
        crc2.lineTo(100, 360);
        crc2.lineTo(0, 410);

        crc2.moveTo(100, 340);
        crc2.lineTo(100, 390);
        crc2.lineTo(0, 440);


        crc2.fill();
        crc2.closePath();

    
        
       

        


    }
}