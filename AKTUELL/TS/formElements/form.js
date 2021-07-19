"use strict";
var EndabgabePROBE;
(function (EndabgabePROBE) {
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
            let chosenPlayer = EndabgabePROBE.humans[index];
            chosenPlayer.setProperties(Number(valuesGlobal[0]), Number(valuesGlobal[1]), Number(valuesGlobal[2]), Number(valuesGlobal[3]));
            if (index < 22) {
                if (index < 11) {
                    EndabgabePROBE.humans[index].setJersey(valuesGlobal[4]);
                    EndabgabePROBE.humans[index].draw();
                }
                else {
                    EndabgabePROBE.humans[index].setJersey(valuesGlobal[5]);
                    EndabgabePROBE.humans[index].draw();
                }
            }
            else {
                if (index < 25) {
                    EndabgabePROBE.humans[index].setJersey(valuesGlobal[4]);
                    EndabgabePROBE.humans[index].draw();
                }
                else {
                    EndabgabePROBE.humans[index].setJersey(valuesGlobal[5]);
                    EndabgabePROBE.humans[index].draw();
                }
            }
        }
    }
    EndabgabePROBE.handleChange = handleChange;
    function exchangePlayer() {
        if (chosenTeam == "A") {
            subA[EndabgabePROBE.subPlayerDOMElement.selectedIndex] = String(playerIndex);
        }
        else {
            subB[EndabgabePROBE.subPlayerDOMElement.selectedIndex] = String(playerIndex);
        }
        let chosenPlayer = EndabgabePROBE.humans[playerIndex];
        let chosenSub = EndabgabePROBE.humans[subIndex];
        let originPlayer = chosenPlayer.playerOrigin.copy();
        let originSub = chosenSub.playerOrigin.copy();
        chosenPlayer.setOrigin(originSub);
        chosenPlayer.changePlayer(chosenSub.playerPosition.copy());
        chosenSub.setOnField(true);
        chosenSub.setOrigin(originPlayer);
        chosenSub.changePlayer(chosenPlayer.playerPosition.copy());
        updateSelect();
    }
    EndabgabePROBE.exchangePlayer = exchangePlayer;
    function updateSelect() {
        if (chosenTeam == "A") {
            EndabgabePROBE.subPlayerDOMElement.innerHTML = "<option value=" + subA[0] + ">Team A: Sub.1</option><option value=" + subA[1] + ">Team A: Sub.2</option><option value=" + subA[2] + ">Team A: Sub.3</option>";
        }
        if (chosenTeam == "B") {
            EndabgabePROBE.subPlayerDOMElement.innerHTML = "<option value=" + subB[0] + ">Team B: Sub.1</option><option value=" + subB[1] + ">Team B: Sub.2</option><option value=" + subA[2] + ">Team B: Sub.3</option>";
        }
    }
    function posessionUpdate(_index) {
        let chosenPlayer = EndabgabePROBE.humans[_index];
        EndabgabePROBE.posession.innerHTML = "Posession Player:" + chosenPlayer.jerseyNumberPlayer + " Team:" + chosenPlayer.playerTeam;
    }
    EndabgabePROBE.posessionUpdate = posessionUpdate;
    function switchForm(_event) {
        switch (_event.code) {
            case "ArrowLeft":
                playerIndex--;
                if (playerIndex < 0) {
                    playerIndex = 27;
                }
                formIntoHTML(playerIndex);
                break;
            case "ArrowRight":
                playerIndex++;
                if (playerIndex > 27) {
                    playerIndex = 0;
                }
                formIntoHTML(playerIndex);
        }
    }
    EndabgabePROBE.switchForm = switchForm;
    function formIntoHTML(_index) {
        let chosenPlayer = EndabgabePROBE.humans[_index];
        EndabgabePROBE.speedPlayer.innerHTML = (chosenPlayer.playerSpeed).toFixed(2);
        EndabgabePROBE.precPlayer.innerHTML = (chosenPlayer.playerPrecision).toFixed(2);
        EndabgabePROBE.numberPlayer.innerHTML = String(chosenPlayer.jerseyNumberPlayer);
        EndabgabePROBE.teamPlayer.innerHTML = String(chosenPlayer.playerTeam);
        chosenTeam = chosenPlayer.playerTeam;
        updateSelect();
    }
    EndabgabePROBE.formIntoHTML = formIntoHTML;
    function subChange() {
        subIndex = Number(EndabgabePROBE.subPlayerDOMElement.value);
        let chosenSub = EndabgabePROBE.humans[subIndex];
        EndabgabePROBE.speedSub.innerHTML = (chosenSub.playerSpeed).toFixed(2);
        EndabgabePROBE.precSub.innerHTML = (chosenSub.playerPrecision).toFixed(2);
        EndabgabePROBE.numberSub.innerHTML = String(chosenSub.jerseyNumberPlayer);
        EndabgabePROBE.teamSub.innerHTML = String(chosenSub.playerTeam);
    }
    EndabgabePROBE.subChange = subChange;
})(EndabgabePROBE || (EndabgabePROBE = {}));
//# sourceMappingURL=form.js.map