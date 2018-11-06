//Mi ordenador de casa esta jodido, hasta el viernes no tengo
//por eso no pude hacer ninguno mas en casa
//esto es lo que he echo hoy 31/10/18
function tabla(){
var numeros=[];
for(i=0;i<100;i++){
numeros.push(Math.round(Math.random()*99+1));
}
numeros.sort();
document.write("<table border='1'><tr>");
for(i=0;i<100;i++){
    if(i%10==0){
        document.write("</tr><tr><td>"+numeros[i]+"</td>");
    }else{
    document.write("<td>"+numeros[i]+"</td>");
    }
    }
document.write("</tr></table>");
}

function calculo(string){
var cadena=string;
var num1;
var result;
if(cadena.includes("+")){
    alert("entra");
     num1 = cadena.split("+");     
    var result=parseFloat(num[0])+parseFloat(num[1]);    
}if(cadena.includes("-")){
    alert("entra");
     num1= cadena.split("-");     
    var result=parseFloat(num[0])-parseFloat(num[1]);
}if(cadena.includes("/")){
    alert("entra");
     num1= cadena.split("/");     
    var result=parseFloat(num[0])/parseFloat(num[1]);
}if(cadena.includes("*")){
    alert("entra");
     num1= cadena.split("*");     
    var result=parseFloat(num[0])*parseFloat(num[1]);
}else{
    result="FORMATO INCORRECTO";
}
document.write(result);
}
function fecha(){
    alert("hola");
    document.write("Hoy es"+ getDay()+", "+getDate()+" de"+getMonth()+","+ getFullYear());
    alert("porque");
}