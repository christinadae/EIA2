"use strict";
var waslos;
(function (waslos) {
    let theCards = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let selectedCards = [];
    let numberCardPair;
    let memoryField = document.querySelector("#memoryField");
    let savedCards = [];
    let matchedCards = 0;
    let formElement = document.querySelector("#form");
    let startButton;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        startButton = document.querySelector("#start");
        formElement.addEventListener("change", handleChange);
        startButton.addEventListener("click", memoryBoard);
    }
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
    function memoryBoard(_event) {
        formElement.classList.add("hidden");
        startButton.classList.add("hidden");
        let formData = new FormData(document.forms[0]);
        console.log(formData.get("stepper"));
        numberCardPair = Number(formData.get("stepper"));
        console.log(numberCardPair);
        console.log(formData.get("slider"));
        const cardsSize = String(formData.get("slider"));
        console.log(formData.get("background"));
        const valueBackgroundColor = String(formData.get("background"));
        console.log(formData.get("cardsColor"));
        //const valueCardsColor: string = String(formData.get("cardsColor"));
        console.log(formData.get("fontColor"));
        const valueFontColor = String(formData.get("fontColor"));
        console.log(formData.get("font"));
        const valueFont = String(formData.get("font"));
        for (let i = 0; i < 2; i++) {
            for (let x = 0; x < numberCardPair; x++) {
                selectedCards.push(theCards[x]);
            }
        }
        theCards.sort(() => 0.5 - Math.random());
        memoryField.innerHTML = "";
        for (let index = 0; index < selectedCards.length; index++) {
            let card = document.createElement("div");
            document.querySelector("body").style.backgroundColor = valueBackgroundColor;
            //card.style.background = valueCardsColor;
            card.style.background = "white";
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
    function flipCard(_event) {
        let target = _event.target;
        savedCards.push(target);
        let formData = new FormData(document.forms[0]);
        const valueCardsColor = String(formData.get("cardsColor"));
        savedCards[0].style.background = valueCardsColor;
        //savedCards[0].style.background = "white";
        savedCards[0].querySelector("span")?.classList.remove("hidden");
        if (savedCards.length == 2) {
            savedCards[1].style.background = "white";
            savedCards[1].querySelector("span")?.classList.remove("hidden");
            setTimeout(comparingCards, 2000);
        }
    }
    function comparingCards() {
        let firstValue = savedCards[0].querySelector("span")?.innerHTML;
        let secondValue = savedCards[1].querySelector("span")?.innerHTML;
        if (firstValue == secondValue) {
            savedCards[0].classList.add("hidden");
            savedCards[1].classList.add("hidden");
            //savedCards[] = [];
            matchedCards++;
            gameOver();
        }
        else if (firstValue != secondValue) {
            savedCards[0].style.background = "white";
            savedCards[1].style.background = "white";
            savedCards[0].querySelector("span")?.classList.add("hidden");
            savedCards[1].querySelector("span")?.classList.add("hidden");
            //savedCards[] = [];
        }
    }
    function gameOver() {
        if (matchedCards == numberCardPair) {
            window.alert("Congrats!" + "Playing time: ");
        }
    }
})(waslos || (waslos = {}));
//# sourceMappingURL=test.js.map