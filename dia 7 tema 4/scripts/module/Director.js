/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


define(function(){
    function Director(n){
            var name=n;
            var quotes=[];
            
            this.getName=function(){return name;}
            this.getQuotes=function(i){return quotes[i];}
            this.setQuotes=function(q){quotes=q;}
        }
    Director.prototype.speak = function(){
        
        var q = this.getQuotes(0);
        var n = this.getName();
        console.log(n +": "+q);
        //$("#who").html(who);
        //$("#quote").html(quote);
    };
    
    return(Director);
})
