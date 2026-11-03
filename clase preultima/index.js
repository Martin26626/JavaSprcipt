let numeroUno = parseInt(prompt("Ingrese el primer número:"));
let numeroDos = parseInt(prompt("Ingrese el segundo número:"));

if (numeroUno > numeroDos) {
    alert("El primer número es mayor que el segundo.");
} else if (numeroUno < numeroDos) {
    alert("El segundo número es mayor que el primero.");
} else {
    alert("Ambos números son iguales.");
}
let numeroMayor = 0

if (numeroUno > numeroDos) {
    numeroMayor = numeroUno;
} else {
    numeroMayor = numeroDos;
}
let resultado = 0;

for (let i=0 ;i<100 ; i++) {
    if (i % numeroMayor === 0) {
        console.log(i);
        resultado += Math.pow(numeroMayor, 2);
    }
}
alert("La suma de los cuadrados de los múltiplos de " + numeroMayor + " es: " + resultado);     