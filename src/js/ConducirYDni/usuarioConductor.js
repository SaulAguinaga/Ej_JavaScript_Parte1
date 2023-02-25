let usuario = {
    name: prompt("Dime tu nombre: ", ""),
    edad: prompt("Dime tu edad: ", ""),
    conducir: false
}
mayorDeEdad(usuario.edad);
puedeConducir(usuario.conducir);

function mayorDeEdad(edad) {
    if (edad>17) {
        usuario.conducir = true;
    }
}

function puedeConducir(conducir){
    if (conducir) {
        document.write(`${usuario.name}` + ` puede conducir.`);
    }
    if (!conducir) {
        document.write(`${usuario.name}` + ` NO puede conducir.`);
    }
}