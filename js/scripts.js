var crusts = ['thin','thick','stuffed'];
var sizes = ['xtraLarge', 'large', 'medium', 'small'];

function Pizza(size, crust, toppings){
  this.size = size;
  this.crust = crust;
  this.toppings = [];
}

$(function(){

$('form').submit(function(e){
  e.preventDefault();


  var newPizza = new Pizza(sizes[0], crusts[0], Array [0])
  $('input[type=checkbox]:checked').each(function(){
    newPizza.toppings.push(this.value);
  });

  alert(newPizza.toppings)
})

//  alert(newPizza.crust);

})
