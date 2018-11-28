$(document).ready(function(){
var imagenes= document.querySelectorAll("img");

for(var i=0; i< imagenes.length;i++){
    imagenes[i].addEventListener("mouseover",aColor,false);
    imagenes[i].addEventListener("mouseout",aNegro,false);
}
var boton= document.querySelectorAll(".boton");
for( var i=0; i< boton.length; i++){
    boton[i].addEventListener()
}
})

function aNegro(e){
    $(this).attr("src","FotosBN/"+e.target.id+".png")
}
function aColor(e){
    $(this).attr("src","Fotos/"+e.target.id+".png")
}