const Task = require('../models/task');

exports.create = async (req, res) => {
  const { title, description, userId, projectId } = req.body;
  try {
    const task = await Task.create({ title, description, userId, projectId });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar tarefa.' });
  }
};

exports.list = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tarefas.' });
  }
};
