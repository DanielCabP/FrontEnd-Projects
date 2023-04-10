class VerTareaPageController extends PageController{

    constructor(regex, model, view){
        super(regex, model, view);
        this.verTareaController = new VerTareaController(model, view.verTareaView);
    }
    
}