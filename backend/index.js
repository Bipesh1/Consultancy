const express = require("express");
const connect = require("./config/db");
const courseRouter = require("./routes/courseRouter");
const classRouter = require("./routes/classRouter");
const userRouter = require("./routes/userRouter");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

// CORS configuration
app.use(
  cors({
    origin: ["http://localhost:5174","https://consultancy-dfef.vercel.app","https://consultancy-jt4k.vercel.app"], // Allow all origins (adjust as needed)
    credentials: true,
  })
);

app.use(express.json());

// API routes
app.use("/courses", courseRouter);
app.use("/classes", classRouter);
app.use("/users", userRouter);


// Connect to the database
connect();

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});