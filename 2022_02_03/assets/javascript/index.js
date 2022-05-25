//14 uzduotis
let i = 1
let text =''

while (i <= 400) {
    text += '*'
if (i % 50 == 0) {
    text += '<br/>'
}
    i++
}
document.getElementById('repeat').innerHTML = text
//15 uzduotis
function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
let y = 0
let skaicius = ''
let daugiau = 0
let raudona = 0

while (y < 300) {
  random = randomSkaicius(0, 300)
  skaicius += ' '
    if (random > 275) {
    skaicius += `<span style="color:red">${random}</span>` 
    raudona++
    }
    else {
        skaicius += random
    }
    if (random > 150) {
    daugiau++
    }
    y++
}
document.getElementById('skaiciai').innerHTML = skaicius
document.getElementById('virs').innerHTML = `<span style="color:Blue">${daugiau}</span>`
document.getElementById('raudona').innerHTML = `<span style="color:crimson">${raudona}</span>`

//16 uzduotis

let x = 1
let ats = ''


while(x <= 3000) {
    if(x % 77 == 0) {
    ats += x + ', '
    }
    x++
}
document.getElementById('numeriai').innerHTML = ats.substring(0, ats.length - 1)

//17 uzduotis

let plotas = 100 * 100
let kvadratas = ''
let z = 1

while (z <= plotas) {
    kvadratas += '*';
    if (z % 100 == 0) {
    kvadratas += '<br/>'
    }
    z++
}
document.getElementById('kvadratasas').innerHTML = kvadratas
//18 užduotis

function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

let benasrez= 0
let jovitarez= 0
let matches= 0
let negaliojantis = ""

while(matches< 50) {
    matches++
    let benas = randomSkaicius(10, 20)
    let jovita = randomSkaicius(5, 25)
    
    benasrez += benas
    jovitarez += jovita

   if (benas == 12 || jovita == 12)  {
   benasrez -= benas;
   jovitarez -= jovita;
   negaliojantis += `Partijos numeris ${matches} <br/>`
}
if (benasrez >=222 && jovitarez >= 222){
    document.getElementById("nugaletojas").innerHTML = `Lygu, abu Žaidėjai vienu metu perkopė 222 taškus`
    break;
    }
if (jovitarez >=222) {
    document.getElementById("nugaletojas").innerHTML = `Nugalėtojas Jovita, surinktas taškų skaičius ${jovitarez}. Pralaimėjo Benas su taškų skaičiumi ${benasrez}`
    break;
    }
if (benasrez >=222) {
   document.getElementById("nugaletojas").innerHTML = `Nugalėtojas Benas, surinktas taškų skaičius ${benasrez}. Pralaimėjo Jovita su taškų skaičiumi ${jovitarez}`
   break;
   }


}
document.getElementById("matches").innerHTML = matches
document.getElementById("negaliojantis").innerHTML = negaliojantis
