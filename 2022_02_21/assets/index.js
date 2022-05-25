function afrika() {
    return `Hello Africa`;
}

console.log(afrika());

function helloWhat(x) {
    return `Hello ${x}`
}
console.log(helloWhat('Spain'));


function oneTwo(one, two) {
    console.log('Pirmas:', one, 'Antras:', two)
}

oneTwo('Cat', 'Dog')
oneTwo('Barsukas', 'Bebras')

function suma(x, y) {
    let suma = x +y;
    console.log(suma)
}


let funkcija = function suma(x, y) {
    let suma = x +y;
    console.log(suma)
}

let funkcijos = function daugyba(x, y) {
    let daugyba = x +y;
    console.log(daugyba)
}

const calc = [];

calc[0] = function(x, y) {
    let suma = x +y;
    console.log(suma)
}

calc[1] = function(x, y) {
    let daugyba = x *y;
    console.log(daugyba)
}

calc[0](7, 10);
calc[1](7, 10);

console.log(calc)

const helloReturn = function() {
    return 'Hello Africa'
}

let africa = helloReturn();

console.log(africa)