window.addEventListener("load", ()=>{
    let seleccion=document.querySelector("#formCto");

//declaramos los div ocultos
    let divTel=document.querySelector(".telOculto");
    let divEmail=document.querySelector(".emailOculto");
    let divCorreo=document.querySelector(".correOculto");
    seleccion.addEventListener("change", ()=>{
        let valorSeleccion=seleccion.value;
        switch(valorSeleccion){
            case "telefono":{
                divTel.style.display="block";
                divCorreo.style.display="none";
                divEmail.style.display="none";
                break;
            }
            case "email":{
                divEmail.style.display="block";
                divTel.style.display="none";
                divCorreo.style.display="none";
                break;

            }
            case "correo":{
                divCorreo.style.display="block";
                divEmail.style.display="none";
                divTel.style.display="none";
                break;
            }
            default:{
                alert("no seleciona nada")
            }
        }

    })
})