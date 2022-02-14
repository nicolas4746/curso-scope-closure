a = 2;          /*  var a;*/ 
var a;          /* a = 2; */
console.log(a);/* imprime 2 */
/* el hoisting eleva nuestras declaraciones,por ej quedaria como lo comentado  arriba.Esto lo hace al momento de compilar nuestro codigo antes de ser interpretado por el navegador. */

console.log(a);
var a = 2;/* imprime undefined */

function nameOfDog(name) {
    console.log(name);
} 
nameOfDog('Elmo');/* imprime Elmo */


nameOfDog('Elmo');
function nameOfDog(name) {
    console.log(name);
} /* imprime Elmo tambien */
/* se lee todo el codigo y el hoisting levanta las funciones  y la guarda en memoria,esto hace que se guarde la funcion nameofdog en memoria y se pueda llamar antes de esta sin problemas porque ya esta en memoria */


