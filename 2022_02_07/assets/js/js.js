function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// let results1 =''
// let herbai = 0
// while(true) {
//     let metimas = randomSkaicius(0,1)

//     if(metimas == 0) {
//         results1 += ' H'
//         break;
//     }
//     else {
//     results1 += ' S'
//     }
// }
// document.getElementById('metimai1').innerHTML = results1

let moneta;
let herbai= 0
while(moneta != 0) {
    moneta=randomSkaicius (0, 1);
        if(moneta == 0) {
            console.log('S');
        }
        else if (moneta == 0) {
            console.log('H')
        }
}
let results2 = ''
while(herbai == 3) {
    let metimas= randomSkaicius(0,1)

    if(metimas == 0) {
        results2 += ' H'
        herbai++
    }
    else {
        results2 += ' S'
    }

}
document.getElementById('metimai2').innerHTML = results2

let results3 =''
while(herbai == 3) {
    let metimas= randomSkaicius(0,1)

    if(metimas == 0) {
        results3 += ' H'
        herbai++
    }
    else {
        results3 += ' S'
        herbai = 0
    }
}
document.getElementById('metimai3').innerHTML = results3

//2 uzdavinys
// const vinysmm = (8.5 * 10 * 5)
// let prikalta = 0
// let count = 0

// for(count = 0; prikalta < vinysmm; count++) {
//     let kalimas = randomSkaicius(5, 20)
//     prikalta += kalimas 
// }
// document.getElementById('mazas').innerHTML = count

let vinis1= 85;
let vinis2= 85;
let vinis3= 85;
let vinis4= 85;
let vinis5= 85;

let mazaisSmugiais=0;
let didelissmugis=0;

function mazaisSmugiaisf(vinis) {
let nSmugis= randomSkaicius (5, 20);
return vinis - nSmugis
}
function dideliaisSmugiais(vinis) {
    let dSmugis = randomSkaicius(20, 30);
    let tikimybe = randomSkaicius(0, 1);
    return vinis - dSmugis * tikimybe
}
while(vinis1 > 0) {
    vinis1 = mazaisSmugiaisf (vinis1);
    mazaisSmugiais++
}
while(vinis2 > 0) {
    vinis2 = mazaisSmugiaisf (vinis2);
    mazaisSmugiais++
}
while(vinis3 > 0) {
    vinis3 = mazaisSmugiaisf (vinis3);
    mazaisSmugiais++
}
while(vinis4 > 0) {
    vinis4 = mazaisSmugiaisf (vinis4);
    mazaisSmugiais++
}
while(vinis5 > 0) {
    vinis5 = mazaisSmugiaisf (vinis5);
    mazaisSmugiais++
}
console.log(`mažų smugių reikėjo ${mazaisSmugiais}`);

let vinis6= 85;
let vinis7= 85;
let vinis8= 85;
let vinis9= 85;
let vinis10= 85;

while(vinis6 > 0) {
    vinis6 = dideliaisSmugiais (vinis6);
    didelissmugis++
}
while(vinis7 > 0) {
    vinis7 = dideliaisSmugiais (vinis7);
    didelissmugis++
}
while(vinis8 > 0) {
    vinis8 = dideliaisSmugiais (vinis8);
    didelissmugis++
}
while(vinis9 > 0) {
    vinis9 = dideliaisSmugiais (vinis9);
    didelissmugis++
}
while(vinis10 > 0) {
    vinis10 = dideliaisSmugiais (vinis10);
    didelissmugis++
}
console.log(`Didelių smugių reikėjo ${didelissmugis}`);
// let nepataike = 0
// prikalta = 0
// count = 0
// for(count = 0; prikalta < vinysmm; count++) {
//     let kalimas = randomSkaicius (20, 30)
//     let pataiko = randomSkaicius (0, 1)
//     if(pataiko == 0){
//         nepataike++
//     } else {
//         prikalta += kalimas
//     }
// }
// document.getElementById('didelis').innerHTML = count
// document.getElementById('nepataike').innerHTML = nepataike