class ModificarTareaPageController extends PageController{

    constructor(regex, model, view){
        super(regex, model, view);
        this.modificarTareaController = new ModificarTareaController(model, view.modificarTareaView);
    }
    
    route(url){    
        let queryString = '?'+url.split('?')[1];
        let params = new URLSearchParams(queryString);
        this.idTarea = params.get('id');
        model.idTarea = this.idTarea;
        this.modificarTareaController.setIdTarea(this.idTarea) ;
        super.route(url);
        
      }
}