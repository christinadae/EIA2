namespace randomPoem {

let subjects: string[] =  ["Harry " , "Hermine " , "Ron " , "Hagrid " , "Snape " , "Dumbledore "];
let predicates: string[] = ["braut " , "liebt ", "studiert " , "hasst ", "zaubert ", "zerstört "];
let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

//console.log(subjects);
//console.log(predicates);
//console.log(objects);
for (let index: number = 6; index > 0; index --) {
    //console.log(index);
    let a: string = getVerse(subjects, predicates, objects);
    console.log(a);
    }

function getVerse (_subjects: string[], _predicates: string[], _objects: string[]): string {

let vers: string = "";
let randomsubject: number = Math.floor(Math.random() * Math.floor(_subjects.length));
let randompredicates: number = Math.floor(Math.random() * Math.floor(_predicates.length));
let randomobject: number = Math.floor(Math.random() * Math.floor(_objects.length));

vers = _subjects[randomsubject] + _predicates[randompredicates] + _objects[randomobject];

_subjects.splice(randomsubject, 1);
_predicates.splice(randompredicates, 1);
_objects.splice(randomobject, 1);

return vers;
}
}