$(document).ready(function(){
   document.getElementById("newsR").addEventListener("click",noticiaB,false)
   document.getElementById("vidR").addEventListener("click",videoB,false)
    document.getElementById("newsC").addEventListener("click",noticiaC,false)
    document.getElementById("vidC").addEventListener("click",videoC,false)
})
function noticiaB(){
    $(".button .N").css({
        "color": "rgb(56, 50, 61)", 
        "background-color":"black"
    });
    $(".button .V").css({
        "color": "black", 
        "background-color":"rgb(56, 50, 61)"
    });
}
function videoB(){
    $(".button .V").css({
        "color": "rgb(56, 50, 61)", 
        "background-color":"black"
    });
    $(".button .N").css({
        "color": "black", 
        "background-color":"rgb(56, 50, 61)"
    });
}
function noticiaC(){    
    if($("#newsC").is(':checked')){
    $(".check .N").css({
        "color": "rgb(56, 50, 61)", 
        "background-color":"black"
    });}else{$(".check .N").css({
        "color": "black", 
        "background-color":"rgb(56, 50, 61)"
    });
        
    }
}
function videoC(){
    if($("#vidC").is(':checked')){
        $(".check .V").css({
            "color": "rgb(56, 50, 61)", 
            "background-color":"black"
        });}else{$(".check .V").css({
            "color": "black", 
            "background-color":"rgb(56, 50, 61)"
        });
            
        }
    
}