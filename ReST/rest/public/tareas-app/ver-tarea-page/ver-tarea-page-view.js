class VerTareaPageView extends PageView {

    constructor(model){
        super(model, 'main');
        

		this.verTareaView = new VerTareaView(model, 'tarea');
        //this.verTareaView = new VerTareaView(model, 'descripcion');
		//this.verTareaView = new VerTareaView(model, ('titulo', 'descripcion'));
    }

    refresh(){

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
		<br>
		<a class="green" href="/tareas-app/listado" onclick="router.route()">Listado</a>
		
		<a id='tarea'>Tarea</a><br><br>

        
        `;
        super.refresh();
        this.verTareaView.refresh();
    }

}