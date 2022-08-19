let origDogs = ["BullDog", "Beagle" , "Labrador"];
let cats = new Array("American Curl", "Bengal");
let birds = new Array("Falcons","Ducks","Flamingoes");
console.log(origDogs)
console.log(cats)
console.log(birds)
let slicedDogs = origDogs.slice(1,3);
console.log("OrigDogs =>",origDogs);
console.log("slicedDogs =>",slicedDogs);
let copyDogs = [...origDogs];
console.log("copy Dogs =>",copyDogs);

let dogs = origDogs.slice(0);
console.log("Dogs =>",dogs);

let pushDog = dogs.push("Golden Retriever");
console.log("push Dogs =>",pushDog);
console.log("push Dogs array =>",dogs);

let popDog = dogs.pop();
console.log("pop Dogs =>",popDog);
console.log("pop Dogs array =>",dogs);
dogs[dogs.length] = "Poodle";
console.log(dogs.length)
console.log("Dogs =>",dogs);
let addFirst = dogs.unshift("Golden Retriever");
console.log(addFirst)
console.log("add first Dogs =>",dogs);
let shiftDog = dogs.shift();
console.log("shiftDog  =>",shiftDog);
console.log("Dogs =>",dogs);
dogs[6] = "Husky";
console.log("Dogs =>",dogs);
dogs.splice(1,2,"Pug","Boxer");
console.log("Dogs =>",dogs);

let animals = dogs.concat(cats,birds);
console.log("animals",animals);
let newAnimal = [...dogs,...cats,...birds].toString();
console.log("new animals => ",newAnimal);
let sortDog = dogs.slice(0).sort();
console.log("Sort Dogs =>",sortDog);