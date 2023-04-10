class ListadoTareaController extends Controller {

    constructor(model, view){
        super(model, view);
    }

    onGuardarClick(){

        console.log(this.model.tareas);
        this.view.refresh();
    }

    
}