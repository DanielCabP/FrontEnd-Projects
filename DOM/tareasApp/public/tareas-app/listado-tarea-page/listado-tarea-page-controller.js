class ListadoTareaPageController extends PageController{

    constructor(regex, model, view){
        super(regex, model, view);
        this.listadoTareaController = new ListadoTareaController(model, view.listadoTareaView);
    }
    
}