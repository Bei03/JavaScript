let valor;
  function calcular(){
    let peso=document.getElementById("peso").value;
    let kilometros=document.getElementById("kilometros").value;
    console.log("kilometros: " + kilometros);
    console.log("peso: " + peso);
    if(validarDatos(peso) && validarDatosk(kilometros)){
    calcularPeso(peso, kilometros)
    }
}
function validarDatos(peso){
    if(isNaN(peso)){
        document.getElementById("resultado").innerHTML="Por favor, seleccione un peso";
        return false;
    }else{
        return true;
    }
}

function validarDatosk(kilometros){
  if(isNaN(kilometros)){
      document.getElementById("resultado").innerHTML="Por favor, seleccione una opción";
      return false;
  }else{
      return true;
  }
}


function calcularPeso(peso, kilometros){
    valor= parseFloat (peso) + parseFloat(kilometros);
 document.getElementById("resultado").innerHTML="El precio final es " + valor.toFixed(2) + "€";
}
