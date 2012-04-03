$(function(){
//Write a simple javascript code tester that will execute your javascript code from a textarea.
	var text = document.getElementById('text');
	$("#text").bind('click',function(){
		$("#text").val("");
	});

//executes the javascript code in #text
        var run= document.getElementById('run');
        run.addEventListener('click',function(){
		eval(text.value);
            },false);

//Add the option to persist your test code in the browser’s storage.
        var save = document.getElementById('save');
        save.addEventListener('click', function () {
            window.localStorage.setItem('value', text.value);
            window.localStorage.setItem('timestamp', (new Date()).getTime());
            console.log("saved");
        }, false);
// place content from previous edit
        var load = document.getElementById('load');
        load.addEventListener('click', function () {
            text.value = window.localStorage.getItem('value');
            console.log("loaded");
        }, false);
})
