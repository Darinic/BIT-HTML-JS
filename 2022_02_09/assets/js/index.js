//1 uzdavinys
//Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
// let masyvas = []
// let dublis = []
// function generateRandomLetter() {
//     const alphabet = "ABCD";
//     return alphabet[Math.floor(Math.random() * alphabet.length)];
// }
// for(let i=0; i < 200; i++) {
//     masyvas[i]= generateRandomLetter();
//     }
//     console.log(masyvas);

// masyvas.forEach((i) => {
//     dublis[i] = (dublis[i] || 0) +1;
// });
// console.log(dublis)
let masyvas = [];
// Pirmas variantas raidei paimti
// let simboliai = 'ABCD' 
// console.log(simboliai.charAt(2))

let simboliai = ['A', 'B', 'C', 'D'];
console.log(simboliai[randomSkaicius(0, simboliai.length -1)])

for(let i= 0;i<200; i++) {


}
//2 uzdavinys
//Išrūšiuokite 1 uždavinio masyvą pagal abecėlę.
masyvas.sort()
console.log(masyvas)
//3 uzdavinys
//Sugeneruokite 3 masyvus pagal 1 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote. 

let masyvas1 = [];
let masyvas2 = [];
let masyvas3 = [];
let masyvasJoin = [];
let unikalus = [];
let unikalusKomb = [];
let dublikatai = [];
for(let i = 0; i < 200; i++) {
    masyvas1[i]= generateRandomLetter();
    masyvas2[i]= generateRandomLetter();
    masyvas3[i]= generateRandomLetter();
    masyvasJoin[i]= masyvas1[i] + masyvas2[i] + masyvas3[i]
}
for(let i = 0; i < 200; i++) {
    if(!unikalus.includes(masyvasJoin[i]) && !dublikatai.includes(masyvasJoin[i])) {
        unikalus.push(masyvasJoin[i])
    }else if (unikalus.includes(masyvasJoin[i])) {
        let index = unikalus.indexOf(masyvasJoin[i])
        unikalus.splice(index, 1);
        dublikatai.push(masyvasJoin[i]);
    }
}
unikalus.sort()
masyvasJoin.sort()
console.log(masyvasJoin)
console.log(unikalus)
// console.log(masyvasJoin)
// masyvasJoin.forEach((i) => {
//     if(unikalus[i] != unikalus[i]) {
//         unikalus++
//     }

//         // unikalusKomb - 2; 
// })

// function filtravimas(x) {
//        if(x != x) {
//            return unikalus++
//        }else {
//            return unikalusKomb--
//        }
//     }
    // console.log(unikalus)
    // console.log(unikalusKomb)
    // let filtrasa = masyvasJoin.filter((skaicius, indeksas, masyvasJoin) =>  {
    // if(masyvasJoin.indexOf(skaicius) != indeksas) {
    //     unikalus++
    // }else {
    //     unikalusKomb = masyvasJoin.indexOf(skaicius)
    // //     // unikalusKomb.push(masyvas.indexOf(skaicius))
    // }})
    // console.log(unikalus)
    // console.log(unikalusKomb)


//4 uzduotis
//Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

let skaicius1 = [];
let skaicius2= [];

while(skaicius1.length < 100) {
    let sk = randomSkaicius(100, 999);
    if(!skaicius1.includes(sk)) {
        skaicius1.push(sk)
}}
while(skaicius2.length < 100) {
    let sk = randomSkaicius(100, 999);
    if(!skaicius2.includes(sk)) {
        skaicius2.push(sk)
}}
console.log(skaicius1.sort());
console.log(skaicius2.sort());

//5 uzduotis
//Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 4 uždavinio masyve, bet nėra antrame 4 uždavinio masyve.
let skaicius3 = []
for(let i =0; i < 100; i++) {
    if(!skaicius2.includes(skaicius1[i])) {
        skaicius3.push(skaicius1[i]);
    }
}
console.log(skaicius3.sort());

//6 uzduotis
//Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 4 uždavinio masyvuose.
let skaicius4 = []
for(let i =0; i < 100; i++) {
    if(skaicius2.includes(skaicius1[i])) {
        skaicius4.push(skaicius1[i]);
    }
}
console.log(skaicius4.sort());