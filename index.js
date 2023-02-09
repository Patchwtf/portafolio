document.ready(function () {
  $(window).scroll(function () {
    var barra = $(window).scrollTop();
    var posicion;
    var p2 = barra * 0.7;
    var op = barra * 0.003;

    var resolution = screen.availWidth;

    if (resolution > 768) {
      posicion = barra * 0.1;
    } else {
      posicion = barra * 0.09;
    }

    $("body").css({
      "background-position": "0 -" + posicion + "px",
    });
    $(".work-gallery").css({
      "background-position": "0 " + p2 + "px",
    });
    $("h2").css({
      top: "-" + p2 + "px",
    });
    $("section.descrive-me .text-me").css({
      opacity: op,
    });
    $("section.descrive-me .photo-icon").css({
      top: p2 + "px",
    });
    $(".bg-up-one").css({
      "background-position": "0 -" + barra * 0.9 + "px",
    });
  });
});


