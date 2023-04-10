class ListadoTareaController extends Controller {

    constructor(model, view){
        super(model, view);
    }

    onGuardarClick(){
        this.model.titulo = this.view.getTitulo();
        console.log(this.view.getTitulo());
        this.model.descripcion = this.view.getDescripcion();
        console.log(this.view.getDescripcion());

        
        this.view.refresh();
    }

    getTitulo(){
        return document.getElementById(this.parentId).titulo;
    }

    getDescripcion(){
        return document.getElementById(this.parentId).descripcion;
    }
}