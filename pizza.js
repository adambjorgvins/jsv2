/**
 * Created by AdamB on 7.2.2016.
 */



function pizza (name,size,price,toppings){
    this.name = name
    this.size = size
    this.price = price
    this.toppings = toppings
    this.html = function(){
        var first ="<div class='item'>" +
                     "<h1>"+this.name+"</h1>" +
                      "<h3>"+this.size+"("+this.price+")</h3>"
        var tops = "<ul>"
        for(var i=0;i<this.toppings.length;i++) {
            tops += "<li>" +
                      "<h4>"+this.toppings[i]+"</h4>"+
                    "</li>"
        }
        tops+="</ul>"

        var last = "</div>"
        return first+tops+last
    }
}
var pizzas = [
    new pizza('Dominos Surprise','miðlungs',7345,['ananas','ananas']),
    new pizza('Dominos Extra','stór',5634,['sveppir','jarðaber']),
    new pizza('Caliente','miðlungs',564,['sveppir','ananas']),
    new pizza('Fiesta','lítil',8884,['sveppir','ananas']),
    new pizza('Grænmetis Paradís','miðlungs',2222,['sveppir','lauukaur']),
    new pizza('Creme Mexicano','lítil',4562,['sveppir','hakk']),
    new pizza('Meat & Cheese','miðlungs',6443,['sveppir','rjómaostur']),
    new pizza('Sizzler','stór',453,['sveppir','ananas'])


]


function loadAllPizzas(){
    console.log('load',pizzas.length)
    var container = document.getElementById("pizza")
    for (var i = 0; i < pizzas.length; i++){
        container.innerHTML = container.innerHTML+ pizzas[i].html()
    }
}



window.onload = loadAllPizzas



/** random pizzur

 var names = ["extra","ble"]
 var sizes = ["large","medium","small"]
 var toppings = ["pepparojn","swag","asdf","fle"]
 var price = [34234,23,34,34,34,34,3,4,23,234,23,54,45]

 function ran(min,max) {
    return Math.floor(Math.random() * max) + min
}
 for(var i=0;i<20;i++) {
    var topps = []
    var u = ran(2,6)
    for(var j=0;j<u;j++) {
        topps.push(toppings[ran(0,toppings.length)])
    }

    var pizz = new pizza(
        names[ran(0,names.length)],
        sizes[ran(0,sizes.length)],
        names[ran(0,price.length)],topps
    )

    pizzas.push(pizz)
}
 */
