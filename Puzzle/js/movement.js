 //----- Js encargado del movimiento de las piezas
 
 
 
 //------ startMovement(saber si se intenta mover o usar un comodin)
 function startMovement(){
    var td=document.querySelectorAll("#Game #puzzle td");
    //console.log("confunto img", img);
    for (var i =0; i<td.length;i++){
      td[i].addEventListener("dblclick",joker,false);
         td[i].addEventListener("click",move,false);
        
    }
 }
 //----- fin startMovement

 //----- moveValidator (comprobar si la imagen que queremos mover esta en la posicion correcta para que se pueda mover)
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
  // console.log(emptyCol);
  // console.log(emptyFila);
   if((objectCol-emptyCol==1&&objectFila-emptyFila==0)||(objectCol-emptyCol==-1&&objectFila-emptyFila==0)||(objectCol-emptyCol==0&&objectFila-emptyFila==1)||(objectCol-emptyCol==0&&objectFila-emptyFila==-1))
   {return true; 
 }else{
    return false;
 }
}
//------ fin moveValidator

//------ move (encargado de hacer el movimiento, en caso de imposible lo señala con un slideDown y fadeOut)
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
      showresults($("#contador"));
      }
   // console.log("clikada",img);
   // console.log("vacia",$("#empty").attr("class"));
   }else{
      var src=img.attr("src");
      img.fadeOut( 150 );
     // img.attr("src","../img/error.jpg");
     // $(img).attr("src",src);
      img.slideDown( 150 );
   }
 }
//------- fin move

//------- joker (movimiento al usar comodin que se salta el moveValidator )
 function joker(){
 if(parseInt($("#numComodin").html())>0){
 // console.log("jokers",jokers);
   var object=$(this);
   var img= object.children();
   $("#empty").append(img);
   object.empty();
   $("#empty").attr("id","");
   object.attr("id","empty");
   var jokers= $("#numComodin").html()-1;
   $("#numComodin").html(jokers);
   if(checkResult()){
      showresults($("#contador"));
      }
   }
}
//------- fin joker

//------- checkResult (comprueba si has ordenado bien las fotos)
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
//------- fin checkResult

//------- showresults (Enseña tus resultados una vez has acabado)
 function showresults(tiempo){
    var chrono = tiempo.find("#minute").html()+":"+ tiempo.find("#second").html()
    alert("enhorabuena lo has conseguido en: "+chrono);
 }
 //------- fin showresults