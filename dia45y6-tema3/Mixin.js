/* 
 * Create a “social” mixin with the methods: share(friendName) and like().
 * http://javascriptweblog.wordpress.com/2011/05/31/a-fresh-look-at-javascript-mixins/
 */

var Mixin=function(){};

Mixin.prototype={
    
    share: function(friendName){
        console.log("sharing "+ this.getTitle()+ " with "+ friendName);
        
    },
        
    like: function(){
        console.log("Like "+this.getTitle());
    }
}



