//Función para conocer la longitud de una cadena, incluyendo los espacios:
let cadena1="Hola, cómo están ustedes?";
let nLetras=cadena1.length;
console.log(nLetras);

//Función para concatenar
let cadena2="Bieeeeeeen!";
let cadena=cadena1.concat(cadena2); //es lo mismo que cadena1+cadena2
console.log(cadena);

//Concatenas en un bucle
for(let i=1; i<cadena1.length; i++){
    cadena+=cadena1;  //+= hace que se concadeten ambas cadenas
}
console.log(cadena);

//Función para pasar a mayúsculas una cadena de texto
cadena1=cadena1.toUpperCase();
console.log(cadena1);

//Función para pasar una cadena a minúsculas
cadena1=cadena1.toLowerCase();
console.log(cadena1);


//Función para obtener el carácter que se encuentre en la posición indicada
let letra=cadena1.charAt(0);
console.log(letra);

//  Función indexOf(letra), la cual calcula la posicion en la que se encuentrra la letra indicada, siempre mostrará la primera posición
let posicion=cadena1.indexOf('a');
console.log(posicion);


//Función lastIndexOf()
posicion=cadena1.lastIndexOf('a');
console.log(posicion);

//Función para extraer de una cadena
let subcadena1=cadena1.substring(6,10);
console.log(subcadena1);

//Otro ejemplo, poniendo la posición menor al final
subcadena1=cadena1.substring(6,10);
console.log(subcadena1);

//Funcion split
let cadena3="Hay 15 alumnos y son todos muy listos";
let arrayCadena3=cadena3.split(" ");
console.log(arrayCadena3);
console.log(arrayCadena3[4]);

//para extraer todas las letras de una cadena, indicando el separador vacio""
let array2Cadena3=cadena3.split("");
console.log(array2Cadena3);



//FUNCIONES ÚTILES PARA ARRAYS
//Para conocer la longitud de un array

let miArray=[1,2,3,4,5,6,7,8,9];
let micopiaArray=miArray;
console.log(micopiaArray);
let numElementos=miArray.length;
console.log(numElementos);

//Para unir o concatenar dos arrays
let array3=array2Cadena3.concat(miArray);
console.log(array3);

//Función join que es lo inverso a split en las cadenas, convierte un array en una cadena

let deArrayAcadena=arrayCadena3.join(" ");
console.log(deArrayAcadena);
let miArrayAcadena=miArray.join("-");
console.log(miArrayAcadena);


//funcion pop
let ultimo=miArray.pop();
console.log(ultimo);
console.log(miArray);

//funcion push
miArray.push("Beita");
console.log(miArray);


//funcion shift()
let primero=miArray.shift();
console.log(primero);
console.log(miArray);

//funcion unshift()
let otroValor=5;
miArray.unshift(otroValor);
console.log(miArray);

//funcion reverse
miArray.reverse();
console.log(miArray);

//FUNCIONES CON NÚMERO
//Función NaN
let numero1=10, numero2=5;
let operacion=numero1/numero2;
console.log(numero1/numero2);

if(numero1/numero2!=NaN){
    console.log("Resultado indefinido");
}else{
    console.log(numero1/numero2);
}

if(isNaN(operacion)){
    console.log("Resultado indefinido");
}else{
    console.log("El resultado es->"+ numero1/numero2);
}

//Numeros infinitos
//Infinity,
let numero3=0;
console.log(numero1/numero3);


//Funcion toFixed
let decimales=30.20482058;
console.log(decimales.toFixed(3));
console.log(decimales.toFixed(2));
console.log(decimales.toFixed());


//EJERCICIO DE REPASO: lee un número decimal y devuelvelo convertiendo el . en ,

function cambiar(){
let numero=document.getElementById("numero").value;
console.log(numero);
let elemento=numero.split(".");
console.log(elemento);
//concatenando
let cadenaNumero=elemento[0] + ","+elemento[1];
//con el metodo join
let cadenaNumero2=elemento.join(",");
console.log(cadenaNumero);
console.log(cadenaNumero2);
document.getElementById("numeroDev").innerHTML=cadenaNumero;
}

