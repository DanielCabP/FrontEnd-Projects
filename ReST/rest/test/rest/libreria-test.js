var assert = require("chai").assert;
let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

const url = 'http://localhost:3000/api';

describe("Tareas", function(){
    it("Agregar Tarea", function(done){
        chai.request(url)
        .post('/tareas')
        .send({titulo: 'Titulo', descripcion: 'Descripcion'})
        .end(function(err, res){
            if(err) done(err); else {
                assert.equal(res.status, 200);
                console.log(res.body)
                assert.equal(res.body.titulo, 'Titulo');
                assert.equal(res.body.descripcion, 'Descripcion');
                assert.isDefined(res.body.id);
                done();
            }
        })
    });

    it("Modificar Tarea", function(done){
        chai.request(url)
        .put('/tareas/0/titulo/tituloModificado/descripcion/descripcionModificada/')
        .end(function(err, res){
            if(err) done(err); else {
                assert.equal(res.status, 200);
                console.log(res.body)
                assert.equal(res.body.titulo, 'tituloModificado');
                assert.equal(res.body.descripcion, 'descripcionModificada');
                done();
            }
        })
    });

    it("Borrar Tarea", function(done){
        chai.request(url)
        .get('/tareas')
        .end(function(err, res){
            if(err) done(err); else {
                expect(res.body).to.have.lengthOf(1);
                assert.equal(res.status, 200);
                console.log(res.body)
            }
        })
        chai.request(url)
        .del('/tareas/0')
        .end(function(err, res){
            if(err) done(err); else {
                assert.equal(res.status, 200);
                console.log(res.body)
            }
        })
        chai.request(url)
        .get('/tareas')
        .end(function(err, res){
            if(err) done(err); else {
                expect(res.body).to.have.lengthOf(0);
                assert.equal(res.status, 200);
                console.log(res.body)
            }
        })
    });
});