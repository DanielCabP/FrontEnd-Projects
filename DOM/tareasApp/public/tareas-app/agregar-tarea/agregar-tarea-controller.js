class AgregarTareaController extends Controller {

    constructor(model, view){
        super(model, view);
    }

    onGuardarClick(){
        this.model.titulo = this.view.getTitulo();
        console.log("Tarea agregada (Título): " + this.view.getTitulo());
        this.model.descripcion = this.view.getDescripcion();
        console.log("Tarea agregada (Descripción): " + this.view.getDescripcion());

        let tareaApp = new TareasApp();
        let tarea = new Tarea();
        tarea.titulo = this.model.titulo;
        tarea.descripcion = this.model.descripcion;
        tareaApp.agregarTarea(tarea);
        console.log(tareaApp.tareas[0]);

        this.view.refresh();
    }

    
  }



