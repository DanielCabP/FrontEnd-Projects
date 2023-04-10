class VerTareaView extends View {

    constructor(model, parentId){
        super(model, parentId);
    }

    refresh(){
        document.getElementById(this.parentId).titulo = this.model.titulo;
        document.getElementById(this.parentId).descripcion = this.model.descripcion;
        super.refresh();
    }

    getTitulo(){
        return document.getElementById(this.parentId).value;
    }

    getDescripcion(){
        return document.getElementById(this.parentId).value;
    }
}