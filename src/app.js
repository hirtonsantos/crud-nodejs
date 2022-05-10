import express from "express";
import useRouter from "./routes/users.routes";

const app = express();

app.use(express.json());

const port = 3000;

app.use("/users", useRouter)

app.listen(port, () => {
  console.log(`App rodando na porta https://localhost:${port}`);
});
