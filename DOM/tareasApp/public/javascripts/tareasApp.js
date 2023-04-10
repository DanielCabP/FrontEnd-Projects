class TareasApp extends LocalStorageModel{
    constructor(titulo='titulo', descripcion='descripcion'){
        super('tarea-clase');
        this._titulo = titulo;
        this._descripcion = descripcion;
    }

    get titulo(){
        this.deserialize();
        return this._titulo;
    }

    set titulo(titulo){
        this._titulo = titulo;
        this.serialize();
    }

    get descripcion(){
        this.deserialize();
        return this._descripcion;
    }

    set descripcion(descripcion){
        this._descripcion = descripcion;
        this.serialize();
    }
}
