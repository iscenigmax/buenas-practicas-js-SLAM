let p = {};
// CLASES ECMASCRIPT 5
function UsuarioP(parametros) {
    this.nombre = parametros.nombre;
    this.saludo = function () {
        console.log('Hola soy ' + this.nombre);
    };
}

p = {nombre:'carlos'};
let up = new UsuarioP(p);
up.saludo();


// CLASES ECMASCRIPT 6
class UsuarioM {
    constructor(parametros) {
        this.nombre = parametros.nombre;
    }

    saludo () {
        return console.log('Hola soy ' + this.nombre);
    };

    static saludoexpress () {
        return 'Hola soy EXPRESS';
    }
}

p = {nombre:'claudia'};
let um = new UsuarioM(p);
um.saludo();

// console.log('EXPRESS:' + UsuarioM.saludoexpress());
// console.log(UsuarioM.saludo());
