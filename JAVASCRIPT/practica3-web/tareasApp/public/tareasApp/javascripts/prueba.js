//const assert = require('chai').assert;
//const Tarea = require('./modelo');
//const TareasApp = require('./modelo');

//import TareasApp from './modelo.js';

describe("Tarea", function () {

        it("Crear", function () {
            let tareaApp = new TareasApp();
            tareaApp.nombre = 'Ricardo';
            tareaApp.apellido = 'Tesoriero';
            assert.equal(tareaApp.nombre, 'Ricardo');
            assert.equal(tareaApp.apellido, 'Tesoriero');
            })

        it("Agregar tarea", function () {
            let tareaApp = new TareasApp();
            tareaApp.nombre = 'Ricardo';
            tareaApp.apellido = 'Tesoriero';
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
            tareaApp.nombre = 'Ricardo';
            tareaApp.apellido = 'Tesoriero';
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
            tareaApp.nombre = 'Ricardo';
            tareaApp.apellido = 'Tesoriero';

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