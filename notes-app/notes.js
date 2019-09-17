const fs = require('fs');
const chalk = require('chalk');


const addNote = (title, body) => {
    const notes = loadNotes();
   const duplicateNote = notes.find(note => note.title === title);



    if (!duplicateNote) {
        notes.push({
            title,
            body
        });

        saveNotes(notes);
        console.log(chalk.green.bgGreenBright('New note added!'));
    } else {
        console.log(chalk.red.bgBlackBright('This title has in DB'));
    }

};
const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return [];
    }
};
const removeNote = (title) => {
    const notes = loadNotes();

    const editedNotes = notes.filter(note => note.title !== title);
    if (notes.length > editedNotes.length) {
        saveNotes(editedNotes);
        console.log(chalk.green.inverse(`Remove note : "${title}"`));
    } else {
        console.log(chalk.red.inverse(`This title doesn't exist in DB`));
    }
};

const listNote = () => {
    const notes = loadNotes();
    console.log(chalk.inverse(`Your notes :`));
    notes.forEach((notes,index) =>console.log(`${chalk.green.inverse((index + 1))}${notes.title}`));
};
const readNote = (title) =>{
const notes = loadNotes();
const findNote = notes.find(note => note.title === title);
console.log(findNote);
if(findNote){
    console.log(chalk.green.inverse('Your note is : '));
    console.log(chalk.blue.inverse(`Title is : ${findNote.title} \n Body is : ${findNote.body}`));
}
else{
    console.log(chalk.red.inverse(`Your note doesn't exist!`));

}
};


module.exports = {
    addNote,
    removeNote,
    listNote,
    readNote
};
