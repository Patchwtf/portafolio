$(document).ready(function() {
  $(window).scroll(function() {
    var barra = $(window).scrollTop();
    var posicion = barra * 0.09;
    var p2 = barra * 0.7;
    var op = barra * 0.003;

    $('body').css({
      'background-position': '0 -' + posicion + 'px'
    });
    $('.fondoZ2').css({
      'background-position': '0 ' + p2 + 'px'
    });
    $('h2').css({
      'top': '-' + p2 + 'px'
    });
    $('section#stepOne article').css({
      'opacity': op
    });
    $('section#stepOne photoIcon').css({
      'top': p2+'px'
    });
    console.log(barra);
  });
});
