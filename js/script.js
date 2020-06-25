$(document).ready(
  function() {

    // Struttura dinamica con handlebars
    var source = $('#template').html();
    var template = Handlebars.compile(source);

    var numeroTemplate = { number: 'clicca qui'};
    var html = template(numeroTemplate);

    for (var i = 0; i < 36; i++) {
      $('.container').append(html);
    }


    // click quadrato
    $(document).on('click', '.quadrato',
      function() {
        var quadratoCliccato = $(this);

        // ajax
        $.ajax(
          {
            // endpoint API  method
            url: 'https://flynn.boolean.careers/exercises/api/random/int',
            method: 'GET',

            // in caso di successo
            success: function(numeroRandom) {
              // Inserisco numero random nella variabile
              var numero = numeroRandom.response;

              quadratoCliccato.find('.number').text(numero)

              // Se il numero è < o uguale a 5 il quadrato diventa giallo
              if (numero <= 5) {
                // resetto  classi
                quadratoCliccato.removeClass('yellow');
                quadratoCliccato.removeClass('green');

                // aggiungo classe
                quadratoCliccato.addClass('yellow');
              } else { //altrimenti diventa verde
                // resetto  classi
                quadratoCliccato.removeClass('yellow');
                quadratoCliccato.removeClass('green');

                // Aggiungo classe
                quadratoCliccato.addClass('green');
              }
            },
            error:
            function() {
              alert('Errore');
            }
          }

        );
      }
    );
  }
);
