const helloWorld = () => {
    var hello = "Hello World";
    console.log(hello);//este si lo imprime porque usa scope local (dentro de un bloque o funcion)
}

helloWorld();
console.log(hello);// este lo lo imprime porque esta como global y no encuentra el valor de hello que es solo local.



var scope = "i am global";

const funtionScope = () => {
    var scope = " i am just local ";
    const func = () => {
        return scope
    }
    console.log(func());
};
funtionScope();// imprime i am just local (ambito LEXICO mi funcion tiene acceso a esta var de la funcion )
console.log(scope);// imprime i am global