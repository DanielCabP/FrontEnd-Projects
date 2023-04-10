class BorrarTareaController extends Controller {

    constructor(proxy, view){
        super(proxy, view);
    }

    setIdTarea(idTarea){
        this.idTarea = idTarea;
        this.view.idTarea = idTarea;
    }
    
    onBorrarTareaClick(event){
        let tarea = proxy.tareas.find(s => s._id == proxy.idTarea);
        this.proxy._id = tarea._id;
        
        this.view.refresh();
    }

}