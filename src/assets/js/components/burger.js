$(function () {
   $('.header__lines').click(function () {
      if ($('.header__row-show-by-click').is(':hidden')) {
         $('.header__row-show-by-click').show();
         $('.header__line').addClass('header__line-move')
      } else {
         $('.header__row-show-by-click').hide();
         $('.header__line').removeClass('header__line-move')
      }
   })
})