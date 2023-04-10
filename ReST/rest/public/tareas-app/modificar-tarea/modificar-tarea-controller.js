class ModificarTareaController extends Controller {

    constructor(model, view){
        super(model, view);
    }

    setIdTarea(idTarea){
        this.idTarea = idTarea;
        this.view.idTarea = idTarea;
    }
    
    async onGuardarClick(){

        this.model.titulo = this.view.getTitulo();
        console.log("Tarea modificada (Título): " + this.view.getTitulo());

        this.model.descripcion = this.view.getDescripcion();
        console.log("Tarea modificada (Descripción): " + this.view.getDescripcion());

        await proxy.modificarTarea(this.idTarea, this.model.titulo, this.model.descripcion);

        this.view.refresh();
    }
    
}