// ej de scope local pero dentro de una funcion
const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
}

fruits();
console.log(fruit);/* not defined porque no tiene scope global pero dentro de una funcion */


const anotherFuntion = () => {
    var x =1;
    var x =2;
    let y =1;
    let y =2;/* las variables con let o const no se puden volver a reasignar dentro de este ambito local. */
    console.log(x);
    console.log(y);
}
anotherFuntion()  ;/* imprime y has been declared */

/* siempre usar let y const para llamar a nuestras var en ambito local y NO VAR (para no reescribir funciones sin querer) */

const anotherFuntion = () => {
    var x =1;
    var x =2;/* var si puede ser reasignado  */
    let y =1;
    console.log(x);
    console.log(y);
} 
anotherFuntion() ;/* imprime 2 (por x) y 1 (por y) */