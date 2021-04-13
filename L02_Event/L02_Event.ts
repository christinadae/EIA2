namespace L02_Event {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {

        document.addEventListener("mousemove", setinfoBox);

        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        document.querySelector("#div0").addEventListener("click", logInfo);
        document.querySelector("#div0").addEventListener("keyup", logInfo);
        document.querySelector("#div1").addEventListener("click", logInfo);
        document.querySelector("#div1").addEventListener("keyup", logInfo);

    }

    function setinfoBox(_event: MouseEvent): void {

        let span: HTMLSpanElement =  document.querySelector("span");

        let x: number = _event.clientX;
        let y: number = _event.clientY;
        
        let cursorCoordinates: string = "X-Coordinates: " + x + ", Y-Coordinates: " + y;

        let showTarget = _event.target;

        span.style.left = x + 40 +  "px";
        span.style.top = y + 40 + "px";

        span.innerHTML = cursorCoordinates + showTarget;
        
    };

    function logInfo(_event: Event): void {
    console.log(_event.type);
    console.log(_event.target);
    console.log(_event.currentTarget);
    console.log(_event.composedPath());
     
        
    })
    };

}