import app from "./app.js";
import "dotenv/config";
import { connectDB } from "./config/db.js";

await connectDB("mongodb://127.0.0.1:27017/tp");
app.listen(5000, () => {
  console.log("SERVER IS UP on the port N°5000");
});
