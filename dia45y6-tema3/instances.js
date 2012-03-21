/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
    var peli1=new Movie("1","Rocky","5");
    console.log("New movie "+ peli1.getTitle());
    
    peli1.play();
    peli1.stop();
    
    var peli2=new Movie("2", "rocky2", "2");
    console.log("New movie "+ peli2.getTitle());
    
    var peli3=new Movie("3", "rocky3", "8");
    console.log("New movie "+ peli3.getTitle());
    peli3.play();
    peli3.stop();
    //-----------------------------------------------------
    var observer= new MovieObserver();

    peli1.play();
    peli1.stop();
    
    peli2.play();
    
    //-----------------------------------------------------

    var peli4=new DownloadableMovie("4", "rocky4", "7");
    peli4.download();
    
    //-------------------------------------------------
    Movie.prototype['share']= Mixin.prototype['share'];
    Movie.prototype['like']= Mixin.prototype['like'];
    
    var peli5=new Movie("5", "Rocky5", "1");
    peli5.share("JJ");
    peli5.like();
    
    //----------------------------------------------
    
    var syl=new Actor("sylvester stallone");
    syl.setBiography("También conocido como Sly, Stallone es considerado como una de las estrellas más importantes del cine de acción desde la década de 1970. ");
    
    var carl =new Actor("Carl Weathers");
    carl.setBiography("En 1974 se retira del fútbol profesional y deja al equipo de los Oakland Raiders por su verdadera vocación: ser actor.");
    
    //----------------------------------------------
    var actors=[syl, carl];
    peli1.setCast(actors);
    
    console.log(peli1.getCast()[0].getName());
    console.log("listo");
    