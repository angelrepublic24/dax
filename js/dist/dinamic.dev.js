"use strict";

$(document).ready(function () {
  var height = $(window).height();
  $('header').height(height);
  var services = $('#service').offset().top;
  var product = $('#product').offset().top;
  var aboutUs = $('#aboutUs').offset().top;
  var contact = $('#contact').offset().top;
  var menu = $("#menu"); // $(window).scroll(function(){
  //     if(menu.offset().top > 200){
  //         menu.addClass('changeColor')
  //     }else{
  //         menu.removeClass('changeColor')
  //     }
  // })

  $('#btn-services').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: services - 100
    }, 500);
  });
  $('#btn-product').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: product - 100
    }, 500);
  });
  $('#btn-aboutUs').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: aboutUs - 100
    }, 500);
  });
  $('#btn-contact').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: contact - 100
    }, 500);
  });
});