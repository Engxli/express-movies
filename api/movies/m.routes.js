const express = require("express");
const {
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("./m.controller");
const router = express.Router();

router.get("/", getAllMovies);
router.post("/", createMovie);
router.put("/:movieId", updateMovie);
router.delete("/:movieId", deleteMovie);
module.exports = router;
