//Meu código de JQuery Pessoal
$(document).ready(function(){
	//-------------------------- HOME

	$('.itens-servicos').hover(function() {
		$(this).css('background', '#0aa9de');
	}, function() {
		$(this).css('background', '#0099cc');
	});

	//-------------------------- HISTORIA
	$('#button-down').click(function(){
		$('#part-historia').animate({
			top: '-877px'
			}, 1000, 'easeInQuad', function() {
			/* stuff to do after animation is complete */
		});
		$('#part-galeria').animate({
			top: '-877px'
			}, 1000, 'easeInQuad', function() {
			/* stuff to do after animation is complete */
		});
	});

	$('#button-up').click(function(){
		$('#part-historia').animate({
			top: '0px'
			}, 1000, 'easeInQuad', function() {
			/* stuff to do after animation is complete */
		});
		$('#part-galeria').animate({
			top: '0px'
			}, 1000, 'easeInQuad', function() {
			/* stuff to do after animation is complete */
		});
	});

	$('.bxslider').bxSlider();

});
