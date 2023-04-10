class AgregarTareaPageView extends PageView {

    constructor(model){
        super(model, 'main');
        this.content = `
        
        <header>
		<ul >
			<li><a class="noactive" href="/tareas-app/listado" onclick="router.route()">Listado Tareas</a></li>
			<li><a class="active" href="/tareas-app/agregar" onclick="router.route()">Agregar Tarea</a></li>
			<li><a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Tareas WebApp - Grupo 8</a></li>
		</ul>
	    </header>
        <br><br>
        <head>
            <a class="image" href="https://www.uclm.es"> <img src="../../images/logo.png"></a>
            <h1>Sitio Web de Tareas</h1>
            <hr class="new2">
        <br>
        </head>

        <h2>Agregar Tarea</h2>
        <a class="green" href="/tareas-app/listado" onclick="router.route()">Listado</a><br><br>

        <form method="GET" action="/tareasApp/ver" >
            <p class="orange">Título</p>
            <textarea id="titulo" name="titulo" rows="1" cols="41" ></textarea>
            <p class="orange">Descripción</p>
            <textarea id="descripcion" name="descripcion" rows="10" cols="41"></textarea><br><br><br><br>
        
            <button type="button" onclick="agregarTareaPageController.agregarTareaController.onGuardarClick(event)">GUARDAR</button>

            <input type="reset" value="Limpiar">
        </form>
       

        `;

        this.agregarTareaView = new AgregarTareaView(model, 'titulo', 'descripcion');
    }

    refresh(){
        super.refresh();
        this.agregarTareaView.refresh();
    }

}