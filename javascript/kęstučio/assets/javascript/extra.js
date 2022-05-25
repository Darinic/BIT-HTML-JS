//31 uzduotis
// Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra įterpiamas į h1 tagą

let tekstas = 'Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra įterpiamas į h1 tagą. testing testing'
function tagas(x) {
return `<h1>${x}</h1>`
}
document.getElementById("uzdavinys1").innerHTML = tagas(tekstas)

//32 uzduotis
//Parašyti funkciją, kuri priima du kintamuosius. Patikrina ar jie yra skaičiai. Grąžina tų skaičių sumą
let skaicius1= 10;
let skaicius2= 13;
// stringas irgi įlenda.
function testing(y, z) {
    if(isNaN(y) && isNaN(z)) {
        return `abudu kintamieji yra neskaičiai`
     }else if(isNaN(y)) {
        return `pirmas kintamasis ${y} yra neskaičius`
    } else if (isNaN(z)) {
        return `antras kintamasis ${z} yra neskaičius`
    }else {
        return y+z
    }
}
console.log(testing(skaicius1, skaicius2))

//33 uzduotis
//Parašyti funkciją, kuri priima du kintamuosius. Patikrina ar jie yra skaičiai. Palygina tuos du 
//skaičius ir grąžina rezultatą ar pirmas skaičius yra didesnis, ar antras, ar jie yra lygūs
skaicius1= 7;
skaicius2= 7;

function testavimas(x,y) {
    if(isNaN(x) && isNaN(y)) {
        return `abudu kintamieji yra neskaičiai`
     }else if(isNaN(x)) {
        return `pirmas kintamasis ${y} yra neskaičius`
    } else if (isNaN(y)) {
        return `antras kintamasis ${z} yra neskaičius`
    }else {
        if(x == y) {
            return `abudu kintamieji yra vienodi po ${x}`
        }else if (x > y) {
            return `pirmas kintamasis ${x} yra didesnis už antrą kintamajį ${y}`
        }else {
            return `antras kintamasis ${y} yra didesnis už pirmą kintamajį ${x}`
        }
    }
}
console.log(testavimas(skaicius1, skaicius2))
//34 uzduotis
//Parašyti funkciją, kuri priimtų vieną kintamajį. Turi patikrinti ar tai yra skaičiu ir ar tai yra 
// keturženklis skaičius. Turi būti grąžinamas rezultatas ar tie metai yra keliemieji
skaicius1= 2220;
let temp = skaicius1;
let skaiciai = 0;

function tikrinam(x) {
    if(isNaN(x)) {
        return `Kintamasis ${skaicius1} yra neskaicius`
    }else {
        while(x != 0) {
            x= Math.floor(x / 10);
            skaiciai++
        }
        if(skaiciai == 4 && temp % 4 == 0) {
            return `Kintamasis yra keturženklis ${skaicius1} ir metai būtų keliamieji`
        } else if (skaiciai ==4 && temp % 4 != 0) {
            return `Kintamasis yra keturženklis ${skaicius1} , bet kaip metai būtų nekeliamieji`
        } else if(skaiciai !=4 && temp % 4 == 0) {
            return `Kintamasis yra ne keturženklis ${skaicius1}, bet kaip metai būtų keliamieji` 
        } else {
            return `Kintamasis yra ne keturženklis ${skaicius1}, ir kaip metai būtų nekeliamieji`
        }}}

console.log(tikrinam(skaicius1))
//35 uzduotis
// . Parašyti funkciją, kuri priimtų vieną kintamajį. Turi būti patikrinimas ar tas kintamasis yra 
// skaičius. Funkcija turi grąžinti skaičių, kur įvesto skaičiaus skaitmenys būtų išrikiuoti didėjimo 
// tvarka
skaicius1= 1493;
let masyvas = [];

function dirbam(x) {
    if(isNaN(x)) {
        return `Kintamasis yra neskaičius`
    }else {
        while(x != 0) {
            masyvas.push(x % 10);
            x = Math.floor(x/ 10);
    }
    return `kintamasis yra ${skaicius1}, išrikiuotas didėjimo tvarka gautusi ${masyvas.sort()}`
} 
}
console.log(dirbam(skaicius1))
// //36 uzduotis
// //Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos 
// (išskyrus vienetą ir patį save) Argumentą užrašykite taip, kad būtų galima įvesti tik sveiką 
// skaičių.
skaicius1= 2001;
let count = 0;
let tikrinam1 = ''

function countinam(x) {
    x= Math.round(x)
    for(let i= 2; i<x; i++) {
        if(x % i == 0) {
            count++
            tikrinam1 += i + ' '
        }
    }
    return `kintamasis dalinasi be savęs ir 1, dar iš ${count} skaičių, skaičiai iš kurių dalijasi yra ${tikrinam1}`
}

console.log(countinam(skaicius1))

//37 uzduotis
// Parašyti funkciją telefonoNumeris, kuri priima vieną kintamąjį. Turi būti patikrinimas, kad 
// kintamasis yra masyvas, kad jo visi elementai yra skaičiai ir, kad jo ilgis yra 10. Funkcija turi 
// grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX".
function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

let array1 = [];

for(let i=0; i<10; i++) {
    array1.push(randomSkaicius(0,9));
}

function masyvinam(x) {
    if(Array.isArray(x)) {
        return `(${x.slice(0,3).join('')}) ${x.slice(3,6).join('')}-${x.slice(6).join('')}`
    } else {
        return `kintamasis yra ne masyvas`
    }
}

console.log(masyvinam(array1))
//38 uzduotis
// Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad 
// kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.)

//Per testa dariau!!!! check ar gerai.


//39 uzduotis
// Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai -
// abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių 
// sumą. Jei suma nelyginė - grąžinti tekstą, kad suma nelyginė.

//Per testa dariau!!!!! check ar gerai.


//40 uzduotis
// Funkcija turi priimti du kintamuosius. Vienas turi būti skaičius, kitas masyvas su skaičiais ir 
// minimum 7 elementais. Funkcija turi grąžinti true, jei skaičius yra masyve, ir false, jei nėra tokio 
// skaičiaus masyve

skaicius1= 5;
masyvas =[];

for(let i=0; i<7; i++) {
    masyvas.push(randomSkaicius(0,9));
}

function ieskom(x, y) {
    for(let i=0; i<y.length; i++) {
        if(y[i] == x) {
            return `True, skaičius ${x} yra masyve ${y}`
        }else {
           if(i == y.length -1) {
               return `False, skaičius ${x} nėra masyve ${y}`
           }
        }
    }
}
console.log(ieskom(skaicius1, masyvas))