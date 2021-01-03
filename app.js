const chalk = require("chalk");
const { demandOption } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes");

//adding notes
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: String,
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: String,
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//Remove note
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: String,
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

//Read note
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: String,
    },
  },
  handler: function (argv) {
    notes.readNote(argv.title);
  },
});

//Listing note
yargs.command({
  command: "list",
  describe: "Listing notes",
  handler: function (argv) {
    notes.listNote();
  },
});

console.log(yargs.argv);
