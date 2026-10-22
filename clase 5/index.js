let primerNumero = parseInt(prompt("Ingrese el primer número:"));
let segundoNumero = parseInt(prompt("Ingrese el segundo número:"));
let suma = primerNumero + segundoNumero;
alert("La suma de los dos números es: " + suma);

var parImpar = (primerNumero + segundoNumero) % 2 === 0 ? "par" : "impar";
alert("La suma de los  dos números es: " + parImpar);

switch (parImpar) {
    case "par": alert("la potencia es: " + Math.pow(primerNumero, Math.pow(primerNumero, 2)));
        break;
    case "impar": alert("la potencia del segundo número es: " + Math.pow(segundoNumero, 2));
        break;
    default: alert("no es par ni impar");
        break;
}
alert("El seno del primer número es: " + Math.sin(primerNumero));
alert("El coseno del segundo número es: " + Math.cos(segundoNumero));
alert("La tangente del primer número es: " + Math.tan(primerNumero));