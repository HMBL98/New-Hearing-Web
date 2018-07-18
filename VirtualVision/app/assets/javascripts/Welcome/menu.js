$(document).ready(main);
 
var contador = 1;
 
function main(){
	$('.menu').click(function(){
		// $('nav').toggle(); 
		$('.VV').css("display","block");
		$('.fadebox').css("display","block");
		$('.overbox').css("display","block");

		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		}else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
		$('.main').click(function(){
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
			$('.fadebox').css("display","none");
			$('.overbox').css("display","none");
		});
 
	});
 
};
