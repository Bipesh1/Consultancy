const express = require("express");
const connect  = require("./config/db");
const courseRouter= require("./routes/courseRouter")
const classRouter= require("./routes/classRouter")
const userRouter= require("./routes/userRouter")
const cors = require("cors");

const PORT = process.env.PORT || 3001;


const app = express();
app.use(cors({
  origin: "https://consultancy-dfef.vercel.app", 
  credentials: true,
}));

app.use(express.json());
app.use("/courses",courseRouter)
app.use("/classes",classRouter)
app.use("/users",userRouter)

connect()


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});