"use strict";
var L03_MemorySettings;
(function (L03_MemorySettings) {
    let theCards = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let selectedCards = [];
    let numberCardPair;
    let memoryField = document.querySelector("#memoryField");
    let savedCards = [];
    let matchedCards = 0;
    let formElement = document.querySelector("#form");
    let startButton;
    let restartButton = document.querySelector("#restart");
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        restartButton.classList.add("visibility");
        startButton = document.querySelector("#start");
        formElement.addEventListener("change", handleChange);
        startButton.addEventListener("click", memoryBoard);
    }
    function reloadGame() {
        window.location.reload();
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
    let cardsSize;
    let valueBackgroundColor;
    let valueCardsColor;
    let valueFontColor;
    let valueFont;
    function memoryBoard(_event) {
        formElement.classList.add("visibility");
        startButton.classList.add("visibility");
        restartButton.classList.remove("visibility");
        restartButton.addEventListener("click", reloadGame);
        let formData = new FormData(document.forms[0]);
        numberCardPair = Number(formData.get("stepper"));
        cardsSize = String(formData.get("slider"));
        valueBackgroundColor = String(formData.get("background"));
        valueCardsColor = String(formData.get("cardsColor"));
        valueFontColor = String(formData.get("fontColor"));
        valueFont = String(formData.get("font"));
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
            card.style.background = valueCardsColor;
            card.style.height = cardsSize + "px";
            card.style.width = cardsSize + "px";
            card.style.color = valueFontColor;
            card.style.fontFamily = valueFont;
            card.innerHTML = "<span>" + selectedCards[index] + "</span>";
            memoryField.appendChild(card);
            card.addEventListener("click", flipCard);
            let spanArray = document.querySelectorAll("span");
            spanArray[index].classList.add("hidden");
            console.log(index);
            console.log(spanArray);
        }
    }
    function flipCard(_event) {
        let target = _event.target;
        savedCards.push(target);
        savedCards[0].style.background = "white";
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
            savedCards = [];
            matchedCards++;
            gameOver();
        }
        else if (firstValue != secondValue) {
            savedCards[0].style.background = valueCardsColor;
            savedCards[1].style.background = valueCardsColor;
            savedCards[0].querySelector("span")?.classList.add("hidden");
            savedCards[1].querySelector("span")?.classList.add("hidden");
            savedCards = [];
        }
    }
    function gameOver() {
        if (matchedCards == numberCardPair) {
            window.alert("Congrats!");
        }
    }
})(L03_MemorySettings || (L03_MemorySettings = {}));
//# sourceMappingURL=L03_MemorySettings.js.map