import express, { Express } from "express";
import connectDB from "./config/mongoose";
import router from "./routes/Posts";

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.use("/api/posts", router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  connectDB();
});

export default app;
