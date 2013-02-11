$(document).ready(function(){
	$('#motor').on('mouseup tap hold', function(){
		$.get('/off');
	}).on('mousedown release', function(e){
		e.stopImmediatePropagation();
		e.preventDefault();
		$.get('/on');
	});
});