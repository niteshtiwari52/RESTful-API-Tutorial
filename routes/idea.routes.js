const express = require("express");
// importing controller
const {
  createIdea,
  fetchIdea,
  updateIdea,
  deleteIdea,
} = require("../controller/idea.controllers");
const router = express.Router();

// defining routes

// creating Idea
router.post("/", createIdea);

// fetching all ideas
router.get("/", fetchIdea);

// updating Ideas
router.put("/:id", updateIdea);

// deleting ideas
router.delete("/:id", deleteIdea);

module.exports = router;
