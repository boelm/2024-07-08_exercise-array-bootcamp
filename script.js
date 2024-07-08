//Array innehållandes flera objekt
let persons = [
  {
    name: "Felicia",
    age: 12,
  },
  {
    name: "Pelle",
    age: 20,
  },
  {
    name: "Peter",
    age: 59,
  },
  {
    name: "Anna",
    age: 32,
  },
  {
    name: "Jocke",
    age: 18,
  },
  {
    name: "Ella",
    age: 3,
  },
];

/* 1 */
/* Gör en array som innehåller 5 st olika frukter av datatypen string. */
console.log("%cUppgift 1", "font-weight:bold;color:green");
let almostFruits = ["äppel", "päppel", "pirum", "parum", "kråkan"];
console.log(almostFruits);

/* 2 */
/* Gör en array som innehåller 3 olika datatyper, ex. string, number, array. */
console.log("%cUppgift 2", "font-weight:bold;color:green");
let differentTypes = ["en lista", 4, almostFruits];
console.log(differentTypes);

/* 3 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* console.log() hur många objekt arrayen ovan innehåller. */
console.log("%cUppgift 3", "font-weight:bold;color:green");
let animals = ["cat", "hamster", "parrot", "funky chihuahua"];
//hur många objekt arrayen ovan innehåller.
console.log(`Arrayen ${animals} innehåller: ${animals.length} objekt`);

/* 4 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, hämta cat. */
console.log("%cUppgift 4", "font-weight:bold;color:green");
let cat = animals.shift();
console.log(cat);
console.log(`Arrayen ${animals} innehåller: ${animals.length} objekt`);

/* 5 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, hämta funky chihuahua. */
console.log("%cUppgift 5", "font-weight:bold;color:green");
animals = ["cat", "hamster", "parrot", "funky chihuahua"];
let popped = animals.pop();
console.log(popped);

/* 6 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, byt ut hamster mot tiger. */
console.log("%cUppgift 6", "font-weight:bold;color:green");
animals = ["cat", "hamster", "parrot", "funky chihuahua"];
animals[animals.indexOf("hamster")] = "tiger";
console.log(animals);

/* 7 */
let a = [1, 2, 3];
let b = [4, 5, 6];
/* Sätt ihop ovanstående arrayer. */
console.log("%cUppgift 7", "font-weight:bold;color:green");
let concatenated = a.concat(b);
console.log(concatenated);

/* 8 */
a = [1, 2, 3, 7, 8, 9];
b = [4, 5, 6];
/* Merga in array b på index 3 i array a.. */
console.log("%cUppgift 8", "font-weight:bold;color:green");
console.log(a);
console.log(b);
a.splice(3, 0, b); // Inserts at index 3
a = [1, 2, 3, 7, 8, 9];
b = [4, 5, 6];
a.splice(3, 0, b[0], b[1], b[2]); // // Inserts at index 3
console.log(a);

a = [1, 2, 3, 7, 8, 9];
b = [4, 5, 6];
a.splice(3, 0, ...b); //using spread operator ...
console.log(a);
//TODO: ...b
// a.splice(3,0,b);
// a.flat();

/* 9 */
let arr = ["a", "b", "c"];
/* Klona ovanstående array. */
console.log("%cUppgift 9", "font-weight:bold;color:green");
//Ett sätt
let arrCopy = arr.map((x) => x); // https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
arr.pop();
console.log(arr);
console.log(arrCopy);
//Ett annat sätt
arr = ["a", "b", "c"];
arrCopy = arr2 = [...arr]; //spreadar
arr.pop();
console.log(arr);
console.log(arrCopy);

/* 10 */
fruits = ["kiwi", "apple", "pear"];
/* Lägg till en frukt i slutet av arrayen ovan. */
console.log("%cUppgift 10", "font-weight:bold;color:green");
fruits.push("banana");
console.log(fruits);

/* 11 */
fruits = ["kiwi", "apple", "pear"];
/* Lägg till en frukt i början av arrayen ovan. */
console.log("%cUppgift 11", "font-weight:bold;color:green");
fruits.unshift("banana");
console.log(fruits);

/* 12 */
fruits = ["kiwi", "apple", "pear"];
/* I arrayen ovan, ta bort sista frukten i arrayen. */
console.log("%cUppgift 12", "font-weight:bold;color:green");
fruits.pop();
console.log(fruits);

/* 13 */
fruits = ["kiwi", "apple", "pear"];
/* I arrayen ovan, ta bort första frukten i arrayen. */
console.log("%cUppgift 13", "font-weight:bold;color:green");
fruits.shift();
console.log(fruits);

/* 14 */
fruits = ["kiwi", "apple", "pear"];
/* Sätt in en frukt i arrayen ovan på index 1. */
console.log("%cUppgift 14", "font-weight:bold;color:green");
fruits.splice(1, 0, "a fruit");
console.log(fruits);

/* 15 */
fruits = ["kiwi", "apple", "pear"];
/* Sätt in, tre frukter i arrayen ovan på index 2. */
console.log("%cUppgift 15", "font-weight:bold;color:green");
fruits.splice(2, 0, "a fruit", "frukt2", "frukt3");
console.log(fruits);

/* 16 */
let names = ["David", "Christoffer", "Johan", "Maja"];
/* I arrayen ovan, ta bort Christoffer och Johan. */
console.log("%cUppgift 16", "font-weight:bold;color:green");
// let index = names.indexOf('Christoffer');
// names.splice(index,1);
names.splice(names.indexOf("Christoffer"), 1);
names.splice(names.indexOf("Johan"), 1);
console.log(names);

/* 17 */
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/* Spegelvänd på arrayen ovan. */
console.log("%cUppgift 17", "font-weight:bold;color:green");
nums.reverse();
console.log(nums);

/* 18 */
let str = "Supercalifragilisticexpialidocious";
/* Kika om strängen ovan innehåller bokstaven n. */
console.log("%cUppgift 18", "font-weight:bold;color:green");

if (str.indexOf("n") > 0) {
  console.log(`Innehåller n på plats ${str.indexOf("n")}`);
} else {
  console.log(`Innehåller inte n.`);
}

/* 19 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* Kika om strängen ovan innehåller bokstaven x. */
console.log("%cUppgift 19", "font-weight:bold;color:green");
let bokstav = "x";
let bokstavPlats = str.indexOf(bokstav);
if (bokstavPlats > 0) {
  console.log(`Innehåller ${bokstav} på plats ${bokstavPlats}`);
} else {
  console.log(`Innehåller inte ${bokstav}.`);
}

/* 20 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I ovanstående sträng, hitta vilket position första förekomsten av p har. */
console.log("%cUppgift 20", "font-weight:bold;color:green");
bokstav = "p";
bokstavPlats = str.indexOf(bokstav);
if (bokstavPlats > 0) {
  console.log(`Innehåller ${bokstav} på plats ${bokstavPlats}`);
} else {
  console.log(`Innehåller inte ${bokstav}.`);
}

/* 21 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I strängen ovan, plocka fram de 5 första tecknena. */
console.log("%cUppgift 21", "font-weight:bold;color:green");
let femForsta = str.slice(0, 5);
console.log(femForsta);
console.log(str);

/* 22 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I strängen ovan, plocka fram de 7 sista tecknena. */
console.log("%cUppgift 22", "font-weight:bold;color:green");
let sjuSista = str.slice(-7);
console.log(sjuSista);
console.log(str);

/* 23 */
let numArray = [23, 45, 5, 62, 1, 21, 3, 54];
/* I arrayen ovan, filtera fram alla nummer över 5. Tips: Läs dokumentationen för filter() */
console.log("%cUppgift 23", "font-weight:bold;color:green");
let over5 = numArray.filter((nummer) => nummer > 5);
console.log(over5);
console.log(numArray);

/* 24 */
/* let numArray = [23, 45, 5, 62, 1, 21, 3, 54]; */
/* I arrayen ovan, filtera fram alla nummer under 5. Tips: Läs dokumentationen för filter() */
console.log("%cUppgift 24", "font-weight:bold;color:green");
let under5 = numArray.filter((nummer) => nummer < 5);
console.log(under5);

/* 25 */
/* Skriv ut alla namn som är 18 år eller över från arrayen längst upp i dokumentet. */
console.log("%cUppgift 25", "font-weight:bold;color:green");
let over18 = persons.filter((person) => person.age >= 18);
console.log(over18);
for (let p = 0; p < over18.length; p++) {
  console.log(over18[p].name);
}

/* 26 */
/* Skriv ut alla namn som är under 18 år från arrayen längst upp i dokumentet. */
console.log("%cUppgift 26", "font-weight:bold;color:green");
let under18 = persons.filter((person) => person.age < 18);
console.log(under18);
for (let p = 0; p < under18.length; p++) {
  console.log(under18[p].name);
}

/* 27 */
arr = ["beta", "alfa", "gamma"];
/* Sortera ovanstående array alfabetisk. Tips: Läs dokumentattionen för sort() */
console.log("%cUppgift 27", "font-weight:bold;color:green");
console.log(arr.sort());

/* 28 */
nums = [1, 5, 7, 9, 3, 4, 2, 6, 8];
/* Sortera ovanstående array numeriskt. */
console.log("%cUppgift 28", "font-weight:bold;color:green");
console.log(nums.sort());

/* 29 */
/* I person-arrayen längst upp i dokumentet, sortera objekten efter ålder, yngst först. */
console.log("%cUppgift 29", "font-weight:bold;color:green");
//testar att sortera array med number först. Det är lättare
nums = [1, 5, 7, 9, 3, 4, 2, 6, 8];
console.log(nums.sort(compareNum));
function compareNum(a, b) {
  return b - a;
}
personsCopy = persons;
personsCopy.sort(comparePersonsByAge);
for (let p = 0; p < personsCopy.length; p++) {
  console.log(`${personsCopy[p].name}, ${personsCopy[p].age} `);
}

function comparePersonsByAge(a, b) {
  return a.age - b.age;
}

/* 30 */
/* I person-arrayen längst upp i dokumentet, sortera objekten efter ålder, äldst först. */
console.log("%cUppgift 30", "font-weight:bold;color:green");
personsCopy = persons;
personsCopy.sort(comparePersonsByAgeDecending);
for (let p = 0; p < personsCopy.length; p++) {
  console.log(`${personsCopy[p].name}, ${personsCopy[p].age} `);
}

function comparePersonsByAgeDecending(a, b) {
  return b.age - a.age;
}

/* 31 */
/* I person-arrayen längst upp i dokumentet, sortera objekten i bokstavsordning efter deras namn */
console.log("%cUppgift 31", "font-weight:bold;color:red");
personsCopy = persons;

personsCopy.sort(comparePersonsByName);
//personsCopy.sort((a, b) => comparePersonsByName(a,b));

for (let p = 0; p < personsCopy.length; p++) {
  console.log(`${personsCopy[p].name}, ${personsCopy[p].age}`);
}

function comparePersonsByName(a, b) {
  return b.name - a.name;
  //return a.name.localecompare(b,"sv");
}
// console.log(persons);
// console.log(personsCopy);
//personsCopy.sort((a,b) => a.name.localecompare(b.name));

/* 32 */
/* I person-arrayen längst upp i dokumentet, gör om alla namn till versaler. */
console.log("%cUppgift 32", "font-weight:bold;color:green");
personsCopy = persons;
//personsCopy.sort(comparePersonsByName);
for (let p = 0; p < personsCopy.length; p++) {
  personsCopy[p].name = String(personsCopy[p].name).toUpperCase();
}
for (let p = 0; p < personsCopy.length; p++) {
  console.log(`${personsCopy[p].name}`);
}

/* 33 */
/* I person-arrayen längst upp i dokumentet, spegelvänd alla namn. */
console.log("%cUppgift 33", "font-weight:bold;color:green");
personsCopy = persons;
//personsCopy.sort(comparePersonsByName);
for (let p = 0; p < personsCopy.length; p++) {
    let personName = String(personsCopy[p].name);
    //using split, reverse, join since reverse() only works on arrays.
    let personArray = personName.split('');
    personArray.reverse();
    personName = personArray.join('');
    //console.log(personName);
    personsCopy[p].name = personName;
}
for (let p = 0; p < personsCopy.length; p++) {
  console.log(`${personsCopy[p].name}`);
}

//This should also work:
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// reverseString("hello");

/* 34 */
fruits = ['apelsin', 'päron', 'äpple', 'kiwi'];
/* Loopa ut följande array med en forEach()-loop. console.log() varje ord. */
console.log("%cUppgift 34", "font-weight:bold;color:blue");
fruits.forEach((element) => console.log(element));

/* 35 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en for of-loop. console.log() varje ord. */
console.log("%cUppgift 35", "font-weight:bold;color:blue");
for (afruit of fruits){
    console.log(afruit);
}
    

/* 36 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en for-loop. console.log() varje ord. */
console.log("%cUppgift 36", "font-weight:bold;color:blue");
//alt 1
for(let i;i<fruits.length;i++){
    console.log(fruits[i]);
}
//alt 2
for (f in fruits){
    console.log(f);
}
for (f in fruits){
    console.log(fruits[f]);
}
/* 37 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array. För varje varv i loopen ska du också skriva ut index. ex: */
/* 0 - apelsin */
/* 1 - päron */
/* 2 - äpple */
/* osv... */
console.log("%cUppgift 37", "font-weight:bold;color:blue");
//alt 2
for (f in fruits){
    console.log(`${f} - ${fruits[f]}`);
}
