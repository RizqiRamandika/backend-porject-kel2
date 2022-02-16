import express from "express";
import cors from "cors";
import Router from "./routes/routes.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import db from "./config/database.js";
dotenv.config();

const app = express();

app.use(express.json());

app.use(Router);

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());

app.listen(5000, () => console.log('Server running at http://localhost:5000'));