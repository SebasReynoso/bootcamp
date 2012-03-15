//

$(document).delegate('#page', 'pageinit',function(){ 
     alert("Finished loading");
      $("#buttonRta").click(function(){
          var param = $("#alias").val();
            url = "http://localhost/app/bootcampglobant/dia2/api/dispatcher.php";
            $.post(url, {service: 'welcome.hello', params: {name: param}},
            function(data){$("#respuesta").html(data);}); 
        });
});