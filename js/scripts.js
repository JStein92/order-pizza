var hotels = [];

function Hotel(name,rooms,booked){
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
};

function createNewHotel(){

  var userInputHotelName = $('#hotelName').val();
  var userInputHotelRooms = parseInt($('#hotelRooms').val());
  var userInputHotelBooked = parseInt($('#hotelBooked').val());

    var newHotel = new Hotel(userInputHotelName, userInputHotelRooms,userInputHotelBooked);

    hotels.push(newHotel);

};

function displayHotels(){
  $('#hotelDisplay').text("");
  for (i=0; i<hotels.length;i++){

      $('#hotelDisplay').append("Hotel name: " + hotels[i].name + " Rooms: " + hotels[i].rooms + " booked: " + hotels[i].booked);
  };

};




$(document).ready(function(){

  $('#hotelForm').submit(function(event){
    createNewHotel();
    event.preventDefault();
  });

  $('#buttonCreateHotelCards').click(function(event){
    displayHotels();
    event.preventDefault();
  });


});
