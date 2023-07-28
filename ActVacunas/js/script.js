
window.addEventListener("load", ()=>{
    let seleccion=document.querySelector(".entrada");
    let mensaje="";
    seleccion.addEventListener("change", ()=>{
   let valorseleccion=seleccion.value;
   console.log(valorseleccion);
   switch(valorseleccion){
    case "2meses": {
        console.log(document.querySelector("#vacunas"));
        document.querySelector("#vacunas").innerHTML="HB: Vacuna frente a hepatitis B <br>DTPa: Vacuna frente a difteria, tétanos y tosferina acelular de alta carga antigénica<br>VPI: Vacuna frente a poliomielitis <br>Hib: Vacuna frente a enfermedad por haemophilus infl uenzae b<br>VNC: Vacuna conjugada frente a enfermedad neumocócica<br>Men B: Vacuna conjugada frente a enfermedad meningocócica por serogrupo B<br>";
        break;
    }
    case "4meses":{
        document.querySelector("#vacunas").innerHTML="HB: Vacuna frente a hepatitis B <br>DTPa: Vacuna frente a difteria, tétanos y tosferina acelular de alta carga antigénica <br>VPI: Vacuna frente a poliomielitis <br> Hib: Vacuna frente a enfermedad por haemophilus infl uenzae b <br> VNC: Vacuna conjugada frente a enfermedad neumocócica <br> Men C: Vacuna conjugada frente a enfermedad meningocócica por serogrupo C <br>Men B: Vacuna conjugada frente a enfermedad meningocócica por serogrupo B";
        break;
    }

    case "11meses":{
        document.querySelector("#vacunas").innerHTML="HB: Vacuna frente a hepatitis B <br>DTPa: Vacuna frente a difteria, tétanos y tosferina acelular de alta carga antigénica <br>VPI: Vacuna frente a poliomielitis <br> Hib: Vacuna frente a enfermedad por haemophilus infl uenzae b <br> VNC: Vacuna conjugada frente a enfermedad neumocócica <br>";
    break;
    }

    case "12meses":{
        document.querySelector("#vacunas").innerHTML="Men C: Vacuna conjugada frente a enfermedad meningocócica por serogrupo C <br> Men B: Vacuna conjugada frente a enfermedad meningocócica por serogrupo B <br> SRP: Vacuna frente a sarampión, rubeola y parotiditis (triple vírica)";
    break;
    }

    case "15meses":{
        document.querySelector("#vacunas").innerHTML="VVZ: Vacuna frente a varicela";
    break;

    }

    case "4años":{
        document.querySelector("#vacunas").innerHTML="VVZ: Vacuna frente a varicela <br> SRP: Vacuna frente a sarampión, rubeola y parotiditis (triple vírica)";
    break;
    }

    case "6años":{
        document.querySelector("#vacunas").innerHTML="DTPa: Vacuna frente a difteria, tétanos y tosferina acelular de alta carga antigénica <br> VPI: Vacuna frente a poliomielitis ";
    break;
    }
    case "12años":{
        document.querySelector("#vacunas").innerHTML="Men ACWY: Vacuna conjugada frente a enfermedad meningocócica por serogrupos A, C, W e Y <br> VVZ: Vacuna frente a varicela <br> VPH: Vacuna frente a virus del papiloma humano";
        break;
    }
    case "14años":{
        document.querySelector("#vacunas").innerHTML="Td: Vacuna frente a tétanos y difteria";
        break;
    }


default: {
    document.querySelector("#vacunas").innerHTML="Debe seleccionar la edad"}

   }
  let boton=document.querySelector("#button-73")
  boton.addEventListener("click",()=>{
    document.querySelector("#vacunas").style.fontSize="x-large"
  })
    })
   
})