class ListadoTareaView extends View {

    constructor(model, parentId){
        super(model, parentId);
    }

    async refresh() {

        let response = await proxy.listadoTareas();
        
        if (response.ok) {
            let lista = document.getElementById('listaTareas');
            this._content = ``;
            let items = '';
            let tareas = await response.json();
            tareas.forEach(function (l) {
                items = items + `<a class="green" id="listaTareas" href="/tareas-app/ver?id=${l._id}" onclick="router.route()">`
                +l.titulo+`</a><a class="white" href="/tareas-app/borrar?id=${l._id}" onclick="router.route()"> X</a><br><br>`;
             }, this)
            this._content = items;
            lista.innerHTML = items;
        }

        super.refresh();
    }
}