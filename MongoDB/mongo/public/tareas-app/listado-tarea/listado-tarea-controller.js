class ListadoTareaController extends Controller {

    constructor(model, view){
        super(model, view);
    }

    onGuardarClick(){

        
        this.view.refresh();
    }

    
}