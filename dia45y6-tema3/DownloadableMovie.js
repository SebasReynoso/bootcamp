//Create a DownloadableMovie that extends from Movie adding a download method.
DownloadableMovie.prototype = new Movie();
DownloadableMovie.constructor = Movie;

function DownloadableMovie(id,title,rating){
    var movieDownloader = new MovieDownloader();
    
    this.download = function(){
        movieDownloader.download(title);
    }
 }

