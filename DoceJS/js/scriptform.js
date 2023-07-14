window.addEventListener("load",function(){
    let formPago=document.querySelectorAll("input[name='fPago']");
    console.log(formPago);
    let divFormTC=document.querySelector("#formTC");
    let divFormB=document.querySelector("#formB");    let divFormPP=document.querySelector("#formPP");

for (let i=0;i<2; i++){
    formPago[i].addEventListener("change", function(){
    divFormTC.style.display="block";
    divFormPP.style.display="none"; 
    divFormB.style.display="none";
 

}


    formPago[2].addEventListener("change", function(){
    divFormTC.style.display="none"; 
    divFormB.style.display="none";
    divFormPP.style.display="block"; 
    

});
})
    formPago[3].addEventListener("change", function(){
    divFormTC.style.display="none"; 
    divFormB.style.display="block"; 
    divFormPP.style.display="none"; 


});

let miInput=this.document.querySelector("#form");
console.log(form);
//validar nombre
miInput[0].addEventListener("input", ()=>{

//para quitar el texto mientras escribo
    miInput[0].setCustomValidity('');
    miInput[0].checkValidity();
});

//mostrar el mensaje de validacion
miInput[2].addEventListener("input", ()=>{
    let hoy=new Date;
    let fVisita= new Date(miInput[2].value);
    console.log(miInput[2].value);
    if (miInput[2].getMonth()<hoy.getMonth() && fVisita[2].getFullYear()<hoy)
})



});
