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
    origin: "*", // Allow all origins (adjust as needed)
    credentials: true,
  })
);

app.use(express.json());

// API routes
app.use("/courses", courseRouter);
app.use("/classes", classRouter);
app.use("/users", userRouter);

// Serve static files from the client build directory
const clientBuildPath = path.join(__dirname, "../consultancy"); // Adjust the path to your client public directory
app.use(express.static(clientBuildPath));

// Fallback to index.html for client-side routing
app.get("*", (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

// Connect to the database
connect();

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});