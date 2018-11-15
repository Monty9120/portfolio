$(function(){


	$('.p-image').on('mouseover',function(){
		$(this).find('.modal-button').removeClass('hide')
	});
	$('.p-image').on('mouseout',function(){
		$(this).find('.modal-button').addClass('hide')
	});





$(document).on('scroll',function(){

	var iScrollTop = $(document).scrollTop();

	$('.portfolio>div').each(function(i,el){

		var iElementOffset = $(el).offset().top;

		if(iScrollTop > iElementOffset - ($(window).height()*0.9)){
			$(el).addClass('fade-in-scale')
		}

	});

	});
})