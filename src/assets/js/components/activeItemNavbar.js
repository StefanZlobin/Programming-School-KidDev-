$(function () {
   $('.header__navbar-link').each(function () {
      $('.header__navbar-logo').removeClass('header__navbar-link--active');
      if (this.href == window.location.href) {
         $(this).addClass('header__navbar-link--active');
      }
   });
});