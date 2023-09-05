const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Note = require("../../models/note");

module.exports = {
  createNote,
};

async function createNote(req, res) {
  try {
    const {text} = req.body;
    const newNote = await Note.create({text}); 
    res.json(newNote); 

  } catch (error) {
    res.status(400).json(error);
  }
}


