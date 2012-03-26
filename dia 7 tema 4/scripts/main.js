/* 
 *
 */
require(["module/Director", "module/Movie", "module/jquery-1.7.1.min","module/jquery.mobile-1.1.0-rc.1.min"], function (Director, Movie) {
    var d=new Director('Martin');
    var q=["muy buena", "excelente"];
    d.setQuotes(["muy buena", "excelente"]);
    var peli=new Movie("1", "los infiltrados","9");
    peli.setDirector(d);
    peli.getDirector().speak();
    
});
