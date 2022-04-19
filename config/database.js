import { Sequelize } from "sequelize";
 
const db = new Sequelize('awstest', 'admin', 'admin123', {
    host: "database-3.c2sv4xf0su16.ap-south-1.rds.amazonaws.com",
    dialect: "mysql",
    port: 3306
});
 
export default db;
