const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize('node-complete', 'root', 'renene77', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;