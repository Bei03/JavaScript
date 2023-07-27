function calculoimc(){
    let peso= parseFloat(document.getElementById ("peso").value);
    let altura= parseFloat(document.getElementById ("altura").value);


    let imc= peso / (altura*altura);

    let resultadoDiv= document.getElementById("resultado");
    resultadoDiv.innerHTML= "Su IMC es: " +imc.toFixed(2);


let msnIMC="";

 if (isNaN(peso) || isNaN(altura)){
        alert("Pon tus datos en número");
}

if (imc<18.5){
    msnIMC="Usted está extremadamente delgadx";
}else if(imc<24.9 && imc>18.6){
    msnIMC="Usted está en el peso ideal";
}else if(imc<29.9 && imc> 24.5){
    msnIMC="Usted tiene sobrepeso";
}else if(imc<=30 && imc> 24.6){
    msnIMC="POR FAVOR, ADELGACE";
}
document.getElementById("msnIMC").innerHTML=msnIMC;

}