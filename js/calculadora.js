var cosa= false;
var cosa2= false;
var result=" ";
var acum=[];
var oper=[];
var botonx=document.getElementById("id_boton.");
var boton0=document.getElementById("id_boton0");
var boton1=document.getElementById("id_boton1");
var boton2=document.getElementById("id_boton2");
var boton3=document.getElementById("id_boton3");
var boton4=document.getElementById("id_boton4");
var boton5=document.getElementById("id_boton5");
var boton6=document.getElementById("id_boton6");
var boton7=document.getElementById("id_boton7");
var boton8=document.getElementById("id_boton8");
var boton9=document.getElementById("id_boton9");
var botons=document.getElementById("id_botons");
var botonr=document.getElementById("id_botonr");
var botonm=document.getElementById("id_botonm");
var botond=document.getElementById("id_botond");
var botonc=document.getElementById("id_botonc");
var botonb=document.getElementById("id_botonb");
var botonres=document.getElementById("id_botonres");

botonx.onclick=function(e){display(".");}
boton0.onclick=function(e){display(0);}
boton1.onclick=function(e){display(1);}
boton2.onclick=function(e){display(2);}
boton3.onclick=function(e){display(3);}
boton4.onclick=function(e){display(4);}
boton5.onclick=function(e){display(5);}
boton6.onclick=function(e){display(6);}
boton7.onclick=function(e){display(7);}
boton8.onclick=function(e){display(8);}
boton9.onclick=function(e){display(9);}
botons.onclick=function(e){suma();}
botonr.onclick=function(e){resta();}
botonm.onclick=function(e){mult();}
botond.onclick=function(e){div();}
botonc.onclick=function(e){c();}
botonres.onclick=function(e){res();}
botonb.onclick=function(e){borrar();}
document.getElementById("display")=result;
function display(num){       
        if(cosa){
            c();
            cosa=false;
            cosa2=false;
        }  
    document.getElementById("display").value+=num;            
}
function suma(){
    if(cosa2){
        acum.length=0;
        oper.length=0;
        cosa=false;
        cosa2=false;
    }
    acum.push(parseFloat(document.getElementById("display").value));
    oper.push("s");
    document.getElementById("display").value="";
}
function resta(){
    if(cosa2){
        acum.length=0;
        oper.length=0;
        cosa=false;
        cosa2=false;
    }
    acum.push(parseFloat(document.getElementById("display").value));
    oper.push("r");
    document.getElementById("display").value="";
}
function mult(){
    if(cosa2){
        acum.length=0;
        oper.length=0;
        cosa=false;
        cosa2=false;
    }
    acum.push(parseFloat(document.getElementById("display").value));
    oper.push("m");
    document.getElementById("display").value="";
}
function div(){
    if(cosa2){
        acum.length=0;
        oper.length=0;
        cosa=false;
        cosa2=false;
    }
    acum.push(parseFloat(document.getElementById("display").value));
    oper.push("d");
    document.getElementById("display").value="";
}
function borrar(){
    document.getElementById("display").value=parseInt((document.getElementById("display").value)/10);
}
function c(){
   var result="";
   acum.length=0; 
   oper.length=0;
   document.getElementById("display").value="";
}
function res(){    
    acum.push(parseFloat(document.getElementById("display").value));    
    var result=acum[0];
    for(i=1;i<=acum.length;i++){       
        if(isNaN(oper[i-1])){            
            if(oper[i-1]=='s'){                
                result+=acum[i];                
            }
            else if(oper[i-1]=='r'){
                result-=acum[i];                
            }
            else if(oper[i-1]=='d'){
                result/=acum[i];
            }
            else if(oper[i-1]=='m'){
                result*=acum[i];
            }
        }
    } 
    document.getElementById("display").value=result;
    cosa=true;
    cosa2=true;
}
