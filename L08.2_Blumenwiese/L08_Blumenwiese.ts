namespace Blumenwiese {

    window.addEventListener("load", handleLoad);

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;

   

    function handleLoad(): void {
        canvas = <HTMLCanvasElement> document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D> canvas.getContext("2d");
        
        //canvas.height = 896;
        //canvas.width = 414;
        canvas.width = 1200;
        canvas.height = 800;
        
        //setBackground();
        getMountains();
    }
/*
    function setBackground(): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(1, "darkseagreen");
        crc2.beginPath();
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
        getCloud();
        getMountains();
        getTrees();
        //getFlowers();

    function getCloud(): void {
      // inspiriert von: https://stackoverflow.com/questions/19541192/how-to-draw-cloud-shape-in-html5-canvas
      crc2.beginPath();
      crc2.moveTo(170, 80);
      crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
      crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
      crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
      crc2.bezierCurveTo(450, 40, 370, 30, 340, 50);
      crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
      crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
      
      crc2.lineWidth = 2;
      crc2.fillStyle = "white";
      crc2.fill();
      crc2.strokeStyle = "white";
      crc2.closePath();
      crc2.stroke();
      
        }
*/
  
    function getMountains(): void {
            crc2.translate(0, 0);
            crc2.save();
            let xTranslate: number = 0;
            let minStep: number = 100;
            let maxStep: number = 200;

            do { 
                
                crc2.translate(xTranslate,  crc2.canvas.height * 0.52);
                //console.log(crc2.canvas.height);
                //console.log(xTranslate);
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
      
                xTranslate += minStep + Math.random() * (maxStep - minStep);
                crc2.restore();
            }
            
            while (xTranslate < crc2.canvas.width);
           
        }
    
/*    
//Berg 1
   
        crc2.beginPath();
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
*/
}
/*
function getTrees(): void {


        // 1. Baum
        
        crc2.beginPath();
        crc2.fillStyle = "rgb(53, 40, 17)";
        crc2.fillRect(175, 350, 10, 75);
        crc2.fill();
        crc2.closePath();
       
        
       
    // 1. Baum / rechte Baumhälfte
        crc2.beginPath();
        crc2.fillStyle = "rgb(61, 82, 61)";
        crc2.moveTo(180, 220);
        crc2.lineTo(180, 250);
        crc2.lineTo(200, 280);

        crc2.moveTo(180, 240);
        crc2.lineTo(180, 270);
        crc2.lineTo(200, 300);

        crc2.moveTo(180, 260);
        crc2.lineTo(180, 290);
        crc2.lineTo(200, 320);

        crc2.moveTo(180, 280);
        crc2.lineTo(180, 310);
        crc2.lineTo(200, 340);

        crc2.moveTo(180, 300);
        crc2.lineTo(180, 330);
        crc2.lineTo(200, 360);

        crc2.moveTo(180, 320);
        crc2.lineTo(180, 350);
        crc2.lineTo(200, 380);
        crc2.fill();
        crc2.closePath();
    // 1. Baum / linke Baumhälfte
        crc2.beginPath();
        crc2.moveTo(180, 220);
        crc2.lineTo(180, 250);
        crc2.lineTo(160, 280);

        crc2.moveTo(180, 240);
        crc2.lineTo(180, 270);
        crc2.lineTo(160, 300);

        crc2.moveTo(180, 260);
        crc2.lineTo(180, 290);
        crc2.lineTo(160, 320);

        crc2.moveTo(180, 280);
        crc2.lineTo(180, 310);
        crc2.lineTo(160, 340);

        crc2.moveTo(180, 300);
        crc2.lineTo(180, 330);
        crc2.lineTo(160, 360);

        crc2.moveTo(180, 320);
        crc2.lineTo(180, 350);
        crc2.lineTo(160, 380);
    
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    
    // 2. Baum
        // Baumstamm
        crc2.beginPath();
        crc2.fillStyle = "rgb(53, 40, 17)";
        crc2.fillRect(85, 480, 30, 100);
        crc2.fill();
        crc2.closePath();

        

        // 2. Baum / rechte Baumhälfte
        crc2.beginPath();
        crc2.fillStyle = "rgb(34, 79, 53)";
        crc2.moveTo(100, 250);
        crc2.lineTo(100, 330);
        crc2.lineTo(180, 370);
     
        crc2.moveTo(100, 300);
        crc2.lineTo(100, 400);
        crc2.lineTo(180, 430);

        crc2.moveTo(100, 350);
        crc2.lineTo(100, 500);
        crc2.lineTo(200, 500);
        crc2.fill();
        crc2.closePath();

    // 2. Baum / linke Baumhälfte
        crc2.beginPath();
        crc2.fillStyle = "rgb(30, 91, 56)";
        crc2.moveTo(100, 250);
        crc2.lineTo(100, 330);
        crc2.lineTo(10, 370);

        crc2.moveTo(100, 300);
        crc2.lineTo(100, 400);
        crc2.lineTo(10, 430);

        crc2.moveTo(100, 350);
        crc2.lineTo(100, 500);
        crc2.lineTo(0, 500);

        crc2.fill();
        crc2.closePath();
        crc2.stroke();

// 3. Baum
        crc2.beginPath();
        crc2.fillStyle = "rgb(53, 40, 17)";
        crc2.fillRect(290, 380, 20, 50);
        crc2.fill();
        crc2.closePath();

        

// 3. Baum / rechte Baumhälfte
        crc2.beginPath();
        crc2.fillStyle = "rgb(49, 67, 49)";
        crc2.moveTo(300, 250);
        crc2.lineTo(300, 330);
        crc2.lineTo(340, 330);

        crc2.moveTo(300, 280);
        crc2.lineTo(300, 360);
        crc2.lineTo(345, 360);

        crc2.moveTo(300, 310);
        crc2.lineTo(300, 390);
        crc2.lineTo(350, 390);

        crc2.fill();
        crc2.closePath();
// 3. Baum / linke Baumhälfte

        crc2.beginPath();
        crc2.fillStyle = "rgb(61, 82, 61)";

        crc2.moveTo(300, 250);
        crc2.lineTo(300, 330);
        crc2.lineTo(255, 330);


        crc2.moveTo(300, 280);
        crc2.lineTo(300, 360);
        crc2.lineTo(255, 360);

        crc2.moveTo(300, 310);
        crc2.lineTo(300, 390);
        crc2.lineTo(255, 390);
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }
 
/*
        function getFlowers(): void {
    crc2.beginPath();
    crc2.translate(300, 400);
    crc2.arc(10, 10, 25, 0, 2 * Math.PI , false);
    crc2.fillStyle = "lightblue";
    crc2.fill();
    crc2.closePath();
    crc2.beginPath();
    crc2.arc(10, 10, 10, 0, 2 * Math.PI , false);
    crc2.fillStyle = "blue";
    crc2.fill();
    crc2.closePath();
 
  
    
    crc2.closePath();
*/

