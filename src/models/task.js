const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Project = require('./project');

const Task = sequelize.define('Task', {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  completed: { type: DataTypes.BOOLEAN, defaultValue: false }
});

// Relações
Task.belongsTo(User, { foreignKey: 'userId' });
Task.belongsTo(Project, { foreignKey: 'projectId' });

module.exports = Task;
