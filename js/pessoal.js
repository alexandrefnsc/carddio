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

	// MENU HISTORIA
	$('#float-menu li').hover(function() {
		$(this).children('span').css({
			border: 'solid 2px white',
			color: '#158fb7',
			borderRadius:'10px',
		});
		$(this).css('cursor', 'pointer');
	}, function() {
		$(this).children('span').css({
			border: 'none',
			color: '#FFF'
		});
	});

	$('#menu-01').click(function(event) {
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
		$('#part-trabalhe').animate({
			top: '0px'
			}, 1000, 'easeInQuad', function() {
			confere();
		});
	});

	$('#menu-02').click(function(event) {
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
		$('#part-trabalhe').animate({
			top: '-877px'
			}, 1000, 'easeInQuad', function() {
			confere();
		});
	});

	$('#menu-03').click(function(event) {
		$('#part-historia').animate({
			top: '-1755px'
			}, 1000, 'easeInQuad', function() {
			/* stuff to do after animation is complete */
		});
		$('#part-galeria').animate({
			top: '-1755px'
			}, 1000, 'easeInQuad', function() {
			/* stuff to do after animation is complete */
		});
		$('#part-trabalhe').animate({
			top: '-1755px'
			}, 1000, 'easeInQuad', function() {
			confere();
		});
	});

	$('.custom-upload input[type=file]').change(function(){
    $(this).next().find('input').val($(this).val());
});

	function confere(){
		if ($('#part-trabalhe').css('top')=='-1755px') {
			$('#float-menu').css('color', '#0099cc');
			$('#float-menu span').css('color', '#0099cc');
		}else{
			$('#float-menu').css('color', '#FFF');
			$('#float-menu span').css('color', '#FFF');
		};
	}

});
