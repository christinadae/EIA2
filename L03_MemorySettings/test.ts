namespace waslos {


    //let cardPairs: number;
    let theCards: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let selectedCards: string[] = [];
    let numberCardPair: number;
    let memoryField: HTMLElement = <HTMLElement>document.querySelector("#memoryField");

    let pairsFound: number;
    let savedCards: HTMLElement[] = [];

    let matchedCards: number = 0;

    let formElement: HTMLElement = <HTMLElement>document.querySelector("#form");
    let startButton: HTMLElement;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        startButton = <HTMLElement>document.querySelector("#start");

        formElement.addEventListener("change", handleChange);
        startButton.addEventListener("click", memoryBoard);
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

        formElement.classList.add("hidden");
        startButton.classList.add("hidden");


        let formData: FormData = new FormData(document.forms[0]);

        console.log(formData.get("stepper"));
        numberCardPair = Number(formData.get("stepper"));
        console.log(numberCardPair);

        console.log(formData.get("slider"));
        const cardsSize: string = String(formData.get("slider"));

        console.log(formData.get("background"));
        const valueBackgroundColor: string = String(formData.get("background"));

        console.log(formData.get("cardsColor"));
        const valueCardsColor: string = String(formData.get("cardsColor"));

        console.log(formData.get("fontColor"));
        const valueFontColor: string = String(formData.get("fontColor"));

        console.log(formData.get("font"));
        const valueFont: string = String(formData.get("font"));


        for (let i: number = 0; i < 2; i++) {
            for (let x: number = 0; x < numberCardPair; x++) {
                selectedCards.push(theCards[x]);
            }
        }
     
        theCards.sort(() => 0.5 - Math.random());

        
        memoryField.innerHTML = "";
        for (let index: number = 0; index < selectedCards.length; index++) {

            let card: HTMLElement = <HTMLElement>document.createElement("div");
            document.querySelector("body")!.style.backgroundColor = valueBackgroundColor;
            card.style.background = valueCardsColor;
            card.style.height = cardsSize + "px";
            card.style.width = cardsSize + "px";
            card.style.color = valueFontColor;
            card.style.fontFamily = valueFont;
   
            card.innerHTML = "<span>" + selectedCards[index] + "</span>";

            memoryField.appendChild(card);
            card.addEventListener("click", flipCard);
            //starttimer();

        }

    }
/*
    function createCards(): void {
   
       card.innerHTML = theCards[_cardPairs];
       
       let flippedCard: HTMLDivElement = <HTMLDivElement> document.createElement("div");
       flippedCard.style.backgroundColor = _valueCardsColor;
   
       document.querySelector("body")!.appendChild(card);
       //card.appendChild(cardsContent);
       //card.appendChild(cardsContent);
   

    }
*/
    
    function flipCard(_event: MouseEvent): void {
    
    savedCards.push(_event.target);
    savedCards[0].style.background = black;
    
    
    if (savedCards.length != 2 ) {
        
    } else {
    //    savedCards[1].style.background =
    //    setTimeout(3000, comparingCards);
    }
    }
    * /;

    function comparingCards(): void {
    
        let firstValue: string = savedCards[0].querySelector("div").innerHTML;
        let secondValue: string = savedCards[1].querySelector("div").innerHTML;
    
        if (firstValue == secondValue) {
       savedCards[0].classList.add("hidden");
       savedCards[1].classList.add("hidden");
       savedCards[] = [];
       matchedCards++;
       //gameOver();
    
    } else {
    savedCards[0].style.background = 
    savedCards[1].style.background = 
    savedCards[] = [];
    }
    }
    * /;
}