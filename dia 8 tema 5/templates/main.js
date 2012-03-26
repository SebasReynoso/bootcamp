$(document).ready(function(){
    $("#mustacheTemplate").html (Mustache.render(profileMustache,profile));
    $("#jsmartTemplate").html(new jSmart(profileJsmart).fetch(profile));
    $("#underscoreTemplate").html(_.template (profileUnderScore,profile)); 
})