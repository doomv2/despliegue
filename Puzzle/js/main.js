$(document).ready(function(){
  var gameSelector=document.querySelectorAll("#GameSelector input");
  for (var i =0; i<gameSelector.length;i++){
    gameSelector[i].addEventListener("click",startGame,false);
    gameSelector[i].addEventListener("mouseover",showImage,false);
    gameSelector[i].addEventListener("mouseout",quitImage,false);
  }
  
});
function showImage(){
    var template= "<img  class='preview' src='../img/"+this.id+"/"+this.id+".jpg'>";
    $("#Image").append(template);
}
function quitImage(){
    $("#Image").empty();
}

function startGame(){
    $("#Game").empty();
    $("#Help").empty();
    $("#comodines").empty();
    $("#contador").empty();
    $("#contador").append(" <span id='hour'></span>:<span id='minute'></span>:<span id='second'></span> ");
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
function showHelp(){
$("#help").slideDown(250);
$("#help").delay(2000).slideUp(250);
}

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

function disorderPuzzle(puzzle){
    puzzle = puzzle.sort(function() {return Math.random() - 0.5});
    //console.log("desordenado",puzzle);
    fillGame(puzzle);
}
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
function chronometer(){
    var tiempo = {
        hora: 0,
        minuto: 0,
        segundo: 0
    };

    var tiempo_corriendo = null;   
        clearInterval(tiempo_corriendo);

            tiempo_corriendo = setInterval(function(){
                // Segundos
                tiempo.segundo++;
                if(tiempo.segundo >= 60)
                {
                    tiempo.segundo = 0;
                    tiempo.minuto++;
                }      

                // Minutos
                if(tiempo.minuto >= 60)
                {
                    tiempo.minuto = 0;
                    tiempo.hora++;
                }

                $("#hour").text(tiempo.hora < 10 ? '0' + tiempo.hora : tiempo.hora);
                $("#minute").text(tiempo.minuto < 10 ? '0' + tiempo.minuto : tiempo.minuto);
                $("#second").text(tiempo.segundo < 10 ? '0' + tiempo.segundo : tiempo.segundo);
            }, 1000);     
}
