$(document).ready(function(){
    $(".main li").hover(function(){
        $(this).children("ul").stop(true,false,true).slideToggle(300);
        $(".submenu li").css("border-radius","0");
});

});