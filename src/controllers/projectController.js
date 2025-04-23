const Project = require('../models/project');

exports.create = async (req, res) => {
  try {
    const project = await Project.create({ name: req.body.name });
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar projeto.' });
  }
};

exports.list = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar projetos.' });
  }
};
