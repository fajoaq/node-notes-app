const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes');

//customize yargs version
yargs.version('1.1.0');

//create add command
yargs.command({
    command: 'add',
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            type: 'string',
            demandOption: true
        },
        body: {
            describe: "Note body",
            type: 'string',
            demandOption: true
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
 });

//create remove command
yargs.command({
    command: 'remove',
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Title of note to remove",
            type: 'string',
            demandOption: true
        }
    },
    handler({ title }) {
        notes.removeNote(title);
    }
});

//create list command
yargs.command({
    command: 'list',
    describe: "List all notes.",
    handler() {
        console.log(notes.loadNotes());
    }
});

//create read command
yargs.command({
    command: 'read',
    describe: "Read a note's contents.",
    handler() {
        const note = {
            title: "Note 1",
            body: "This is my first note!"
        }
        console.log(note.body);
    }
});

//This line is required
yargs.parse();