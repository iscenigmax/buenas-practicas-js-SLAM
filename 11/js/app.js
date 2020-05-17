//NO USES VANILLA SI EXISTE EN JQUERY
//SIEMPRE LA ULTIMA VERSION DE CDN DE LA PAGINA
;(function(JAJA, window, document){
    'use strict';

    const $app = JAJA('#app');
    const $btnGrabar = JAJA('#btnGrabar');

    //$app.text('texto desde jquery');

    // $btnGrabar.on('click', function(e) {
    //     $app.append('<p>texto desde jquery (click)</p>');
    // })
    

    // $btnGrabar.on('click', function(e) {
    //     let id=Math.random()
    //     $app.append('<button class="btnGrupo" data-valor="' + id + '">Click?</button>')
    //         .off('click', 'button')
    //         .on('click', 'button', function(e) {
    //             let id=JAJA(this).data('valor');
    //             alert(id);
    //     });
    // })

})(jQuery, window, document);


