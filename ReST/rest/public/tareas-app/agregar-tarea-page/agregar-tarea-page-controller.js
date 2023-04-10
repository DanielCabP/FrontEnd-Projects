class AgregarTareaPageController extends PageController{

    constructor(regex, model, view){
        super(regex, model, view);
        this.agregarTareaController = new AgregarTareaController(model, view.agregarTareaView);
    }
    
}