"use strict";
var randomPoem;
(function (randomPoem) {
    let subjects = ["Harry ", "Hermine ", "Ron ", "Hagrid ", "Snape ", "Dumbledore "];
    let predicates = ["braut ", "liebt ", "studiert ", "hasst ", "zaubert ", "zerstört "];
    let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log(subjects);
    //console.log(predicates);
    //console.log(objects);
    for (let index = 6; index > 0; index--) {
        //console.log(index);
        let a = getVerse(subjects, predicates, objects);
        console.log(a);
    }
    function getVerse(_subjects, _predicates, _objects) {
        let vers = "";
        let randomsubject = Math.floor(Math.random() * Math.floor(_subjects.length));
        let randompredicates = Math.floor(Math.random() * Math.floor(_predicates.length));
        let randomobject = Math.floor(Math.random() * Math.floor(_objects.length));
        vers = _subjects[randomsubject] + _predicates[randompredicates] + _objects[randomobject];
        _subjects.splice(randomsubject, 1);
        _predicates.splice(randompredicates, 1);
        _objects.splice(randomobject, 1);
        return vers;
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=POEM.js.map