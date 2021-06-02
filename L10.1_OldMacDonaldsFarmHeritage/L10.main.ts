namespace L10_OldMacDonaldsFarmHeritage {
    /*
Aufgabe: <L09 Old Macdonald's Farm>
Name: <Christina Däschner>
Matrikel: <266417>
Datum: <20.05.2021>
Quellen: <Zusammenarbeit mit: Huu Thien Phan Ngoc, Mona Kabelka, Timur Yildirim, Mariia Kolkutova>
*/

    let counter: number = 0;
    export let paragraphDOM: HTMLElement;

    export interface Stocks {
        name: string;
        amount: number;
    }

    export let amountStock: Stocks[] = [{
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

  
    function farmDay(): void {
    
        let cow: Cow = new Cow ("Inge", "cow", "Mooo");
        cow.eat(50, 0);
        cow.sing(50);
        cow.cowsProperties();

        let chicken: Chicken = new Chicken("Bärbel", "chicken", "Gack");
        setTimeout(function (): void {
            chicken.eat(2, 1);
            chicken.sing(2);
            chicken.chickensProperties();
        },         5000);

        let pig: Pig = new Pig("Mascha", "pig", "Oink");
        setTimeout(function (): void {
            pig.eat(40, 2);
            pig.sing(40);
            pig.pigsProperties();
        },         10000);

        let horse: Horse = new Horse("Wendy", "horse", "Wieheer");
        setTimeout(function (): void {
            horse.eat(40, 3);
            horse.sing(40);
            horse.horsesProperties();
        },         15000);

        let sheep: Sheep = new Sheep("Shaun", "sheep", "Määh");
        setTimeout(function (): void {
            sheep.eat(20, 4);
            sheep.sing(20);
            sheep.sheepsProperties();
        },         20000);

        let countingDays: HTMLElement = <HTMLElement>document.querySelector("#countingDays");
        counter++;
        countingDays.innerHTML = "Day: " + counter;

    }
}