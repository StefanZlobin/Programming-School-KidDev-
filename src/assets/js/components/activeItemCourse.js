let moo = document.querySelectorAll('.courses-detailed__row');
let active = moo[0]; // moo[0], чтобы при первом клике не было ошибки.

for (let i = 0; i < moo.length; i++) {
   moo[i].addEventListener('click', function () {
      if (active == this) {
         // Если active ссылается на тот же объект, что и this (на кликнутую кнопку)
         this.classList.toggle('courses-detailed__active');
      } else {
         active.classList.remove('courses-detailed__active');
         this.classList.add('courses-detailed__active');

         active = this;
      }
   });
}

$('.courses-detailed__column-none').hide();

$('.courses-detailed__row1').click(function () {
   $('.courses-detailed__column1').show();
   $('.courses-detailed__column2').hide();
   $('.courses-detailed__column3').hide();
   $('.courses-detailed__column4').hide();
});

$('.courses-detailed__row2').click(function () {
   $('.courses-detailed__column2').show();
   $('.courses-detailed__column1').hide();
   $('.courses-detailed__column3').hide();
   $('.courses-detailed__column4').hide();
});

$('.courses-detailed__row3').click(function () {
   $('.courses-detailed__column3').show();
   $('.courses-detailed__column2').hide();
   $('.courses-detailed__column1').hide();
   $('.courses-detailed__column4').hide();
});

$('.courses-detailed__row4').click(function () {
   $('.courses-detailed__column4').show();
   $('.courses-detailed__column1').hide();
   $('.courses-detailed__column3').hide();
   $('.courses-detailed__column2').hide();
});
