class Tarea {

    _id;
    titulo = 'Sin Titulo';
    descripcion = 'Ni descripcion';

    constructor(titulo, descripcion) {
        this._id = genId()
        this.titulo = titulo;
        this.descripcion = descripcion;
    }

    get id(){ return this._id}
    
    get titulo(){ return this.titulo}

    get descripcion(){ return this.descripcion}

}

    class TareasApp {

    tareas = []
    
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
