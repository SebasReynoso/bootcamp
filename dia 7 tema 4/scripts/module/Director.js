/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


define(function(){
    function Director(n){
            var name=n;
            var quotes=[];
            
            this.getName=function(){return this.name;}
            this.getQuotes=function(){return quotes;}
            this.setQuotes=function(q){quotes=q;}
        }
    Director.prototype.speak = function(){
        var i=Math.round(Math.random()*this.getQuotes().length);
        var n = this.getName();
        console.log(n +"says: "+this.getQuotes()[i]);
        //$("#who").html(who);
        //$("#quote").html(quote);
    };
    
    return(Director);
})
