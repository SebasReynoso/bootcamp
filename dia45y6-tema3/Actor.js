/* 
 * Create an Actor class and create some actors from one of your favorite movies.
 */

function Actor(n){
    var name=n;
    var biography;
    
    this.toString=this.getName=function(){return name};
    this.setName=function(n){name=n;}
    this.getBiography=function(){return name};
    this.setBiography=function(b){biography=b};
    
}


