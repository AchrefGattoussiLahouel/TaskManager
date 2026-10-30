import express from "express";
import cors from "cors";
import tasksRoutes from "./routes/tasks.routes.js";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";

const app = express();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method + " " + req.url);
  next();
});

// app.get("/",(req,res)=>{
//     res.send("API en ligne");
// });

app.use("/api/tasks", tasksRoutes);
app.use("/api/auth", authRoutes);
export default app;
