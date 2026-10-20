
let numeroUno = parseInt(prompt("Ingrese un número"));
let numeroDos = parseInt(prompt("Ingrese otro número para ingresar al sitio"));
let numeroTres = parseInt(prompt("Ingrese un tercer número para ingresar al sitio"));

console.log("Primer número ingresado: " + numeroUno);
console.log("Segundo número ingresado: " + numeroDos);
console.log("Tercer número ingresado: " + numeroTres);

let suma = numeroUno + numeroDos + numeroTres;
let resta = numeroUno - numeroDos - numeroTres;
let multiplicacion = numeroUno * numeroDos * numeroTres;
let division = numeroUno / numeroDos / numeroTres;
let resto = numeroUno % numeroDos % numeroTres;

// Mostrar resultados en la consola
console.log("La suma es: " + suma);
console.log("La resta es: " + resta);
console.log("La multiplicación es: " + multiplicacion);
console.log("La división es: " + division);
console.log("El resto es: " + resto);

// Estructura condicional simple
if (numeroUno > numeroDos && numeroUno > numeroTres) {
    alert("El número mayor es: " + numeroUno);
}

// Estructura condicional doble
if (numeroDos > numeroUno && numeroDos > numeroTres) {
    alert("El número mayor es: " + numeroDos);
}

if (numeroTres > numeroUno && numeroTres > numeroDos) {
    alert("El número mayor es: " + numeroTres);
}

// Determinar si la suma es par o impar
if (suma % 2 === 0) {
    alert("La suma es un número par.");
    console.log("La suma es un número par.");
} else {
    alert("La suma es un número impar.");
    console.log("La suma es un número impar.");
}

// Estructura switch
switch (numeroUno) {
    case 1:
        alert("El número ingresado es 1");
        console.log("El número ingresado es 1");
        break;

    case 2:
        alert("El número ingresado es 2");
        console.log("El número ingresado es 2");
        break;

    case 3:
        alert("El número ingresado es 3");
        console.log("El número ingresado es 3");
        break;

    default:
        alert("El número ingresado no es 1, 2 o 3");
        console.log("El número ingresado no es 1, 2 o 3");
        break;
        case 4:
        alert("El número ingresado es 4");
        console.log("El número ingresado es 4");
        break; 

}
//condicional doble con operadores ternarios
let resultadoMayor = (numeroUno > numeroDos? "El número mayor es: " + numeroUno : (numeroDos > numeroTres ? "El número mayor es: " + numeroDos : "El número mayor es: " + numeroTres));
alert(resultadoMayor);
console.log(resultadoMayor );