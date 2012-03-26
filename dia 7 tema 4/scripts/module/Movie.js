define(["./Director"], function(Director) {
        function Movie(i, t, r){ 
            var id=i;
            var title=t;
            var rating=r;
            var cast;
            var director;

	// ************************************************************************ 
            this.toString=this.getTitle=function(){return this.title};
            this.getRating=function(){return this.rating};
            this.getId=function(){return this.id};
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
            this.setCast=function(c){this.cast=c;};
            this.getCast=function(){return this.cast};
            
            this.setDirector=function(d){this.director=d};
            this.getDirector=function(){return this.director};
        }
        
        return Movie;
  })