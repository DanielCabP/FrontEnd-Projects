class ModificarTareaView extends View {

    constructor(model, parentId){
        super(model, parentId);
    }

    refresh(){

        let id = model.verTarea(this.idTarea);
        this._content = 
        `
        <form method="GET" action="/tareas-app/listado">

        <p class="orange" >Título</p> 
        <textarea id="titulo" name="message" rows="1" cols="41"></textarea>
        <p class="orange">Descripción</p> 
        <textarea id="descripcion" name="message" rows="10" cols="41"></textarea>
        <br><br>
        <button type="button" onclick="modificarTareaPageController.modificarTareaController.
        onGuardarClick(${this.id})">MODIFICAR</button>
        <input type="reset" value="Limpiar">

        </form>
        `


        //model.modificarTarea(id, this.model.titulo, this.model.descripcion);

        super.refresh();
    }

    getTitulo(){
        return document.getElementById("titulo").value;
    }

    getDescripcion(){
        return document.getElementById("descripcion").value;
    }
}