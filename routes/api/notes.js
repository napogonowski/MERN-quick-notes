const express = require("express");
const router = express.Router();
const notesController = require("../../controllers/api/notes");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

// All paths start with '/api/notes'

// Post /api/notes (creating a note)
router.post("/", notesController.createNote);

module.exports = router;
 