
//SWITCH-CASE
let dia=new Date().getDay();
console.log(dia);
let diaS; //declaramos una variable donde guardamos el nombre del dá
switch(dia){
    case 1:
        diaS="Lunes";
        break;
    case 2:
        diaS="Martes";
        break;

    case 3:
        diaS="Miércoles";
        break;

    case 4:
        diaS="Jueves";
        break;

    case 5:
        diaS="Viernes";
        break;

    case 6:

         diaS="Fin de semana";
         break;
    
    default:
        diaS="Este día no existe"
}
document.getElementById("dia").innerHTML=diaS;


//Ejercicio: de la base de la puntuación numérica de los alumnos, indicamos que del 0 al 4->Insuficiente, del 5 al 6->Bien, del 7 al 8->Notable y del 9 al 10->Sobresaliente
function indicaTuNota(){
    document.getElementById("resultado").innerHTML="";
    document.getElementById("error").innerHTML="";

let nota=parseInt(document.getElementById("notaS").value);
 
console.log(nota);
let notaS;
switch(nota){
    case 0:
        case 1:
            case 2:
                case 3:
                    case 4:
        notaS="Insuficiente";
        break;
    case 5:
        case 6:
        notaS="Bien";
        break;

    case 7:
        case 8:
        notaS="Notable";
        break;
    
    case 9:
        case 10:
        notaS="Sobresaliente";
        break;

    default:
        notaS="O te pasas o no llegas"
}
document.getElementById("nota").innerHTML=notaS;
}


/*for(let i=1; i<10: i++)

EJERCICIO DE REPASO: Mostrar en consulta los numeros del 1 al 20 de mayor a menor*/

for (let i=20; i>0; i=i-2){
console.log(i);
}


//bucle for each
function cambiarColor(){
let colores=["blue", "pink", "orange", "black", "yellow", "purple"];
let indice=parseInt(document.getElementById("numero").value);
--indice;
for(let i=0;i<colores.length; i++){ //muy importante length es la longitud, en este caso, de colores
    if(i==indice){ 
        //i contiene el indice del elemento en el array
        //este bucle se utiliza cuando queremos indicarle un índice, por ejemplo, que empiece por 3
        //cambiar el color al div caja
        document.getElementById("caja").style.backgroundColor=colores[i];
        document.getElementById("dia").style.color=colores[i];
    }
}
    //recorrer el array con for of
    for (let i of colores){ 
        //de esta forma, se recorrer todos los elementos del array
        //en este caso, i contiene el valor, no el índice
        document.getElementById("caja2").style.backgroundColor=i;
        document.getElementById("caja2").style.transition="width 2s, height 2s, transform 2s";
/*transition-property:width;
transition-duration:2s;
transition-property:height;
transition-delay: 2s;*/
        document.getElementById("caja2").style.transform="rotate(180deg)";
    }
}                                                                         