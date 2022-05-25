function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  let masyvas = [];

for(let i =0; i<10; i++) {
    // masyvas.push(randomSkaicius(0,7))
    masyvas[i] = randomSkaicius(0,7)
}

console.log(masyvas)

//shift --- nugriauna rusį
//pop - nugriauna stogą
//unshift-prideda į pradžią skaitmenį,
//push- prideda į galą skaitmenį
//splice nurodom kokį elementa ir kiek removint splice(3, 1)

//Atspausdinti masyvo reikšmes stulpeliu, bet tik tas kurios didesnės už 3 DONE!

// masyvas = [];
// for(let i=0; i<10; i++) {
//     let skaicius= randomSkaicius(0,7);
//     if(skaicius>3) {
//         masyvas.push(skaicius)
//     }
// }
// console.table(masyvas)

// for(let i=0; i<masyvas.length; i++) {
//     if(masyvas[i] >3) {
//         console.log(masyvas[i])
//     }
// }

let suma =0;
let minvalue = masyvas[0];

for(let i=0; i < masyvas.length; i++) {
    suma+= masyvas[i];
    if(masyvas[i] < minvalue) {
        minvalue = masyvas[i]
    }
}

console.log(`Suma reikšmių bus ${suma}`);
console.log(minvalue)
console.log(`mažiausias elementas yra ${Math.min(...masyvas)}`)

let lyginis = 0;
let nelyginis =0;

for(let i=0; i< masyvas.length; i++) {
    if(masyvas[i] % 2 == 0) {
        lyginis ++
    }else {
        nelyginis++
    }
}

console.log(`Turime lyginių skaičių ${lyginis}, o ne lyginių ${nelyginis}`)

let one = ['Nausėda', 'Antanas', 'Petras'];
let two = ['Linas', 'Birutė', 'Bebras'];
let three = ['Tomas', 'Sima', 'Saulius'];


let bigHouse = [];

bigHouse.push(one);
bigHouse.push(two);
bigHouse.push(three)

// for(let i=0; i< bigHouse.length; i++) {
//     if(i==0) {
//     for(let i =0; i< one.length; i++) {
//         console.log(` Pirmas aukštas, butas ${i+1} , gyvena ${one[i]}`)
//     }}
//     if(i==1) {
//     for(let i=0; i<two.length; i++) {
//         console.log(`Antras aukštas, butas ${i+1}, gyvena ${two[i]}`)
//     }}
//     if(i==2) {
//     for(let i=0; i<three.length; i++) {
//         console.log(`Trečias aukštas, butas ${i+1}, gyvena ${three[i]}`)
//     }}
// }

for(let i=0; i<bigHouse.length; i++) {
    // console.log(bigHouse[i]) // butu masyvas
    for(let k = 0; k< bigHouse[i].length; k++ )
    console.log(bigHouse[i][k])
}

for(let i=0; i<bigHouse.length; i++) {
    for(let k =0; k<bigHouse[i].length;k++)
    if(bigHouse[i][k] == 'Tomas') {
    console.log(`Tomas gyvena ${i} aukšte ir ${k} bute`)
    }
}

// 1uzdavinys
//Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);

let pinigine = [];

for(let i=0; i<randomSkaicius(10, 30); i++) {
    pinigine[i] = randomSkaicius(0, 10)
}

console.log(pinigine)

//2 uzdavinys 
//Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;

suma = 0;

for(let i=0; i< pinigine.length; i++) {
    suma+= pinigine[i]
}
console.log(`pinigų suma ${suma}`);

//3 uzdavinys
//Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;

suma=0;
for(let i=0; i< pinigine.length; i++) {
    if(pinigine[i] > 2) {
        suma+= pinigine[i]
    }
}
console.log(`pinigų virš 2 suma yra lygi ${suma}`);

//4 uzdavinys
//Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;

for(let i=0; i< pinigine.length; i++) {
    if(pinigine[i] <= 2) {
        pinigine[i] = 0;
    }
}
console.log(pinigine);

//5 uzdavinys
//Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;

let max = 0;
let count =0;
for(let i=0;i<pinigine.length;i++) {
  if(pinigine[i] > max) {
      max= pinigine[i];
      count=1
  }else if (pinigine[i] == max) {
      count++
  }
}
console.log(`maksimali reikšmė yra ${max}, skaičius kartojasi ${count}`)
console.log(pinigine)

//6 uzdavinys 
//Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;

for(let i=0; i<pinigine.length; i++) {
    if(pinigine[i] == 0) {
        pinigine[i] = i;
    }
}

console.log(pinigine)

//7 uzdavinys
//Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;

while(pinigine.length <30) {
    pinigine.push(randomSkaicius(0,10))
}
console.log(pinigine);

//8 uzdavinys
//Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus.
//Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);


pinigine = [];
for(let i=0; i<randomSkaicius(10, 30); i++) {
    pinigine[i] = randomSkaicius(0, 10)
}
let masyvas1 = [];
let masyvas2 = [];

for(let i=0; i<pinigine.length; i++) {
    if(pinigine[i] <= 2) {
        masyvas1.push(pinigine[i])
    } else {
        masyvas2.push(pinigine[i])
    }
}
console.log(pinigine);
console.log(masyvas1);
console.log(masyvas2);

//9 uzdavinys
//Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom,
//o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;

pinigine = [];
pinigine.push(masyvas1);
pinigine.push(masyvas2)
console.log(pinigine)

//10,11 uzdavinys
//Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm
// ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI']; Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;

let masyvas3= ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI']
pinigine.push(masyvas3.sort())
console.log(pinigine)

//12/ 13 uzdavinys
//Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą);
//iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;
//Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;

let mastercard =0;
let visa =0;

while(masyvas3.length <20) {
let mokejimas= randomSkaicius(1,2)
if(mokejimas == 1) {
    masyvas3.push('Mastercard');
    mastercard++
}else {
    masyvas3.push('Visa')
    visa++
}}
if(mastercard == visa) {
    console.log(`Abiejų Mastercard ir Visa kortelių yra vienodai ${visa}`)
}else if(mastercard > visa) {
    console.log(`Mastercard kortelių yra daugiau ${mastercard}, kol Visa kortelių buvo ${visa}`)
}else {
    console.log(`Visa kortelių yra daugiau ${visa}, kol Mastercard kortelių buvo ${mastercard}`)
}
masyvas3.sort()
console.log(pinigine)

//14 uzdavinys
//Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;

let masyvas4 = [];

for(let i=0; i<10; i++) {
    masyvas4[i] = randomSkaicius(1000000000, 9999999999);
}

pinigine.push(masyvas4);
console.log(pinigine);

//15 uzdavinys
//Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;

masyvas4.sort(function(a,b) {
    return b-a
})
console.log(masyvas4)

//16 uzdavinys
//Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);


pinigine = [];
for(let i=0; i<randomSkaicius(10, 30); i++) {
    pinigine[i] = randomSkaicius(0, 10)
}
masyvas1 = [];
masyvas2 = [];
masyvas2Suma= 0;

for(let i=0; i<pinigine.length; i++) {
    if(pinigine[i] <= 2) {
        masyvas1.push(pinigine[i])
    } else {
        masyvas2.push(pinigine[i])
        masyvas2Suma += pinigine[i]
    }
}
console.log(masyvas2)
do {
    let skaicius = randomSkaicius(3,10);
    if(masyvas2Suma + skaicius <= 500) {
        masyvas2.push(skaicius);
        masyvas2Suma += skaicius; 
    } else if (masyvas2Suma + (500-masyvas2Suma) == 500) {
        masyvas2.push(500 - masyvas2Suma);
        masyvas2Suma += 500- masyvas2Suma;
    }
}while(masyvas2Suma != 500);



// if(masyvas2Suma >500) {
//     masyvas2.pop();
//     masyvas2.push(masyvas2[masyvas2.length-1] - (masyvas2Suma-500))
// }
console.log(masyvas2);
console.log(masyvas2Suma);

//17 uzdavinys
//atikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.

count=0

for(let i=0; i<masyvas4.length; i++) {
    if(masyvas4[i] % 777 == 0) {
        count++
    }
}
console.log(masyvas4)
console.log(`laimėjome ${count} kartus`)

//18 uzdavinys
// Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai

let masyvas5 = ['šuo', 'katė', 'automobilis', 'namas', 'kiemas']

masyvas5.sort(function(a,b) {
    return a.length-b.length
})

console.log(masyvas5)