var crusts = ['thin','thick','stuffed'];
var sizes = ['xtraLarge', 'large', 'medium', 'small'];
var orderStage = 1;
function Pizza(size, crust, toppings){
  this.size = size;
  this.crust = crust;
  this.toppings = [];
}
function hideAndShow(stage){
  $('#orderCrust').hide();
  $('#orderToppings').hide();
  $('#orderSize').hide();

  if (stage===1){
      $('#orderSize').fadeIn('fast');
      textColor($('#arrowOneText'));

  }
  if (stage===2){
      $('#orderCrust').fadeIn('fast');
        textColor($('#arrowTwoText'));
  }
  if (stage===3){
      $('#orderToppings').fadeIn('fast');
        textColor($('#arrowThreeText'));
  }


}

function calculateTotal(pizza){
$('#cartItems').text('');
$('#cartItems').append("<li>" + 'Size: ' + pizza.size + "</li>")
$('#cartItems').append("<li>" +"Crust: " + pizza.crust + "</li>")
$('#cartItems').append("<li>" + "Toppings: "+ pizza.toppings + "</li>")
}

function textColor(idToChange){
      $('#arrowOneText').removeClass('greenText').addClass('whiteText')
  $('#arrowTwoText').removeClass('greenText').addClass('whiteText')
      $('#arrowThreeText').removeClass('greenText').addClass('whiteText')
idToChange.addClass('greenText');
}

$(function(){
  orderStage=1;
  hideAndShow(orderStage);
  $('#arrowOneText').addClass('whiteText');
  $('#arrowTwoText').addClass('whiteText');
  $('#arrowThreeText').addClass('whiteText');
$('form').submit(function(e){
  e.preventDefault();
  var selectedSize = $('#size').val();
  var newPizza = new Pizza(selectedSize, crusts[0], Array [0])
  $('input[type=checkbox]:checked').each(function(){
    newPizza.toppings.push(this.value);
  });


  calculateTotal(newPizza);

if (orderStage<3){
    orderStage++;
}

  hideAndShow(orderStage);

})

$('#arrowOne').click(function(){
  orderStage = 1;
  hideAndShow(orderStage);


});
$('#arrowTwo').click(function(){
  orderStage = 2;
  hideAndShow(orderStage);

});
$('#arrowThree').click(function(){
  orderStage = 3;
  hideAndShow(orderStage);

});

//  alert(newPizza.crust);

})
