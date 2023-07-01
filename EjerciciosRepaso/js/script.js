/*EJERCICIO 1
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado, una cadena de exto que indicva si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/

function leerDato(){
    let numero=document.getElementById("numero").value;
    if(validarDato(numero)){
        if(numero%2==0){
            document.getElementById("resultado").innerHTML="El número es par";
        }else{
            document.getElementById("resultado").innerHTML="El número es impar";
        }
    }
}


//Los parámetros o atributos que se pasan a una función NO tienen porqué llamarse igual que la función origen
//FUNCIÓN PARA VALIDAR UN NÚMERO, es decir, que se tome un número y no nada más
function validarDato(dato){
    if(isNaN(dato) || dato=="" || dato.includes(" ")){ //PARA NO PERMITIR ESPACIOS, EL INCLUDES
        document.getElementById("resultado").innerHTML="Indique un número, por favor";
    }else{
        return true;
    }
}


/*EJERCICIO 2
Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/

function leerTexto(){
    //lo primero que hay que hacer es declarar el texto
    let texto=document.getElementById("texto").value;
    if(isNaN(texto) && texto!=""){
    validarTexto(texto);
    }else{
        document.getElementById("resultadoTexto").innerHTML="Escribe sólo TEXTO, espabilao!"
    }
}

function validarTexto(texto){
    if(texto==texto.toUpperCase()){
    document.getElementById("resultadoTexto").innerHTML="El texto enviado está en MAYÚSCULAS." + texto.toUpperCase();
    }else if (texto==texto.toLowerCase()){
    document.getElementById("resultadoTexto").innerHTML="El texto está en minúsculas."+ texto.toLowerCase();
    }else{
        document.getElementById("resultadoTexto").innerHTML="El texto está en mayúsculas y minúsculas."
    }
}


/*EJERCICIO 3
Definir una función que determine si la cadena de texto que se le pasa como palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos aportó otro paso natural."*/

function leerPalindromo(){
    let palindromo=document.getElementById("palindromo").value;
    let texto;
    let texto1;
    if(isNaN(palindromo)){
        texto=" PALÍNDROMA";
        texto1="La frase "
    }else{
        texto=" CAPICÚA";
        texto1="El número "
    }
    if(palindromo!=""){

    if (validarPalindromo(palindromo)){
        document.getElementById("resultadoPalindromo").innerHTML=texto1 + palindromo + " es " + texto;
     }else{  
        document.getElementById("resultadoPalindromo").innerHTML=texto1 + palindromo + " NO es " + texto;
   }
}else{
    document.getElementById("resultadoPalindromo").innerHTML="Indica una frase o palabra válida.";

}
}

function validarPalindromo(texto){
//pasar todo a minúscula y eliminar los espacios en blanco
let cadenaOriginal=texto.toLowerCase().replaceAll(" ", "");

//convertir la cadena en un array separado por letras
let letrasEspacios=cadenaOriginal.split("");

//convertir la cadena en un array otra vez separado por letras e invertido
let letrasReves=cadenaOriginal.split("").reverse();
console.log(letrasEspacios);
console.log(letrasReves);

//creamos el array en cadena
let cadena1=letrasEspacios.join("");
let cadena2=letrasReves.join("");

//comparamos las dos cadenas
if (cadena1==cadena2){
    return true;
}else{
    return false;
}
}

