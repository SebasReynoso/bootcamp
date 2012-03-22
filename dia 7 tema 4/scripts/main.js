/* 
 *
 */
require(["module/Director", "module/Movie"], function (Director, Movie) {
    var d=new Director('Martin');
    var q=["muy buena", "excelente"];
    d.setQuotes(q);
    d.speak();
});
