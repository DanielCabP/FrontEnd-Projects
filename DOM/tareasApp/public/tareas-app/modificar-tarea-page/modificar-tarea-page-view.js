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
			<br>
			<h1>Sitio Web de Tareas</h1>
			<hr class="new2">
            <h2>Modificar Tarea N</h2>
			<a class="green" href="/tareas-app/listado" onclick="router.route()">Listado</a>
			<br>
			
			<br>
			
            
            <form method="GET" action="/tareas-app/ver">

                <p class="orange" >Título</p> 
                <textarea id="titulo" name="message" rows="1" cols="41">Tarea N</textarea>
			    <p class="orange">Descripción</p> 
                <textarea id="descripcion" name="message" rows="10" cols="41">Descripción</textarea>
                <br><br>
                <button type="button" onclick="modificarTareaPageController.modificarTareaController.
                onGuardarClick(event)">MODIFICAR</button>
                <input type="reset" value="Limpiar">

            </form>
        
        `;

        this.modificarTareaView = new ModificarTareaView(model, 'titulo', 'descripcion');
    }

    refresh(){
        super.refresh();
        this.modificarTareaView.refresh();
    }

}