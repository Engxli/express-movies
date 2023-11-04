const express = require("express");
const { getAllMovies, createMovie } = require("./movie.controllers");
const router = express.Router();

router.get("/", getAllMovies);
router.post("/", createMovie);

module.exports = router;
