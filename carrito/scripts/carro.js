$(document).ready(function(){
    var pedidos= document.querySelectorAll("div.item");
    for(var i=0; i< pedidos.length;i++){
        pedidos[i].addEventListener("click",add,false);
    }
    var deleted=document.querySelectorAll("div.cart_items");
    for(var i=0; i< deleted.length;i++){
        deleted[i].addEventListener("click",deleteBox,false);
    }
    
});

//funcion que añade al carro los elementos deseados
function add(){
    var $delete = "<a class='delete'></a>";
   var item =$("#"+this.id);
   var itembox=$(item).clone();
    itembox.prependTo("#cart_items");
    itembox.prepend($delete);
    itembox.find(".stock").hide();
    comprar(itembox);
    stock(item);
    var deletebox= document.querySelectorAll(".delete");
    for(var i=0; i< deletebox.length;i++){
        deletebox[i].addEventListener("click",deleteBox,false);
    }    
}
//funcion que pone el precio a los
function comprar(item){
    var items =  parseInt($("#citem").attr("value"))+1;
    $("#citem").attr("value",items);        
   var precio= parseInt($("#cprice").attr("value")) + parseInt($(item).find(".price").html());
    $("#cprice").attr("value",precio+"€");

}

function stock(item){
    var stock= item.find(".stock").html();
    stock= stock.split(" ");
    stock[1]-=1;
    item.find(".stock").html(stock[0]+" "+stock[1]);
}
function deleteBox(){
    var itembox= $(this).parent();
    $("#citem").attr("value",parseInt($("#citem").attr("value"))-1);
    var precio= parseInt($("#cprice").attr("value")) - parseInt($(itembox).find(".price").html());
    $("#cprice").attr("value",precio +"€");
    var id= itembox.attr("id");
    var stocks =$("#item_container").find("#"+id).find(".stock").html().split(" ");
    var cant=parseInt(stocks[1]);
    cant+=1;
    $("#item_container").find("#"+id).find(".stock").html("Stock "+cant);
    itembox.remove();
   
}