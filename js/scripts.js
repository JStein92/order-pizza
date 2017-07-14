var crusts = ['thin','thick','stuffed'];
var sizes = ['xtraLarge', 'large', 'medium', 'small'];

function Pizza(size, crust, toppings){
  this.size = size;
  this.crust = crust;
  this.toppings = [];
}
function hideAndShow(toShow){
      $('#orderCrust').hide();
      $('#orderToppings').hide();
      $('#orderSize').hide();

      toShow.fadeIn('fast');
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

$('#arrowOne').click(function(){
  hideAndShow($('#orderSize'));
});
$('#arrowTwo').click(function(){
  hideAndShow($('#orderCrust'));
});
$('#arrowThree').click(function(){
  hideAndShow($('#orderToppings'));
});

//  alert(newPizza.crust);

})
