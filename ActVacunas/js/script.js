window.addEventListener("load", ()=>{
    let seleccion=document.querySelector("#edad");
    let vacunas=document.querySelector("#vacunas");
    let mensaje="";
    seleccion.addEventListener("change", ()=>{
   let valorseleccion=seleccion.value;
   switch(valorseleccion){
    case "2meses": {
        mensaje="HB: Vacuna frente a hepatitis B <br>DTPa: Vacuna frente a difteria, tétanos y tosferina acelular de alta carga antigénica<br>VPI: Vacuna frente a poliomielitis";
        break;
    }
default: {
    mensaje= "Debe seleccionar la edad"}

   }
vacunas.innerHTML=mensaje;
        

    })

})