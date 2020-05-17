var SLAM = SLAM || {};

SLAM.UI = {};       // interfaz
SLAM.MODULOS = {};  // modulos
// SLAM.MODULOS.REPORTES = {
//     tipo: 'pdf',
//     vucem: true,
//     abrir: function () {
//         window.open('https://developer.mozilla.org/es/' + '?tipo=' + this.tipo);
//     }
// }

function Bodega(parametros) {
    this.referencia = parametros.referencia;
    this.Grabar = function () {
        return this.referencia;
    }
}

SLAM.MODULOS.REFERENCIA = {
    o: null
}

SLAM.WINDOW = {};   // acctiones ventanas
SLAM.UTILERIAS = {
  msgbox: function (texto) {
    return alert(texto);
  }
};                  // utilerias

// SLAM.UTILERIAS.msgbox('Hola soy una app!!!');


// SLAM.MODULOS.REPORTES.tipo = 'xls';
// SLAM.MODULOS.REPORTES.abrir();
// let o = SLAM.MODULOS.REFERENCIA.o = new B({referencia:'test'});
// console.log(o.Grabar())

