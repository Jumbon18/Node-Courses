const validator = require('validator');
const yargs = require('yargs');
const note = require('./notes');
const chalk = require('chalk');
yargs.command({
    command: 'add',// название комманды
    describe: 'Add a new note', // описание комманды
    builder: {
        title: {// задаем стурктуру
            describe: 'Note title',
            demandOption: true,// при вызове комманды обязательно должны быть элементы структкры
            type: 'string'//тип title
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'

        }
    },
    handler: (argv) => {// функция , которая вызывается при вызове комманды
        note.addNote(argv.title, argv.body);
    }
});
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.removeNote(argv.title);
    }
});
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: () => {
        note.listNote();
    }
});
yargs.command({
    command: 'read',
    describe: 'Describing a note',
    builder:{
        title:{
                describe:'Note title',
                demandOption:true,
            type:'string'
        }
    },
    handler: (argv) =>note.readNote(argv.title)
});
yargs.parse();