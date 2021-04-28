"use strict";
var test;
(function (test) {
    let cardPairs;
    let theCards = ["A-Y"];
    let pairsFound;
    let selectedCards = [];
    let savedCards = [];
    let memoryField = document.querySelector("memoryBoard");
    let matchedCards = 0;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let inputCardNumber = document.getElementById("pairNumber");
        memoryBoard();
    }
    function memoryBoard() {
        for (let i = 0; i >= 2; i++) {
            for (let x = 0; x < cardPairs; x++) {
                selectedCards.push(theCards[x]);
            }
            theCards.sort(() => 0.5 - Math.random());
        }
        memoryField.innerHTML = "";
        for (let index = 0; index <= selectedCards.length; index++) {
            let card = document.createElement("div");
            card.style.background =
                card.innerHTML = "<span>selectedCards[index]</span>";
            memoryField.appendChild(card);
            card.addEventListener("click", flipCard);
        }
        //starttimer();
    }
    function flipCard(_event) {
        savedCards.push(_event.target);
        savedCards[0].style.background = ;
        if (savedCards.length != 2) {
        }
        else {
            savedCards[1].style.background =
                setTimeout(3000, comparingCards);
        }
    }
})(test || (test = {}));
//function pairNumber(): void {
//let numberOfPairs: number = document.getElementById("pairNumber").step;
function comparingCards() {
    let firstValue = savedCards[0].querySelector("div").innerHTML;
    let secondValue = savedCards[1].querySelector("div").innerHTML;
    if (firstValue == secondValue) {
        savedCards[0].classList.add("hidden");
        savedCards[1].classList.add("hidden");
        savedCards[] = [];
        matchedCards++;
        gameOver();
    }
    else {
        savedCards[0].style.background =
            savedCards[1].style.background =
                savedCards[] = [];
    }
}
//# sourceMappingURL=test.js.map