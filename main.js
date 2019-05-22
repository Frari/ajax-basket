// Chiedere all’utente quanti giocatori vuole generare.
// Chiedere all’API i giocatori e stampare a schermo una
// card per ogni giocatore attraverso handlebars.
// Inizialmente chiamate l'API con un numero fisso stabilito da voi,
// in modo da interrogare l'API nel modo corretto e stilare le card.
// Poi aggiungete la richiesta del numero dei giocatori all'utente
$(document).ready(function(){
  $.ajax({
    url:'https://www.boolean.careers/api/array/basket?',
    metod:'GET',
    data:{
      'n':5
    },
    success: function(data){
      console.log(data);
      // var schede = data.response;

      for(i=0; i<data.response.length; i++){
        $('.container').append(data.response);
      };

    },
    error: function(){
      alert('errore');
    }
  });
});
