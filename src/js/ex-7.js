let frase= prompt("Escribe una frase:");
let contador = 0;

contarLetraA(frase);
document.write("La letra A se repite " + contador + " veces");

function contarLetraA(frase){

    contador = frase.split("a").length-1;
}