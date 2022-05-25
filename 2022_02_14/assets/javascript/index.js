//1 uzdavinis
//Reikia su ciklo pagalba atspausdinti skaičius nuo 10 iki 1 t.y. 10 9 .... 2 1 DONE!
function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

let masyvas = []
let ciklas;
for(let i =10; i>0; i--) {
    console.log(i)
}
for(let i=10; i>0; i--) {
    masyvas.push(i)
}
console.log(masyvas)

for(let i=0; i <10; i++) {
    console.log(10-i)
}
const animal = 'Begemotas'
for(let i= 0; i< animal.length; i++) {
    console.log(animal[i], i)
}
let naujasAnimal=[]

for(let i=0; i<100; i++) {
    naujasAnimal += ' ' + animal
}
console.log(naujasAnimal)

let sumak= 0

for(let i=0; i<10;i++) {
    let kauliukas = randomSkaicius(1,6);
    sumak += kauliukas;
    console.log(sumak)
}

// while(sumak< 35) {
//     let kauliukas =randomSkaicius(1,6);
//     sumak += kauliukas
// }
// console.log(sumak)

// let sumos =0;
// for(let i=0; i< 10; i++) {
//     let kauliukas= randomSkaicius(1,6);
//     sumos += kauliukas
//     if(sumos >= 35) {
//         break
//     }
// }
// console.log(`${sumos} `)

let sum2 = 0;
let counter2 =0;

for(let i =0; i<10; i++) {
    counter2++
    let run = randomSkaicius(1,6);
    console.log(run);
    sum2 += run;
    if(sum2 >= 35) {
        break
    }
}
console.log('Suma:', sum2, 'Viso:', counter2)

let sum3 = 0;
let counter3 =0;

for(let i =1; i<=10; i++) {
    let run = randomSkaicius(1,6);
    if(sum3+ run > 20) {
        break;
    }
    counter3++
    console.log(run);
    sum3= sum3+ run;
}
console.log('Suma:', sum3, 'Viso:', counter3);

let skaiciavimas = 0;

for(let i=0; i< 10; i++) {
    let run = randomSkaicius(1,6);
    if(run >4) {
        skaiciavimas++
    }
}
console.log(` Daugiau negu 4 iškrito ${skaiciavimas} kartą(-us)`)

let count3= 0;
let count5 =0;

for(let i=0; i<10; i++) {
    let run = randomSkaicius(1,6);
    if(run ==3) {
        count3++
    }else if (run == 5) {
        count5++
    }
}
console.log(`Skaičiai 3: ${count3}`)
console.log(`Skaičiai 5: ${count5}`)
//2 uzdavinys
console.log('_____NAMŲ UŽDAVINIAI______')
let randomas = randomSkaicius(5, 10) 

console.log(randomas)

//3 uzdavinys
let zodis= 'Labas'

for (let i =0; i<5; i++) {
    console.log(zodis)
}
//4 uzdavinis

for(let i=0; i<7; i++) {
    console.log(randomSkaicius(5,10))
}

//5 uzdavinys
//Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas;

for(let i= 0; i< randomas; i++) {
    console.log(randomas)
}

//6 uzdavinys
randomas = randomSkaicius(5, 10) 
if(randomas > 7) {
    for(let i =0; i<randomas; i++) {
        let randomSK = randomSkaicius(5, 10)
        console.log(`Iškrito skaičius ${randomas}, sugeneravom skaičius ${randomSK} indeksas = ${i}`)
}}else {
        console.log(`Iškrito mažesnis skaičius negu 7 ( ${randomas} )`)
    }
//7 uzdavinys
//a,b,c,d  uždavinys
let kintamasis = ''; //c/d uzdavinys
let kintamasisM =[];
let suma7 = 0; //b uzdavinys
for(let i=0; i<=4; i++) { //a uzdavinys
    let skaicius =randomSkaicius(10, 20);
    console.log(skaicius);
    kintamasis += `${skaicius} `;
    kintamasisM[i] = `${skaicius}`;
    suma7 += skaicius;
if(i == 4) {
    kintamasis += suma7;
}} 
console.log(kintamasis);
console.log(kintamasisM);
console.log(suma7);

//8 uzdavinys
kintamasis = ''
let skaicius1= 25;
let kiekS = 0;
//a uzdavinys
while(skaicius1 >12) {
    let skaicius = randomSkaicius(10, 25);
    kintamasis += `${skaicius} `;
    skaicius1= skaicius
    kiekS++
}
console.log(kintamasis)

//b uzdavinys
console.log(`_____B uždavinys_________`)
console.log(`Skaičius buvo generuotas: ${kiekS}`)

//c uzdavinys
console.log(`_____C uždavinys_________`)
kintamasis = ''
skaicius2= 25;
kiekS2 = 0;
counteris = 0;
let atmesti =0; //d uzdavinys
let kiekS3 = 0;
while(skaicius2 >12) {
    let skaicius = randomSkaicius(10, 25);
    kintamasis += `${skaicius} `;
    skaicius2= skaicius
    if(skaicius <18) {
        kiekS2 += skaicius;
        counteris++
    }else { //d uzdavinys
        atmesti++
        kiekS3+= skaicius
    }
}
console.log(`Suma priskaičiuota ${kiekS2}, tokių atvėjų būvo ${counteris}`);
console.log(kintamasis);

console.log(`_____D uždavinys_________`);
console.log(`atmestų skaičių suma yra ${kiekS3}, o tokių atvėjų buvo ${atmesti}`);

console.log(`_____E uždavinys_________`);
kintamasis = ''
skaicius2= 25;
let lyginiai = 0;
let nelyginiai = 0;
while(skaicius2 >12) {
    let skaicius = randomSkaicius(10, 25);
    kintamasis += `${skaicius} `;
    skaicius2= skaicius
    if(skaicius % 2 == 0) {
        lyginiai++
    }else { 
        nelyginiai++
    }
}

console.log(`lyginių reikšmių tūrėjome ${lyginiai}, o ne lyginių ${nelyginiai}`)
console.log(kintamasis)
//F uzdavinys
console.log(`_____F uždavinys_________`);
let skaicius5= 25
kintamasis = ''
kiekS = 0;
let kartaiR= 0;
while(kiekS < 20) {
    let skaicius = randomSkaicius(10, 25);
    if(skaicius >= 12) {
        kiekS++
        kintamasis += `${skaicius} `
    } else {
        kiekS=0;
        kartaiR++
        kintamasis = ''
    }
    }
console.log(kintamasis)
console.log(`Ciklą teko kartoti ${kartaiR} kartų, kol pavyko sugeneruoti 20 iteracijų`)

//9 uzdavinys
console.log(`_____9/a uždavinys_________`);

kintamasis = ''
let rndm;
let iteracijos= 0;
let iteracija= 0;
while(rndm != 5) {
    let skaicius= randomSkaicius(5,10);
    kintamasis += `${skaicius} `
    rndm = skaicius;
    iteracija++
    for(let i= 0; i < skaicius; i++) {
        iteracija++
        iteracijos++
    }
}
console.log(kintamasis)
//a uzdavinys
console.log(`vidiniam cikle atliko ${iteracijos}, bendrai iteracijų visam cikle buvo ${iteracija}`)

//b uzdavinys
console.log(`_____9/b uždavinys_________`);

kintamasis = ''
iteracijos= 0;
iteracija= 0;
let skaiciusKiekis= 0
while(skaiciusKiekis < 3) {
    let skaicius= randomSkaicius(5,10);
    kintamasis += `${skaicius} `
    iteracija++
    for(let i= 0; i < skaicius; i++) {
        iteracija++
        iteracijos++
    }
    if(skaicius ==5) {
        skaiciusKiekis++
    }
}
console.log(kintamasis)
console.log(`vidiniam cikle atliko ${iteracijos} iteracijų, o bendrai buvo atlikta ${iteracija}`)

//b uzdavinys
console.log(`_____9/c uždavinys_________`);

intamasis = ''
iteracijos= 0;
iteracija= 0;
skaiciusKiekis= 0
while(skaiciusKiekis < 3) {
    let skaicius= randomSkaicius(5,10);
    kintamasis += `${skaicius} `
    iteracija++
    for(let i= 0; i < skaicius; i++) {
        iteracija++
        iteracijos++
    }
    if(skaicius ==5) {
        skaiciusKiekis++;
    } else {
        skaiciusKiekis=0;
    }
}
console.log(kintamasis)
console.log(`vidiniam cikle atliko ${iteracijos} iteracijų, o bendrai buvo atlikta ${iteracija}`)

//10 uzdavinys
let Petras = 0;
let Kazys= 0;

while(Petras < 222 && Kazys < 222) {
    let petraslaimejo= randomSkaicius(10,20);
    let kazyslaimejo= randomSkaicius(5,25)
    Petras += petraslaimejo;
    Kazys += kazyslaimejo;
}
    if(Petras >= 222 && Kazys >= 222){
        console.log(`abu žaidėjai per tapačią partiją surinko daugiau negu 222 taškus`)
    }else if (Petras >= 222) {
        console.log(`Petras pirmasis, kuris surinko daugiau negu 222 taškus. ${Petras}, kol Kazys surinko ${Kazys}`)
    }else if (Kazys >= 222) {
        console.log(`Kazys pirmasis, kuris surinko daugiau negu 222 taškus. ${Kazys}, kol Petras surinko ${Petras}`)
    }