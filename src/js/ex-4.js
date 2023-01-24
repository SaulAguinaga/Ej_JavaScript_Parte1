let num1= prompt("Dame un numero", 0);
let num2= prompt("Dame otro numero", 0);
let result=0;

suma(num1, num2);
document.write(`${num1}`+ "+" + `${num2}` + "=" + result);

function suma(num1,num2){
    result = (parseInt(num1)+parseInt(num2));
}