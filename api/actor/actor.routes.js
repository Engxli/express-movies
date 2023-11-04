const express = require("express");
const {
  getAllActors,
  createActor,
  addActorToMovie,
} = require("./actor.controllers");
const router = express.Router();

router.get("/", getAllActors);
router.post("/", createActor);
router.put("/:actorId/:movieId", addActorToMovie);

module.exports = router;
