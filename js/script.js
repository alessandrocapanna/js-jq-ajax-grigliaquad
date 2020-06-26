$(document).ready(
  function() {

    // Struttura dinamica con handlebars
    var source = $('#template').html();
    var template = Handlebars.compile(source);

    var context = {};
    var html = template(context);

    for (var i = 0; i < 36; i++) {
      $('.container').append(html);
    }


    // click quadrato
    $(document).on('click', '.quadrato',
      function() {
        var quadratoCliccato = $(this);

        // controllo se è gia stato cliccato se si faccio alert se no faccio chiamata ajax etc
        if (quadratoCliccato.hasClass('cliccato')) {
          alert('gia stato cliccato mi disp')
        }else {
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
                  quadratoCliccato.addClass('cliccato');
                } else { //altrimenti diventa verde
                  // resetto  classi
                  quadratoCliccato.removeClass('yellow');
                  quadratoCliccato.removeClass('green');

                  // Aggiungo classe
                  quadratoCliccato.addClass('green');
                  quadratoCliccato.addClass('cliccato');
                }
              },
              error:
              function() {
                alert('Errore');
              }
            }

          );
        }
      }
    );
  }
);
