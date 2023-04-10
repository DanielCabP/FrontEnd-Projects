
class TareasApp {
    constructor(){}

    async getTareas(){
        return await Tarea.find();
    }

    async getTitulo(_id){
        let resultado = await Tarea.findById(_id)
        return resultado.titulo;
    }

    async getDescripcion(_id){
        let resultado = await Tarea.findById(_id)
        return resultado.descripcion;
    }

    async agregarTarea(titulo, descripcion) {
        let tarea = new Tarea({ titulo, descripcion });
        return await tarea.save();
    }

    async borrarTarea(_id) {
        let result = await Tarea.findByIdAndRemove(_id)
        if (result == null) throw new Error('Tarea no encontrada');
        else return;
    }

    async borrartareas() {
        return await Tarea.deleteMany({});
    }

    async verTarea(_id) {
        let resultado = await Tarea.findById(_id)
        if (resultado == null) throw new Error(`Tarea no encontrada ${_id}`)
        else return resultado;

    }
    
    async modificarTarea(_id, titulo, descripcion) {
        let resultado = await Tarea.findByIdAndUpdate(_id, { titulo, descripcion })
        if (resultado == null) throw new Error(`Tarea no encontrada ${_id}`)
        else return await this.vertarea(_id);
    }
}

//module.exports = new TareasApp();