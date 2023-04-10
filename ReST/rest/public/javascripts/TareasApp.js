class Tarea {

    _id;
    titulo = 'Sin Titulo';
    descripcion = 'Ni descripcion';

    constructor(_id, titulo, descripcion) {
        this._id = _id;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }

    get id(){ return this._id}
    
    get titulo(){ return this.titulo}

    get descripcion(){ return this.descripcion}

}

class TareasApp {
    constructor(){
        this.lastId = 0;
        this.tareas = [];
    }

    getTareas(){
        return this.tareas;
    }

    getTitulo(_id){
        let id = this.tareas.findIndex(s => s._id == _id)
        return this.tareas[id].titulo;
    }

    getDescripcion(_id){
        let id = this.tareas.findIndex(s => s._id == _id)
        return this.tareas[id].descripcion;
    }

    agregarTarea(titulo, descripcion) {
        let tarea = new Tarea();
        tarea._id = this.lastId;
        tarea.titulo = titulo;
        tarea.descripcion = descripcion;
        this.tareas.push(tarea);
        this.lastId++;
    }

    borrarTarea(_id) {
        let id = this.tareas.findIndex(s => s._id == _id)
        this.tareas.splice(id, 1);
        return id;
    }

    verTarea(_id) {
        let id = this.tareas.findIndex(s => s._id == _id);
        return this.tareas[id];

    }
    
    modificarTarea(_id, titulo, descripcion) {
        let tarea = this.tareas.find(s => s._id == _id);
        tarea.titulo = titulo;
        tarea.descripcion = descripcion;
    }
}

module.exports = new TareasApp();