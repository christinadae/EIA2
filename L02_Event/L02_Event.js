"use strict";
var L02_Event;
(function (L02_Event) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let theBody = document.querySelector("body");
        theBody.addEventListener("click", logInfo);
        theBody.addEventListener("keyup", logInfo);
        let theDiv = document.querySelectorAll("div");
        for (let i = 0; i < theDiv.length; i++) {
            theDiv[i].addEventListener("click", logInfo);
            theDiv[i].addEventListener("keyup", logInfo);
        }
        document.addEventListener("mousemove", setinfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }
    function setinfoBox(_event) {
        let theSpan = document.querySelector("span");
        let x = _event.clientX;
        let y = _event.clientY;
        let cursorCoordinates = "X-Coordinates: " + x + ", Y-Coordinates: " + y;
        let showTarget = _event.target;
        theSpan.style.left = x + 40 + "px";
        theSpan.style.top = y + 40 + "px";
        theSpan.innerHTML = cursorCoordinates + " The Target: " + showTarget;
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event.composedPath());
    }
})(L02_Event || (L02_Event = {}));
//# sourceMappingURL=L02_Event.js.map