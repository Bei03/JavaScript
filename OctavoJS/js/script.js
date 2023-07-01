function sumar(){
    let a=5, b=3;
    let suma=a+b;
    return suma;
}
console.log(sumar());

function sumar2(){
    let suma=a+b;
    return suma;
}
let a=12, b=15;
console.log(sumar2());

//FUNCIÓN CON ARGUMENTOS O VALORES QUE RECIBE
function multiplicar(primerN,segundoN) {
    return primerN*segundoN;
}
//para que se ejecute, debemos psar los argumentos que necesita para realizar la operación:
console.log(multiplicar(25,3));
console.log(multiplicar(3,21));
console.log(multiplicar);

function dividir(primerN,segundoN){
    return segundoN/primerN;
}
console.log(dividir(5,0));

/**EJERCICIO 1: Calcula el precio + iva de los siguientes productors:
leche= 0.76
agua=1.05
cereales=2.35
mermelada=1.96

tomando en cuenta que el iva es el 4%*/

function iva (producto){
    let iva=1.04;
    return producto*iva;
}
console.log(iva(0.76).toFixed(2));//PARA QUE SE REDONDEE A DOS DECIMALES, HAY QUE ESPECIFICARLO EN LA LLAMADA DE LA FUNCIÓN
console.log(iva(1.05).toFixed(2));
console.log(iva(2.35).toFixed(2));
console.log(iva(1.96).toFixed(2));

a=multiplicar(4,85);
console.log("a="+a);
b=dividir(64,32);
console.log("b="+b);
let r3=sumar2();
console.log(r3)






























/*EJERCICIO DE EXAMEN, GASTOS DE ENVÍO MÁS IVA
*/

//primero, declaramos el iva como una constante y global
const iva2=1.21;
let valor

/*1º funcion es llamada desde html y enviada
    a.validar el dato introducido (2º funcion)
    a.1. si el dato es incorrecto, envia mensaje de error
    a.2. si es correcto, envia el dato a la 3º1 funcion calcularprecio, que mostrata el resultado del calculo*/
    
function calcular(){
    let peso=document.getElementById("peso").value;
    validarDatos(peso);
    if(validarDatos(peso)){
    calcularPeso(peso);
    }
}
function validarDatos(peso){
    if(isNaN(peso)){
        document.getElementById("resultado").innerHTML="Por favor, escriba el peso en números";
    }else{
        return true;
    }
}

function calcularPeso(peso){
    if (peso<=1){
        valor=(11.82*iva2).toFixed(2);
    }

    if(peso>1 && peso<=5){
        valor=(14.59*iva2).toFixed(2);
    }

    if(peso>5 && peso<=10){
        valor=(19.09*iva2).toFixed(2);
    }

    if(peso>10 && peso<=15){
        valor=(22.73*iva2).toFixed(2);
    }

    if(peso>15 && peso<=20){
        valor=(27.69*iva2).toFixed(2);
    }

    if(peso>20 && peso<=25){
        valor=(32.77*iva2).toFixed(2);
    }

    if(peso>25 && peso<=30){
        valor=(37.73*iva2).toFixed(2);
    }


    if(peso>30){
    document.getElementById("resultado").innerHTML="Debe consultar con la oficina";
    }else{
 document.getElementById("resultado").innerHTML="El precio final es " + valor+ "€";
}
}