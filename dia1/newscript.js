//Ejer 5 y ejer 6: el 5 pedia que al hacer click en el boton se mande una request al servicio
//en el 6 se pide mostrar la response en el div
function enviar(){
    //document.bgColor = 'red';
    var param = $("#alias").val();
    url = "http://localhost/app/bootcampglobant/dia1/api/dispatcher.php";
    $.post(url, {service: 'welcome.hello', params: {name: param}},
            function(data){$("#respuesta").html(data);});   
}

$(document).ready(function(){
    alert("Page is loaded");
    document.getElementById("alias").focus();    
})
//Ejer 7: Pide mostrar el error con letras rojas, yo le pase una url no valida para probar
            .ajaxError( function(e, x, settings, exception){//xhr, ajaxOptions, thrownError){
                            $("#respuesta").css({"color": "red"});
                            $("#respuesta").html(x.status+" "+exception);//xhr.status+" "+thrownError);
                })