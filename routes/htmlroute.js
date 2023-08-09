const router = require('express').Router();
const path = require ('path');
//index page
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../assets/index.html'))
})
//notes page
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, '../assets/notes.html'));
});

module.exports = router;