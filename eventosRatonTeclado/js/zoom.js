$(document).ready(function(){
    $("#zoomSec").hide();
    $("#list img").bind("click", zoom);
    $(document).bind("click keypress", out);

});
function zoom(e){  
e.stopPropagation();
var src=$(this).attr("src");
$("#zoom").attr("src",src);
$("#zoomSec").fadeIn(1000);

}
function out(){
    $("#zoomSec").fadeOut(1000);

   

}