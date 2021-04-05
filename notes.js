const fs = require('fs');
const chalk = require('chalk');

const addNote = ( title, body ) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if( !duplicateNote ) { 
        notes.push({ title, body });
        saveNotes(notes);
        console.log(chalk.green('Note added!'))
    } else {
        console.log(chalk.red("Note title taken."));
    }
}

//Remove note
const removeNote = (title) => {
    const notes = loadNotes();
    const newList = notes.filter((note) =>  note.title.toUpperCase() !== title.toUpperCase());

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
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);

    fs.writeFileSync('notes.json', dataJSON);
};

//Read note
const readNote = (title) => {
    const notes = loadNotes();
    const result = notes.find((note) => note.title === title);

    if(result) { 
        console.log(chalk.green(result.title));
        console.log(result.body);
    } 
    else { console.log(chalk.red("Note not found."))}
    
}

//List all notes
const listNotes = () => {
    const notes = loadNotes();

    notes.forEach((note) => {
        console.log(chalk.green(note.title));
    });
}

//Load notes
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();

        return JSON.parse(dataJson);
    } catch (e) {
        return [];
    }
};

module.exports = { addNote, removeNote, listNotes, readNote };