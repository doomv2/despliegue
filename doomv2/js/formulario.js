$(function () {
    $("#provincia option").on("click", function (e) {
        $("#localidad").attr("disabled", false)
        if ($(this).val() == "Valencia") {
            $("#localidad .cs").remove();
            $("#localidad .alc").remove();
            $("#localidad .localidad").remove();
            $("#localidad").append("<option class='vlc'>Valencia</option>");
            $("#localidad").append("<option class='vlc'>Patacona</option>");
            $("#localidad").append("<option class='vlc'>Manises</option>");
        }
        else if ($(this).val() == "Castellon") {
            $("#localidad .valencia").remove();
            $("#localidad .alicante").remove();
            $("#localidad .localidad").remove();
            $("#localidad").append("<option class='cs'>Oropesa del Mar</option>");
            $("#localidad").append("<option class='cs'>Castellon</option>");
            $("#localidad").append("<option class='cs'>Benicassim</option>");
        }
        else if ($(this).val() == "Alicante") {
            $("#localidad .castellon").remove();
            $("#localidad .valencia").remove();
            $("#localidad .localidad").remove();
            $("#localidad").append("<option class='alc'>Alicante</option>");
            $("#localidad").append("<option class='alc'>Benidorm</option>");
            $("#localidad").append("<option class='alc'>Calpe</option>");
        }
        else if ($(this).val() == "Provincia") {
            $("#localidad").attr("disabled", true);
            $("#localidad .castellon").remove();
            $("#localidad .valencia").remove();
            $("#localidad .alicante").remove();
            $("#localidad").append("<option class='localidad'>Localidad</option>");
        }
    });

    var posicion = document.getElementById("localidad");
    var opcion = document.createElement("option");
    opcion.text = "Requena";
    posicion.addEventListener(opcion, posicion[0]);
    $(".required").on("blur", function (e) {
        if ($(this).val() == "")
            $(this).css("border-color", "red");
        else
            $(this).css("border-color", "black");
    })
    $("#Telefono").on("blur", function (e) {
        if (isNaN($(this).val()) == false && $(this).val().length == 9)
            $(this).css("border-color", "black");
        else
            $(this).css("border-color", "red");
    })
    $("#Correo2").on("blur", function (e) {
        if ($("#Correo1").val() == $("#Correo2").val()) {
            $("#Correo2").css("border-color", "black");
        }
        else {
            $("#Correo2").css("border-color", "red");
        }
    })
    function letraDni(dni) {
        return "TRWAGMYFPDXBNJZSQVHLCKE".charAt(dni % 23);
    }
    $("#form1").submit(function () {
        if ($(".as").val() == "") {
            $(".as").css("border-color", "red");
            return false;
        }
        else {
            $(".as").css("border-color", "black");
        }
        if (letraDni($("#dni1").val()) == $("#dni2").val()) {
            $("#dni1").css("border-color", "black");
            $("#dni2").css("border-color", "black");
        }
        else {
            $("#dni1").css("border-color", "red");
            $("#dni2").css("border-color", "red");
            return false;
        }
        if (document.getElementById("correo1").value.includes("@")) {
            $("#correo1").css("border-color", "black");
        }
        else {
            $("#correo1").css("border-color", "red");
            return false;
        }
    });


});
