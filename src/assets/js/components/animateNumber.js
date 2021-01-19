let check = 1;
let target = $('.experience__number');
let targetPos = target.offset().top;
let winHeight = $(window).height();
let scrollToElem = targetPos - winHeight;


$(window).scroll(function () {
   let winScrollTop = $(this).scrollTop();
   if (winScrollTop > scrollToElem && check) {
      $('.experience__number').each(function () {
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