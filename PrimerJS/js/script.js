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


/*La siguiente funcion muestra una alerta e inserta un parrafo en el lugar dnde se identifica id=parrafo2*/

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

document.getElementById("suma2").innerHTML= "El valor de x es" + x + "  .El valor de y es " + y + " y la suma de estos dos valores es " + (x+y);
}


document.getElementById("suma").innerHTML=sumar(45, 23);
function sumar (a,b){
    return a+b;
}


var nombreAlumno="Bea Guapa";
console.log(nombreAlumno);

var nombreAlumno="Bea Reina";
console.log(nombreAlumno);

let nombrePadre="Pedro Mena";
console.log(nombrePadre);

function otroNombre(){
    let nombrePadre="Gonzalo León";
    console.log("Dentro de la variable"+nombrePadre);
}

otroNombre();
console.log("Fuera de la variable"+nombrePadre)

let cadena="esto es \"muy importante\" para ti.";
console.log(cadena);

let cadena2="esto también es 'muy importante' para mi.";
console.log(cadena2);

//módulo, operacion matematica

x=10;
y=2;
let modulo=10%2;
console.log("El modulo entre 10/2 es" + modulo);
//console.log("El modulo entre " + print(x) + "/" + print(y) + "es =" + modulo);
//document.write("El modulo entre " + x + "/" y + "es =" + modulo);

let operacion=(x+2)*2-(y/3);
console.log(operacion);

//para concatenar cadenas de caracteres se utiliza +=

cadena+=cadena2;
console.log(cadena);

//operador exponente
x=y**10;
console.log(x);

//operador incremento
++y;
console.log(y);

//operador decremento
--y;
console.log(y);

//CONSTANTES: no cambian en el resto del programa, se declara con la "palabra reservada" const y se debe asignar su valor cuando es declarada. Las palabras reservadas son las palabras propias del lenguaje, es decir, let, var, const... 
//LAS CONSTANTES SE DECLARAN EN MAYUSCULAS

const PI=3.141618;
const MONEDA=5;

//Área de un círculo es area=r**2xPI
let area=(50**2)*PI;
document.write("El área de una circunferencia de radio 50 es "+area);

