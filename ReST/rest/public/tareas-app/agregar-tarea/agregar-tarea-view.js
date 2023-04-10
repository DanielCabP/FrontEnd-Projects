class AgregarTareaView extends View {

    constructor(model, parentId){
        super(model, parentId);
    }

    refresh(){
        document.getElementById("titulo").value = "";
        document.getElementById("descripcion").value = "";
       
        super.refresh();
    }

    getTitulo(){
        return document.getElementById("titulo").value;
    }

    getDescripcion(){
        return document.getElementById("descripcion").value;
    }
}