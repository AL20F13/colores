// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	var x = 1;
	var sumar1 = 0;
	var sumar2 = 0;
	var sumar3 = 0;
	var sumar4 = 0;
	
	$('#uno').on('click', function(){
		
		sumar1 = sumar1 + x;
		$('#puntaje1').text(sumar1)
		});
	
	$('#dos').on ('click', function(){
		sumar2 = sumar2 + x;
		$('#puntaje2').text(sumar2)
	});
	
	$('#tres').on ('click', function(){
		sumar3 = sumar3 + x;
		$('#puntaje3').text(sumar3)
	});
	
	$('#cuatro').on ('click', function(){
		sumar4 = sumar4 + x;
		$('#puntaje4').text(sumar4)
	});
		 
//}); 
});


