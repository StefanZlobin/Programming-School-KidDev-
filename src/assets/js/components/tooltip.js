$(document).ready(function () {

   $("[data-tooltip]").mousemove(function (eventObject) {

      $data_tooltip = $(this).attr("data-tooltip");

      $(".courses__tooltip-text").text($data_tooltip)
         .css({
            "top": eventObject.pageY + 10,
            "left": eventObject.pageX - 300
         })
         .show();

   }).mouseout(function () {

      $(".courses__tooltip-text").hide()
         .text("")
         .css({
            "top": 0,
            "left": 0
         });
   });
});