var usuario=prompt("Introduce tu nombre:");
var container=document.getElementById("Nombre");

switch (usuario) {
    case "Raimond":

    container.style.background="yellow";
    document.write("Bienvenido "+usuario);

        break;

    case "Marcos":
    container.style.background="black";

    document.write("Bienvenido "+usuario);
    break;

    case "Bruno":
    container.style.background="green";

    document.write("Bienvenido "+usuario);
    break;
    
    case "Heike":
    container.style.background="pink";

    document.write("Bienvenida "+usuario);

    break;

    default:
        break;
}