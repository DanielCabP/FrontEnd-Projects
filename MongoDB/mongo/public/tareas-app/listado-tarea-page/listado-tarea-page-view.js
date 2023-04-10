class ListadoTareaPageView extends PageView {

	constructor(model) {
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

       
		<a class="image" href="https://www.uclm.es/"><img src="../images/logo.png"/></a>
		<br><br>
		<h1>Sitio Web de Tareas</h1>
		<hr class="new2">
		<br>
		<a class="green" href="/tareas-app/agregar" onclick="router.route()">Agregar</a>
		<br><br><br>
		<h2>Listado de tareas</h2><br>
		<br>
		<br><br>

		<a id='listaTareas'>Lista tareas</a>
		<br>
		<a class="green" href="http://localhost:3000/api/tareas">Listar Tareas</a>

        
        `;

		this.listadoTareaView = new ListadoTareaView(model, 'listaTareas');
	}

	refresh() {
		super.refresh();
		this.listadoTareaView.refresh();
	}

}