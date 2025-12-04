const express = require("express");
const cors = require("cors");
const connectDB = require("./Conn/conn");
const auth = require("./routes/auth");
const addList = require("./routes/addList");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.NODE_ENV === "production"
      ? true // Allow all origins in production (Vercel)
      : ["http://localhost:3000"],
    credentials: false,
  })
);
app.use("/api/auth", auth);
app.use("/api/lists", addList);

connectDB();

const port = process.env.PORT || 1000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
