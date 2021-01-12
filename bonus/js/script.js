$('h1').hover(function() {
  $(this).addClass('darkred');
},
  function() {
  $(this).removeClass('darkred');
});

$('img').mouseenter(function() {
  $(this).addClass('hover');
})
$('img').mouseleave(function() {
  $(this).removeClass('hover');
})

$('.lestat').click(function() {
  $('.lestat-name').removeClass('hide');
})
$('.louis').click(function() {
  $('.louis-name').removeClass('hide');
})
$('.claudia').click(function() {
  $('.claudia-name').removeClass('hide');
})
