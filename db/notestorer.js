const fs = require('fs');
const util = require('util');
const readFile= util.promisify(fs.readFile);
const writeFile= util.promisify(fs.writeFile);

const uuidv1 = require('uuidv1'); //unique ID generator package

//this class will read, write and save the note entered by the user
class Notestore {
  read() {
    return readFile('db/db.json', 'utf8');
  }
  write(note) {
    return writeFile('db/db.json', JSON.stringify(note));
  }

  getNotes() {
    return this.read().then((notes) => {
      let parsedNotes;
    })
  }

  addNote(note) {
    const {title, text} = note;
    const newNote = {title, text, id: uuidv1()};//adds a unique id to every note
    return this.getNotes()
    .then((notes) => [...notes,newNote])
    .then((updatedNotes) => this.write(updatedNotes))
    .then(() => newNote);
  }
  
  removeNote(id) {
    return this.getNotes()
    .then((notes) => notes.filter((note) => note.id !== id))
    .then((filteredNotes) => this.write(filteredNotes))
  }
}




module.exports = new Notestore ();