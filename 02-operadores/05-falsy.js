// Short-circuit

// Falso
// False
//0
// ''
// null
// undefinded
// NaN

let nombre = 'Fernando Aguirre';
let username = nombre || 'Anonimo';
console.log(username);

function fn1(){
    console.log('Soy funcion 1');
    return true;
}

function fn2(){
    console.log('Soy funcion 2');
    return true;
}

let x = fn1() && fn2();
