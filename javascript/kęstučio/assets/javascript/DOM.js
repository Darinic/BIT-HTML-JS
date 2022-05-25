//1
//Tamsiai žaliai nuspalvinti h1 tagą;

document.getElementsByTagName("h1")[0].style.color = 'darkgreen';

// document.querySelector('h1').style.color = 'darkgreen';

//2
//Tagui i pridėti klasę small;

document.querySelector('i').classList.add('small');

//3
// Iš tago h1 pašalinti klasę main;

document.getElementsByTagName('h1')[0].classList.remove('main')

//4 
//Tik tam h2 tagui, kuris iškart eina po h1 tago, pridėti klasę first ir pašalinti klasę main;

document.querySelector('h1 + h2').classList.add('first');

document.querySelector('h1 + h2').classList.remove('main');

//5
//Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai

document.querySelector('h2 > span:first-of-type').style.fontSize= '10px';
document.querySelector('h2 > span:first-of-type').style.color= 'grey';

//Elemetų grupės (nodeList) skaičiavimus išvest į consolę

//1
//Suskaičiuoti kiek yra h2 tagų;

let pirmas = document.getElementsByTagName('h2').length

console.log(pirmas)
//2
//Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first

let antras = document.querySelectorAll('h2.first').length;

console.log(pirmas-antras)

//3
//Visus h2 tagus nuspalvinti šviesiai mėlynai

document.querySelectorAll('h2').forEach(e=> e.style.color='lightblue');

//4
//Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;

document.querySelectorAll('div.prices > h2').forEach(e=>e.classList.add('price-tag'));

//5
//Pabraukti visus tagus su klase new;

document.querySelectorAll('.new').forEach(e=> e.style.textDecoration = "underline");

console.log(document.getElementsByClassName('new'));

//6 uzdavinys
//Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);

let gyvunai= document.querySelectorAll('ul').length;

console.log(gyvunai);

let zirafos= document.querySelectorAll('ul#zirafos > li').length-1;

console.log(zirafos)

//7 uzdavinys
//Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;

document.querySelectorAll('ul').forEach(e=> {
    e.style.border = 'solid 2px black';
    e.style.padding = "15px 50px"}
)
//8 uzdavinys
//Suskaičiuoti kiek yra naujų gyvūnų (su klase new);

let ats= document.querySelectorAll('ul > li.new').length;

console.log(ats)

//9 uzdavinys
//Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;

let pirmas1 = document.querySelectorAll('ul#zirafos >li.new').length

console.log(`Pas zirafas yra ${pirmas1} naujų gyvūnų `);

let antras1 = document.querySelectorAll('ul#plesrunai >li.new').length

console.log(`Pas Plešrūnus yra ${antras1} naujų gyvūnų `);

let trecias = document.querySelectorAll('ul#gyvates >li.new').length

console.log(`Pas Gyvates yra ${trecias} naujų gyvūnų`);

let ketvirtas = document.querySelectorAll('ul#zoliaedziai >li.new').length

console.log(`Pas zoliaedziai yra ${ketvirtas} naujų gyvūnų`);

//3 uzdavinys
//a Padaryti tai ką liepia mygtukai Header1 sekcijoje;

function paintGreen(){
    document.getElementsByTagName('h1')[0].style.color = 'green';
}
document.getElementById("h1-color").addEventListener('click', paintGreen);

function setTo10(){
    document.getElementsByTagName('h1')[0].style.fontSize = '10px';
}
document.getElementById("h1-font").addEventListener('click', setTo10);

//b
//Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;

function bolder(){
    document.getElementsByTagName('i')[0].style.fontWeight= 'bold'
}
document.getElementsByTagName('i')[0].addEventListener('click', bolder);

//c
//Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;

function changeColor() {
    let elem =document.querySelectorAll('.prices')[0].style.backgroundColor;
    if(elem == 'white' || elem == undefined || elem == '' || elem == null){
        document.querySelectorAll('.prices')[0].style.backgroundColor = 'grey'
}else {
    document.querySelectorAll('.prices')[0].style.backgroundColor = 'white'
}}

document.querySelectorAll('.prices')[0].addEventListener('click', changeColor);

//d uzdavinys
//Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;

function paintOrange() {
    document.getElementById('contacts').style.color ='orange'
}
document.getElementById('contacts').addEventListener('click', paintOrange)

//e uzdavinys
//Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;

function enlarge() {
    document.getElementById('contacts').style.fontSize ='20px';
}
document.querySelector('#contacts > u').addEventListener('click', enlarge)

//f uzdavinys
//Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos 

function remove(ev) {
    document.querySelectorAll('#contacts')[0].style.fontSize = '12px';
    document.querySelectorAll('#contacts')[0].style.color ='black';
    ev.stopPropagation();
}
document.querySelectorAll('#contacts >b')[0].addEventListener('click', remove);

//g uzdavinys
//Padaryti tai ką liepia mygtukai Header2 sekcijoje;

function returnColor() {
    document.getElementsByTagName('h1')[0].style.color ='darkgreen';
}
document.getElementById('h1-color-back').addEventListener('click', returnColor);

function returnFont() {
    document.getElementsByTagName('h1')[0].style.fontSize ='2em'
}
document.getElementById('h1-font-back').addEventListener('click', returnFont);

//4 uzdavinys
// a Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event

function paintRed() {
    document.querySelectorAll('li.new').forEach(e=>e.style.color ='red')
}

document.querySelectorAll('li.new').forEach(e=>e.addEventListener('dblclick', paintRed))

//b Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.

function changeFont() {
    document.querySelectorAll('li:not(.like-button').forEach(e=>e.style.fontSize = '130%')
}

document.querySelectorAll('li:not(.like-button)').forEach(e=>e.addEventListener('click', changeFont))

//c Padaryti, kad paspaudus ant “PATINKA”, atitinkamai (tėvinei) sekcijai būtų priskirta klasė like;

// function addToClass(arg) {
//     document.querySelector(`#${arg} .like-button`).parentNode.classList.add('like');
// }

// document.querySelector('#zirafos .like-button').addEventListener('click', addToClass('zirafos'));
// document.querySelector('#plesrunai .like-button').addEventListener('click', addToClass('plesrunai'));
// document.querySelector('#gyvates .like-button').addEventListener('click', addToClass('gyvates'));
// document.querySelector('#zoliaedziai .like-button').addEventListener('click', addToClass('zoliaedziai'));

document.querySelectorAll('.animals > ul').forEach(e=>{
    e.querySelector('.like-button').addEventListener('click', () =>{
        e.classList.add('like')
    })
})

//5 uzdavinys
//a Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;

let senjorai = document.createElement('h2');

senjorai.innerText = 'Senjorai tik 1.99eur';

document.querySelector('.prices').appendChild(senjorai);

//b Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;

let akcija =document.createElement('h2')
akcija.innerText = "Senjorų grupė iki 10:tik 5.99 eur"
akcija.classList.add('new');
akcija.addEventListener('click', () =>{
akcija.style.backgroundColor = 'green'})
document.querySelector('.prices').appendChild(akcija);

//c Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like

const allUlDom = document.querySelectorAll('.animals > ul');
    allUlDom.forEach(e => {
        const likeBtnDom = e.querySelector('.like-button');
        const li = document.createElement('li');
        const txt = document.createTextNode('NEPATINKA');
        li.appendChild(txt);
        li.addEventListener('click', () =>  e.classList.remove('like'));
        likeBtnDom.after(li);
    });

//d Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2.
//Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. Mygtukai turi daryti tai kas ant jų parašyta

const fieldset = document.createElement('fieldset');
const legend = document.createElement('legend');
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btnText1 = document.createTextNode('Pabraukti H1 tagą');
const btnText2 = document.createTextNode('Nepabraukti H1 tagą');
const legendText = document.createTextNode('HEADER 3');
legend.appendChild(legendText);
fieldset.appendChild(btn1);
fieldset.appendChild(btn2);
btn1.appendChild(btnText1);
btn2.appendChild(btnText2);
fieldset.appendChild(legend);
document.getElementById('contacts').before(fieldset);

btn1.addEventListener('click', () => document.querySelector('h1').style.textDecoration = 'underline');
btn2.addEventListener('click', () => document.querySelector('h1').style.textDecoration = 'none');