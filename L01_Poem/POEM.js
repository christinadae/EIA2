"use strict";
var randomPoem;
(function (randomPoem) {
    let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let predicates = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    console.log(subjects);
    console.log(predicates);
    console.log(objects);
    for (let index = 6; subjects.length <= index; index--) {
        console.log(subjects[index]);
    }
    /*for (let index: number = 0; index  <=  subjects.length; index++) {
        console.log(subjects[index]);
        }
    for (let index: number = 0; index  <=  predicates.length; index++) {
            console.log(predicates[index]);
        }
    for (let index: number = 0; index  <=  objects.length; index++) {
            console.log(objects[index]);
        }
    */
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=POEM.js.map