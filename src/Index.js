import express from "express";
const app = express()
import conectDatabase from "./database/database.js";

import userRoute from "./routes/user.routes.js";

const port = 3000;

conectDatabase()
app.use(express.json());

app.use("/user", userRoute);

app.listen(port, () => console.log(`Servidor rodando em: http://localhost:${port}`))