"use strict";
var L02_Event;
(function (L02_Event) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
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
    function setinfoBox(_event) {
        let span = document.querySelector("span");
        let x = _event.clientX;
        let y = _event.clientY;
        let cursorCoordinates = "X-Coordinates: " + x + ", Y-Coordinates: " + y;
        let showTarget = _event.target;
        span.style.left = x + 40 + "px";
        span.style.top = y + 40 + "px";
        span.innerHTML = cursorCoordinates + showTarget;
    }
    ;
    function logInfo(_event) {
        console.log(_event);
        console.log(_event.target);
    }
    ;
})(L02_Event || (L02_Event = {}));
//# sourceMappingURL=L02_Event.js.map