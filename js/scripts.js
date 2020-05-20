$(window).load(function () {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");
});

$(document).ready(function () {
  $("#counter").countdown('2020/09/01').on('update.countdown', function (event) {
    var $this = $(this).html(event.strftime('' +
      '<span class = "countdown-row countdown-show4">' +
      '<span class = "countdown-section">' +
      '<span class = "countdown-amount">%-D</span>' +
      '<span class = "countdown-period">Dias</span>' +
      '</span>' +
      '<span class = "countdown-section">' +
      '<span class = "countdown-amount">%-H</span>' +
      '<span class = "countdown-period">Horas</span>' +
      '</span>' +
      '<span class = "countdown-section">' +
      '<span class = "countdown-amount">%-M</span>' +
      '<span class = "countdown-period">Minutos</span>' +
      '</span>' +
      '<span class = "countdown-section">' +
      '<span class = "countdown-amount">%-S</span>' +
      '<span class = "countdown-period">Segundos</span>' +
      '</span>' +
      '</span>'
    ));
  });



  $("#counter_wrapper").fitText(1.2, {
    minFontSize: '20px',
    maxFontSize: '50px'
  });
});