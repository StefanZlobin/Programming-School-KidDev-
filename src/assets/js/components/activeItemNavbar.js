$(function () {
   $('.header__link [href]').each(function () {
      $('.header__link-no-style').removeClass('header__active');
      if (this.href == window.location.href) {
         $(this).addClass('header__active');
      }
   });
});