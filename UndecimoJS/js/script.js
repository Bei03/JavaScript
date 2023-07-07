window.addEventListener("load", ()=>{
    const y = document.querySelector("h2");
    const x = document.querySelectorAll("#intro");
    const z = document.querySelectorAll(".intro");



document.getElementById("demo1").innerHTML= "El primer objeto que tiene la etiqueta hs:" + y.innerHTML; 
document.getElementById("demo2").innerHTML= "El primer objeto que tiene el id intro:" + x[0].innerHTML; 
document.getElementById("demo3").innerHTML= "El primer objeto que tiene la clase intro:" + z[1].innerHTML; 

//leemos el boton
const boton= document.querySelectorAll(".boton");

//si ocurre el evento de click en el boton 0, sustituye la bombilla por la imagen de la bombilla apagada
boton[0].addEventListener("click",()=>{
const bombilla=document.querySelector("#bombilla");
bombilla.src="img/pic_bulboff.gif"
});

//si ocurre el evento de click en el boton 1, sustituye la bombilla por la imagen encendida
boton[1].addEventListener("click",()=>{
    const bombilla=document.querySelector("#bombilla");
    bombilla.src="img/pic_bulbon.gif";
});



});