class ModificarTareaPageView extends PageView {

    constructor(model){
        super(model, 'main');
        this.content = `

        <header>
		<ul >
			<li><a class="active" href="/tareas-app/listado" onclick="router.route()">Listado Tareas</a></li>
			<li><a class="noactive" href="/tareas-app/agregar" onclick="router.route()">Agregar Tarea</a></li>
			<li><a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Tareas WebApp - Grupo 8</a></li>
		</ul>
	    </header>
        <br><br>
        <a class="image" href="https://www.uclm.es/"><img src="../images/logo.png" /></a>
		<br><br>
		<h1>Sitio Web de Tareas</h1>
		<hr class="new2">
        <h2>Modificar Tarea</h2><br><br>
		<a class="green" href="/tareas-app/listado" onclick="router.route()">Listado</a>
		<br>
			
		<br>
			
        <div id='tarea'>Tarea</div><br><br>

            

        `;

        //this.modificarTareaView = new ModificarTareaView(model, 'titulo', 'descripcion');
        this.modificarTareaView = new ModificarTareaView(model, 'tarea');
    }

    refresh(){
        super.refresh();
        this.modificarTareaView.refresh();
    }

}