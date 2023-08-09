const router = require('express').Router();
const storer = require('../db/notestorer')


//create/add note
router.post('/notes', (req, res) => {
  storer
  .addNote(req.body)
  .then((note) => res.json(note))
  .catch((err) => res.status(500).json(err));

})

//get all notes
router.get('/notes', (req, res) => {
  storer
  .getNotes()
  .then((notes) => {
    return res.json(notes);
  })
})

//delete note
router.delete('/notes/:id', (req, res) => {
  store
  .removeNote(req.params,id)
  .then((note) => res.json(note))
  .catch((err) => res.status(500).json(err));
})

module.exports = router;
