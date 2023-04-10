class AgregarTareaView extends View {

    constructor(model, parentId){
        super(model, parentId);
    }

    refresh(){
        document.getElementById("titulo").titulo = this.model.titulo;
        document.getElementById("descripcion").descripcion = this.model.descripcion;
        
        super.refresh();
    }

    getTitulo(){
        return document.getElementById("titulo").value;
    }

    getDescripcion(){
        return document.getElementById("descripcion").value;
    }
}