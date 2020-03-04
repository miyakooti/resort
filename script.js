$(function() {
  $('#ski').delay(3000).fadeIn(2500);
  $('#background').fadeIn(3000);

  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    var index = $('.index-btn').index($(this));
    $('.slide').eq(index).addClass('active');
    $('.colorful').removeClass('colorful');
    $('.index-btn').eq(index).addClass('colorful');
  });

  $('#diary').delay(5000).fadeIn(2500);
  $('#map').delay(5000).fadeIn(2500);







});
