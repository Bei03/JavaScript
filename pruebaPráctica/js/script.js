 alert("Bienvenidos a Disar! Hoy, nueva sección de noticias");

 window.addEventListener("load",function(){
    let d= new Date();
    this.document.querySelector("#fecha").innerHTML=d.getDate()+" / "+(d.getMonth()+1)+ " / "+ d.getFullYear();this.document.querySelector("#hora").innerHTML= d.getHours()+" : "+d.getMinutes()+ ": "+ d.getSeconds();}
 )

 let miInput=this.document.querySelector("#form");

 miInput[0].addEventListener("input", ()=>{
 
     miInput[0].setCustomValidity('');
     miInput[0].checkValidity();
 });
 
 let numero=document.getElementById("nombre").value;
 if (letra==" "){
     let mnsError="Indique su nombre"
     document.getElementById("mnsError").innerHTML=mnsError;
 }

let letra=letras[calLetra];
console.log(letra);
document.getElementById("resultado").innerHTML=numero+"-"+letra;

 