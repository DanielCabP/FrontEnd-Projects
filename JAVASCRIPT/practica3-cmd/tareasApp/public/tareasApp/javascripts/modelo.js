let Utils = require('./utils');

    class Tarea {

_id;
titulo = 'Sin Titulo';
descripcion = 'Ni descripcion';

constructor(titulo, descripcion) {
    this._id = Utils.genId()
    this.titulo = titulo;
    this.descripcion = descripcion;

    }

}

    class Usuario {

    _id;
    nombre = 'Sin Nombre';
    apellido = 'Ni Apellido';

    constructor(nombre, apellido) {
    this._id = Utils.genId()
    this.nombre = nombre;
    this.apellido = apellido;
    }
    get nombreCompleto() {
        return this.apellido.toUpperCase()
        + ', ' + this.nombre;
        }

    }



    class TareasApp extends Usuario{

    _id;
    titulo = 'Sin Titulo';
    descripcion = 'Ni descripcion';
    
    tareas = [];

    constructor(titulo, descripcion) {
        super(titulo, descripcion)
    }

    agregarTarea(s) {
        this.tareas.push(s);
    }

    borrarTarea(_id) {
        let id = this.tareas.findIndex(s => s._id == _id)
        this.tareas.splice(id, 1);
    }

    verTarea(_id) {
        console.log(`Usuario: ${this.nombreCompleto}[${this._id}]
        Tareas:`);
        for (let s of this.tareas) {
        s.imprimir();
    }

                  
    }
    
    modificarTarea(_id, titulo, descripcion) {
        let t = this.tareas.find(s => s._id == _id);
        Object.assign(t, titulo, descripcion);
    }
                    
    
}


module.exports = TareasApp;