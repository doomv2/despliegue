$(document).ready(function(){
    
    

    document.getElementById("id_Env").onclick=function(e){comprobar()}

    function comprobar(){
           

        var nom=$('#id_Nom').val();
        var ape=$('#id_Ape').val();   
        if(nom==""){
        alert("hola");
        
           $("#id_Nom").apend("<span id='nom'>Rellena el campo</span>");
        }
        if(ape==""){
            $("#id_Ape").after("<span id='nom'>Rellena el campo</span>");
        } else{
            $('#id_Env').apend("Enviado");
        }
    }    
});
