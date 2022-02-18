import express from "express";
import cors from "cors";
import Router from "./routes/routes.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import db from "./config/database.js";
import router from "./routes/index.js";
import dd from "./config/dbLogin.js";
dotenv.config();

const app = express();

try {
    await dd.authenticate();
    console.log("Database Connected...");
} catch (error) {
    console.error(error);
}
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(4000, () => console.log("Server running at port 4000"));

app.use(express.json());

app.use(Router);

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());

app.listen(5000, () => console.log('Server running at http://localhost:5000'));