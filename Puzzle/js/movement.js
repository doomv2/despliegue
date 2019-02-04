 function startMovement(){
    var img=document.querySelectorAll("#Game #puzzle td");
    //console.log("confunto img", img);
    for (var i =0; i<img.length;i++){
     
         img[i].addEventListener("click",move,false);
    }
 }
 function move(){
    //console.log("cuadrado",this);
    if(checkResult()){
    showresults();
    }
    var object=$(this);
    var img= object.children();
    $("#empty").append(img);
    object.empty();
    $("#empty").attr("id","");
    object.attr("id","empty");
   
   // console.log("clikada",img);
   // console.log("vacia",$("#empty").attr("class"));

 }

























 function checkResult(){
     var x=1;
   var puzzle= document.querySelectorAll("#puzzle td");
  // console.log("cosas",puzzle);
   for (var i =0; i<(puzzle.length)-1;i++){
    var tabla=$(puzzle[i]).attr("class");
    var img=$(puzzle[i]).children().attr("id");
    console.log("tabla",tabla);
    console.log("img",img);

        if(tabla==img){
              x++;
        }
        console.log(x);
   }
   if(x==14){return true}else{return false};
 }

 function showresults(){
    alert("enhorambiena");

 }