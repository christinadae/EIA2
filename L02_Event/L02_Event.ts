namespace L02_Event {

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {

        let theBody: HTMLBodyElement = <HTMLBodyElement> document.querySelector("body");
        theBody.addEventListener("click", logInfo);
        theBody.addEventListener("keyup", logInfo);

        let theDiv: NodeListOf<HTMLDivElement> = document.querySelectorAll("div");
        for (let i: number = 0; i < theDiv.length; i++) {
        theDiv[i].addEventListener("click", logInfo);
        theDiv[i].addEventListener("keyup", logInfo);
        }
        
        document.addEventListener("mousemove", setinfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);

    }

    function setinfoBox(_event: MouseEvent): void {
    
        let theSpan: HTMLSpanElement = <HTMLSpanElement> document.querySelector("span");
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        
        let cursorCoordinates: string = "X-Coordinates: " + x + ", Y-Coordinates: " + y;

        let showTarget:  EventTarget = <EventTarget>_event.target;

        theSpan.style.left = x + 40 +  "px";
        theSpan.style.top = y + 40 + "px";

        theSpan.innerHTML = cursorCoordinates +  " The Target: " + showTarget;
        
    }

    function logInfo(_event: Event): void {
    console.log(_event.type);
    console.log(_event.target);
    console.log(_event.currentTarget);
    console.log(_event.composedPath());
     
        
    }

}