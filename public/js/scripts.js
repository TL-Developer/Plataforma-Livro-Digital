var pagina = 1,
	zoom = 1.5;

function paginacaoAnterior(){
	var textoPagina = $('.paginacao form #paginacao');

	pagina--;
	insertPdf(pagina, 1.5);

	if(pagina-1 == 0){
		textoPagina.val('capa');
	}else{
		textoPagina.val(pagina-1);
	}
};

function paginacaoSeguinte(){
	var textoPagina = $('.paginacao form #paginacao');

	pagina++;
	insertPdf(pagina, 1.5);

	if(pagina-1 == 0){
		textoPagina.val('capa');
	}else{
		textoPagina.val(pagina-1);
	}
};

function zoomPdfIn(){
	var textoZoom = $('.zoom .controles .valor');
	
	zoom += 0.5;
	
	insertPdf(pagina, zoom);
	
	if(zoom == 1){
		textoZoom.html('ajustado');
	}else if(zoom == 1.5){
		textoZoom.html('100%');
		$('.pdfHere').css('height','auto');
		$('.pdfHere #the-canvas').css('height','auto');
		$( window ).resize(function() {
	       $('.pdfHere').css('height','auto');
			$('.pdfHere #the-canvas').css('height','auto');
	    });
	}else if(zoom == 2){
		textoZoom.html('125%');
	}else if(zoom == 2.5){
		textoZoom.html('150%');
	}else if(zoom == 3){
		textoZoom.html('175%');
	}else if(zoom == 3.5){
		textoZoom.html('200%');
	}
};

function zoomPdfOut(){
	var textoZoom = $('.zoom .controles .valor');
	
	zoom -= 0.5;
	
	if(zoom == 1){
		textoZoom.html('ajustado');
		
		$('.pdfHere').css({'height': ($(window).height() - $('.footer').height()) - 63});
		$('.pdfHere #the-canvas').css({'height': '100%'});
		$( window ).resize(function() {
	       $('.pdfHere').css({'height': ($(window).height() - $('.footer').height()) - 63});
	       $('.pdfHere #the-canvas').css({'height': '100%'});
	    });

	}else if(zoom == 1.5){
		textoZoom.html('100%');
	}else if(zoom == 2){
		textoZoom.html('125%');
	}else if(zoom == 2.5){
		textoZoom.html('150%');
	}else if(zoom == 3){
		textoZoom.html('175%');
	}else if(zoom == 3.5){
		textoZoom.html('200%');
	}

	insertPdf(pagina, zoom);
};

