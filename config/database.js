import { Sequelize } from "sequelize";
 
const db = new Sequelize('schoolmanagement', 'root', 'root', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;