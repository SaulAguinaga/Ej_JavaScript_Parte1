let num5= prompt("Dame un numero", 0);
let num6= prompt("Dame otro numero", 0);
let num7= prompt("Dame otro numero", 0);
let numeroMayor=0;

comparar(num5,num6,num7);

document.write("El número "+ numeroMayor + " es el número mayor");

function comparar(num5,num6,num7){
    
    numeroMayor = num5;

    if(num6>numeroMayor){
        numeroMayor = num6;
    }
    if(num7>numeroMayor){
        numeroMayor=num7;
    }
    
}