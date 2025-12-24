import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/basketball-stats";

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to the Basketball Stats API",
    status: "RUNNING",
    code: 200,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
