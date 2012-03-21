

/* 
 * Movie class
 *  - title:string
    - rating:int
    - id:int
    + getTitle():string
    + setTitle(title)
    + getRating():int
    + setRating(rating)
    + getId():int
    + setId(id)
    + play()
    + stop()
 */
var Movie=(function (i, t, r){ 
    return function(i,t,r){
        var id=i;
        var title=t;
        var rating=r;
        var cast;
        
        //this.constructor.population++;

	// ************************************************************************ 
	// PRIVATE VARIABLES AND FUNCTIONS 
	// ONLY PRIVELEGED METHODS MAY VIEW/EDIT/INVOKE 
	// *********************************************************************** 
         this.toString=this.getTitle=function(){return title};
         this.getRating=function(){return rating};
         this.getId=function(){return id};
         this.setTitle = function(title){this.title=title;}
         this.setRating = function(rating){this.rating=rating;}
         this.setId = function(id){this.id=id;}
         
         this.play = function(){
             $.publish("movies", ["play", title]);
         }
         this.stop = function(){
             $.publish("movies", ["stop", title]);
        }
        //Add the method Movie.setCast(cast:array) and add an array of Actors to your movie.
        //Add a Movie.getCast method and play with the output on the console.
        this.setCast=function(c){this.cast=c;}
        this.getCast=function(){return this.cast}
    }
}())  