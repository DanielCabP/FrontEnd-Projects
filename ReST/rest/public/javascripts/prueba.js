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
        let tarea1 = new Tarea();
        tarea1._id = '0';
        tarea1.titulo = 'Tarea 1';
        tarea1.descripcion = 'Descripcion Tarea 1';
        tareaApp.agregarTarea(tarea1.titulo, tarea1.descripcion);
        assert.equal(tareaApp.tareas.length, 1);
        assert.equal(tareaApp.tareas[0].titulo, tarea1.titulo);
        assert.equal(tareaApp.tareas[0].descripcion, tarea1.descripcion);

        let tarea2 = new Tarea();
        tarea2.titulo = 'Tarea 2';
        tarea2.descripcion = 'Descripcion Tarea 2';
        tareaApp.agregarTarea(tarea2.titulo, tarea2.descripcion);
        assert.equal(tareaApp.tareas.length, 2);
        assert.equal(tareaApp.tareas[1].titulo, tarea2.titulo);
        assert.equal(tareaApp.tareas[1].descripcion, tarea2.descripcion);

        let tarea3 = new Tarea();
        tarea3.titulo = 'Tarea 3';
        tarea3.descripcion = 'Descripcion Tarea 3';
        tareaApp.agregarTarea(tarea3.titulo, tarea3.descripcion);
        assert.equal(tareaApp.tareas.length, 3);
        assert.equal(tareaApp.tareas[2].titulo, tarea3.titulo);
        assert.equal(tareaApp.tareas[2].descripcion, tarea3.descripcion);
        })

    it("Borrar tarea", function () {
        let tareaApp = new TareasApp();
        assert.equal(tareaApp.tareas.length, 0);
        let tarea1 = new Tarea();
        tarea1._id = '0';
        tarea1.titulo = 'Tarea 1';
        tarea1.descripcion = 'Descripcion Tarea 1';
        tareaApp.agregarTarea(tarea1.titulo, tarea1.descripcion);
        assert.equal(tareaApp.tareas.length, 1);
        let tarea2 = new Tarea();
        tarea2._id = '1';
        tarea2.titulo = 'Tarea 2';
        tarea2.descripcion = 'Descripcion Tarea 2';
        tareaApp.agregarTarea(tarea2.titulo, tarea2.descripcion);
        assert.equal(tareaApp.tareas.length, 2);
        tareaApp.borrarTarea(tarea1._id);
        tareaApp.borrarTarea(tarea2._id);
        assert.equal(tareaApp.tareas.length, 0);
        })
        
    
    it("Modificar tarea", function () {
        let tareaApp = new TareasApp();

        assert.equal(tareaApp.tareas.length, 0);

        let tarea1 = new Tarea();
        tarea1._id = '0';
        tarea1.titulo = 'Tarea 1';
        tarea1.descripcion = 'Descripcion Tarea 1';
        tareaApp.agregarTarea(tarea1.titulo, tarea1.descripcion);
        assert.equal(tareaApp.tareas.length, 1);

        tareaApp.modificarTarea(tarea1._id,'Tarea Modificada', tarea1.descripcion);
        assert.equal(tareaApp.tareas.length, 1);
        assert.equal(tareaApp.tareas[0].titulo, 'Tarea Modificada');

        tareaApp.modificarTarea(tarea1._id,tarea1.titulo, 'Descripcion Tarea Modificada');
        assert.equal(tareaApp.tareas.length, 1);
        assert.equal(tareaApp.tareas[0].descripcion, 'Descripcion Tarea Modificada');
        })
            
})