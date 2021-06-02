namespace L10_OldMacDonaldsFarmHeritage {


    export class Animal {
        public name: string;
        public breed: string;
        public sound: string;

        constructor(_name: string, _breed: string, _sound: string) {
            this.name = _name;
            this.breed = _breed;
            this.sound = _sound;
        }

        sing(_foodStock: number): void {
            let animalNameDOM: HTMLElement = <HTMLElement>document.querySelector("#animalName");
            let songDOM: HTMLElement = <HTMLElement>document.querySelector("#songText");

            animalNameDOM.innerHTML = this.name + " the " + this.breed;
            songDOM.innerHTML = "Old MacDonald had a Farm " + (this.sound + " ").repeat(3) + "<br>" + "And on his Farms he had some " + this.breed + "s, " + (this.sound + " ").repeat(3) + "<br>";
            let animalEatsDOM: HTMLElement = <HTMLElement>document.querySelector("#animalEATS");
            animalEatsDOM.innerHTML = this.name + " eats " + _foodStock + " kg. <br>";
        }

        eat(_foodStock: number, _foodPosition: number): void {
            amountStock[_foodPosition].amount -= _foodStock;
            paragraphDOM = <HTMLElement>document.querySelector("#animal" + _foodPosition);
            paragraphDOM.innerHTML = "You have " + amountStock[_foodPosition].amount + " kg " + amountStock[_foodPosition].name + " left";

        }

    }

    export class Cow extends Animal {

        public property: string = " produces milk.";

        cowsProperties(): void {
            let showProperties: HTMLElement = <HTMLElement>document.querySelector("#animalsProperties");
            showProperties.innerHTML = this.name + " the " + this.breed + this.property;
        }

    }


    export class Sheep extends Animal {

        public property: string = " produces wool.";

        sheepsProperties(): void {
            let showProperties: HTMLElement = <HTMLElement>document.querySelector("#animalsProperties");
            showProperties.innerHTML = this.name + " the " + this.breed + this.property;
        }

    }


    export class Chicken extends Animal {

        public property: string = " produces eggs.";

        chickensProperties(): void {
            let showProperties: HTMLElement = <HTMLElement>document.querySelector("#animalsProperties");
            showProperties.innerHTML = this.name + " the " + this.breed + this.property;
        }

    }


    export class Horse extends Animal {

        public property: string = " can run fast.";

        horsesProperties(): void {
            let showProperties: HTMLElement = <HTMLElement>document.querySelector("#animalsProperties");
            showProperties.innerHTML = this.name + " the " + this.breed + this.property;
        }

    }


    export class Pig extends Animal {

        public property: string = " loves the dirt.";

        pigsProperties(): void {
            let showProperties: HTMLElement = <HTMLElement>document.querySelector("#animalsProperties");
            showProperties.innerHTML = this.name + " the " + this.breed + this.property;
        }


    }






}