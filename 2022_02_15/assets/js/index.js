
let siunta = 'M';

console.log('Siunčiam S')
if(siunta == 'S') {
console.log('Telpa S')   
}
if(siunta == 'S' || siunta == 'M') {
console.log('Telpa M')
}
if(siunta == 'S' || siunta == 'M' || siunta == 'L') {
console.log('Telpa L')
}
if(siunta == 'S' || siunta == 'M' || siunta == 'L' || siunta == 'XL') {
console.log('Telpa XL')
}
switch(siunta) {
    case 'S' : console.log('Telpa S');
    case 'M' : console.log('Telpa M');
    case 'L' : console.log('Telpa L')
    default: console.log('Telpa XL')
}

let light = 'green'
// if(light == 'green') {
//     console.log('Go')
// } else if (light == yellow) {
//     console.log('Wait')
// }else {
//     console.log('Stop')
// }

switch(light) {
    case 'green':
        console.log('Go');
        break;
    case 'yellow': 
        console.log('Wait');
        break;
    default : console.log('Stop')
}
function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


let kauliukas = randomSkaicius(1,6)
let skaiciuokle = 0;
switch(kauliukas) {
    case 1:
    case 5:
        console.log(`iškrito ${kauliukas}, perkam ledų`)
        break;
    case 2:
    case 4:
        console.log(`iškrito ${kauliukas}, perkam čipsų`)
        break;   
    default:
        console.log(`iškrito ${kauliukas}, perkam pieno`)   
    } 
kauliukas= randomSkaicius(1,6)
while(kauliukas!=5) {
    kauliukas =randomSkaicius(1,6)
    skaiciuokle++
}
console.log(`${kauliukas} ,reikėjo mesti ${skaiciuokle} kartus`)

let kaulas;
skaiciuokle= 0;
let saugiklis=0;
do {
    if(saugiklis++> 100) break
    kaulas = randomSkaicius(1,6);
    skaiciuokle++
    console.log(kaulas)

}while(kaulas != 5)

console.log(`iškrito 5, kai mete jau ${skaiciuokle} kartą`);

kaulas;
skaiciuokle=0;
saugiklis=0;

do {
    if(saugiklis++ >100) break;
    kaulas = randomSkaicius(1,6);
    skaiciuokle++;
    console.log(kaulas);
}while(kaulas != 5 && kaulas != 1)

console.log(`iškrito ${kaulas}, reikėjo mesti ${skaiciuokle}`)

kaulas;
let suma= 0;
skaiciuokle= 0;
do {
    kaulas= randomSkaicius(1,6);
    suma += kaulas
    skaiciuokle++;
    console.log(kaulas)
}while(suma<= 33)

console.log(`mestas kauliukas buvo ${skaiciuokle}, surinkome sumą ${suma}`);

let isgerta =0;
let dienos = 0;

do{
    isgerta+= randomSkaicius(70, 200)
    dienos++
    console.log(isgerta)
}while(isgerta < 1000)

console.log(`reikėjo ${dienos} dienų, kad karvių bandai išgerti visą vandenį`)

//testas 
//1 uzdavinys

for(let i=100; i<=200; i+=10) {
    console.log(i)
}
let generavimas = ''
let skaiciuojam = 0
//2 uzdavinys
for(let i=0; i<10; i++) {
    let skaicius = randomSkaicius(5, 15);
    generavimas += skaicius + ' ';
    if(skaicius >= 10) {
        skaiciuojam++
    }
}

console.log(generavimas);
console.log(`dviženklių skaičių buvo ${skaiciuojam}`)

//3 uzdavinys
generavimas = ''
skaiciuojam = 0;
let suma11= 0;
let vidurkis;
for(let i =1; i<=10; i++) {
    let skaicius = randomSkaicius(5, 15);
    generavimas += skaicius + ' ';
    suma11 += skaicius;
    if(i == 10) {
        vidurkis = suma11 / i
    }
}
console.log(generavimas)
console.log(`Vidurkis būtų ${vidurkis.toFixed(2)}`)

//4 uzdavinys

generavimas = ''
skaiciuojam = 0;
let skaicius;
do {
    skaicius = randomSkaicius(10, 50);
    generavimas += skaicius + ' '
    skaiciuojam++
    }while(skaicius != 13 && skaicius != 33)

console.log(generavimas)
console.log(`kol iškrito skaičius 13 arba 33 ciklui teko atspausdinti ${skaiciuojam} iteracijų`)

//5 uzdavinys

generavimas = ''
skaiciuojam =0;
skaicius;

while(skaiciuojam<3) {
    skaicius = randomSkaicius(10, 20);
    generavimas += skaicius +' ';
    if(skaicius == 17) {
        skaiciuojam++
    }
}

console.log(generavimas)
console.log(`kol prasisuko 3 kartus skaičius 17, teko atlikti ${skaiciuojam} iteracijų`)