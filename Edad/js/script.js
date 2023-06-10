
function indicaTuEdad(){
    document.getElementById("resultado").innerHTML="";
    document.getElementById("error").innerHTML="";

let nEdad=document.getElementById("edad").value;
let mnsEdad="";
let mnsError="";
console.log(nEdad)
if (nEdad=="" || nEdad<0 || nEdad>99){
   mnsError="Indica tu edad REAL"; 
   document.getElementById("error").innerHTML=mnsError;
}else if(nEdad<12){
        mnsEdad="Aún eres pequeñito";
       
    }else if(nEdad<19){
        mnsEdad="Eres adolescente";
    }
    else if(nEdad<35){
        mnsEdad="Todavía eres jóven, aprovecha el tiempo! :)";
    }
    else{
        mnsEdad="Cuidate mucho!";
    }
    
    document.getElementById("resultado").innerHTML=mnsEdad;
}
