// var x= 4.8;

// //if(x = 4) {galime if kondiciojijoje priskirti reikšmę}
// if(x > 4) {
// console.log(Math.floor(x) );//Apvalina prie apačios 3,5= 3
// console.log(Math.round(x) );//apvalina prie artimiausio nr 3,5=4
// console.log(Math.ceil(x) );//apvalina skaičių prie viršaus 3,5=4
// }
// var x= 4;
// jeigu x daugiau negu arba lygu 4
// if(x >=4) {
//     console.log(Math.floor(x) );
//     console.log(Math.round(x) );
//     console.log(Math.ceil(x) );
// }

// var x= 6.3
// //jeigu skaicius nelygus keturiems ir nelygu 5, tuomet ijungiam atvaizdavima konsoleje
// //&& kad prijungti dar papildoma sąlygą
// if(x != 4 && x != 5 ) {
//     console.log(Math.floor(x) );
//     console.log(Math.round(x) );
//     console.log(Math.ceil(x) );
//}
//jeigu skaičius nelygus 4 arba nelygus 5
// var x = 6.3
// var y = 5.5

// if(x != 4 && y != 5) {
//     console.log(Math.floor(x) );
//     console.log(Math.round(x) );
//     console.log(Math.ceil(x) );
//}

//Eventai

// console.log(document)
//jeigu atskirai daryti funkcija ir addEventListener
// function clickHandler() {
//     console.log('Mygtukas uzregistruotas')
// }
// document.getElementById('submit').addEventListener('click', clickHandler)

//jeigu funckija daryti kartu su addEventListeneriu
// document.getElementById('submit').addEventListener('click', function() {
//     console.log(document.getElementById('skaicius').value
// })

// document.getElementById('submit').addEventListener('click', function() {
//     var reiksme = document.getElementById('skaicius').value
//     document.getElementById('rezultatas').innerText = reiksme
// })
// document.getElementById('submit').addEventListener('click', function() {
//     // var reiksme = document.getElementById('skaicius').value
//     // document.getElementById('rezultatas').innerHTML = "<h1 class=\"test\">" + reiksme + "</h1>"
//     document.getElementById('rezultatas').innerHTML = `<h1 class="test">${reiksme}</h1>`
// })
// //viengubos kabutes
// //() => funkcijos sutrumpinimas
// window.addEventListener('scroll', () => {
//     console.log(window.pageYOffset)
// })
//5 užduotis
function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
function generuoti(rNumeris) {
    document.getElementById("rNumeris").innerHTML = randomSkaicius(0, 25)
}
//6 užduotis
//1 variable
function generuotii() {
    let x1 = randomSkaicius(-10, 10)
    document.getElementById("RNumberQ").innerHTML = x1
    if (x1 < 0) {
        document.getElementById("RNumberQ").style.color = '#FF0000'
    }
    else if (x1 == 0) {
        document.getElementById("RNumberQ").style.color = '#0000FF'
    }
    else if (x1 > 0) {
        document.getElementById("RNumberQ").style.color = '#15A50F'
}
    let x2 = randomSkaicius(-10, 10)
    document.getElementById("RNumberW").innerHTML = x2
    if (x2 < 0) {
        document.getElementById("RNumberW").style.color = '#FF0000';
    }
    else if (x2 == 0) {
        document.getElementById("RNumberW").style.color = '#0000FF';
    }
    else if (x2 > 0) {
        document.getElementById("RNumberW").style.color = '#15A50F';
    }
    let x3 = randomSkaicius (-10, 10)
    document.getElementById("RNumberE").innerHTML = x3
    if (x3 < 0) {
        document.getElementById("RNumberE").style.color = '#FF0000';
    }
    else if (x3 == 0) {
        document.getElementById("RNumberE").style.color = '#0000FF';
    }
    else if (x3 > 0) {
        document.getElementById("RNumberE").style.color = '#15A50F';
    }
}    
//7 užduotis
function generuotis() {
let nuolaida = 1
let nuolaida1 = 0.97
let nuolaida2 = 0.96

let zvakes = randomSkaicius (5, 3000)
let saving = 1 * zvakes
if (zvakes < 1000) {
    document.getElementById("zvakiuSuma").innerHTML = zvakes;
    document.getElementById("sum").innerHTML = nuolaida;
    var saving0 = (saving - zvakes).toFixed(2)
    document.getElementById("Sutaupote").innerHTML = saving0;
}
else if (zvakes >= 1000 && zvakes < 2000) {
    var zvakes1 = (zvakes * nuolaida1).toFixed(2);
    document.getElementById("zvakiuSuma").innerHTML = zvakes1;
    document.getElementById("sum").innerHTML = nuolaida1;
    var saving1 = (saving - zvakes1).toFixed(2);
    document.getElementById("Sutaupote").innerHTML = saving1;
}
else if (zvakes >= 2000) {
    var zvakes2 = (zvakes * nuolaida2).toFixed(2);
    document.getElementById("zvakiuSuma").innerHTML = zvakes2;
    document.getElementById("sum").innerHTML = nuolaida2;
    var saving2 = (saving -zvakes2).toFixed(2);
    document.getElementById("Sutaupote").innerHTML = saving2;
}
document.getElementById("zvakiuSk").innerHTML = zvakes
}
