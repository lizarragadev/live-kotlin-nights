
$('#time').countdown('2020/12/31').on('update.countdown', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<span class="h1 font-weight-bold">%D</span> Day%!d'
        + '<span class="h1 font-weight-bold">%H</span> Hr'
        + '<span class="h1 font-weight-bold">%M</span> Min'
        + '<span class="h1 font-weight-bold">%S</span> Sec'));
    });
$('#time2').countdown('2020/04/07 15:40:00').on('update.countdown', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<div class="holder m-2"><span class="h1 font-weight-bold">%D</span> Días%!d</div>'
        + '<div class="holder m-2"><span class="h1 font-weight-bold">%H</span> Horas</div>'
        + '<div class="holder m-2"><span class="h1 font-weight-bold">%M</span> Minutos</div>'
        + '<div class="holder m-2"><span class="h1 font-weight-bold">%S</span> Segundos</div>'));
    });
