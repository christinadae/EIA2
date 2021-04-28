namespace test {

    
    //let cardPairs: number;
    let theCards: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let pairsFound: number;
    let selectedCards: string[] = [];
    let savedCards: HTMLElement [] = [];
    let memoryField: HTMLElement = <HTMLElement> document.querySelector("memoryBoard");
    let matchedCards: number = 0;

    let startButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("start")!;
    startButton.addEventListener("click", memoryBoard);

    window.addEventListener("load", handleLoad);
    
    let numberStepper: HTMLElement = <HTMLElement> document.getElementById("stepper")!;
    let sizeSlider: HTMLElement = <HTMLElement> document.getElementById("slider")!;
    let backgroundColor: HTMLElement = <HTMLElement> document.getElementById("background")!;
    let cardsColor: HTMLElement = <HTMLElement> document.getElementById("cardsColor")!;
    let fontColor: HTMLElement = <HTMLElement> document.getElementById("fontColor")!;
    



    function handleLoad(_event: Event): void {
        numberStepper.addEventListener("change", handleChange);
        sizeSlider.addEventListener("change", handleChange);
        backgroundColor.addEventListener("change", handleChange);
        cardsColor.addEventListener("change", handleChange);
        fontColor.addEventListener("change", handleChange);
        

    }

    function handleChange(): void {
            
            let formData: FormData = new FormData(document.forms[0]);

            for (let entry of formData) {
                console.log(entry);
                console.log(formData.get("stepper"));
                console.log(formData.get("slider"));
                console.log(formData.get("background"));
                console.log(formData.get("cardsColor"));
                console.log(formData.get("fontColor"));
        }
        


}

    function memoryBoard(_event: MouseEvent): void {

            let formElement: HTMLElement = <HTMLElement> document.getElementById("form");
            formElement.style.visibility = "hidden";

            let formData: FormData = new FormData(document.forms[0]);
            
            for (let entry of formData) {

        console.log(entry);
        console.log(formData.get("stepper"));
        const cardPairs:  FormDataEntryValue = formData.get("stepper")!;

        console.log(formData.get("slider"));
        const cardsSize: FormDataEntryValue = formData.get("slider")!;

        console.log(formData.get("background"));
        const valueBackgroundColor: FormDataEntryValue = formData.get("background")!;
        valueBackgroundColor.toString();

        console.log(formData.get("cardsColor"));
        const valueCardsColor: FormDataEntryValue = formData.get("cardsColor")!;
        valueCardsColor.toString();

        console.log(formData.get("fontColor"));
        const valueFontColor: FormDataEntryValue = formData.get("fontColor")!;
        valueFontColor.toString();

        console.log(formData.get("font"));
        const valueFont: FormDataEntryValue = formData.get("font")!;
        valueFont.toString();

    }
}

    function createCards(memorycard: string, _valueSize: string, _valueBackgroundcolor: string, _valueCardsColor: string, _valueFontcolor: string, _valueFont: string): void {
    document.querySelector("body")!.style.backgroundColor = _valueBackgroundcolor;

    let card: HTMLDivElement = <HTMLDivElement> document.createElement("div");
    card.style.height = _valueSize;
    card.style.width = _valueSize;

    let cardsContent: HTMLElement = <HTMLElement> document.createElement("label");
    cardsContent.innerHTML = theCards;
    cardsContent.style.color = _valueFontcolor;
    cardsContent.style.fontFamily = _valueFont;

    let flippedCard: HTMLDivElement = <HTMLDivElement> document.createElement("div");
    flippedCard.style.backgroundColor = _valueCardsColor;

    document.querySelector("body")!.appendChild(card);
    card.appendChild(cardsContent);
    card.appendChild(cardsContent);

    card.addEventListener("click", flipCard);
    }
    
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

/*function flipCard(_event: MouseEvent): void {

savedCards.push(_event.target);
savedCards[0].style.background =      ; 

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
*/

