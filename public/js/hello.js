/* -*- Mode: Java; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

//
// See README for overview
//

'use strict';

//
// Fetch the PDF document from the URL using promises
//
var DEFAULT_URL = 'compressed.tracemonkey-pldi-09.pdf';
var DEFAULT_SCALE_DELTA = 1.1;
function quantidadePaginas(){
  PDFJS.getDocument('pdfs/1.pdf').then(function(pdf) {
    return alert('temos '+ pdf.numPages + ' Páginas nesse PDF');
  });   
}

function insertPdf(pagina, zoom){
  PDFJS.getDocument('pdfs/1.pdf').then(function(pdf) {
    // Using promise to fetch the page
    pdf.getPage(pagina).then(function(page) {
      var scale = zoom;
      var viewport = page.getViewport(scale);

      //
      // Prepare canvas using PDF page dimensions
      //
      var canvas = document.getElementById('the-canvas');
      var context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      //
      // Render PDF page into canvas context
      //
      var renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      page.render(renderContext);

      // centralizar canvas no centro da tela
      function centralizaCanvas(){
        var canvasPdf = $('#the-canvas'),
          larguraTela = $(window).width(),
          canvasLargura = canvasPdf.width();

        canvasPdf.css({
         'margin-left': (larguraTela / 2) - canvasLargura / 2 + 'px'
        });
      };
      centralizaCanvas();

      $( window ).resize(function() {
        centralizaCanvas();
      });

    });
  });
}

insertPdf(1, 1.5);

// quantidadePaginas();
