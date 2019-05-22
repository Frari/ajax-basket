// Chiedere all’utente quanti giocatori vuole generare.
// Chiedere all’API i giocatori e stampare a schermo una
// card per ogni giocatore attraverso handlebars.
// Inizialmente chiamate l'API con un numero fisso stabilito da voi,
// in modo da interrogare l'API nel modo corretto e stilare le card.
// Poi aggiungete la richiesta del numero dei giocatori all'utente
$(document).ready(function(){

// chiedo con un prompt all'utente quante schede giocatore vuole vedere
  var utente_num=parseInt(prompt('iserisci qui il numero delle schede che uoi vedere'));
  console.log(utente_num);

// effettuo chiamata ajax per richiedere array oggetti giocatori
  $.ajax({
    url:'https://www.boolean.careers/api/array/basket?',
    metod:'GET',
    data:{
      'n':utente_num
    },
    success: function(data){
      console.log(data);

// creo ciclo per stampare a schermo tutte le proprietà dei giocatori
// creo un template per visualizzare le schede dei giocatori

      for(var i=0; i<data.response.length; i++){

        var template_giocatore=$('#template_player').html();
        var template_function = Handlebars.compile(template_giocatore);
        var context={
          codice:data.response[i].playerCode,
          rimbalzi:data.response[i].rebounds,
          falli:data.response[i].fouls,
          punti2:data.response[i].twoPoints,
          punti3:data.response[i].threePoints
        }
        var html= template_function(context);
        $('.container').append(html);
      };


    },
    error: function(){
      alert('errore');
    }
  });
});
