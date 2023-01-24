let frase= prompt("Escribe una frase:");
let numeroVocales = "";

contarVocales(frase);
document.write("El numero de vocales es " + numeroVocales);

function contarVocales(frase){

    numeroVocales = frase.replace(/[bcdfghjklmnpqrstvwxyz ]/g, '');
    numeroVocales = numeroVocales.length;
}