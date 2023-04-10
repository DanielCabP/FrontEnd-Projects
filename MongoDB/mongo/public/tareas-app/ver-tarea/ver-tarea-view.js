

class VerTareaView extends View {

    constructor(model, parentId){
        super(model, parentId);
    }

    /*
    refresh(){

        let id = model.verTarea(this.idTarea);
        this._content =  `
        
        <a class="green" href="/tareas-app/modificar?id=${this.idTarea}" onclick="router.route()">Modificar</a>
		<br><br><br>

		<h2>Descripción Tarea </h2><br><br></br>
        <p id="id"></p><p class="orange">Título</p><p id="titulo">`+model.tareas[id].titulo+`</p><br>
            <p class="orange">Descripción</p><p id="descripcion">`+model.tareas[id].descripcion+`</p>
        
        `;
        super.refresh();
    }
    */

    async refresh() {

       
        let response = await proxy.verTarea(this.idTarea);
        
        let tituloResponse = await proxy.verTitulo(this.idTarea);
        let descripcionResponse = await proxy.verDescripcion(this.idTarea);

        let titulo = await tituloResponse.json();
        let descripcion = await descripcionResponse.json();

        if (response.ok) {
            
            this._content = `
                        <a class="green" href="/tareas-app/modificar?id=${this.idTarea}" onclick="router.route()">Modificar</a><br><br><br>

                        <h2>Descripción Tarea </h2><br><br></br>
                        <p id="id"></p><p class="orange">Título</p><p id="titulo">`+titulo+`</p><br>
                            <p class="orange">Descripción</p><p id="descripcion">`+descripcion+`</p>
                    `; 
        }

        super.refresh();
    }


    getId(){
        return document.getElementById("id").value;
    }
    
    getTitulo(){
        return document.getElementById("titulo").value;
    }

    getDescripcion(){
        return document.getElementById("descripcion").value;
    }

}