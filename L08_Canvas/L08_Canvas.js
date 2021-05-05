"use strict";
var L08_Canvas;
(function (L08_Canvas) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        let colors = ["thistle", "sandybrown", "lightsalmon", "teal", "indianred"];
        for (let index = 0; index < 150; index++) {
            let x = Math.floor(Math.random() * Math.floor(canvas.width));
            let y = Math.floor(Math.random() * Math.floor(canvas.height));
            let x2 = Math.floor(Math.random() * Math.floor(canvas.width));
            let y2 = Math.floor(Math.random() * Math.floor(canvas.height));
            let x3 = Math.floor(Math.random() * Math.floor(canvas.width));
            let y3 = Math.floor(Math.random() * Math.floor(canvas.height));
            let pickColor = Math.floor(Math.random() * Math.floor(5));
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
            crc2.arc(x, y, 200, 0, 2 * Math.PI, false);
            crc2.fillStyle = colors[pickColor];
            crc2.strokeStyle = colors[pickColor];
            crc2.fill();
            crc2.stroke();
            crc2.beginPath();
            crc2.strokeStyle = colors[pickColor];
            crc2.moveTo(x, y);
            crc2.lineTo(x2, y2);
            crc2.lineTo(x3, y3);
            crc2.closePath();
            crc2.stroke();
        }
    }
})(L08_Canvas || (L08_Canvas = {}));
//# sourceMappingURL=L08_Canvas.js.map