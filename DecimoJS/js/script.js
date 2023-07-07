window.addEventListener("load", saludar);
function saludar(){
    alert("Hola a todo el mundo! Hola Doctor Nick!!");
}

window.addEventListener("load", function(){
/*contenido de la funcion anónima al leer el documento*/
console.log(document)
/*para accederr a cada uuno de los elementos*/
const card2=this.document.getElementById("card-2");
console.log(card2);
const elements=this.document.getElementsByTagName("p");
console.log(elements);

/*existen dos formas de convertir un htmlCollection en un array para manipular
    1.let elements=[...document.geteelementbyid("p")];
    2. let elements=array.from(document.getelementbytagname("p"))*/

let elementsDiv=[...this.document.getElementsByTagName("div")];
console.log(elementsDiv);
let elementsParrafo=Array.from(this.document.getElementsByTagName("p"));
console.log(elementsParrafo);

/*Otra forma de acceder */
let primerP=elementsParrafo[0];
primerP.style.backgroundColor="pink";
/*acceder a los elementos siguiendo un evento*/
primerP.addEventListener("click", function(){
    primerP.style.backgroundColor="lightcoral";
});
let segundoP=elementsParrafo[1];
/*Una función anónima, es decir, function(), también se puede utilizar de la siguiente manera:
()=>{
    ..instrucciones
}

*/
segundoP.addEventListener("click",()=>{
   /*para llamar a la funcion random y sustituir el valor dentro de la variable colorFond:*/

   let colorRed=random(255);
   let colorGreen=random(255);
   let colorBlue=random(255);
   let colorFondo="rgba("+colorRed+","+colorGreen+","+colorBlue+",0.5)";
   console.log(colorFondo);
   this.document.body.style.backgroundColor=colorFondo;
});

/*cambiar el titulo de la caja 3 si pulsa click sobre el título*/
let encabezado=Array.from(this.document.getElementsByClassName("titulo"));
console.log(encabezado);

let titulo3=encabezado[2];
titulo3.style.backgroundColor="lightblue";
titulo3.addEventListener("click", function(){
    titulo3.style.backgroundColor="purple";
});
 
/*cambiar el color de todos los encabezados*/
let titulo4=encabezado[3];
titulo4.addEventListener("click", ()=>{
    encabezado.forEach(cambiarColor);
    //foreach es para cada elemento de los de debajo, en este caso, item y index

});


//cambiar la letra a cursiva de los parrafos cuando pulses click en el parrafo 3*/
let tercerP=elementsParrafo[2];
tercerP.addEventListener("click", ()=>{
   elementsParrafo.forEach(cambiarLetra);
});

let div5=elementsDiv[5];
div5.addEventListener("mouseover",()=>{
    div5.style.opacity="0.5";

})
div5.addEventListener("mouseout", ()=>{
    div5.style.opacity="1";
})



//agregar una imagen y hacer lo mismo que el div5


});

function cambiarLetra(item){
    item.style.fontStyle="italic";
}

function cambiarLetra(item,index){
    console.log(item);
    console.log(index);
    item.style.color="orange";
}

function random(numero){
   let result= Math.floor(Math.random()*(numero+1));
   return result;
}
