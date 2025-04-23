const express = require('express');
const sequelize = require('./config/database');
const User = require('./models/user');
const Project = require('./models/project');
const Task = require('./models/task');
const userController = require('./src/controllers/userController');
const projectController = require('./src/controllers/projectController');
const taskController = require('./src/controllers/taskController');

const app = express();
app.use(express.json());

sequelize.sync({ force: false })
  .then(() => console.log('Tabelas sincronizadas.'))
  .catch(err => console.error('Erro ao sincronizar:', err));

// Rotas User
app.post('/api/users', userController.register);
app.post('/api/login', userController.login);

// Rotas Project
app.post('/api/projects', projectController.create);
app.get('/api/projects', projectController.list);

// Rotas Task
app.post('/api/tasks', taskController.create);
app.get('/api/tasks', taskController.list);

app.listen(3000, () => {
  console.log('Servidor rodando em: http://localhost:3000 🚀');
});
