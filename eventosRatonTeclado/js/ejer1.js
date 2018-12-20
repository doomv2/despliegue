
 
  document.onmousemove = muestraInformacionRaton;
 document.onkeypress = muestraInformacionTeclado; 
 document.onclick= fondoAmarillo;

 
 
 function muestraInformacionRaton(elEvento){
    var evento = elEvento || window.event;
   var coordenadaCX = evento.clientX;
  var coordenadaCY = evento.clientY;
  var coordenadaPX = evento.pageX;
  var coordenadaPY = evento.pageY;
  document.getElementById("clientex").innerHTML=coordenadaCX;
  document.getElementById("clientey").innerHTML=coordenadaCY;
  document.getElementById("paginax").innerHTML=coordenadaPX;
  document.getElementById("paginay").innerHTML=coordenadaPY; 
  document.getElementById("iTecla").style.backgroundColor="white";
  document.getElementById("iRaton").style.backgroundColor="white";
}
 function muestraInformacionTeclado(elEvento){        
   var evento = elEvento || window.event;
   var caracter=evento.charCode || evento.keyCode;
 document.getElementById("tecla").innerHTML=String.fromCharCode(caracter);
 document.getElementById("info").innerHTML=caracter;
 document.getElementById("iTecla").style.backgroundColor="#CCE6FF";
}
function fondoAmarillo(elEvento){

   var evento = elEvento || window.event;
   var coordenadaCX = evento.clientX;
   var coordenadaCY = evento.clientY;
   if(coordenadaCX >(window.innerWidth/2)){
      document.getElementById("x").innerHTML="Derecha";
   }else{
      document.getElementById("x").innerHTML="Izquierda";
   }
   if(coordenadaCY >(window.innerHeight/2)){
      document.getElementById("y").innerHTML="Abajo";
   }else{
      document.getElementById("y").innerHTML="Arriba";
   }
   document.getElementById("iRaton").style.backgroundColor="#FFFFCC";

}