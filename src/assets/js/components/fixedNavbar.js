$(document).scroll(function () {
   if ($(document).scrollTop() > $('.header').height() + 10)
      $('.header__navbar').addClass('header__navbar--fixed');
   else
      $('.header__navbar').removeClass('header__navbar--fixed');
});