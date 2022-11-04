const express = require('express');
const userRoute = require('./routes/user.routes')

const app = express()
const port = 3000

app.use(express.json())
app.use("/user", userRoute)

app.listen(port, () => console.log(`Servidor rodando em: http://localhost:${port}`))