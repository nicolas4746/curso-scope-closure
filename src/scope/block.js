/* como funciona el scope dentro de un bloque,por ej un IF es un bloque*/
const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
    }
    console.log(fruits1);/* va a imprimir apple porque var tiene alcance local,dentro de una funcion (osea fruits en este caso).En cambio LET Y CONST se establecen dentro del bloque(en este  caso el IF) */
    console.log(fruits2);
    console.log(fruits3);
}
fruits(); 

const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);/* Ahora al mover los console.log dentro del ambito del bloque funcionan todos bien*/    
}
fruits(); 


let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);/*el primer console muestra 2 el valor del bloque(local)
y el segundo muestra 1 por valor global de let en linea 27 del codigo  */


var x = 1;
{
    var x = 2;
    console.log(x);
}
console.log(x);/* Imprime en los dos casos 2 ahora,ya que el valor asignado a x dentro del bloque se transmitio a la variable global */

const anotherFuntion = () => {
    for (var i = 0; i <10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
};

anotherFuntion();  
/* esto imprime diez veces 10,es porque accede al ultimo valor que recorre nuestro for */



const anotherFuntion = () => {
    for (let i = 0; i <10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
};

anotherFuntion();  
/* ahora la variable let se le asigna a ese scope de bloque y devuelve 0,1,2,...9 */