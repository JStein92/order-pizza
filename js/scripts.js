var orderStage = 1;
var pizzaNumber = 1;
var finalPrice = 0;
var pizzas = [];
function Pizza(size, crust, toppings, price){
  this.size = size;
  this.crust = crust;
  this.toppings = [];
  this.price = price;
}

Pizza.prototype.findPrice = function(){
  var myPrice = 0;
  if (this.size === "X-tra Large"){
    myPrice += 15;
  }else if (this.size === "Large"){
    myPrice+=13;
  }else if (this.size === "Medium"){
    myPrice+=11;
  }else if (this.size === "Small"){
    myPrice+=9;
  }
  if (orderStage>1){
    if (this.crust === "Thin"){
      myPrice*=1;
    }  else if (this.crust === "Thick"){
      myPrice*=1.1;
    }else if (this.crust === "Stuffed"){
      myPrice*=1.2;
    }
  }
  if (orderStage >2){
    if (this.toppings.length >0){
      myPrice += (this.toppings.length *1)
    }
  }
  this.price = myPrice;
}
function hideAndShow(stage){
  $('#orderCrust').hide();
  $('#orderToppings').hide();
  $('#orderSize').hide();

  if (stage===1){
    $('#orderSize').fadeIn('fast');
    textColor($('#arrowOneText'));
    $('#addToCart').hide();
  }
  if (stage===2){
    $('#orderCrust').fadeIn('fast');
    textColor($('#arrowTwoText'));
    $('#addToCart').hide();
  }
  if (stage===3){
    $('#orderToppings').fadeIn('fast');
    textColor($('#arrowThreeText'));
    $('#addToCart').show();
  }
}

Pizza.prototype.buildCart = function(){
  this.findPrice();
  var toppings = '';
  this.toppings.forEach(function(topping){
    toppings += ("<li>" + topping.toString() + "</li>");
  });

  $('#cartItems').append(
    "<h2>" + 'Pizza ' + pizzaNumber + "</h2>" +
    "<li> Size: " + this.size + "</li>" +
    "<li> Crust: " + this.crust + "</li>"+
    "<h4> Toppings:" + "</h4>" + toppings +
    "<h4> Price: " + this.price.toFixed(2) + "</h4>");

    finalPrice+=this.price;
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
      var newPizza = new Pizza(selectedSize, selectedCrust, Array [0], 0)
      $('input[type=checkbox]:checked').each(function(){
        newPizza.toppings.push(this.value);
      });

      newPizza.buildCart();
      $('#finalPrice').text(finalPrice.toFixed(2));
      pizzaNumber++;
    });

    $('#continue').click(function(){
      if (orderStage<3){
        orderStage++;
      }
      if (orderStage===3){
        $('#addToCart').show();
      }
      else{
        $('#addToCart').hide();
      }
      hideAndShow(orderStage);
    });

    $('#anotherPizza').click(function(){
      orderStage = 1;
      hideAndShow(orderStage);
    });
    $('#placeOrder').click(function(){
      $('#cartItems').empty();
      finalPrice=0;
      alert('Order Placed!');
      orderStage = 1;
      hideAndShow(orderStage);
      $('#finalPrice').text(finalPrice.toFixed(2));
    });

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
  })
