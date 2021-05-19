namespace Farm {
    let counter: number = 0;
    let paragraphDOM: HTMLElement;

    interface Stocks {
        name: string;
        amount: number;
    }

    let amountStock: Stocks[] = [{
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

    function handleLoad(): void {
        farmDay();
        document.querySelector("#nextDay")?.addEventListener("click", farmDay);
       // document.querySelector("#stockUp")?.addEventListener("click", stockUp);
    }

    class Animal {
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

            animalNameDOM.innerHTML = this.name;
            songDOM.innerHTML = "Old MacDonald had a Farm " + (this.sound + " ").repeat(5) + "<br>" + "And on his Farms he had some " + this.breed + "s," + (this.sound + " ").repeat(5) + "<br>";
            let animalEatsDOM: HTMLElement = <HTMLElement>document.querySelector("#animalEATS");
            animalEatsDOM.innerHTML = this.name + " eats " + _foodStock + " kg. <br>";
        }

        eat(_foodStock: number, _foodPosition: number): void {
            amountStock[_foodPosition].amount -= _foodStock;
            paragraphDOM = <HTMLElement>document.querySelector("#animal" + _foodPosition);
            paragraphDOM.innerHTML = "You have " + amountStock[_foodPosition].amount + " kg " + amountStock[_foodPosition].name + " left";
          
        }

    }

    function farmDay(): void {
        

        let cow: Animal = new Animal("Inge", "Cow", "Mooo");
        cow.eat(50, 0);
        cow.sing(50);

        let chicken: Animal = new Animal("Bärbel", "Chicken", "Gack");
        setTimeout(function (): void {
            chicken.eat(2, 1);
            chicken.sing(2);
        },         5000);

        let pig: Animal = new Animal("Mascha", "Pig", "Oink");
        setTimeout(function (): void {
            pig.eat(40, 2);
            pig.sing(40);
        },         10000);

        let horse: Animal = new Animal("Wendy", "Horse", "Wieheer");
        setTimeout(function (): void {
            horse.eat(40, 3);
            horse.sing(40);
        },         15000);

        let sheep: Animal = new Animal("Shaun", "Sheep", "Määh");
        setTimeout(function (): void {
            sheep.eat(20, 4);
            sheep.sing(20);
        },         20000);

        let countingDays: HTMLElement = <HTMLElement>document.querySelector("#countingDays");
        counter++;
        countingDays.innerHTML = "Day: " + counter;

    }
/*
    function stockUp(): void {
        let defaultStock: number[] = [500, 20, 400, 400, 200];
        for (let index: number = 0; index < defaultStock.length; index ++) {
            amountStock[index].amount = defaultStock[index];
            paragraphDOM = <HTMLElement>document.querySelector("#animal" + index);
            paragraphDOM.innerHTML = "You have " + amountStock[index].amount + " kg " + amountStock[index].name + " left";
        }
       */ 
    }



