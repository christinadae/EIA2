"use strict";
var L10_OldMacDonaldsFarmHeritage;
(function (L10_OldMacDonaldsFarmHeritage) {
    /*
Aufgabe: <L09 Old Macdonald's Farm>
Name: <Christina Däschner>
Matrikel: <266417>
Datum: <20.05.2021>
Quellen: <Zusammenarbeit mit: Huu Thien Phan Ngoc, Mona Kabelka, Timur Yildirim, Mariia Kolkutova>
*/
    let counter = 0;
    L10_OldMacDonaldsFarmHeritage.amountStock = [{
            name: "Hay",
            amount: 500
        },
        {
            name: "Seed",
            amount: 20
        },
        {
            name: "Corn",
            amount: 400
        },
        {
            name: "Oat",
            amount: 400
        },
        {
            name: "Grass",
            amount: 200
        }
    ];
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        farmDay();
        document.querySelector("#nextDay")?.addEventListener("click", farmDay);
    }
    function farmDay() {
        let cow = new L10_OldMacDonaldsFarmHeritage.Cow("Inge", "cow", "Mooo");
        cow.eat(50, 0);
        cow.sing(50);
        cow.cowsProperties();
        let chicken = new L10_OldMacDonaldsFarmHeritage.Chicken("Bärbel", "chicken", "Gack");
        setTimeout(function () {
            chicken.eat(2, 1);
            chicken.sing(2);
            chicken.chickensProperties();
        }, 5000);
        let pig = new L10_OldMacDonaldsFarmHeritage.Pig("Mascha", "pig", "Oink");
        setTimeout(function () {
            pig.eat(40, 2);
            pig.sing(40);
            pig.pigsProperties();
        }, 10000);
        let horse = new L10_OldMacDonaldsFarmHeritage.Horse("Wendy", "horse", "Wieheer");
        setTimeout(function () {
            horse.eat(40, 3);
            horse.sing(40);
            horse.horsesProperties();
        }, 15000);
        let sheep = new L10_OldMacDonaldsFarmHeritage.Sheep("Shaun", "sheep", "Määh");
        setTimeout(function () {
            sheep.eat(20, 4);
            sheep.sing(20);
            sheep.sheepsProperties();
        }, 20000);
        let countingDays = document.querySelector("#countingDays");
        counter++;
        countingDays.innerHTML = "Day: " + counter;
    }
})(L10_OldMacDonaldsFarmHeritage || (L10_OldMacDonaldsFarmHeritage = {}));
//# sourceMappingURL=L10.main.js.map