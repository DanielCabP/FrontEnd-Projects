var express = require('express');
var router = express.Router();
var path = require('path');
const mongoose = require("mongoose");


mongoose
	.connect("mongodb://localhost/tareas-app", { useNewUrlParser: true })
	.then(() => {
		const app = express()

		app.listen(5000, () => {
			console.log("Conectado a la base de datos")
		})
	})

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tareas-proxy.js', function(req, res, next) {
	res.sendFile(path.join(__dirname, '../public/javascripts/tareas-proxy.js'));
});

router.get('/model/model.js', function(req, res, next) {
	res.sendFile(path.join(__dirname, '../public/javascripts/TareasApp.js'));
});

module.exports = router;
