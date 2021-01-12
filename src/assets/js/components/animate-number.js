var check = 1;
var target = $('.count'); // You counter class
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;

$(window).scroll(function () {
   var winScrollTop = $(this).scrollTop();
   if (winScrollTop > scrollToElem && check) {
      $('.count').each(function () {
         $(this).prop('Counter', -1).animate({
            Counter: $(this).text()
         }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
               $(this).text(Math.ceil(now));
            }
         });
      });
      check = 0;
   }
});