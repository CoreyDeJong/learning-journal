var showOrder = funtion(){
    var order = prompt("what do you want to order?");
    var item, quantity;
    var cart = "";


    while (order !== "hotel" && order !== "house"){
        prompt
    }

quantity=prompt("How many do you want?");
quantity = Number(quantity);

while ( isNaaN(quantity)){
    quantity = prompt("Please give us a number...");
    quantity = Number(quantity);
}


    if (order ==="hotel"){
        item = '<img src="hotel.png">';
}
    else (order ==="hotel"){
        item = '<img src="hotel.png">';
}

for( var i = 0; i < quantity; i = i + 1){
    cart = cart + item;
}

return item + item;
 
}