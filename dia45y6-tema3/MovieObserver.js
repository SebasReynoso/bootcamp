/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function MovieObserver(){ 
   $.subscribe("movies", 
                function(_state, _movie){
                    if (_state == "play"){
                        console.log("Playing: " + _movie +"...");
                    }
                    else if (_state == "stop"){
                            console.log("Stoping: " + _movie +"...");
                        }   
                    }
            );
} 

//fuente: http://net.tutsplus.com/tutorials/javascript-ajax/loose-coupling-with-the-pubsub-plugin/
(function(d){

	// the topic/subscription hash
	var cache = {};

	d.publish = function(/* String */topic, /* Array? */args){
            cache[topic] && d.each(cache[topic], function(){
                this.apply(d, args || []);
            });
	};

	d.subscribe = function(/* String */topic, /* Function */handler){
		if(!cache[topic]){
			cache[topic] = [];
		}
		cache[topic].push(handler);
		return [topic, handler]; // Array
	};

	d.unsubscribe = function(/* Array */handle){
		var t = handle[0];
		cache[t] && d.each(cache[t], function(idx){
			if(this == handle[1]){
				cache[t].splice(idx, 1);
			}
		});
	};

})(jQuery);

