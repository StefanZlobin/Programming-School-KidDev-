let moo = document.querySelectorAll('.program__row-content-title');
let active = moo[0]; // moo[0], чтобы при первом клике не было ошибки.

for (let i = 0; i < moo.length; i++) {
   moo[i].addEventListener('click', function () {
      if (active == this) {
         // Если active ссылается на тот же объект, что и this (на кликнутую кнопку)
         this.classList.toggle('active');
      } else {
         active.classList.remove('active');
         this.classList.add('active');

         active = this;
      }
   });
}

$(function () {
   $('.program__row-content-show-by-click').hide();
   $('.display-click1').show();
   $('.program__row-content-title').click(function () {
      $('.program__row-content-show-by-click').hide();
      $('.display-click' + $(this).attr('target')).show();
   })
})


