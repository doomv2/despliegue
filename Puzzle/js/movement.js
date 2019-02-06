 function startMovement(){
    var td=document.querySelectorAll("#Game #puzzle td");
    //console.log("confunto img", img);
    for (var i =0; i<td.length;i++){
      td[i].addEventListener("dblclick",joker,false);
         td[i].addEventListener("click",move,false);
        
    }
 }
 function moveValidator(object){
   //console.log(object);
   var objectClass=object.attr("class");
   objectClass = objectClass.split("-");
   var objectCol= objectClass[1].split(" ");
   objectCol= objectCol[0];
   var objectFila= objectClass[2];
   
   var emptyClass=$("#empty").attr("class");
   emptyClass = emptyClass.split("-");
   var emptyCol= emptyClass[1].split(" ");
  emptyCol= emptyCol[0];
   var emptyFila= emptyClass[2];
   console.log(emptyCol);
   console.log(emptyFila);
   if((objectCol-emptyCol==1&&objectFila-emptyFila==0)||(objectCol-emptyCol==-1&&objectFila-emptyFila==0)||(objectCol-emptyCol==0&&objectFila-emptyFila==1)||(objectCol-emptyCol==0&&objectFila-emptyFila==-1))
   {return true; 
 }else{
    return false;
 }
}
 function move(){
    //console.log("cuadrado",this);
    var object=$(this);
    var img= object.children();
   if(moveValidator(object)){
    $("#empty").append(img);
    object.empty();
    $("#empty").attr("id","");
    object.attr("id","empty");
    if(checkResult()){
      showresults();
      }
   // console.log("clikada",img);
   // console.log("vacia",$("#empty").attr("class"));
   }else{
      var src=img.attr("src");
      img.slideUp( 150 );
     // img.attr("src","../img/error.jpg");
     // $(img).attr("src",src);
      img.slideDown( 150 )


   }
 }
 function joker(){
    alert("joker");
 }

 function checkResult(){
     var x=1;
   var puzzle= document.querySelectorAll("#puzzle td");
  // console.log("cosas",puzzle);
   for (var i =0; i<(puzzle.length)-1;i++){
    var tabla=$(puzzle[i]).attr("class");
    var img=$(puzzle[i]).children().attr("id");
  //  console.log("tabla",tabla);
  //  console.log("img",img);
        if(tabla==img){
              x++;
        }
        console.log(x);
   }
   if(x==15){return true}else{return false};
 }

 function showresults(){
    alert("enhorabuena");

 }