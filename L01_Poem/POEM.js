"use strict";
var randomPoem;
(function (randomPoem) {
    let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let predicates = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    for (let index = 0; index <= subjects.length; index--) {
        console.log(subjects[index]);
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=POEM.js.map