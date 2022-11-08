import express from "express";
const app = express()
import conectDatabase from "./database/database.js";

import dotenv from "dotenv";
dotenv.config();

import userRoute from "./routes/user.routes.js";

const port = process.env.PORT || 3000;

conectDatabase()
app.use(express.json());

app.use("/user", userRoute);

app.listen(port, () => console.log(`Servidor rodando em: http://localhost:${port}`))