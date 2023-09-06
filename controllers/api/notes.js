const Note = require("../../models/note");

module.exports = {
  createNote,
};

async function createNote(req, res) {
  try {
    const { text } = req.body;
    console.log(text);
    const newNote = await Note.create({ text: text, user: req.user._id });
    res.json(newNote);
  } catch (error) {
    res.status(400).json(error);
  }
}
