//Create a singleton MovieDownloader and use it in the download method
var MovieDownloader = (function () {
    return {
        download:function(Title){
            console.log("Downloading "+Title);
        }
    }
})

