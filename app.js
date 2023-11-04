const express = require("express");
const connectDB = require("./database");
const movieRouter = require("./api/movie/movie.routes");
const actorRouter = require("./api/actor/actor.routes");
const reviewRouter = require("./api/review/review.routes");
const morgan = require("morgan");
const cors = require("cors");
const { notFound } = require("./middleware/notFound");
const { errorHandler } = require("./middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/actors", actorRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/movies", movieRouter);

app.use(notFound);
app.use(errorHandler);

connectDB();
app.listen(8000, () => {
  console.log("app is running on port: 8000");
});
