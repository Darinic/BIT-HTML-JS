//Globalus objektas document
document.getElementById('rezultatas').classList.add('klase');

var vardas = 'Daniil ';
var pavarde = 'Arinič ';
var metai = '1992.05.25';

console.log("Aš esu " + vardas + pavarde + "gimęs " + metai);

//3 užduotis
function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }  

var x = randomSkaicius(0, 4);
var y = randomSkaicius(0, 4);

var xplus = x + y;
var xmin = x - y;
var xdal =parseFloat(x / y).toFixed(2);
var xdaug = x * y;
//Consoles 
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
// innerhtml
document.getElementById("xSkaicius").innerHTML = x;
document.getElementById("ySkaicius").innerHTML = y;
document.getElementById("xSudetis").innerHTML = xplus;
document.getElementById("xAtimtis").innerHTML = xmin;
document.getElementById("xDalyba").innerHTML = xdal;
document.getElementById("xDaugyba").innerHTML = xdaug;
//4 uŽduotis
var c = randomSkaicius(0, 25);
var v = randomSkaicius(0, 25);
var b = randomSkaicius (0, 25);

var rez = c + v + b;

var g= Math.min (c, v, b)
var h= Math.max (c, v, b)

var MiddleNumber= rez - g - h;

console.log(rez - g - h);

document.getElementById("cSkaicius").innerHTML = c;
document.getElementById("vSkaicius").innerHTML = v;
document.getElementById("bSkaicius").innerHTML = b;
document.getElementById("mNumber").innerHTML = MiddleNumber;


  var x1 = randomSkaicius (0, 25);
  var x2 = randomSkaicius (0, 25);
  var x3 = randomSkaicius (0, 25);

  console.log(x1);
  console.log(x2);
  console.log(x3);

console.log(Math.min(Math.max(x1, x2), x3));