const express = require('express');

const server = express();

server.use(express.json());
/*
//Query params = ?nome=NodeJS
//Route params = /cursos/2
//Request body = { nome: 'NodeJS', tipo: 'Backend' }
//CRUD Create, Read, Update, Delete
*/

const cursos = ['Node JS', 'JavaScript', 'Typescript', 'React Native'];
// QUERY PARAMS
//const nome = req.query.nome;
//return res.json({ curso: `Aprendendo ${nome}`});
// url: http://localhost:3000/curso?nome=NodeJS

//ROUTE PARAMS
//const id = req.params.id;
//return res.json({ curso: `Id do curso: ${id}`});
// url: http://localhost:3000/curso/3

server.get('/cursos', (req, res) => {
  return res.json(cursos);
});

server.get('/cursos/:index', (req, res) => {
  const { index } = req.params;
  
  return res.json(cursos[index]);
});

server.post('/cursos', (req, res) => {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});

server.put('/cursos/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});

server.delete('/cursos/:index', (req, res) => {
  const { index } = req.params;

  cursos.splice(index, 1);
  return res.json({ message: "Curso excluído"});
});

server.listen(3000);