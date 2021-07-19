"use strict";
var Endabgabe;
(function (Endabgabe) {
    let valuesGlobal = [];
    let playerIndex;
    let subIndex;
    let chosenTeam;
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
        console.log(Endabgabe.subPlayerDOMElement.selectedIndex);
    }
    Endabgabe.exchangePlayer = exchangePlayer;
    function test() {
        if (chosenTeam == "A") {
            Endabgabe.subPlayerDOMElement.innerHTML = "<option value='23'>Team A: Sub.1</option><option value='24'>Team A: Sub.2</option><option value='25'>Team A: Sub.3</option>";
        }
        if (chosenTeam == "B") {
            Endabgabe.subPlayerDOMElement.innerHTML = "<option value='26'>Team B: Sub.1</option><option value='27'>Team B: Sub.2</option><option value='28'>Team B: Sub.3</option>";
        }
    }
    function updateForm(_event) {
        let rect = Endabgabe.canvas.getBoundingClientRect();
        let mouse = new Endabgabe.Vector(_event.clientX - rect.left, _event.clientY - rect.top);
        console.log(mouse);
        for (let index = 0; index < Endabgabe.humans.length; index++) {
            let distance = Endabgabe.Vector.getDistance(mouse, Endabgabe.humans[index].playerPosition);
            if (distance < 10) {
                playerIndex = index;
                formIntoHTML(index);
                break;
            }
        }
    }
    Endabgabe.updateForm = updateForm;
    function switchForm(_event) {
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