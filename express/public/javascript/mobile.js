$(document).ready(function(){
	$("#motor").hammer({
		prevent_default: false,
		drag_vertical: false
		}).on('hold', function(ev){
			$.get('/on');
		}).on('release', function(ev){
			$.get('/off');
		});
	});