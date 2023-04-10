class BorrarTareaView extends View {

    constructor(model, parentId){
        super(model, parentId);
    }

    
    async refresh() {

       
        let response = await proxy.verTarea(this.idTarea);
        
        let tituloResponse = await proxy.verTitulo(this.idTarea);
        let descripcionResponse = await proxy.verDescripcion(this.idTarea);

        let titulo = await tituloResponse.json();
        let descripcion = await descripcionResponse.json();

        if (response.ok) {
            
            this._content = `<h2 id="titulo">Tarea ID: `+this.idTarea+`</h2><br><p>La tarea con Título: `+titulo+` y Descripción: `+descripcion+`, ha sido borrada</p>`; 
        }

        await proxy.borrarTarea(this.idTarea);
        super.refresh();
    }

    
}