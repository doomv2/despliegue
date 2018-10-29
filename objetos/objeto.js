
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
if(cadena.contains("+")){
    var num1= cadena.split("+");
    var result=parseFloat(num[0])+parseFloat(num[1]);
}
document.write(result);
}