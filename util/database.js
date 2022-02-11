const Sequelize = require('sequelize');

const sequelize = new Sequelize('seq', 'root', '965636@Leb', {
  dialect: 'mysql',
  host: 'localhost',
  schema: "core"

});

module.exports = sequelize;
