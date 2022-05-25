//1 uzdavinys
//naudojant ciklą atspausdinti penkias eilutes ‘Labas’;

for(let i =0; i < 5;i++) {
    console.log('Labas')
}

//2 uzdavinys
//naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje)

for(let i =0; i<5; i++) {
    console.log(i)
}
//3 uzdavinys
//naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje)

let skaicius = 0;
for(let i=0; i<5; i++) {
    console.log(i*10)
}

//4 uzdavinys
//naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);

for(let i=49; i <54;i++) {
    console.log(i)
}
//5 uzdavinys
//naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);

let skaicius11= 4
for(let i =4; i >= 0; i--) {
    console.log(i)
}
//6 uzdavinys
//naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);
function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

for(let i =0; i <5; i++) {
    console.log(randomSkaicius(0, 10))
}
//7 uzdavinys
//naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5
console.log('____7 uzdavinys____')
let i;
while(i != 5) {
    i = randomSkaicius(0, 10);
    console.log(i)
}

//8 uzdavinys
//naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;
console.log('____8 uzdavinys____')
let suma= 0;

while(suma<=100) {
    suma+= randomSkaicius(0, 10)
    console.log(suma)
}

//9 uzdavinys
//naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko
i =0;
let kartai= 0
while(i != 5 && i != 7) {
    i =randomSkaicius(0, 10);
    console.log(i)
    kartai++
}
console.log(`ciklas prisisuko ${kartai}`)
// 10 uzdavinys
// //Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekrane lentelę nuo 1 iki n centimetrus coliais ir atvirkščiai
console.log('10 uzdavinys')
let n = 10;
const colis= 2.54

for(let i =1; i <=n; i++) {
console.log(`centimetrų yra ${i}, o colių ${i/ colis}`)
}
for(let i =1; i <=n; i++) {
    console.log(`colių yra ${i}, o centimetrų ${i*colis}`)
    }

//11 uzdavinys
//Bankas moka 2% metinių palūkanų. Indėlininkas pasidėjo į banką 100e. Sudarykite kasmetinę banko atskaitą klientui iki n metų. Ataskaitoje pateikite: metus, palūkanas, indėlį.
let metai = 5;
let palukanos = 0.02;
let indelis = 100;

for(let i=1; i <= metai;i++) {
    indelis +=indelis * palukanos;
    console.log(`Su ${i} metais su ${palukanos} palūkanom, tūrėsime ${indelis.toFixed(2)}`)
}
//12 uzdavinys
// Dviženklio skaičiaus dešimčių skaitmuo tris kartus didesnis už vienetų skaitmenį. Jei 
// tuos skaitmenis sukeistume vietomis, tai gautume skaičių, 36 vienetais mažesnį už 
// duotąjį, raskite tą skaičių.
let pradinis_sk;
let desimtys;
let vienetai;

for(let i =10; i< 100;i++) {
    vienetai = i % 10;
    desimtys = Math.floor(i/ 10);
    if(desimtys == (vienetai * 3) && (vienetai * 10 + desimtys + 36) == i) {
        console.log(`skaičius yra ${i}`)
    }
}


//13 uzdavinys
masyvas = []

for(let i=1000; i<9999; i++)
if(((Math.floor(i / 1000) % 2) == 0) && (i % 998) != 0) {
masyvas.push(i)    
}
//14 uzdavinys
//Keliamieji metai turi 366 dienas, paprastieji – 365. Visi metai, išskyrus šimtmečius, yra  keliamieji, jie dalūs iš 4. Šimtmečių metai yra keliamieji, jeigu dalūs 400. Pvz.: 1600  metai yra keliamieji, nes dalūs iš 400, o 1700 – paprastieji. Raskite visus mūsų eros  keliamuosius metus
for(let i=1; i< 2022; i++) {
    if((i % 4 == 0) && (i % 100 != 0)||(i % 400 ==0)) {
        console.log(`keliamieji metai bus ${i}`)
    }
}
//15 uzdavinys
// Norėdami paskatinti žmones naudotis visuomeniniu miesto transportu, savivaldybės 
// tarnautojai sugalvojo, kad bilietai, kurie baigiasi lyginiu skaitmeniu, kainuos perpus 
// pigiau. Bilietai, kurie baigiasi nuliu, parduodami be nuolaidos. Parenkite programą, 
// spausdinančią visų bilietų, kurie kainuos pigiau, numerius. Bilietai pradedami numeruoti 
// nuo m-tojo, baigiami n-tuoju. Kai m = 997, o n = 1003, tuomet turi būti rodomi tokie 
// bilietų numeriai: 998 100

let bil_pr = 997;
let bil_pab= 1003;

for(let i = bil_pr; i < bil_pab; i++) {
    if((i % 2) ==0 && (i % 10 ) != 0) {
        console.log(`bilietų numeriai su nuolaidą būtų ${i}`)
    }
}

//16 uzdavinys
//Duotas natūralus skaičius n. Raskite pirmą skaitmenį

let naturalus = 2254;
let darbinis = naturalus;

while(darbinis > 10) {
    darbinis = Math.floor(darbinis/ 10);
}
console.log(` Pirmas skaičius ${darbinis}`)

// let skaitemnis += naturalus % 10

//17 uzdavinys 
//Duotas natūralusis skaičius n. Raskite skaitmenų sumą.

let darb= 5486;
let suma1=0

while(darb != 0) {
    suma1 += darb % 10;
    darb = Math.floor(darb/ 10)
    console.log(`Skaitmenų suma bus ${suma1}`)
}
console.log(`Skaitmenų suma bus ${suma1}`)
//18 uzdavinys
//Duotas natūralusis skaičius n. Raskite atvirkščią skaičių duotajam. Pvz.: n=123, atv =32

const skaiciai = 54087;
let work = skaiciai
let naujas = 0

while(work != 0) {
    naujas = naujas* 10 + work % 10
    work = Math.floor(work/ 10)
}
console.log(`Originalus skaičius yra ${skaiciai} atvirkšinis skaičius būtų ${naujas}`)

//19 uzdavinys
// Duotas natūralus skaičius n. Sudarykite programą, kuri rastų didžiausią ir mažiausią skaitmenį.

const uzdav = 25476;
let working= uzdav;
let naujasMax= 0;
let naujasMin = 9;

while(working != 0) {
    let robotas = working % 10
    if(robotas > naujasMax) {
        naujasMax = robotas
    }
    if(robotas < naujasMin) {
        naujasMin = robotas
    }
 working= Math.floor(working/10);
}
console.log(naujasMax)
console.log(naujasMin)

//20 uzdavinys
//Bankas moka indėlininkui p (p>0) procentų palūkanų per metus. Parašykite programą, kuri apskaičiuotų, po kiek metų šimto eurų indėlis taps didesnis už 100000.

let p_n = 0.03;
let indeliukas= 100;
let m= 0;

while(indeliukas<= 100000) {
    indeliukas= indeliukas + indeliukas * p_n;
    m++
}
console.log(m)

//21 uzdavinys
// Ežere pražydo viena lelija. Kiekvieną dieną žiedų skaičius padvigubėdavo. Parašykite 
// programą, kuri apskaičiuotų:
// a. Kiek žiedų buvo po n dienų
// b. Kelintą dieną žiedai užklojo pusę ežero, jeigu visame ežere gali tilpti m žiedų

let ziedai = 1;
let dienos = 5;


for(let i=1; i <= dienos;i++) {
    ziedai= ziedai *2;
}
console.log(`po ${dienos} dienų, tūrėsime ${ziedai} žiedų`)

ziedai = 1;
dienos = 0
let ziedai_telpa = 100;

while(ziedai<=ziedai_telpa/2) {
    ziedai = ziedai*2;
    dienos++;
}
console.log(`puse ežero užklos per ${dienos} dienas, žiedų tūrėsime ${ziedai}`);

//22 uzdavinys
// Pavasarį pradėjęs dirbti sode sodininkas pirmąją dieną išgenėjo m1, antrąją – m medžių 
// daugiau negu pirmąją, trečiąją – m medžių daugiau negu antrąją ir t.t. Parašykite 
// programą, skaičiuojančią, kiek dienų d dirbs sodininkas, kol išgenės n sode augančių 
// medžių. Paskutinei dienai gali likti mažiau medžių. Visi duomenys yra sveikojo tipo. 
// Pasitikrinkite: kai m1 = 3, m = 1, n = 16, tuomet kompiuterio ekrane turi būti rodoma: 
// Sodininkas dirbs 4 dienas

const viso_m = 16;
let medziai = 3;
let daugiau = 1;
let viso = 16;
let dienu = 0;

while(viso > 0) {
    viso -=medziai;
    medziai +=daugiau;
    dienu++
}
console.log(`viso dirbo ${dienu}, viso medžių buvo ${viso_m} `)

//masyvai

//1 uzdavinys + 2 uzdavinys(a,b)
let masyvas11 =[];
let kiekM = 0;
let indeksas = [];
let max= 0;

for(let i =0; i <30; i++) {
    masyvas11.push(randomSkaicius(5,25));
    if(masyvas[i] > 10) {
        kiekM++
    }
}
for(let i =0; i< masyvas11.length; i++) {
    if(masyvas11[i] > max) {
        max = masyvas11[i];
    }
}
for(let i =0; i<masyvas11.length; i++) {
    if(masyvas11[i] == max) {
        indeksas.push(i)
    }
}
console.log(`masyvas susidaro iš: ${masyvas11}`);
console.log(`skaičių virš 10 buvo ${kiekM}`);
console.log(`didžiausia masyvo reikšmė ${max}, masyvo indeksai: ${indeksas}`)

//c uždavinys

let suma11 = 0;
for(let i =0; i<masyvas11.length; i+=2) {
    suma11 += masyvas11[i];
}
console.log(`lyginių reikšmių suma yra ${suma11}`);

//d uždavinys 
let masyvas6 =[];
for(let i =0; i<30; i++) {
    masyvas6[i] =randomSkaicius(5, 25);
    masyvas6[i] = masyvas6[i] -i;
}
console.log(masyvas6)

//e uždavinys
for(let i=30; i<40; i++) {
    masyvas6[i] = randomSkaicius(5, 25)
}
console.log(masyvas6)

//f uždavinys
// masyvasLYG= [];
// masyvasNELYG= [];

// masyvas6.forEach(function(value) {
//     if(value % 2 ==0) {
//         masyvasLYG.push(value)
//     }else 
// })