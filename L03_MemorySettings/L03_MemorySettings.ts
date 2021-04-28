namespace L03_MemorySettings {


    
  
  //let formData: FormData = new FormData(document.forms[0]);
  //for (let entry of formData) {
//console.log(entry);

  //let cardPair: HTMLFormElement = <HTMLFormElement> document.getElementById("pairNumber");

  //function pairNumber(): void {

    //let numberOfPairs = document.getElementById("pairNumber").step;
    //document.getElementById("demo").innerHTML = x;
  }


let inputBackground: HTMLElement = <HTMLElement> document.getElementById("background");

//let  backgroundColor = inputBackground.value;
let inputFontColor: HTMLElement = <HTMLElement> document.getElementById("fontColor");
let inputCardsColor: HTMLElement = <HTMLElement> document.getElementById("cardsColor");


//let inputFont = document.getElementById("fontFamily");
//let fontMonospace = inputMonospace.value;

//inputFont.addEventListener("input", function(): void {
//document.documentElement.style.setProperty("fontFamily", fontFamily.value);
//});


//let  backgroundColor = inputBackground.value;
//let  fontColor = inputFontColor.value;
//let  cardsColor = inputCardsColor.value;

inputBackground.addEventListener("input", function(): void {
document.documentElement.style.setProperty("background", background.value);

});

inputFontColor.addEventListener("input", function(): void {
document.documentElement.style.setProperty("color", fontColor.value);
    
});


let formElement: HTMLElement = <HTMLElement> document.getElementById("myForm");
function startGame(): void {
formElement.style.visibility = "hidden";
}
    
startButton.addEventListener("click", function (): void {
startGame();
}); 

}