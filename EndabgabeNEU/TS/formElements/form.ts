namespace Endabgabe {

    let valuesGlobal: string[] = [];
    let playerIndex: number = 0;
    let subIndex: number;
    let chosenTeam: string;
    let subA: string[] = ["23", "24", "25"];
    let subB: string[] = ["26", "27", "28"];

    export function handleChange(): void {
        let formData: FormData = new FormData(document.forms[0]);
        valuesGlobal = [];

        for (let entry of formData) {
            console.log(entry[1]);
            valuesGlobal.push(String(entry[1]));
        }

        for (let index: number = 0; index < 28; index++) {
            let chosenPlayer: Player = <Player>humans[index];
            chosenPlayer.setProperties(Number(valuesGlobal[0]), Number(valuesGlobal[1]), Number(valuesGlobal[2]), Number(valuesGlobal[3]));
            if (index < 22) {
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
        if (chosenTeam == "A") {
            subA[subPlayerDOMElement.selectedIndex] = String(playerIndex);
        }
        else {
            subB[subPlayerDOMElement.selectedIndex] = String(playerIndex);
        }
        let chosenPlayer: Player = <Player>humans[playerIndex];
        let chosenSub: Player = <Player>humans[subIndex];

        let originPlayer: Vector = chosenPlayer.playerOrigin.copy();
        let originSub: Vector = chosenSub.playerOrigin.copy();

        chosenPlayer.setOrigin(originSub);
        chosenPlayer.changePlayer(chosenSub.playerPosition.copy());
        chosenSub.setOnField(true);
        chosenSub.setOrigin(originPlayer);
        chosenSub.changePlayer(chosenPlayer.playerPosition.copy());
        test();
    }

    function test(): void {
        if (chosenTeam == "A") {
            subPlayerDOMElement.innerHTML = "<option value=" + subA[0] + ">Team A: Sub.1</option><option value=" + subA[1] + ">Team A: Sub.2</option><option value=" + subA[2] + ">Team A: Sub.3</option>";
        }
        if (chosenTeam == "B") {
            subPlayerDOMElement.innerHTML = "<option value=" + subB[0] + ">Team B: Sub.1</option><option value=" + subB[1] + ">Team B: Sub.2</option><option value=" + subA[2] + ">Team B: Sub.3</option>";
        }
    }

    export function posessionUpdate(_index: number): void {
        let chosenPlayer: Player = <Player>humans[_index];
        posession.innerHTML = "Possesion Player:" + chosenPlayer.jerseyNumberPlayer + " Team:" + chosenPlayer.playerTeam;
    }
    // export function updateForm(_event: MouseEvent): void {
    //     let rect: DOMRect = canvas.getBoundingClientRect();
    //     let mouse: Vector = new Vector(_event.clientX - rect.left, _event.clientY - rect.top);
    //     console.log(mouse);
    //     for (let index: number = 0; index < players.length; index++) {
    //         let distance: number = Vector.getdistance(mouse, players[index].playerPosition);
    //         if (distance < 10) {
    //             playerIndex = index;
    //             formIntoHTML(index);
    //             break;
    //         }
    //     }
    // }

    export function switchForm(_event: KeyboardEvent): void {
        let chosenPlayer: Player;
        let chosenPlayer2: Player;
        switch (_event.code) {
            case "ArrowLeft":
                let playerOldIndex1: number = playerIndex;
                playerIndex--;
                if (playerIndex < 0) {
                    playerIndex = 28;
                }
    
                chosenPlayer = <Player>humans[playerIndex];
                chosenPlayer.setSelected(true);
                chosenPlayer.draw();

                chosenPlayer2 = <Player>humans[playerOldIndex1];
                chosenPlayer2.setSelected(false);
                chosenPlayer2.draw();
                formIntoHTML(playerIndex);
                break;
            case "ArrowRight":
                let playerOldIndex2: number = playerIndex;
                playerIndex++;
                if (playerIndex > 28) {
                    playerIndex = 0;
                }
                chosenPlayer = <Player>humans[playerIndex];
                chosenPlayer.setSelected(true);
                chosenPlayer.draw();

                chosenPlayer2 = <Player>humans[playerOldIndex2];
                chosenPlayer2.setSelected(false);
                chosenPlayer2.draw();
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
