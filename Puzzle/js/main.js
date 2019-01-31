$(document).ready(function(){
  var gameSelector=document.querySelectorAll("#GameSelector input");
  for (var i =0; i<gameSelector.length;i++){
    gameSelector[i].addEventListener("click",startGame,false);
  }
  
});


function startGame(){
    $("#Game").empty();
    var template="<table  id='puzzle'><tr class='fila-1'><td class='col-1'></td><td class='col-2'></td><td class='col-3'></td><td class='col-4'></td></tr><tr class='fila-2'><td class='col-1'></td><td class='col-2'></td><td class='col-3'></td><td class='col-4'></td></tr><tr class='fila-3'><td class='col-1'></td><td class='col-2'></td><td class='col-3'></td><td class='col-4'></td></tr><tr class='fila-4'><td class='col-1'></td><td class='col-2'></td><td class='col-3'></td><td class='col-4'></td></tr></table>";
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

    fillGame(game);
}

function fillGame(game){
    var template=[];
    var puzzle=$("#puzzle");
    for(var i=1;i<=4;i++){
        for(var j=1;j<=4;j++){
             template.push("<img src='../img/"+game+"/fila-"+i+"-col-"+j+".jpg'>");
            //puzzle.find(".fila-"+i+" .col-"+j).append(template);
        }
    }
    disorderPuzzle(template);
} 

function disorderPuzzle(puzzle){


}