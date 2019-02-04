$(document).ready(function(){
  var gameSelector=document.querySelectorAll("#GameSelector input");
  for (var i =0; i<gameSelector.length;i++){
    gameSelector[i].addEventListener("click",startGame,false);
  }
  
});


function startGame(){
    $("#Game").empty();
    var template="<table  id='puzzle'><tr class='fila-1'><td class='fila-1 col-1'></td><td class='fila-1 col-2'></td><td class='fila-1 col-3'></td><td class='fila-1 col-4'></td></tr><tr class='fila-2'><td class='fila-2 col-1'></td><td class='fila-2 col-2'></td><td class='fila-2 col-3'></td><td class='fila-2 col-4'></td></tr><tr class='fila-3'><td class='fila-3 col-1'></td><td class=' fila-3 col-2'></td><td class='fila-3 col-3'></td><td class='fila-3 col-4'></td></tr><tr class='fila-4'><td class='fila-4 col-1'></td><td class='fila-4 col-2'></td><td class='fila-4 col-3'></td><td class='fila-4 col-4'></td></tr></table>";
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
