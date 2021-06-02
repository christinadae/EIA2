"use strict";
var L10_OldMacDonaldsFarmHeritage;
(function (L10_OldMacDonaldsFarmHeritage) {
    class Animal {
        constructor(_name, _breed, _sound) {
            this.name = _name;
            this.breed = _breed;
            this.sound = _sound;
        }
        sing(_foodStock) {
            let animalNameDOM = document.querySelector("#animalName");
            let songDOM = document.querySelector("#songText");
            animalNameDOM.innerHTML = this.name + " the " + this.breed;
            songDOM.innerHTML = "Old MacDonald had a Farm " + (this.sound + " ").repeat(3) + "<br>" + "And on his Farms he had some " + this.breed + "s, " + (this.sound + " ").repeat(3) + "<br>";
            let animalEatsDOM = document.querySelector("#animalEATS");
            animalEatsDOM.innerHTML = this.name + " eats " + _foodStock + " kg. <br>";
        }
        eat(_foodStock, _foodPosition) {
            L10_OldMacDonaldsFarmHeritage.amountStock[_foodPosition].amount -= _foodStock;
            L10_OldMacDonaldsFarmHeritage.paragraphDOM = document.querySelector("#animal" + _foodPosition);
            L10_OldMacDonaldsFarmHeritage.paragraphDOM.innerHTML = "You have " + L10_OldMacDonaldsFarmHeritage.amountStock[_foodPosition].amount + " kg " + L10_OldMacDonaldsFarmHeritage.amountStock[_foodPosition].name + " left";
        }
    }
    L10_OldMacDonaldsFarmHeritage.Animal = Animal;
    class Cow extends Animal {
        constructor() {
            super(...arguments);
            this.property = " produces milk.";
        }
        cowsProperties() {
            let showProperties = document.querySelector("#animalsProperties");
            showProperties.innerHTML = this.name + " the " + this.breed + this.property;
        }
    }
    L10_OldMacDonaldsFarmHeritage.Cow = Cow;
    class Sheep extends Animal {
        constructor() {
            super(...arguments);
            this.property = " produces wool.";
        }
        sheepsProperties() {
            let showProperties = document.querySelector("#animalsProperties");
            showProperties.innerHTML = this.name + " the " + this.breed + this.property;
        }
    }
    L10_OldMacDonaldsFarmHeritage.Sheep = Sheep;
    class Chicken extends Animal {
        constructor() {
            super(...arguments);
            this.property = " produces eggs.";
        }
        chickensProperties() {
            let showProperties = document.querySelector("#animalsProperties");
            showProperties.innerHTML = this.name + " the " + this.breed + this.property;
        }
    }
    L10_OldMacDonaldsFarmHeritage.Chicken = Chicken;
    class Horse extends Animal {
        constructor() {
            super(...arguments);
            this.property = " can run fast.";
        }
        horsesProperties() {
            let showProperties = document.querySelector("#animalsProperties");
            showProperties.innerHTML = this.name + " the " + this.breed + this.property;
        }
    }
    L10_OldMacDonaldsFarmHeritage.Horse = Horse;
    class Pig extends Animal {
        constructor() {
            super(...arguments);
            this.property = " loves the dirt.";
        }
        pigsProperties() {
            let showProperties = document.querySelector("#animalsProperties");
            showProperties.innerHTML = this.name + " the " + this.breed + this.property;
        }
    }
    L10_OldMacDonaldsFarmHeritage.Pig = Pig;
})(L10_OldMacDonaldsFarmHeritage || (L10_OldMacDonaldsFarmHeritage = {}));
//# sourceMappingURL=L10.animal.js.map