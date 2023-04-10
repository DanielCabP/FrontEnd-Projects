class BorrarTareaController extends Controller {

    constructor(model, view){
        super(model, view);
    }

    onBorrarClick(event){
        this.model.borrar();
        this.view.refresh();
    }

}