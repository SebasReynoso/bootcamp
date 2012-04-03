$(function(){

    var Movie = Backbone.Model.extend({
        defaults:{
            title: "default",
            ReleaseYear: 0,
            Synopsis: "default"
        },
        
        initialize: function(){
            console.log('this model has been initialized');
        },
        
        clear: function() {
            this.destroy();
        } 
    });
    

    var FavoriteMovies = Backbone.Collection.extend({
        model: Movie
    });
    
 
    var favoritemovies = new FavoriteMovies({title:'a', ReleaseYear: 0,
            Synopsis: "default"});



    var MovieView = Backbone.View.extend({

        tagName:  "li",

        events: {
            "click .delbtt"     : "remove",
            "click .detbtt"     : "details",
            "click .editbtt"    : "edit",
            'keypress #editTitle': 'editOnEnter',
            'keypress #editYear': 'editOnEnter',
            'keypress #editSynopsis': 'editOnEnter'
            
        },

        initialize: function() {      
            this.model.bind('change', this.render, this);
            _.bindAll(this,'remove','details', 'edit');
            this.model.bind('remove',this.unrender,this);           
        },
        
        render: function(){          
            var newTitle = "<li>"+this.model.get("title");
            var Editbtt = "<span><input type='button' value='Edit' class='editbtt'></input><span>"
            var Delbtt = "<span><input type='button' value='Delete' class='delbtt'></input></span>";
            var Detbtt = "<span><input type='button' value='Details' class='detbtt'></input></span></li>";
            $(this.el).html(newTitle + Editbtt + Delbtt + Detbtt);
            return this;
	},
        
        unrender: function(){
            $(this.el).remove();
        },
        
        remove: function(){
            this.model.destroy();
        },
        
        details: function(){
            var _title=this.model.get("title");
            var year=this.model.get("ReleaseYear");
            var syno=this.model.get("Synopsis");
            var details="<p><b>"+_title+"</b> ("+year+") </p><p>"+syno+"</p>";
            console.log(details);
            $("#detailsMovies").html(details);
                
        },
        
        edit: function(){
            
            this.$el.html("<input type='text' id='editTitle'></input><input type='text' id='editYear'></input><input type='text' id='editSynopsis'></input>");
            $("#editTitle").focus();
        },
        
        editOnEnter: function(e){
            if (e.keyCode != 13) return; 
            if (!$("#editTitle").val()) return;
            var titleValue=$("#editTitle").val();
            var yearValue=$("#editYear").val();
            var SynopValue=$("#editSynopsis").val();
            this.model.set({ title: titleValue, ReleaseYear: yearValue, Synopsis: SynopValue});
        }
    });   
    

    AppView = Backbone.View.extend({

	events: {
        "keypress #new-title":  "createOnEnter",
        "keypress #new-year":  "createOnEnter",
        "keypress #new-synopsis":  "createOnEnter"
        
        
  	},

	initialize: function(){
		favoritemovies.bind('add',this.addOne);
		this.collection=favoritemovies;
	},
        
	createOnEnter: function(e){
            if (e.keyCode != 13) return; 
            if (!$("#new-title").val()) return;
            var mov= new Movie;
            mov.set({title: $("#new-title").val(),ReleaseYear: $("#new-year").val(),Synopsis: $("#new-synopsis").val()});
            this.collection.add(mov); 
            $("#new-title").val('');$("#new-year").val('');$("#new-synopsis").val('');
        },
        
        addOne: function(mov){
            var view= new MovieView({model: mov});
            $("#list").append(view.render().el);
        }
    }); 
    
    var app = new AppView({el : $("#create-list")});  
});