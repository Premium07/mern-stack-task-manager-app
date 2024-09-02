require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user-route");
const taskRouter = require("./routes/tasks-route");

require("./database/db.js");
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);

app.use("/api", (req, res) => {
  res.status(200).json({ message: "Hello Express" });
});

app.listen(5000, () => console.log(`App is now running at port 5000...`));
