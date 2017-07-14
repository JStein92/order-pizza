var orderStage = 1;

function Pizza(size, crust, toppings){
  this.size = size;
  this.crust = crust;
  this.toppings = [];
}

Pizza.prototype.findPrice = function(){
  var finalPrice = 0;
  if (this.size === "X-tra Large"){
    finalPrice += 15;
  }else if (this.size === "Large"){
    finalPrice+=13;
  }else if (this.size === "Medium"){
    finalPrice+=11;
  }else if (this.size === "Small"){
    finalPrice+=9;
  }
  if (this.crust === "Thin"){
    finalPrice*=1;
  }  else if (this.crust === "Thick"){
    finalPrice*=1.1;
  }else if (this.crust === "Stuffed"){
    finalPrice*=1.2;
  }
  if (this.toppings.length >0){
    finalPrice += (this.toppings.length *1)
  }
  return finalPrice;
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

function buildCart(pizza){
  $('#cartItems').text('');

  if (orderStage ===3){
    $('#cartItems').append("<li>" + 'Size: ' + pizza.size + "</li>")
    $('#cartItems').append("<li>" +"Crust: " + pizza.crust + "</li>")
    $('#cartItems').append("<li>" + "Toppings: "+ pizza.toppings + "</li>")

  }else if (orderStage>=2){
    $('#cartItems').append("<li>" + 'Size: ' + pizza.size + "</li>")
    $('#cartItems').append("<li>" +"Crust: " + pizza.crust + "</li>")
  }else if (orderStage>=1){
    $('#cartItems').append("<li>" + 'Size: ' + pizza.size + "</li>")
  }
  $('#finalPrice').text(pizza.findPrice().toFixed(2));
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
    var selectedCrust = $('#crust').val();
    var newPizza = new Pizza(selectedSize, selectedCrust, Array [0])
    $('input[type=checkbox]:checked').each(function(){
      newPizza.toppings.push(this.value);
    });
    buildCart(newPizza);

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
