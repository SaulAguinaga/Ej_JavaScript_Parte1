let numero = 0
let letra="";
let arrayLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

pedirDNI()
document.write(`<h1>${numero}` + `${letra}</h1>`);

function pedirDNI(){
        numero = prompt("Dame un número de DNI");
        comprobarSiEsNumero(numero)
    
}
function comprobarSiEsNumero(numero){
    if(isNaN(numero)){
        alert("El DNI debe ser un numero")
        pedirDNI()
    }
    else{
        calcularLetra(numero)
    }
}
function calcularLetra(numero) {
    let index = numero%23
    letra=arrayLetras[index]
}