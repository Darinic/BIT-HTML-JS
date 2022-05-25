// 1 uzdavinys
//1. Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis 10, o reikšmės skaičiai nuo 1 iki 10 ([1,2,3,4,5,6,7,8,9,10])

let pagrindinis = [];
let antrinis = [];

for(let i =1; i<=10;i++) {
    antrinis.push(i)
}
for(let i =0; i<100; i++) {
    pagrindinis.push(antrinis)
}
console.log(pagrindinis)

//2 uzdavinys
//Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis 10, o reikšmės  atsitiktiniai skaičiai nuo 1 iki 17.


function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  pagrindinis =[];
  antrinis= [];

  
  for(let i=0; i<10; i++) {
      antrinis.push(randomSkaicius(1,17))
  }

  for(let i=0; i<100; i++) {
      pagrindinis.push(antrinis)
      antrinis = []
      for(let i=0; i<10; i++) {
        antrinis.push(randomSkaicius(1,17))
      }
  }

  console.log(pagrindinis)

  //3 uzdavinys
  //Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis atsitiktinis nuo 5 iki 18, o reikšmės – skaičiai nuo 1 iki masyvo ilgio.

  pagrindinis =[];
  antrinis=[];

  for(let i=0; i<100; i++) {
    for(let i=1; i<=randomSkaicius(5,18);i++) {
        antrinis.push(i)
  }
      pagrindinis.push(antrinis)
      antrinis = [];
  }

  console.log(pagrindinis)

  //4 uzdavinys
//Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis atsitiktinis nuo 5 iki 18, o reikšmės – atsitiktiniai skaičiai nuo 5 iki 30.

pagrindinis =[];
antrinis=[];

for(let i=0; i<100; i++) {
    for(let i=0; i<randomSkaicius(5,18);i++) {
        antrinis.push(randomSkaicius(5,30))
    }
    pagrindinis.push(antrinis);
    antrinis=[];
}

console.log(pagrindinis)

//5 uzdavinys 
//Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis atsitiktinis nuo 5 iki 18, o reikšmės – atsitiktiniai skaičiai nuo 5 iki 75.
// Surasti didžiausią skaičių visame didžiajame masyve.

pagrindinis =[];
antrinis=[];
let didziausias = 0;
let skaiciuojam = Math.max(...antrinis);
for(let i=0; i<100; i++) {
    for(let i=0; i<randomSkaicius(5,18); i++) {
        antrinis.push(randomSkaicius(5,75))
    }
    if(didziausias < Math.max(...antrinis)) {
        didziausias = Math.max(...antrinis)
    }
    pagrindinis.push(antrinis);
    antrinis=[]
} 
console.log(didziausias);
console.log(pagrindinis)