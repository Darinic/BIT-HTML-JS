//21 uzdavinys 

function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  let motinine = []
  let masyvasA = []
  let masyvasB = []

  
  for(let i =0; i< 100; i++) {
      motinine.push(i)
  }

  for(let i = 1; i <= 10; i++) {
   masyvasA.push(i)
  }
  
  motinine.forEach(element => {
    masyvasB.push(masyvasA)
  });
  
  console.log(masyvasB);

  //22 uzdavinys

  motinine= [];
  masyvasA =[];
  masyvasB =[];

  for(let i=0; i<100; i++) {
      motinine.push(i)
  }

  for(let i=0; i<10; i++) {
      masyvasA[i] = randomSkaicius(1, 17);
  }

  motinine.forEach(element => {
      masyvasB.push(masyvasA)
  })

  console.log(masyvasB)

  //23 uzdavinys
//   Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis atsitiktinis nuo 5 iki 
//   18, o reikšmės – skaičiai nuo 1 iki masyvo ilgio
  motinine = [];
  masyvasA =[];
  masyvasB =[];
  let randomMasyvas = randomSkaicius(5,18);

  for(let i =0; i<100; i++) {
      motinine.push(i)
  }

  for(let i=1; i<=randomMasyvas;i++) {
    masyvasA.push(i)
  }

  motinine.forEach(element => {
      masyvasB.push(masyvasA)
  })

  console.log(masyvasB)

  //24 uzdavinys
//   Sugeneruoti masyvą, kurio ilgis 100, o reikšmės – masyvai, kurių ilgis atsitiktinis nuo 5 iki 
//   18, o reikšmės – atsitiktiniai skaičiai nuo 5 iki 30