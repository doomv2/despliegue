$(document).ready(function(){
  var gameSelector=document.querySelectorAll("#GameSelector input");
  for (var i =0; i<gameSelector.length;i++){
    gameSelector[i].addEventListener("click",startGame,false);
    gameSelector[i].addEventListener("mouseover",showImage,false);
    gameSelector[i].addEventListener("mouseout",quitImage,false);
  }
  
});
//-----------Preview del Juego que vas a elegir.
function showImage(){
    var template= "<img  class='preview' src='../img/"+this.id+"/"+this.id+".jpg'>";
    $("#Image").append(template);
}
function quitImage(){
    $("#Image").empty();
}
//-----------Fin Preview

//-----------Inicio startGame. (Rellena Los divs con la tabla, contador, etc.)
function startGame(){
    $("#Image").css("display","none");
    $("#Game").empty();
    $("#Help").empty();
    $("#comodines").empty();
    $("#contador").empty();
    $("#contador").append("<span id='minute'></span>:<span id='second'></span> ");
    $("#comodines").append("Cantidad de comodines<div id='numComodin'>2</div>");
    $("#Help").append("<div onclick='showHelp()'>Help</div><div><img id='help' class='preview' src='../img/"+this.id+"/"+this.id+".jpg' style='display:none'></div>");
    var template="<table id='puzzle'><tr class='fila-1'><td class='fila-1 col-1'></td><td class='fila-1 col-2'></td><td class='fila-1 col-3'></td><td class='fila-1 col-4'></td></tr><tr class='fila-2'><td class='fila-2 col-1'></td><td class='fila-2 col-2'></td><td class='fila-2 col-3'></td><td class='fila-2 col-4'></td></tr><tr class='fila-3'><td class='fila-3 col-1'></td><td class=' fila-3 col-2'></td><td class='fila-3 col-3'></td><td class='fila-3 col-4'></td></tr><tr class='fila-4'><td class='fila-4 col-1'></td><td class='fila-4 col-2'></td><td class='fila-4 col-3'></td><td class='fila-4 col-4'></td></tr></table>";
    var game=this.id;
    console.log("Game:", game);
    /*   <table id='puzzle'>
                    <tr class='fila-1'>
                        <td class='col-1'></td>
                        <td class='col-2'></td>
                        <td class='col-3'></td>
                        <td class='col-4'></td>
                    </tr>
                    <tr class='fila-2'>
                        <td class='col-1'></td>
                        <td class='col-2'></td>
                        <td class='col-3'></td>
                        <td class='col-4'></td>
                    </tr>
                    <tr class='fila-3'>
                        <td class='col-1'></td>
                        <td class='col-2'></td>
                        <td class='col-3'></td>
                        <td class='col-4'></td>
                    </tr>
                    <tr class='fila-4'>
                        <td class='col-1'></td>
                        <td class='col-2'></td>
                        <td class='col-3'></td>
                        <td class='col-4'></td>
                    </tr>
        </table>*/
    $("#Game").append(template);
    fillTable(game);
    chronometer();
}
//---------Fin StarGame

//---------Show Help (Enseña durante x segundos como deberia ser el resultado)
function showHelp(){
$("#help").slideDown(250);
$("#help").delay(2000).slideUp(250);
}
//--------Fin ShowHelp


//--------FillTable (Rellena array con las imagenes del juego correspondiente pasado x parametro)
function fillTable(game){
    var template=[];
    for(var i=1;i<=4;i++){
        for(var j=1;j<=4;j++){
             template.push("<img id='fila-"+i+" col-"+j+"'src='../img/"+game+"/fila-"+i+"-col-"+j+".jpg'>");
            }
        }
      //  console.log("ordenado",template);
    disorderPuzzle(template);
} 
//-------Fin fillTable

//-------disorderPuzzle (Desordena las imagenes dentro del array)
function disorderPuzzle(puzzle){
    puzzle = puzzle.sort(function() {return Math.random() - 0.5});
    //console.log("desordenado",puzzle);
    fillGame(puzzle);
}
//------Fin disorderPuzzle

//------fillGame (rellena la tabla con la array pasada por parametro y vacia la ultima)
function fillGame(puzzle){
    var x=0;
    var template=$("#puzzle");
   // console.log(template.html());
    for(var i=1;i<=4;i++){
        for(var j=1;j<=4;j++){
            template.find(".fila-"+i+" .col-"+j).append(puzzle[x]);
            x++;
        }
    }
    x=0;
    template.find(".fila-"+4+" .col-"+4).replaceWith("<td id='empty' class='fila-4 col-4'></td>");
    startMovement();
}
//------Fin fillGame

//------Chronometer(Contador de tiempo invertido en acabar)
function chronometer(){

    var time = {
        hour: 0,
        minut: 0,
        second: 0
    };

    var timeRunning = null;   
    clearInterval(timeRunning);
    timeRunning = setInterval(function(){

        time.second++;
                if(time.second >= 60)
                {
                    time.second = 0;
                    time.minut++;
                }                   
                $("#minute").text(time.minut < 10 ? '0' + time.minut : time.minut);
                $("#second").text(time.second < 10 ? '0' + time.second : time.second);
            }, 1000);     
}
//------Fin Chronometer