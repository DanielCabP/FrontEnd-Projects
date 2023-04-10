class ModificarTareaPageController extends PageController{

    constructor(regex, model, view){
        super(regex, model, view);
        this.modificarTareaController = new ModificarTareaController(model, view.modificarTareaView);
    }
    
}