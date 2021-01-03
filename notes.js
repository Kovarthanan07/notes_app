const fs = require("fs");

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNote = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNote.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNote(notes);
    console.log("Note successfully added ...");
  } else {
    console.log("Note already exist ...");
  }
};

const saveNote = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const remainingNotes = notes.filter(function (note) {
    return note.title !== title;
  });
  saveNote(remainingNotes);
};

const listNote = () => {
  const notes = loadNotes();
  return notes.forEach((note) => {
    console.log("----------------------");
    console.log("Title : " + note.title);
    console.log("Body : " + note.body);
    console.log("----------------------");
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const readingNote = notes.find((note) => note.title === title);
  console.log("----------------------");
  console.log("Title : " + readingNote.title);
  console.log("Body : " + readingNote.body);
  console.log("----------------------");
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,
};
