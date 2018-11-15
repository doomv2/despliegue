$(document).ready(function(){
   document.getElementById("newsR").addEventListener("click",noticiaB,false)
   document.getElementById("vidR").addEventListener("click",videoB,false)
    document.getElementById("newsC").addEventListener("click",noticiaC,false)
    document.getElementById("vidC").addEventListener("click",videoC,false)
})
function noticiaB(){
    $(".button .N").css({
        "color": "white", 
        "background-color":"black"
    });
    $(".button .V").css({
        "color": "black", 
        "background-color":"white"
    });
}
function videoB(){
    $(".button .V").css({
        "color": "white", 
        "background-color":"black"
    });
    $(".button .N").css({
        "color": "black", 
        "background-color":"white"
    });
}
function noticiaC(){    
    if($("#newsC").is(':checked')){
    $(".check .N").css({
        "color": "white", 
        "background-color":"black"
    });}else{$(".check .N").css({
        "color": "black", 
        "background-color":"white"
    });
        
    }
}
function videoC(){
    if($("#vidC").is(':checked')){
        $(".check .V").css({
            "color": "white", 
            "background-color":"black"
        });}else{$(".check .V").css({
            "color": "black", 
            "background-color":"white"
        });
            
        }
    
}