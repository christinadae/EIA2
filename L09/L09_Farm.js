"use strict";
var Farm;
(function (Farm) {
    let counter = 0;
    let paragraphDOM;
    let amountStock = [{
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
    class Animal {
        constructor(_name, _breed, _sound) {
            this.name = _name;
            this.breed = _breed;
            this.sound = _sound;
        }
        sing(_foodStock) {
            let animalNameDOM = document.querySelector("#animalName");
            let songDOM = document.querySelector("#songText");
            animalNameDOM.innerHTML = this.name;
            songDOM.innerHTML = "Old MacDonald had a Farm " + (this.sound + " ").repeat(3) + "<br>" + "And on his Farms he had some " + this.breed + "s," + (this.sound + " ").repeat(3) + "<br>";
            let animalEatsDOM = document.querySelector("#animalEATS");
            animalEatsDOM.innerHTML = this.name + " eats " + _foodStock + " kg. <br>";
        }
        eat(_foodStock, _foodPosition) {
            amountStock[_foodPosition].amount -= _foodStock;
            paragraphDOM = document.querySelector("#animal" + _foodPosition);
            paragraphDOM.innerHTML = "You have " + amountStock[_foodPosition].amount + " kg " + amountStock[_foodPosition].name + " left";
        }
    }
    function farmDay() {
        let cow = new Animal("Inge", "Cow", "Mooo");
        cow.eat(50, 0);
        cow.sing(50);
        let chicken = new Animal("Bärbel", "Chicken", "Gack");
        setTimeout(function () {
            chicken.eat(2, 1);
            chicken.sing(2);
        }, 5000);
        let pig = new Animal("Mascha", "Pig", "Oink");
        setTimeout(function () {
            pig.eat(40, 2);
            pig.sing(40);
        }, 10000);
        let horse = new Animal("Wendy", "Horse", "Wieheer");
        setTimeout(function () {
            horse.eat(40, 3);
            horse.sing(40);
        }, 15000);
        let sheep = new Animal("Shaun", "Sheep", "Määh");
        setTimeout(function () {
            sheep.eat(20, 4);
            sheep.sing(20);
        }, 20000);
        let countingDays = document.querySelector("#countingDays");
        counter++;
        countingDays.innerHTML = "Day: " + counter;
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=L09_Farm.js.map