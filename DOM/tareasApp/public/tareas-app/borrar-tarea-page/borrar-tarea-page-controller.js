class BorrarTareaPageController extends PageController{

    constructor(regex, model, view){
        super(regex, model, view);
        this.borrarTareaController = new BorrarTareaController(model, view.borrarTareaView);
    }
    
}