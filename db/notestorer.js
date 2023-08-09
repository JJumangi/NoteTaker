const fs = require('fs');
const util = require('util');
const readFile= util.promisify(fs.readFile);
const writeFile= util.promisify(fs.writeFile);
const uuidv1 = require('uuid'); //unique ID generator package

//this class will read, write and save the note entered by the user
class Notestore {
  read() {
    return readFile('db/db.json', 'utf8');
  }
  write(note) {
    return writeFile('db/db.json', JSON.stringify(note));
  }

  pullNote() {
    return this.read().then((notes) => {
    })
  }

  addNote(note) {
    const {title, text} = note;
    const newNote = {title, text, id: uuidv1()};//adds unique id to note
    return this.getNotes()
    .then((notes) => [...notes,newNote])
    .then((updatedNotes) => this.write(updatedNotes))
    .then(() => newNote);
  }
  
  deleteNote(id) {
    return this.getNotes()
    .then((notes) => notes.filter((note) => note.id !== id))
    .then((filteredNotes) => this.write(filteredNotes))
  }
}




module.exports = new Notestore ();