namespace randomPoem {

let subjects: string[] =  ["Harry" , "Hermine" , "Ron" , "Hagrid" , "Snape" , "Dumbledore"];

let predicates: string[] = ["braut" , "liebt", "studiert" , "hasst", "zaubert", "zerstört"];

let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

console.log(subjects);
console.log(predicates);
console.log(objects);

for (let index: number = 6; subjects.length  <= index; index --) {
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
}