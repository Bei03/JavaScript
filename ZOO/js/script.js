
let arrayImg=new Array(4) //declaramos que este array va a tener 4 elementos
arrayImg[0]=new Image();
arrayImg[0].src="img/fotaza-leones.webp";
arrayImg[1]=new Image();
arrayImg[1].src="img/serpiente.webp";
arrayImg[2]=new Image();
arrayImg[2].src="img/suricato-abrazo.webp";
arrayImg[3]=new Image();
arrayImg[3].src="img/pulpo-comun.webp"
arrayImg[4]=new Image();
arrayImg[4].src="img/zebra-fotaza.webp"

//declaramos un contador que lleve la cuenta de la imagen que se va mostrando, el cual comienza en 1 y terminaá en 4 y de nuevo, volverá al 1 y así

let contador=0;

function cambiarImg(){
  document.querySelector("#banner").src=arrayImg[contador].src;
  contador++;
  //operador ternario
  contador=contador==5?contador=0:contador=contador;
  setTimeout("cambiarImg()", 5000); //se llama a si mismo y así, vuelve a realizar la función
}


function validarForm(){
  alert("Validando...");
}

window.addEventListener("load",()=>{
  let boton=document.querySelector("#boton");
  boton.addEventListener("click", validarForm);
  cambiarImg();
})
