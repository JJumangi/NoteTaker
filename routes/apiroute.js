const router = require('express').Router();
const storer = require('../db/notestorer')
//get all notes
router.get('/notes', (req, res) => {
  storer
  .getNotes()
})
//create/add note
router.post('/notes', (req, res) => {
  storer
  .addNote(req.body)
  .then((note) => res.json(note))
  .catch((err) => res.status(500).json(err));

})

//get all notes
router.post('/notes', (req, res) => {
  store
})

