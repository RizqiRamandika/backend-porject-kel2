import mysql from "mysql2";
import { Sequelize } from "sequelize";

// create the connection to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_siswa'
});

// const db = new Sequelize('db_siswa', 'root', '', {
//     host: "localhost",
//     dialect: "mysql"
// });

export default db;