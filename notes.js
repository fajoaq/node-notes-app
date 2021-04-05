const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return [{text: "note1"}, {text: "note2"}];
};

const addNote = function( title, body ) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push({ title, body });
        saveNotes(notes);
        console.log(chalk.green('Note added!'))
    } else {
        console.log(chalk.red("Note title taken."));
    }
}

//Remove note
const removeNote = function(title) {
    const notes = loadNotes();
    const newList = notes.filter((note) => {
        return note.title.toUpperCase() !== title.toUpperCase();
    });
    if(notes.length === newList.length) {
        console.log(chalk.red("No note found!"));
    } else {
        console.log("Note to be removed -> " + chalk.green(title));
        console.log("Remaining notes:");
        console.log(newList);
    }
    saveNotes(newList);
};

//Save notes
const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes);

    fs.writeFileSync('notes.json', dataJSON);
};

//Load notes
const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();

        return JSON.parse(dataJson);
    } catch (e) {
        return [];
    }
};

module.exports = { loadNotes, addNote, removeNote };