//BUCLE WHILE

function primerWhile(){
let num=0;
while (num<=15){
    console.log(num);
    num++;
}

let interruptor=false;
while(!interruptor){
    console.log(interruptor);
    let a="Bea", b="Estefanía";
//si no cambiamos el valor de interruptor a true, nunca termianrá, por lo que:
    if (a != b){
        interruptor=true;
        console.log(interruptor);
    }

}
}
function arrayWhile(){
//Declaramos una constante tipo array de marcas de coches
const cars= ["BMW", "Volvo", "Saab", "Ford"];

//indice que nos va a permitir salir de bucle
let i= 0;

//texto que mostrará con todos los valores según vaya recorriendo el bucle
let text = "";

while (cars [i]){
   text += cars [i]+ " ";
   console.log(text);
   i++;
}
}

//Ejemplo con cadenas
function cadenasWhile(){
let text2="";
while (text2==""){
    text2=prompt('Escribe un nombre');
    console.log(text2);
}
    alert('Salió del bucle');

}

//Ejercicio: Lee un nº hasta que sea par, sino sigue leyendo!
 function numeroParWhile(){
    let num;
    while (num % 2 != 0){;
    num=parseInt(prompt('Escribe un número par'));
    console.log(num);
}
  alert('Gracias')

}
//BUCLE DO WHILE: hacer mientras  
//Ejercicio de comprensión: Pedimos al usuario que escriba el nombre María y mientras que no lo haga, que lo vuelva a repetir 

function nombreDoWhile(){
    let nombre='';
    do{
        nombre=prompt('Contraseña');
    } while (nombre!= 'Beita');
    alert("Toma que toma!")
}

function numeroDoWhile(){
    let text=1;
    let i=1;
    do{
        text += " El número es " + i;
        console.log(text);
    }
    while (i < text); //falso
    console.log("Salió del bucle");
}
