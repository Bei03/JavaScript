/*ESTRUCTURAS DE CONTROL DE FLUJO
Bucle for: La estructura FOR permite repeticiones for(inicializacion;condicion;incremento){

}*/


for(let i=0;i<10;i++){
    console.log(i);
}
console.log("salida del bucle");

/*La idea del funcionamiento de un bucle es la siguiente: mientras la condición se siga cumliendo, repite la ejecución de las instrucciones definidas dentro del for. Además, después de cada repetición, actualiza el valor de las variables que se utilizan en la condición.*/

//EJEMPLO DE UN BUCLE 
function salidaH(){
for (let i=1;i<=6;i++){
    document.write("<h"+i+">"+"Encabezado de nivel "+i+"</h"+i+">");
}
}
/*EJERCICIO FACTORIAL DE UN NÚMERO ENTERO
El factorial de un nº entero n es una operación matemática que consiste en multiplicar todos los factories n x (n-1) x (n-2)....x1. Así, el factorail de 5(escrito como 5!) es igual a: 5!=5x4x3x2x1= 120
Utilizando la estructura for, crea un script que calcule el factorial de un nº entero*/
function calFact(){ //funcion
    let numero=document.getElementById("numero").value;
    //borrar el contenido para que no se queden ahí
    document.getElementById("msnError").innerHTML="";
    document.getElementById("resultadoFact").innerHTML="";
    //verificar que lee correctamente el número
    console.log(numero);
    if(isNaN(numero)){
         //ha cometido eeror al introducir el numero
        let msnError="Indica un número";
        document.getElementById("msnError").innerHTML=msnError;
      
    }else{
         //hacemos el bucle factorial
         let resultado=1; //se inicializa en 1
         for(let i=1; i<=numero; i++){
            resultado*=i;
         }
         document.getElementById("resultadoFact").innerHTML=resultado;
    }
}

function mostrarDias(){
    let dias=["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    for(i in dias){
        etiqueta="etiqueta"+i;
        document.getElementById(etiqueta).innerHTML=dias[i];
    }
}