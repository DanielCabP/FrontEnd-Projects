class BorrarTareaPageView extends PageView {

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
        <head>
                <a class="image" href="https://www.uclm.es"> <img src="../images/logo.png"></a>
                <h1>Sitio Web de Tareas</h1>
                <hr class="new2">
			<br>
        </head>
           
            <a class="green" href="/tareas-app/listado" onclick="router.route()">Listado</a>
            <br>
            <h2 id="titulo">Tarea N</h2>
            <p> La Tarea N ha sido borrada</p>
        
        `;

        this.borrarTareaView = new BorrarTareaView(model, 'titulo', 'descripcion');
    }

    refresh(){
        super.refresh();
        this.borrarTareaView.refresh();
    }

}