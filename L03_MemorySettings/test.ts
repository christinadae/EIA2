namespace test {

    let cardPairs: number;
    let theCards: string[] = ["A-Y"];
    let pairsFound: number;
    let selectedCards: string[] = [];
    let savedCards: HTMLElement [] = [];
    let memoryField: HTMLElement = <HTMLElement> document.querySelector("memoryBoard");
    let matchedCards: number = 0;

    window.addEventListener("load", handleLoad);
    let formData: FormData = new FormData(document.forms[0]);

    function handleLoad(): void {

//let inputCardNumber: HTMLFormElement = <HTMLFormElement> document.getElementById("pairNumber");
//let cardPairs = inputCardNumber;

//let startButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("start");
//startButton.addEventListener("click", function (): void {
    memoryBoard();
});
    function memoryBoard(): void {
        //formElement.style.visibility = "hidden";
        for (let i: number = 0; i >= 2; i++) {
for (let x: number = 0; x < cardPairs; x++) {
    selectedCards.push(theCards[x]);
}
theCards.sort(() => 0.5 - Math.random());
}

        memoryField.innerHTML = "";
        for (let index: number = 0; index <= selectedCards.length; index++) {
    let card: HTMLElement = <HTMLElement> document.createElement("div");
    card.style.background = 
    card.innerHTML = "<span>selectedCards[index]</span>";
    memoryField.appendChild(card);
    card.addEventListener("click", flipCard);
    
}
//starttimer();
}

    function flipCard(_event: MouseEvent): void {

savedCards.push(_event.target);
savedCards[0].style.background =    ; 

if (savedCards.length != 2 ) {
    
} else {
    savedCards[1].style.background =
    setTimeout(3000, comparingCards);
}
}

}

//function pairNumber(): void {

//let numberOfPairs: number = document.getElementById("pairNumber").step;

function comparingCards(): void {

    let firstValue: string = savedCards[0].querySelector("div").innerHTML;
    let secondValue: string = savedCards[1].querySelector("div").innerHTML;

    if (firstValue == secondValue) {
   savedCards[0].classList.add("hidden");
   savedCards[1].classList.add("hidden");
   savedCards[] = [];
   matchedCards++;
   gameOver();

} else {
savedCards[0].style.background = 
savedCards[1].style.background = 
savedCards[] = [];
}
}
q;