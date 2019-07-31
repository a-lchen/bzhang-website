var pageHeight = window.innerHeight;

function scrollDown() {
  var vheight = $(window).height();
  $('html, body').animate({
    scrollTop: (Math.floor($(window).scrollTop() / vheight)+1) * vheight
  }, 500);
};


function scrollUp() {
  $('html, body').animate({
    scrollTop: 0
  }, 500);
};
