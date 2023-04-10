class BorrarTareaPageController extends PageController{

    constructor(regex, model, view){
        super(regex, model, view);
        this.borrarTareaController = new BorrarTareaController(model, view.borrarTareaView);
    }

    route(url){    
        let queryString = '?'+url.split('?')[1];
        let params = new URLSearchParams(queryString);
        this.idTarea = params.get('id');
        model.idTarea = this.idTarea;
        this.borrarTareaController.setIdTarea(this.idTarea) ;
        super.route(url);
        
      }
}