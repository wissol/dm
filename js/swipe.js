/**
 * Created by migueldeluisespinosa on 22/10/16.
 */

$(function(){

  $( "*" ).on( "swiperight", swiperightHandler );

  // Callback function references the event target and adds the 'swiperight' class to it
  function swiperightHandler( event ){
    Window.location ="http:sabiavida.com";
  }
});
