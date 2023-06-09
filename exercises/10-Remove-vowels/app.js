// Your code goes here
const rapid = (texto) => {
    let resultado = texto.toUpperCase()
    let remplazo = resultado.replaceAll(/[aeiou]/gi,"")
    return remplazo
}

//references
// https://www.w3schools.com/js/js_string_methods.asp
// https://www.w3schools.com/js/js_regexp.asp
// i for case insensitive
// g Perform a global match, not only first one

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));

let str2 = "Maria Martha";
console.log(rapid(str2));
