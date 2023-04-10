class ModificarTareaController extends Controller {

    constructor(model, view){
        super(model, view);
    }

    onGuardarClick(){
        this.model.titulo = this.view.getTitulo();
        console.log("Tarea modificada (Título): " + this.view.getTitulo());
        this.model.descripcion = this.view.getDescripcion();
        console.log("Tarea modificada (Descripción): " + this.view.getDescripcion());
        this.view.refresh();
    }

    getTitulo(){
        return document.getElementById(this.parentId).value;
    }

    getDescripcion(){
        return document.getElementById(this.parentId).value;
    }
}