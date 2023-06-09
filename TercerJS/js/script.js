let dias=["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]

document.getElementById("dia0").innerHTML=dias[0];
document.getElementById("dia1").innerHTML=dias[3];

/*EJERCICIO DE REPASO:Realizar un array con los meses del año y mostrar por pantalla al menos 3 meses de veranoç*/

let meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

document.getElementById("mesdeverano").innerHTML=meses[5]
document.getElementById("mesdeverano1").innerHTML=meses[6]
document.getElementById("mesdeverano2").innerHTML=meses[7]

/*PARA UNIR VARIOS*/
document.getElementById("mesdeverano3").innerHTML=meses[7]+ " - "+meses[8] + " - "+meses[9]


/*A partir del siguiente array que se proporciona:*/
let valores=[true, 5, false, "hola", "adios", 2];
/*Determina cual de los dos elementos numéricos es mayor utilizando exclusivamente los dos valores booleanos del array. 
Determinar los operadores necesarios para obtener un resultado true y otro resultado false.
Determinar el resultado de las cinco operaciones matemáticas con los dos elementos numéricos*/

let resultado1=valores[1]>valores[5]? "El valor del índice 1 es mayor":"El valor del índice 5 es mayor";
document.getElementById("resultado1").innerHTML=resultado1;

let resultado2=valores[0]|| valores[2];

document.getElementById("resultado2").innerHTML=resultado2;

let resultado3=valores[0] && valores[2];

document.getElementById("resultado3").innerHTML=resultado3;

let suma=valores[1]+valores[5];
document.getElementById("suma").innerHTML=suma;

let resta=valores[1]-valores[5];
document.getElementById("resta").innerHTML=resta;

let multiplicacion=valores[1]*valores[5];
document.getElementById("multiplicacion").innerHTML=multiplicacion;

let division=valores[1]/valores[5];
document.getElementById("division").innerHTML=division;

let porcentaje=valores[1]%valores[5];
document.getElementById("porcentaje").innerHTML=porcentaje;


/*REPASO OPERADORES DE INCREMENTO
++valores[1]->6
--valores[1]->5
valores[1]+=valores[5]-->7

valores[1]valore[1]+valores[5]->7

/*CONDICIONAL IF-ELSE*/
//condición
let edad=17;
//grupo de instrucciones
if(edad>=17){
    ++edad;
    let cumple="El año que viene tendrás " + edad;
    let mensaje="Puedes entrar a la discoteca";
document.getElementById("mensajes").innerHTML=cumple + " años y "+ mensaje;

//sino se cumple la condición:
}else{
    let mensaje="Espera un poco"
document.getElementById("mensajes").innerHTML=mensaje;
}


let mostrar=true;
if(mostrar){//mostrar=true
    document.getElementById("mostrado").innerHTML= "Entro al if porque mostrado es true";
}else{
    document.getElementById("mostrado").innerHTML="NO entro al if, sino al Else, porque mostrado es falso";
}

//Cuando necesitamos evaluar la negación de un booleano (True/false), utilizamos el símbolo ! antes de la variable
if(!mostrar){ //mostrar==false
    document.getElementById("mostrado2").innerHTML= "Entro al if porque mostrado es false";
}else{
    document.getElementById("mostrado2").innerHTML="NO entro al if, sino al Else, porque mostrado es true";
}

/* EJERCICIO CONDICIONALES
let numero1=5
let numero2=8;
if(...){
    alert("numero1 no es mayor que numero2");
}
 if(...){
    alert("numero2 es positivo");
 }

 if(...){
    alert("numero1 negativo o distino de cero");
 }
 if(...){
    alert("Incrementar en 1 unidad el valor numero1 no lo hace mayor o igual que numero2");
 }*/

 let numero1=5;
 let numero2=8;
 if(numero1<numero2){
    document.getElementById("menor").innerHTML="El n1 es menor que el n2 ";
 }

 if(numero2>=0){
    document.getElementById("positivo").innerHTML= "El n2 es positivo ";
 }

if(numero1!=0 || numero1<0){
    document.getElementById("negativo").innerHTML="El n1 es negativo o distinto de 0";
}
 if(++numero1<=numero2){
    document.getElementById("nomayor").innerHTML="Incrementar en 1 unidad el valor n1 no lo hace mayor o igual que el n2 ";
 }

/*Existe la opcion de anidar if-else if-else
También, exite la posibilidad de evaluar dos condiciones

Si eres <12 eres pequeño, si eres <19 eres adolescente, si eres <35 sigues siendo joven 
y sino...... Cuidate mucho*/

let nEdad=24;
let mnsEdad;
if(nEdad<12){
   mnsEdad="Aún eres pequeñito";
}else if(nEdad<19){
    mnsEdad="Eres adolescente";
}
else if(nEdad<35){
    mnsEdad="Todavía eres jóven, aprovecha el tiempo! :)";
}
else{
    mnsEdad="Cuidate mucho!";
}
document.getElementById("mnsEdad").innerHTML=mnsEdad;

