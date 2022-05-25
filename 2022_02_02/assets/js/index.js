function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function generavimas() {
let skaicius1 = randomSkaicius(0, 2)
let skaicius2 = randomSkaicius(0, 2)
let skaicius3 = randomSkaicius(0, 2)
let skaicius4 = randomSkaicius(0, 2)
let kiekis0 = 0
let kiekis1 = 0
let kiekis2 = 0
skaiciuokle(skaicius1);
skaiciuokle(skaicius2);
skaiciuokle(skaicius3);
skaiciuokle(skaicius4);
function skaiciuokle(x) {
    if (x == 0) {
    kiekis0++;
}
    else if (x == 1) {
    kiekis1++;
}
    else if (x == 2) {
    kiekis2++;
}
}
document.getElementById("skaicius1").innerHTML = skaicius1
document.getElementById("skaicius2").innerHTML = skaicius2;
document.getElementById("skaicius3").innerHTML = skaicius3;
document.getElementById("skaicius4").innerHTML = skaicius4;
document.getElementById("nuliai").innerHTML = kiekis0
document.getElementById("vienetai").innerHTML = kiekis1
document.getElementById("dvejetai").innerHTML = kiekis2
}

//     let skaiciuokle1 = skaiciuokle (skaicius1)
//     let skaiciuokle2 = skaiciuokle (skaicius2)
//     let skaiciuokle3 = skaiciuokle (skaicius3)
//     let skaiciuokle4 = skaiciuokle (skaicius4)

// function skaiciuokle(x) {
//     let x0k = 0
//     let x1k = 0
//     let x2k = 0
//     if (x == 0) {
//     return(x0k++);
// }
//     else if (x == 1) {
//     return (x1k++);
// }
//     else if (x == 2) {
//     return (x2k++);
// }
// }
// function generuoti() {
//     let random1 = randomSkaicius(1, 6)
//     document.getElementById("rskaicius1").innerHTML= random1;
//         if (random1 == 1) {
//         document.getElementById("rezultatas1").innerHTML = `<h1> ${random1}</h1>`
//         }
//         else if (random1 == 2) {
//         document.getElementById("rezultatas1").innerHTML = `<h2> ${random1}</h2>`
//         }
//         else if (random1 == 3) {
//         document.getElementById("rezultatas1").innerHTML = `<h3> ${random1}</h3>`
//         }
//         else if (random1 == 4) {
//         document.getElementById("rezultatas1").innerHTML = `<h4> ${random1}</h4>`
//         }
//         else if (random1 == 5) {
//         document.getElementById("rezultatas1").innerHTML = `<h5> ${random1}</h5>`
//         }
//         else if (random1 == 6) {
//         document.getElementById("rezultatas1").innerHTML = `<h6> ${random1}</h6>`
//         }
//     }
function generuoti() {
    let random11 = randomSkaicius(1, 6)
    document.getElementById("rskaicius1").innerHTML = random11
    document.getElementById("rezultatas1").innerHTML = `<h${random11}>${random11}</h${random11}>`
}
function generate() {
let pirmas = randomSkaicius(0,100);
let antras = randomSkaicius(0,100);
let trecias = randomSkaicius(0,100);

document.getElementById("rNumber1").innerHTML = pirmas
document.getElementById("rNumber2").innerHTML = antras
document.getElementById("rNumber3").innerHTML = trecias

let aritmetinisVidurkis = ((pirmas+antras+trecias)/3).toFixed(2);
document.getElementById("aritmetinisVidurkis").innerHTML = aritmetinisVidurkis

let kiekis = 3
let suma = 0
function tinkamas(x) {
    if (x <10 || x>90)
    kiekis--;
    else
    suma += x
}
tinkamas(pirmas)
tinkamas(antras)
tinkamas(trecias)

if (kiekis == 0) {
    document.getElementById("Vidurkis").innerHTML = "All numbers are 0"
}
else {
    let vidurkis= (suma/kiekis).toFixed(2);
    document.getElementById("Vidurkis").innerHTML = vidurkis
}}
//13 uzduotis. Kaip breakint linija?
// let keyword = document.getElementById("input");
// let copy = document.getElementById('copyPaste');

// window.addEventListener('keyup', () => {
//     copy.textContent = `${keyword.value}`
// })
