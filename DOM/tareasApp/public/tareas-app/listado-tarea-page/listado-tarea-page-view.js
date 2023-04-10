class ListadoTareaPageView extends PageView {

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
			<a class="image" href="https://www.uclm.es/"><img src="../images/logo.png"/></a>
			<br>
			<h1>Sitio Web de Tareas</h1>
			<hr class="new2">
			<br>
			<a class="green" href="/tareas-app/agregar" onclick="router.route()">Agregar</a>
			<br><br><br>
			<h2>Listado de tareas</h2>
			<br>
			<a class="green" id="titulo" href="/tareas-app/ver" onclick="router.route()">Titulo Tarea 1</a><a class="white" href="/tareas-app/borrar" onclick="router.route()"> X</a> 
			<br><br>
			<a class="green" id="titulo" href="/tareas-app/ver" onclick="router.route()">Titulo Tarea 2</a><a class="white" href="/tareas-app/borrar" onclick="router.route()"> X</a> 
			<br><br>
			<a class="green" id="titulo" href="/tareas-app/ver" onclick="router.route()">Titulo Tarea 3</a><a class="white" href="/tareas-app/borrar" onclick="router.route()"> X</a> 
			
			</body>
        
        `;

        this.listadoTareaView = new ListadoTareaView(model, 'titulo', 'descripcion');
    }

    refresh(){
        super.refresh();
        this.listadoTareaView.refresh();
    }

}