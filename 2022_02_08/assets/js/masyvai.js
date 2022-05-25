function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  let kiekis = 0
  let masyvas = []
        for(let i =0 ; i < 30; i++ ) {
            masyvas[i] = randomSkaicius(5, 25)
            //a uzdavinys
            if(masyvas[i] > 10) {
                kiekis++
            }
        }
    console.log(masyvas)
    console.log(`Skaičių virš 10 yra ${kiekis}`)
            //b uzdavinys
    let max = Math.max(...masyvas); // ... splittina masyvą po vieną elementą
    let op =[];
    for(let z=0; z< masyvas.length; z++) {
        if(masyvas[z] === max) {
            op.push(z)
        }
    }
    console.log(`didžiausia reikšmė ${max}, indexas(-ai) ${op}`)

    let suma = 0
    for(z = 0; z< masyvas.length; z = z +2 ) {
            suma += masyvas[z]
    }
    console.log(`lyginių skaičių suma yra lygi ${suma}`)
    // let masyvasLyg = []
    // let masyvasNelyg =[]
    // let nMasyvas = []
    //     for(y =0; y < 30;y++) {
    //         nMasyvas[y]= randomSkaicius(5, 25) - y;
    //         lyginiai(nMasyvas[y]);
    //     }
    //     console.log(nMasyvas)
    //     for (y = 30; y < 40; y++) {
    //         nMasyvas[y] =randomSkaicius(5,25);
    //         lyginiai(nMasyvas[y])
    //     }
    
    //     console.log(nMasyvas)
    //     console.log(masyvasNelyg)
    //     console.log(masyvasLyg)
        
    //     function lyginiai(x) {
    //         if (x % 2 ==0) {
    //             if (x > 15) {
    //                 x= 0;
    //             masyvasLyg.push(x)
    //             } else {
    //                 masyvasLyg.push(x)
    //             }}else {
    //                 masyvasNelyg.push(x)
    //             }
    //     }
    let masyvnas = [];
    for(let i= 0; i < 30; i++) {
        masyvnas[i]= masyvas[i] - i;
    }
    console.log(masyvnas)
// ---------E-----------
    for(let i = 0; i <10; i++) {
        masyvas.push(randomSkaicius(5, 25));
    }
    console.log(masyvas)
//---------F------------
let lyginis= [];
let nelyginis= [];

    for(let i=0; i < 40; i= i + 2) {
        lyginis.push(masyvas[i]);
        nelyginis.push(masyvas[i+1]);
    }

console.log(lyginis);
console.log(nelyginis);
//---------G--------

for(let i =0; i< 40; i = i +2) {
    if (masyvas[i] > 15) {
        masyvas[i] = 0;
    }
}
console.log(masyvas);
masyvas.sort()
console.log(masyvas)

//---------H-------
// masyvas13= [];
// indeksas= []

// for(let i =0; )