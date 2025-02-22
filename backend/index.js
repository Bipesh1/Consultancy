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
const corsOptions = {
  origin: [
    "http://localhost:5174",
    "https://consultancy-dfef.vercel.app",
    "https://consultancy-jt4k.vercel.app",
  ],
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Explicitly list allowed methods
  credentials: true,
  optionsSuccessStatus: 200,
  preflightContinue: false,
};

// Apply CORS to all routes
app.use(cors(corsOptions));

// Handle preflight OPTIONS requests explicitly
app.options("*", cors(corsOptions)); // 👈 Critical for credentials + CORS

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