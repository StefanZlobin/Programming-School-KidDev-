$(document).scroll(function () {
   if ($(document).scrollTop() > $('.header').height() + 10)
      $('.navbar').addClass('nav-fixed');
   else
      $('.navbar').removeClass('nav-fixed');
});
