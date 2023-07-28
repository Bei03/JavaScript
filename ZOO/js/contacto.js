//variables globales, es decir, que pueden ser leídas por todas las funciones
    let mensajeError=document.querySelector("#mensaje");
    let msn=""; //las cadenas de mensajes de errores

window.addEventListener("load", ()=>{
    let seleccion=document.querySelector("#formCto");

//declaramos los div ocultos
    let divTel=document.querySelector(".telOculto");
    let divEmail=document.querySelector(".emailOculto");
    let divCorreo=document.querySelector(".correOculto");
    seleccion.addEventListener("change", ()=>{
        let valorSeleccion=seleccion.value;
        switch(valorSeleccion){
            case "telefono":{ //se pone lo mismo que ponga en la etiqueta value del html
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
            case "correoPostal":{
                divCorreo.style.display="block";
                divEmail.style.display="none";
                divTel.style.display="none";
                break;
            }
            default:{
                divCorreo.style.display="none";
                divEmail.style.display="none";
                divTel.style.display="none";
            }
        }

    })


    //LEER EL RESTO DEL FORMULARIO
    let boton=document.querySelector("#boton"); //si pulsa el boton, realiza lo de abajo
    boton.addEventListener("click", ()=>{

  
    let nombre=document.querySelector("#nombre");
    let apellido=document.querySelector("#apellido");
    let mensaje=document.querySelector("#mensaje");

    /* PARA VERIFICAR QUE LO LEE: 
    console.log(nombre + " " + apellido + " " + mensaje);  */

    validarNombre(nombre);
    validarApellido(apellido);

    //leemos los valores del select
    let telefono=document.querySelector("#telefono");
    let email=document.querySelector("#email");
    let direccion=document.querySelector("#direccion");

    validarFormCto(telefono, email, direccion);

    //para quitar el rojo de erros cuando pulsamos click en la cajetilla
    let inputs=document.querySelectorAll(".entrada");
    inputs.forEach(items=>{
        items.addEventListener("focus", ()=>{
            items.style.background="#fff";
            items.style.borderColor="#000";
        })
    })


})
})

function validarNombre(nombre){
    if(nombre.value==null || nombre.value=="" || nombre.value==" "){
        msn="Indique un nombre válido"
        nombre.style.background="pink";
        nombre.style.borderColor="red";
        nombre.setAttribute("placeholder", "Escribe un nombre correctamente")
    }
}
function validarApellido(apellido){
    if(apellido.value==null || apellido.value=="" || apellido.value==" "){
        apellido.style.color="red";
        apellido.style.background="pink";
        apellido.style.borderColor="red";
        apellido.setAttribute("placeholder", "Escribe un apellido correctamente")
    }
}
function validarFormCto(telefono, email, direccion){
    if(telefono.value=="" || email.value=="" || direccion.value==""){
        let seleccion=document.querySelector("#formCto");
        seleccion.style.background="pink";
        seleccion.style.borderColor="red";
        seleccion.setAttribute("placeholder", "Escribe un mensaje coherente")
    }
}