//const assert = require('chai').assert;
//const Tarea = require('./modelo');
//const TareasApp = require('./modelo');


describe("Tarea", function () {

    it("Crear Tarea", function() {
        let tarea = new Tarea()
        tarea.titulo = 'Tarea'
        tarea.descripcion = 'Descripcion Tarea'
        assert.equal(tarea.titulo, 'Tarea')
        assert.equal(tarea.descripcion, 'Descripcion Tarea')
    })

})
describe("TareasApp", function () {


    it("Agregar tarea", function () {
        let tareaApp = new TareasApp();
        assert.equal(tareaApp.tareas.length, 0);
        let tarea = new Tarea();
        tarea.titulo = 'Tarea';
        tarea.descripcion = 'Descripcion Tarea';
        tareaApp.agregarTarea(tarea);
        assert.equal(tareaApp.tareas.length, 1);
        assert.equal(tareaApp.tareas[0].titulo, tarea.titulo);
        assert.equal(tareaApp.tareas[0].descripcion, tarea.descripcion);
        })

    it("Borrar tarea", function () {
        let tareaApp = new TareasApp();
        assert.equal(tareaApp.tareas.length, 0);
        let tarea = new Tarea();
        tarea.titulo = 'Tarea';
        tarea.descripcion = 'Descripcion Tarea';
        tareaApp.agregarTarea(tarea);
        assert.equal(tareaApp.tareas.length, 1);
        tareaApp.borrarTarea(tarea._id);
        assert.equal(tareaApp.tareas.length, 0);
        })
        
    
    it("Modificar tarea", function () {
        let tareaApp = new TareasApp();

        assert.equal(tareaApp.tareas.length, 0);

        let tarea = new Tarea();
        tarea.titulo = 'Tarea';
        tarea.descripcion = 'Descripcion Tarea';

        tareaApp.agregarTarea(tarea);
        assert.equal(tareaApp.tareas.length, 1);

        tareaApp.modificarTarea(tarea._id,{titulo:'Tarea Modificada'}, tarea.descripcion);
        assert.equal(tareaApp.tareas.length, 1);
        assert.equal(tareaApp.tareas[0].titulo, 'Tarea Modificada');

        tareaApp.modificarTarea(tarea._id,tarea.titulo,{descripcion:'Descripcion Tarea Modificada'});
        assert.equal(tareaApp.tareas.length, 1);
        assert.equal(tareaApp.tareas[0].descripcion, 'Descripcion Tarea Modificada');
        })
            
})