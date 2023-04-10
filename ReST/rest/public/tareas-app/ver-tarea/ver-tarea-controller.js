class VerTareaController extends Controller {

    constructor(model, view){
        super(model, view);
    }


    setIdTarea(idTarea){
        this.idTarea = idTarea;

        this.view.idTarea = idTarea;
       
    }

    onVerTareaClick(){

        let tarea = model.tareas.find(s => s._id == model.idTarea);
        
        console.log(this.idTarea);

        //this.model._id = this.view.getId();
        //console.log('VerTareaController: ',this.idTarea);
        //model.verTarea(this.model._id);
        //console.log(model.tareas);
        this.view.refresh();
    }

    
}