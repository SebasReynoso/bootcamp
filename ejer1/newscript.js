function load(){
    alert("Page is loaded");
    document.getElementById("alias").focus();
}

function enviar(){
    var param = $("#alias").val();
    url = "http://localhost/app/bootcampglobant/ejer1/api/dispatcher.php";
    $.post(url, {service: 'welcome.hello', params: {name: param}}, function(data){
                                                                                $("#respuesta").html(data);});
}