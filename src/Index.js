const express = require('express');
const app = express()
const conectDatabase = require("./database/database");

const userRoute = require('./routes/user.routes');

const port = 3000;

conectDatabase()
app.use(express.json());

app.use("/user", userRoute);

app.listen(port, () => console.log(`Servidor rodando em: http://localhost:${port}`))