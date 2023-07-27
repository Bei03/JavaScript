window.addEventListener("load", (e)=>{ //estamos diciendo que cuando cargue la página, haga lo siguiente
   e.preventDefault(); //para evitar que se envie el formulario 
   let mensaje=document.querySelector("#mensaje"); 
    let msn="";

    let boton=document.querySelector(".boton");//queryselector cuando solo es 1 elemento, cuando son varios, queryselectorall
    boton.addEventListener("click", ()=>{//una vez declarado el boton, hay que decirle que cuando escuche click tiene que 
        let nombre=document.querySelector("#nombre").value; //se pone almohadilla porque es el id lo que hemos cogido
        console.log(nombre);
        if (nombre=="" || nombre==null){
            msn="El nombre debe rellenarse."    
        }
        let pass=document.querySelector("#pass").value;
        if (pass.length <8 || pass.length>12){
            msn=msn+ "\n La contraseña debe tener mínimo 8 dígitos y máximo 12 ";
            let passStyle=document.querySelector("#pass");
            passStyle.style.border="1px solid red";
            passStyle.style.background="pink";
        }
        mensaje.innerHTML=msn;

        let inputs=document.querySelectorAll(".entrada"); //
        inputs.forEach(items=>{ //foreach hace que por cada elemento/item, escucha si se ha hecho el foco, es decir, pinchas en la cajetilla y los mensajes se borran
        items.addEventListener("focus",()=>{ //focus es entrar en la cajetilla, situarse dentro d eun elemento, poner el foco
            mensaje.innerHTML=" ";
            msn="";
            let passStyle=document.querySelector("#pass");
            passStyle.style.border="1px solid #000";
            passStyle.style.background="#fff";
        }) 
     }) 

    }) 

})



