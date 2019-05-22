// Chiedere all’utente quanti giocatori vuole generare.
// Chiedere all’API i giocatori e stampare a schermo una
// card per ogni giocatore attraverso handlebars.
// Inizialmente chiamate l'API con un numero fisso stabilito da voi,
// in modo da interrogare l'API nel modo corretto e stilare le card.
// Poi aggiungete la richiesta del numero dei giocatori all'utente
$(document).ready(function(){

// effettuo chiamata ajax per richiedere array oggetti giocatori
  $.ajax({
    url:'https://www.boolean.careers/api/array/basket?',
    metod:'GET',
    data:{
      'n':5
    },
    success: function(data){
      console.log(data);

// creo ciclo per stampare a schermo tutte le proprietà dei giocatori
      for(var i=0; i<data.response.length; i++){
        $('.container').append(data.response[i].playerCode);
        $('.container').append(data.response[i].rebounds);
        $('.container').append(data.response[i].fouls);
        $('.container').append(data.response[i].twoPoints);
        $('.container').append(data.response[i].threePoints);

      };
// creo un template per visualizzare le schede dei giocatori
      for(var i=0; i<data.response.length; i++){
        var template_giocatore=$('.template_player').html();
        var template_function = Handlebars.compile(template_giocatore);
        var context{

        }
        var html= template(context);
        $('.container').append(html);

      };

    },
    error: function(){
      alert('errore');
    }
  });
});
