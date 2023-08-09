const router = require('express').Router();





router.get("/notes", (req, res) => {
  store .getNotes()
})
router.post("/:id", (req, res) => {
})
router.delete("/", (req, res) => {
  
})



module.exports = router;