class VerTareaPageController extends PageController{

    constructor(regex, model, view){
        super(regex, model, view);
        this.verTareaController = new VerTareaController(model, view.verTareaView);
    }

    
    route(url){    
        let queryString = '?'+url.split('?')[1];
        let params = new URLSearchParams(queryString);
        this.idTarea = params.get('id');
        model.idTarea = this.idTarea;
        this.verTareaController.setIdTarea(this.idTarea) ;
        super.route(url);
        
      }
}