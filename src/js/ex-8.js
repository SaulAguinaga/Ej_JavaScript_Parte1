let frase= prompt("Escribe una frase:");
let fraseConVocales = "";

transformaAVocales(frase);
document.write("La frase sin consonantes es " + fraseConVocales);

function transformaAVocales(frase){

    fraseConVocales =  frase.replace(/[bcdfghjklmnpqrstvwxyz]/g, '');
}