var express = require('express');
var router = express.Router();
var model = require('../public/javascripts/TareasApp');


/* GET users listing. */

router.get('/tareas', function (req, res, next) {
	try {
		let id = req.params.id;
		res.json(model.getTareas());
	} catch (err) {
		res.status(500).send(err.message);
		console.error(err);
	}
});

router.get('/tareas/:id/titulo', function (req, res, next) {
	try {
		let id = req.params.id;
		res.json(model.getTitulo(id));
	} catch (err) {
		res.status(500).send(err.message);
		console.error(err);
	}
});

router.get('/tareas/:id/descripcion', function (req, res, next) {
	try {
		let id = req.params.id;
		res.json(model.getDescripcion(id));
	} catch (err) {
		res.status(500).send(err.message);
		console.error(err);
	}
});

router.get('/tareas/:id', function (req, res, next) {
	try {
		let id = req.params.id;
		res.json(model.verTarea(id));
	} catch (err) {
		res.status(500).send(err.message);
		console.error(err);
	}
});



router.post('/tareas', function (req, res, next) {
	try {
		let tarea = req.body;
		tarea = model.agregarTarea(tarea.titulo, tarea.descripcion);
		res.json(tarea);
	} catch (err) {
		res.status(500).send(err.message);
		console.error(err);
	}
});

router.put('/tareas/:id', function (req, res, next) {
	try {
		let tarea = req.body;
		let id = req.params.id;
		tarea = model.modificarTarea(id, tarea.titulo, tarea.descripcion);
		res.json(tarea);
	} catch (err) {
		res.status(500).send(err.message);
		console.error(err);
	}
});

router.delete('/tareas/:id', function (req, res, next) {
	let id = req.params.id;
	try {
		model.borrarTarea(id);
		res.send();
	} catch (err) {
		res.status(500).send(err.message);
		console.error(err);
	}
});


module.exports = router;
