var inicializacion = function() {
  var $wikipedia = $('[href*="wikipedia"]');
  $wikipedia.addClass('rojo');

  var $ingles = $('[href^="https://en.wikipedia.org"]');
  $ingles.addClass('resaltado');
};

$(document).ready(inicializacion);

