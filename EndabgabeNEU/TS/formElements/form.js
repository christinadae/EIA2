"use strict";
var Endabgabe;
(function (Endabgabe) {
    let valuesGlobal = [];
    let playerIndex = 0;
    let subIndex;
    let chosenTeam;
    let subA = ["23", "24", "25"];
    let subB = ["26", "27", "28"];
    function handleChange() {
        let formData = new FormData(document.forms[0]);
        valuesGlobal = [];
        for (let entry of formData) {
            console.log(entry[1]);
            valuesGlobal.push(String(entry[1]));
        }
        for (let index = 0; index < 28; index++) {
            let chosenPlayer = Endabgabe.humans[index];
            chosenPlayer.setProperties(Number(valuesGlobal[0]), Number(valuesGlobal[1]), Number(valuesGlobal[2]), Number(valuesGlobal[3]));
            if (index < 22) {
                if (index < 11) {
                    Endabgabe.humans[index].setJersey(valuesGlobal[4]);
                    Endabgabe.humans[index].draw();
                }
                else {
                    Endabgabe.humans[index].setJersey(valuesGlobal[5]);
                    Endabgabe.humans[index].draw();
                }
            }
        }
    }
    Endabgabe.handleChange = handleChange;
    function subChange() {
        subIndex = Number(Endabgabe.subPlayerDOMElement.value);
        let chosenSub = Endabgabe.humans[subIndex];
        Endabgabe.speedSub.innerHTML = (chosenSub.playerSpeed).toFixed(2);
        Endabgabe.precSub.innerHTML = (chosenSub.playerPrecision).toFixed(2);
        Endabgabe.numberSub.innerHTML = String(chosenSub.jerseyNumberPlayer);
        Endabgabe.teamSub.innerHTML = String(chosenSub.playerTeam);
    }
    Endabgabe.subChange = subChange;
    function exchangePlayer() {
        if (chosenTeam == "A") {
            subA[Endabgabe.subPlayerDOMElement.selectedIndex] = String(playerIndex);
        }
        else {
            subB[Endabgabe.subPlayerDOMElement.selectedIndex] = String(playerIndex);
        }
        let chosenPlayer = Endabgabe.humans[playerIndex];
        let chosenSub = Endabgabe.humans[subIndex];
        let originPlayer = chosenPlayer.playerOrigin.copy();
        let originSub = chosenSub.playerOrigin.copy();
        chosenPlayer.setOrigin(originSub);
        chosenPlayer.changePlayer(chosenSub.playerPosition.copy());
        chosenSub.setOnField(true);
        chosenSub.setOrigin(originPlayer);
        chosenSub.changePlayer(chosenPlayer.playerPosition.copy());
        test();
    }
    Endabgabe.exchangePlayer = exchangePlayer;
    function test() {
        if (chosenTeam == "A") {
            Endabgabe.subPlayerDOMElement.innerHTML = "<option value=" + subA[0] + ">Team A: Sub.1</option><option value=" + subA[1] + ">Team A: Sub.2</option><option value=" + subA[2] + ">Team A: Sub.3</option>";
        }
        if (chosenTeam == "B") {
            Endabgabe.subPlayerDOMElement.innerHTML = "<option value=" + subB[0] + ">Team B: Sub.1</option><option value=" + subB[1] + ">Team B: Sub.2</option><option value=" + subA[2] + ">Team B: Sub.3</option>";
        }
    }
    function posessionUpdate(_index) {
        let chosenPlayer = Endabgabe.humans[_index];
        Endabgabe.posession.innerHTML = "Possesion Player:" + chosenPlayer.jerseyNumberPlayer + " Team:" + chosenPlayer.playerTeam;
    }
    Endabgabe.posessionUpdate = posessionUpdate;
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
    function switchForm(_event) {
        let chosenPlayer;
        let chosenPlayer2;
        switch (_event.code) {
            case "ArrowLeft":
                let playerOldIndex1 = playerIndex;
                playerIndex--;
                if (playerIndex < 0) {
                    playerIndex = 28;
                }
                chosenPlayer = Endabgabe.humans[playerIndex];
                chosenPlayer.setSelected(true);
                chosenPlayer.draw();
                chosenPlayer2 = Endabgabe.humans[playerOldIndex1];
                chosenPlayer2.setSelected(false);
                chosenPlayer2.draw();
                formIntoHTML(playerIndex);
                break;
            case "ArrowRight":
                let playerOldIndex2 = playerIndex;
                playerIndex++;
                if (playerIndex > 28) {
                    playerIndex = 0;
                }
                chosenPlayer = Endabgabe.humans[playerIndex];
                chosenPlayer.setSelected(true);
                chosenPlayer.draw();
                chosenPlayer2 = Endabgabe.humans[playerOldIndex2];
                chosenPlayer2.setSelected(false);
                chosenPlayer2.draw();
                formIntoHTML(playerIndex);
        }
    }
    Endabgabe.switchForm = switchForm;
    function formIntoHTML(_index) {
        let chosenPlayer = Endabgabe.humans[_index];
        Endabgabe.speedPlayer.innerHTML = (chosenPlayer.playerSpeed).toFixed(2);
        Endabgabe.precPlayer.innerHTML = (chosenPlayer.playerPrecision).toFixed(2);
        Endabgabe.numberPlayer.innerHTML = String(chosenPlayer.jerseyNumberPlayer);
        Endabgabe.teamPlayer.innerHTML = String(chosenPlayer.playerTeam);
        chosenTeam = chosenPlayer.playerTeam;
        test();
    }
    Endabgabe.formIntoHTML = formIntoHTML;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=form.js.map