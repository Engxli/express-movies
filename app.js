const express = require("express");
const connectDB = require("./database");
const movieRouter = require("./api/movies/m.routes");
const app = express();
app.use(express.json());
app.use("/api/movies", movieRouter);

connectDB();
app.listen(8000, () => {
  console.log("app is running on port: 8000");
});
