$(document).ready(function(){

    document.getElementById("num").addEventListener("click",show,false);
 
});
function show(){
    var num= $("#num").html(); 
 num++;
 $("#num").html(num);
}