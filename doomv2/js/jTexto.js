$(document).ready(function(){    
    var zoomIn = document.querySelectorAll(".zoomIn");
    for (var index =0; index < zoomIn.length; index++) {
        zoomIn[index].addEventListener("click",zoomInf,false);        
    }
    var zoomOut = document.querySelectorAll(".zoomOut");
    for (var index =0; index < zoomOut.length; index++) {
        zoomOut[index].addEventListener("click",zoomOutf,false);        
       }
})
function zoomInf(e){
    var texto=e.target.id;
    console.log(texto);
    $("#Cosa"+texto).css("font-size",(parseFloat($("#Cosa"+texto).css("font-size"))+10));
}
function zoomOutf(e){
    var texto=e.target.id;
    $("#Cosa"+texto).css("font-size",(parseFloat($("#Cosa"+texto).css("font-size"))-10));
}