"use strict";
let inputBackground = document.getElementById("background");
//let  backgroundColor = inputBackground.value;
let inputFontColor = document.getElementById("fontColor");
let inputCardsColor = document.getElementById("cardsColor");
//let inputFont = document.getElementById("fontFamily");
//let fontMonospace = inputMonospace.value;
//inputFont.addEventListener("input", function(): void {
//document.documentElement.style.setProperty("fontFamily", fontFamily.value);
//});
//let  backgroundColor = inputBackground.value;
//let  fontColor = inputFontColor.value;
//let  cardsColor = inputCardsColor.value;
inputBackground.addEventListener("input", function () {
    document.documentElement.style.setProperty("background", background.value);
});
inputFontColor.addEventListener("input", function () {
    document.documentElement.style.setProperty("color", fontColor.value);
});
let startButton = document.getElementById("start");
let formElement = document.getElementById("myForm");
function startGame() {
    formElement.style.visibility = "hidden";
}
startButton.addEventListener("click", function () {
    startGame();
});
//# sourceMappingURL=L03_MemorySettings.js.map