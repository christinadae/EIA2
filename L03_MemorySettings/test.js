"use strict";
var test;
(function (test) {
    //let cardPairs: number;
    let theCards = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let pairsFound;
    let selectedCards = [];
    let savedCards = [];
    let memoryField = document.querySelector("memoryBoard");
    let matchedCards = 0;
    window.addEventListener("load", handleLoad);
    let numberStepper = document.getElementById("stepper");
    let sizeSlider = document.getElementById("slider");
    let backgroundColor = document.getElementById("background");
    let cardsColor = document.getElementById("cardsColor");
    let fontColor = document.getElementById("fontColor");
    let startButton = document.getElementById("start");
    function handleLoad() {
        numberStepper.addEventListener("change", handleChange);
        sizeSlider.addEventListener("change", handleChange);
        backgroundColor.addEventListener("change", handleChange);
        cardsColor.addEventListener("change", handleChange);
        fontColor.addEventListener("change", handleChange);
        startButton.addEventListener("click", memoryBoard);
        function handleChange() {
            let formData = new FormData(document.forms[0]);
            for (let entry of formData) {
                console.log(entry);
                console.log(formData.get("stepper"));
                console.log(formData.get("slider"));
                console.log(formData.get("background"));
                console.log(formData.get("cardsColor"));
                console.log(formData.get("fontColor"));
            }
        }
        function memoryBoard() {
            let formData = new FormData(document.forms[0]);
            let formElement = document.querySelector("form");
            formElement.style.visibility = "hidden";
            for (let entry of formData) {
                console.log(entry);
                console.log(formData.get("stepper"));
                const cardPairs = formData.get("stepper");
                console.log(formData.get("slider"));
                const cardsSize = formData.get("slider");
                console.log(formData.get("background"));
                const valueBackgroundColor = formData.get("background");
                valueBackgroundColor.toString();
                console.log(formData.get("cardsColor"));
                const valueCardsColor = formData.get("cardsColor");
                valueCardsColor.toString();
                console.log(formData.get("fontColor"));
                const valueFontColor = formData.get("fontColor");
                valueFontColor.toString();
                console.log(formData.get("font"));
                const valueFont = formData.get("font");
                valueFont.toString();
            }
            /*for (let i: number = 0; i >= 2; i++) {
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
        savedCards[0].style.background =     ;
        
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
        }
        /*for (let i: number = 0; i >= 2; i++) {
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
    savedCards[0].style.background =     ;
    
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
    }
    /*for (let i: number = 0; i >= 2; i++) {
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
savedCards[0].style.background =     ;

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
})(test || (test = {}));
/*for (let i: number = 0; i >= 2; i++) {
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
savedCards[0].style.background =     ;

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
//# sourceMappingURL=test.js.map