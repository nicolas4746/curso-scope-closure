var hello = 'Hello';
let world = 'Hello World';
const helloWorld = 'Hello World!';

const anotherFuntion = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}
anotherFuntion();




const helloWorld = () => {
    globalVar = 'im global';
}
helloWorld();
console.log(globalVar);
// asignas una variable global a pesar de que esta adentro de una funcion.
// esto es una mala practica.


const anotherFuntion = () => {
    var localVar = globalVar = 'im global';
}
anotherFuntion();
console.log(globalVar);
// la variable tambien es global asi