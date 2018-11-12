/*$(document).ready(function(){    
    document.getElementById("img").addEventListener("click",remplace,false);
    document.getElementById("img2").addEventListener("click",remplace2,false);
    document.getElementById("img3").addEventListener("click",remplace3,false);
    document.getElementById("img4").addEventListener("click",remplace4,false);
    document.getElementById("img5").addEventListener("click",remplace5,false);
    document.getElementById("img6").addEventListener("click",remplace6,false);

});
function remplace(){
    $("#img").replaceWith('<img src="Imagenes/carro.jpg" alt="carro">');
}
function remplace2(){
    $("#img2").replaceWith('<img src="Imagenes/carro.jpg" alt="carro">');
}
function remplace3(){
    $("#img3").replaceWith('<img src="Imagenes/carro.jpg" alt="carro">');
}
function remplace4(){
    $("#img4").replaceWith('<img src="Imagenes/carro.jpg" alt="carro">');
}
function remplace5(){
    $("#img5").replaceWith('<img src="Imagenes/carro.jpg" alt="carro">');
}
function remplace6(){
    $("#img6").replaceWith('<img src="Imagenes/carro.jpg" alt="carro">');
}
*/

$(document).ready(function(){
    var Imagenes=document.querySelectorAll("table img");
for(var i=0; i<Imagenes.length;i++){
    Imagenes[i].addEventListener("click",remplace,false);
}

})
function remplace(i){
    if(i.target.id=="img0"){
        $("#img0").replaceWith("<img src='Imagenes/carro.jpg'>");

    }else if(i.target.id=="img1"){
        $("#img1").replaceWith("<img src='Imagenes/carro.jpg'>");
    }else if(i.target.id=="img2"){
        $("#img2").replaceWith("<img src='Imagenes/carro.jpg'>");
    }else if(i.target.id=="img3"){
        $("#img3").replaceWith("<img src='Imagenes/carro.jpg'>");
    }else if(i.target.id=="img4"){
        $("#img4").replaceWith("<img src='Imagenes/carro.jpg'>");
    }else if(i.target.id=="img5"){
        $("#img5").replaceWith("<img src='Imagenes/carro.jpg'>");
    }
    
}