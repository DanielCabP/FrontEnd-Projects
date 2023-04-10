class TareasProxy {


	getTarea(){
        return this.tareas;
    }

	async listadoTareas() {
        return await fetch('/api/tareas');
    }

	async verTarea(id) {
        return await fetch(`/api/tareas/${id}`);
    }

    async verTitulo(id) {
        return await fetch(`/api/tareas/${id}/titulo`);
    }

    async verDescripcion(id) {
        return await fetch(`/api/tareas/${id}/descripcion`);
    }

	async agregarTarea(titulo, descripcion) {
        
        let l = { titulo, descripcion };
        return await fetch(`/api/tareas`, {
            method: 'POST', body: JSON.stringify(l), headers: {
                "Content-Type":
                    "application/json"
            }
        });
    }

	async modificarTarea(id, titulo, descripcion) {
        let l = { titulo, descripcion };
        return await fetch(`/api/tareas/${id}`, {
            method: 'PUT', body: JSON.stringify(l), headers: {
                "Content-Type":
                    "application/json"
            }
        });
    }

	async borrarTarea(id) {
        return await fetch(`/api/tareas/${id}`, { method: 'DELETE' });
    }


}





