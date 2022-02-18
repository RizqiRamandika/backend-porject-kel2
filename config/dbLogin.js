import { Sequelize } from "sequelize";

const db = new Sequelize('masuk', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;