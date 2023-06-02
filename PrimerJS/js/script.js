alert("-Hola a todo el mundo :) -Hola Doctor Nick")
//Comentarios de línea
/*Comentarios de bloque
*/

let nombre="Beita Mena";
let parrafo=document.getElementById("parrafo");parrafo.innerHTML=nombre;
console.log(nombre);

document.getElementById("demo") .innerHTML="Qué pasa lokis";

//Variables tipo entero
let numero1=45;
let numero2=25;
let suma=45+25;
console.log(suma);

let apellido="Almansa";
nombre=nombre+" "+apellido;
console.log(nombre);
document.getElementById("nuevoNombre").innerHTML=nombre;

numero1="hola"
suma=numero1+numero2;
console.log(suma); //forma de visualizar una salida en javascrpt

function mostrarAlerta(){
    alert("Cuidado!Radiactivo Man");
document.getElementById("parrafo2").innerHTML= "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error molestiae, libero praesentium impedit vel sequi voluptates eaque cumque deserunt non dolorem quis perspiciatis voluptatibus nisi quos nemo quod temporibus totam.";
}


document.getElementById("suma").innerHTML=sumar(32,12)

function sumar(a,b){
return a+b
}




function sumar2(){
//leemos del formulario los valores que ingresen
//casting: cambiar de un tipo a otro... caracteres->numeros
let x= parseInt(document.getElementById("numero1").value);
let y= parseInt(document.getElementById("numero2").value);

document.getElementById("suma2").innerHTML= "El valor de x es" + x + " .El valor de y es " + y + " y la suma de estos dos valores es " + (x+y);
}


document.getElementById("suma").innerHTML=sumar(45, 23);
function sumar (a,b){
    return a+b;
}