const { Sequelize } = require('sequelize');
 
const db = new Sequelize('awstest', 'root', 'root', {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});
 
export default db;
