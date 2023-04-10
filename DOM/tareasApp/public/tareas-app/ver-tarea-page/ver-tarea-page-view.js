class VerTareaPageView extends PageView {

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
        <body class="center">
			<a class="image" href="https://www.uclm.es/"><img src="../images/logo.png" /></a>
			<br>
			<h1>Sitio Web de Tareas</h1>
			<hr class="new2">
			<br>
			<a class="green" href="/tareas-app/listado" onclick="router.route()">Listado</a>
            <a class="green" href="/tareas-app/modificar" onclick="router.route()">Modificar</a>
			<br>
			<h2>Listado de tareas</h2>
			
			<p class="orange">Título</p> 
            <p id="titulo">Título</p>
			<br>
			<p class="orange">Descripción</p> 
			<p id="titulo">Descripción</p> 
		</body>
        
        `;

        this.verTareaView = new VerTareaView(model, 'titulo', 'descripcion');
    }

    refresh(){
        super.refresh();
        this.verTareaView.refresh();
    }

}