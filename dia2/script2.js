//script para los ejercicios 5 y 6; donde el primero carga una imagen cuando se presiona el boton
// y el otro saca la imagen cuando se presiona esc
$(document).delegate('#page', 'pageinit',function(){    
    $("#button").click(function() {
        $.mobile.showPageLoadingMsg();
    });
    
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) { $.mobile.hidePageLoadingMsg(); }   // esc
})

/*
$(document).ready(function(){
  $("#button").click(function() {
        $.mobile.showPageLoadingMsg();
  });
})

$(document).keyup(function(e) {
  if (e.keyCode == 27) { $.mobile.hidePageLoadingMsg(); }   // esc
})
*/