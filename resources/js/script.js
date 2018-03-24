$(document).ready(function() {
  $('.js--section-features').waypoint(function(direction) {
    if(direction == 'down') {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px'
  })
});

/**
* Example JQuery
* $(document).ready(function() {
  $('h1').click(function() {
    $(this).css('background-color', '#ff0000');
  })
});
* 
*/