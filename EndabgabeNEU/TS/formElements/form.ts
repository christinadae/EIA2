namespace Endabgabe {

    let valuesGlobal: string[] = [];
    let playerIndex: number;
    let subIndex: number;
    let chosenTeam: string;
    export function handleChange(): void {

        let formData: FormData = new FormData(document.forms[0]);
        valuesGlobal = [];

        for (let entry of formData) {
            console.log(entry[1]);
            valuesGlobal.push(String(entry[1]));
        }

        for (let index: number = 0; index < 28; index++) {
            let chosenPlayer: Player = <Player> humans[index];
            chosenPlayer.setProperties(Number(valuesGlobal[0]), Number(valuesGlobal[1]), Number(valuesGlobal[2]), Number(valuesGlobal[3]));
            if (index < 11) {
                humans[index].setJersey(valuesGlobal[4]);
                humans[index].draw();
            }
            else {
                humans[index].setJersey(valuesGlobal[5]);
                humans[index].draw();
            }
        }
    }

    export function subChange(): void {
       subIndex = Number(subPlayerDOMElement.value);
       let chosenSub: Player = <Player>humans[subIndex];
       speedSub.innerHTML = (chosenSub.playerSpeed).toFixed(2);
       precSub.innerHTML = (chosenSub.playerPrecision).toFixed(2);
       numberSub.innerHTML = String(chosenSub.jerseyNumberPlayer);
       teamSub.innerHTML = String(chosenSub.playerTeam);
    }

    export function exchangePlayer(): void {
        console.log(subPlayerDOMElement.selectedIndex);

    }

    function test(): void {
        if (chosenTeam == "A") {
            subPlayerDOMElement.innerHTML = "<option value='23'>Team A: Sub.1</option><option value='24'>Team A: Sub.2</option><option value='25'>Team A: Sub.3</option>";
        }
        if (chosenTeam == "B") {
            subPlayerDOMElement.innerHTML = "<option value='26'>Team B: Sub.1</option><option value='27'>Team B: Sub.2</option><option value='28'>Team B: Sub.3</option>";
        }
    }

    export function updateForm(_event: MouseEvent): void {
        let rect: DOMRect = canvas.getBoundingClientRect();
        let mouse: Vector = new Vector(_event.clientX - rect.left, _event.clientY - rect.top);
        console.log(mouse);
        for (let index: number = 0; index < humans.length; index++) {
            let distance: number = Vector.getDistance(mouse, humans[index].playerPosition);
            if (distance < 10) {
                playerIndex = index;
                formIntoHTML(index);
                break;
            }
        }
    }

    export function switchForm(_event: KeyboardEvent): void {
        switch (_event.code) {
            case "ArrowLeft":
                playerIndex--;
                if (playerIndex < 0) {
                    playerIndex = 22;
                }
                formIntoHTML(playerIndex);
                break;
            case "ArrowRight":
                if (playerIndex > 22) {
                    playerIndex = 0;
                }
                playerIndex++;
                formIntoHTML(playerIndex);
        }
    }

    export function formIntoHTML(_index: number): void {
        let chosenPlayer: Player = <Player>humans[_index];
        speedPlayer.innerHTML = (chosenPlayer.playerSpeed).toFixed(2);
        precPlayer.innerHTML = (chosenPlayer.playerPrecision).toFixed(2);
        numberPlayer.innerHTML = String(chosenPlayer.jerseyNumberPlayer);
        teamPlayer.innerHTML = String(chosenPlayer.playerTeam);
        chosenTeam = chosenPlayer.playerTeam;
        test();
    }
}
