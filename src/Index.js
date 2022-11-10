//All import lines come here
import express from "express";
import conectDatabase from "./database/database.js";
import userRoute from "./routes/user.routes.js";
import authRoute from "./routes/auth.route.js";
import newsRoute from "./routes/news.routes.js";

//DotEnv config
import dotenv from "dotenv";

dotenv.config();

//All significant variables come here
const port = process.env.PORT || 3000;
const app = express()

//App uses and relevant conections
conectDatabase()

app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/news", newsRoute);

app.listen(port, () => console.log(`Servidor rodando em: http://localhost:${port}`))