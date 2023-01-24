let num3= prompt("Dame un numero", 0);
let num4= prompt("Dame otro numero", 0);
let numeroMayor=0;

comparar(num3,num4);

document.write(numeroMayor);

function comparar(num3,num4){
    if(num3>num4){
        numeroMayor = "El número "+ num3 + " es mayor que " + num4;
    }else if (num4>num3){
        numeroMayor = "El número "+ num4 + " es mayor que " + num3;
    }else{
        numeroMayor = "Los números son iguales";
    }
    
}