window.addEventListener("load",function(){
    let d= new Date();
    this.document.querySelector("#fecha").innerHTML=d.getDate()+" / "+(d.getMonth()+1)+ " / "+ d.getFullYear();this.document.querySelector("#hora").innerHTML= d.getHours()+" : "+d.getMinutes()+ ": "+ d.getSeconds();

    let fNacimiento=new Date(1998,7,3,11,24);
    this.document.querySelector("#fNaci").innerHTML=fNacimiento;
    this.document.querySelector("#fcorta").innerHTML=fNacimiento.toLocaleDateString("es-es")+ " "+ fNacimiento.getHours();

    fNacimiento.setHours(10);
    this.document.querySelector("#fcorta2").innerHTML=fNacimiento.toLocaleDateString()+ " "+fNacimiento.getHours();


    let beaM= new Date("1998/7/3");
    let beaL= new Date("1992/5/8");

    if(beaM<beaL){
        console.log("La mayor es Bea Mena");
    }else{
        console.log("La mayor es Bea López");
    }

/*beaL.setFullYear(beaL.getFullYear()+50)
console.log(beaL.getFullYear());

beaM.setFullYear(beaM.getFullYear()+50) 
console.log(beaM.getFullYear());*/

//EJERCICIO DE EDADES Y FECHAS
//Calcular la edad actual y después, calcular cuantos años faltan para jubilarse, teniendo en cuenta que la edad de jubilación son 67 años

//edad actual: 31
let hoy= new Date()
let edadActualBeaL=hoy.getFullYear()-beaL.getFullYear(); 
console.log(edadActualBeaL);

//años restantes hasta jubilarse: 36
let edadJubBeaL=67-edadActualBeaL;
console.log(edadJubBeaL);

//año en el que se jubilará:2059
let fechaJubile=hoy.getFullYear()+edadJubBeaL;
console.log(fechaJubile);


console.log(beaM.getFullYear()+70);




let boton=this.document.querySelector("#boton");
boton.addEventListener("click", function(){
    let fechaInp=document.querySelector("#fechaInp").value;
//otra forma de sacarlo sería: let fechaInt= new Date(document.querySelector("#fechaInp").value); 
//console.log(fechaInp.toLocaleDateString());
//De esta forma, SOLO USAMOS UNA VARIABLE


    console.log(fechaInp);
    console.log(typeof(fechaInp));
let fechaForm=new Date(fechaInp);
console.log(fechaForm.toLocaleDateString());


});


});
