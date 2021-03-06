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
        

        }
/*
Aufgabe: <L09 Old Macdonald's Farm>
Name: <Christina Däschner>
Matrikel: <266417>
Datum: <20.05.2021>
Quellen: <Zusammenarbeit mit: Huu Thien Phan Ngoc, Mona Kabelka, Timur Yildirim, Mariia Kolkutova>
*/
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

    function farmDay(): void {
    
        let cow: Animal = new Animal("Inge", "cow", "Mooo");
        cow.eat(50, 0);
        cow.sing(50);

        let chicken: Animal = new Animal("Bärbel", "chicken", "Gack");
        setTimeout(function (): void {
            chicken.eat(2, 1);
            chicken.sing(2);
        },         5000);

        let pig: Animal = new Animal("Mascha", "pig", "Oink");
        setTimeout(function (): void {
            pig.eat(40, 2);
            pig.sing(40);
        },         10000);

        let horse: Animal = new Animal("Wendy", "horse", "Wieheer");
        setTimeout(function (): void {
            horse.eat(40, 3);
            horse.sing(40);
        },         15000);

        let sheep: Animal = new Animal("Shaun", "sheep", "Määh");
        setTimeout(function (): void {
            sheep.eat(20, 4);
            sheep.sing(20);
        },         20000);

        let countingDays: HTMLElement = <HTMLElement>document.querySelector("#countingDays");
        counter++;
        countingDays.innerHTML = "Day: " + counter;

    }
}


