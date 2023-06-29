const express = require("express");
const connectDB = require("./db/connect");
const tasks = require("./routes/tasks");
require("dotenv").config();
const notFound = require("./middleware/notfound");
const errorHandlerMiddleware = require("./middleware/errorHandler");

const app = express();

const port = process.env.PORT || 3000;

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes

app.use("/api/v1/tasks", tasks);
app.use(errorHandlerMiddleware);
app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, () => {
      console.log(`the app is listening on port : ${port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
