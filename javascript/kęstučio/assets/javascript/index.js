function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
//1 uzdavinys
    let n= randomSkaicius(-50, 50)
        if(n > 0) {
        console.log('Skaičius yra geras')
        }
        else if (n == 0) {
        console.log('Skaičius yra Nulis')
        }
        else {
        console.log('Skaičius yra blogas')
        }
        console.log(n)
//2 uzdavinys
        let sviesoforas= randomSkaicius(1, 3)
        if(n == 3) {
            console.log('Raudona, Eiti draudžiama')
        }
        else if (n ==2) {
            console.log('Geltona, Palaukite')
        }
        else {
            console.log('Žalia, prašome pereiti gatvę')
        }
//3 uždavinys
let dezes =  randomSkaicius(1, 10);
let telpa= 5;
let knygos = randomSkaicius(10, 70);

if (dezes*telpa >= knygos) {
    console.log(`Dėžių turime ${dezes} į kurias telpa po ${telpa}knygas, knygų turime ${knygos}. Rezulatate, knygos tilps`)
}else {
    console.log(`Dėžių turime ${dezes} į kurias telpa po ${telpa}knygas, knygų turime ${knygos}. Rezulatate, knygos netilps`)
}
//4 uzdavinys
let poli =1441;
let ketvirtas = poli % 10;
let trecias = Math.floor(poli / 10) % 10;
let antras = Math.floor(poli / 100) % 10
let pirmas = Math.floor(poli / 1000)

if(pirmas == ketvirtas && trecias == antras) {
    console.log('Skaicius yra Polindromas')
}else {
    console.log('Skaicius nera Polindromas')
}
//5 uždavinys
let num = randomSkaicius(100000, 999999);
let sum= 0;
console.log(num);
while(num) {
    sum += num %10;
    num = Math.floor(num/ 10);
}
if(sum % 4 == 0) {
    console.log ('Bilietas yra Laimingas')
}else {
    console.log('Bilietas yra nelaimingas')
}

//6 uzdavinys
//o tai negalima tiesiog metai % 4
// let metai = randomSkaicius(0, 2222)
// if((metai * dienos) % 4 ==0){
//     console.log('Metai yra Keliamieji ')
// }else {
//     console.log('Metai yra Paprastieji')
// }
// console.log(metai)
//6 uzdavinys
let m = 2006

if ( m % 4 == 0 && m %100 != 0) {
console.log('Metai keliamieji');
} else {
console.log('Metai nekialiemiji')
}
//7 uzdavinys
let poliChecker = 12321;

penktas = poliChecker % 10;
ketvirtas = Math.floor(poliChecker / 10) % 10;
antras = Math.floor(poliChecker /1000) % 10;
pirmas = Math.floor(poliChecker /10000);

if (penktas == pirmas && ketvirtas == antras) {
    console.log('Skaičius yra polindromas')
}else {
    console.log('Skaičius yra nepolindromas')
}
//8 uzdavinys
let kauliukai = randomSkaicius (1, 6);

if (kauliukai == 1 || kauliukai == 3 || kauliukai == 5) {
    console.log(`Kambarį tvarkys Jaunėlis`);
}
else{
    console.log(`Kambarį tvarkys Vyresnėlis`);
}
console.log(kauliukai)
//9 uzduotis
let p1 = randomSkaicius(2, 10);
let p2 = randomSkaicius(2, 10);
let p3 = randomSkaicius(2, 10);



if (p1 >= p2 && p1 >= p3) {
    if (p1 == p2 && p1 == p3) {
        console.log(`visi mokiniai surinko lygiai ${p1}`)
    }else if (p1 == p2) {
        console.log(`Pirmas ir antras mokinys surinko vienodai aukščiausią pažymį ${p1}`)
    }else if (p1 == p3) {
        console.log(`Pirmas ir Trečias mokinys surinko vienodai aukščiausia pažymį ${p1}`)
    }else {
        console.log(`Pirmas mokinys surinko aukščiausią pažymį ${p1}`)
    }
} else if (p2 >= p1 && p2 >= p3) {
    if (p2 == p3) {
        console.log(`Antras ir trečias mokinys surinko aukščiausia pažymį ${p2}`)
    }else {
        console.log(`Antras mokinys surinko aukščiausia pažymį ${p2}`)
    }
}else {
    console.log(`Trečias mokinys surinko aukščiausia pažymį ${p3}`)
}
console.log(p1)
console.log(p2)
console.log(p3)

//10 uzduotis
let menuo = randomSkaicius(1, 12)


if (menuo == 1 || menuo == 5 || menuo == 3 || menuo == 7 || menuo == 8 || menuo == 10|| menuo == 12) {
    console.log(`Menuo ${menuo}, dienų skaičių 31`)
}else if (menuo == 2) {
    console.log(`Menuo ${menuo}, dienų skaičius 28`)
}else {
    console.log(`Menuo ${menuo}, dienų skaičius 30`)
}
console.log(menuo)

//11 uzduotis
// Petras išėjo iš namų, kai laikrodis rodė v1 valandų ir m1 minučių. Į gimnaziją Petro 
// kelionė trunka m2 minučių. Parašykite programą, kuri ekrane parodytų pranešimą apie 
// tai, ar Petras nepavėluos į pamoką, prasidedančią v valandų ir m minučių. Pasitikrinkite: 
// jei v1 = 8, m1 = 29, m2 = 43, v = 9, m = 5, turi būti: Petras į pamoką pavėluos; jei v1 = 8, 
// m1 = 29, m2 = 23, v = 9, m = 5, turi būti: Petras į pamoką nepavėluos.

let iseinaV = 8
let iseinaM = 25
let trunka = 35
let prasidedaV= 9
let prasidedaM= 5

if(iseinaV*60 + iseinaM + trunka <= prasidedaV*60 + prasidedaM) {
    console.log('Petriukas spėjo');
}else {
    console.log('Petriukas Pavelavo');
}
//12 uzduotis
let degtukai = 0;

if(degtukai != 0 && degtukai % 3 == 0) {
    console.log(`trikampį sudelioti galima, degtukų turime ${degtukai}`);
}else {
    console.log(`trikampį sudelitoi galima, degtukų turime ${degtukai}`);
}
//13 uzduotis
let start = 1896;
let olimpines = 1904;
let kelinta;
if(olimpines % 4 == 0) {
    kelinta = ((olimpines- start) / 4) + 1;
    console.log(`Metai olimpiniai, ir tai yra jau ${kelinta} olimpiada`);
}else{
console.log(`Metai neolimpiniai`)
}
//14 uzduotis
let a = 1;
let b = 2;
let c = 1;

let x;
let x1;
let x2;
let d;

d = (b ** 2) - (4 * a * c);

if (d < 0) {
  console.log("sprendinių nėra");
} else if (d == 0) {
  x = -b / (2 * a);
  console.log("X = " + x);
} else {
  x1 = (-b + Math.sqrt(d)) / (2 * a);
  x2 = (-b - Math.sqrt(d)) / (2 * a);
  console.log("X1 = " + x1);
  console.log("X2 = " + x2);
}
// 15 uzduotis

let centai = 50
let ledai = 20
let lieka = centai % ledai
let nusiperkam = Math.floor(centai / ledai)

console.log(`Saulius nusiperka ${nusiperkam} porciją(-as) ledų ir Sauliui lieka ${lieka}`)
//16 uzduotis
let pervezti = 71;
let perveza = 14;
let kartai = Math.ceil(pervezti/ perveza)

console.log(`pervežti dėžes mums reikėtu ${kartai} važiuoti`)

//17 užduotis
let a = randomSkaicius (0,10);
let b = randomSkaicius (0,10);

if(a > b) {
    a--;
    b++;
    console.log(`a skaičius yra didžiausias ${a +1} ir jis buvo pamažintas vienu iki ${a}, kol skaicius b buvo ${b-1} padidintas vienu iki ${b}`)
}else if ( a == b) {
    console.log(`abudu skaičiai yra lygus`)
} else {
    a++;
    b--
    console.log(`b skaičius yra didžiausias ${b +1} ir jis buvo pamažintas vienu iki ${b +1}, kol skaicius a buvo ${a-1} ir padidintas vienu iki ${a}`)
}
console.log(b)