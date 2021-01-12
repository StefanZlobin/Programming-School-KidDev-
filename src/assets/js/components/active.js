$(function () {
   $('.navbar [href]').each(function () {
      $('.link__logo').removeClass('active');
      if (this.href == window.location.href) {
         $(this).addClass('active');
      }
   });
});