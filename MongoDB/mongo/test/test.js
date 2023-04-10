var mongoose = require('mongoose');
var assert = require("chai").assert;
var model = require('../../public/javascripts/TareasApp');
describe("Tareas", function () {
    before('Before', async function () {
        var uri = 'mongodb://localhost/tareas-app';
        mongoose.Promise = global.Promise;
        var db = mongoose.connection;
        db.on('connecting', function () {
            console.log('Connecting to ', uri);
        });
        db.on('connected', function () {
            console.log('Connected to ', uri);
        });
        db.on('disconnecting', function () {
            console.log('Disconnecting from ', uri);
        });
        db.on('disconnected', function () {
            console.log('Disconnected from ', uri);
        });
        db.on('error', function (err) {
            console.error('Error ', err.message);
        });
        return mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    })

    beforeEach(async function () {
        await model.borrarTareas();
    })

    it("Agregar Tarea", async function () {
        var tareas;
        let tarea = await model.agregarTarea('Titulo', 'Descripcion');
        tareas = await model.getTareas();
        assert.equal(tareas.length, 1);
        assert.equal(tarea.titulo, 'Titulo');
        assert.equal(tarea.descripcion, 'Descripcion');
        assert.isDefined(tarea._id);
    })
    it("Mostrar Tareas", async function () {
        var tareas = await model.getTareas();
        assert.equal(tareas.length, 0);
        await model.agregarTarea('Titulo', 'Descripcion');
        tareas = await model.getTareas();
        assert.equal(tareas.length, 1);
        await model.agregarTarea('Titulo', 'Descripcion');
        tareas = await model.getTareas();
        assert.equal(tareas.length, 2);
    })

    it("Ver Tarea", async function () {
        var tarea = await model.agregarTarea('Titulo', 'Descripcion');
        tarea = await model.verTarea(tarea._id.toString());
        assert.equal(tarea.titulo, 'Titulo');
        assert.equal(tarea.descripcion, 'Descripcion');
        assert.isDefined(tarea._id);
    })
    it("Modificar Tarea", async function () {
        var tarea = await model.agregarTarea('Titulo', 'Descripcion');
        tarea = await model.vertarea(tarea._id.toString());
        assert.equal(tarea.titulo, 'Titulo');
        assert.equal(tarea.descripcion, 'Descripcion');
        assert.isDefined(tarea._id);
        let id = tarea._id.toString();
        await model.modificarTarea(tarea._id.toString(), 'TituloMod', 'DescripcionMod');
        tarea = await model.verTarea(tarea._id.toString());
        assert.equal(tarea.titulo, 'TituloMod');
        assert.equal(tarea.descripcion, 'DescripcionMod');
        assert.equal(tarea.id.toString(), id);
    })

    after(function () {
        var uri = 'mongodb://localhost/tareas-app';
        mongoose.connect(uri,
            { useNewUrlParser: true, useUnifiedTopology: true })
            .then(function () { mongoose.disconnect(); })
            .catch(function (err) { console.error('Error', err.message); });
    });
});

