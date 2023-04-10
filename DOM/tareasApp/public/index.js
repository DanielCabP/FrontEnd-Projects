let model,
agregarTareaPageView,
borrarTareaPageView,
modificarTareaPageView,
verTareaPageView,
agregarTareaPageController,
borrarTareaPageController,
modificarTareaPageController,
verTareaPageController, 
router;

function init(){

    model = new Contador();

    agregarTareaPageView = new AgregarTareaPageView(model);
    borrarTareaPageView = new BorrarTareaPageView(model);
    modificarTareaPageView = new ModificarTareaPageView(model);
    verTareaPageView = new VerTareaPageView(model);
    
    agregarTareaPageController = new AgregarTareaPageController(/\/contador-pager-app\/(index.html|editar)/ig, model,
        editarContadorPageView);
    borrarTareaPageController = new BorrarTareaPageController(/\/contador-pager-app\/incrementar/ig, model,
        incrementarContadorPageView);
    modificarTareaPageController = new ModificarTareaPageController(/\/contador-pager-app\/resetear/ig, model,
        resetearContadorPageView);
    verTareaPageController = new VerTareaPageController(/\/contador-pager-app\/resetear/ig, model,
        resetearContadorPageView);
    
    router = new Router();
    router.addPageController(editarContadorPageController);
    router.addPageController(incrementarContadorPageController);
    router.addPageController(resetearContadorPageController);
    router.route();
    //Agregar otro controller para Page not Found

}