const yargs = require('yargs')
const chalk = require('chalk')
const validator = require('validator')
const notes = require('./my_notes.js')



yargs.version('1.0.0')
// create command for add a notes
yargs.command(
    {
        command: 'add',
        describe: 'adding new line',
        builder:{
            title:{
                describe: 'Title a note',
                demandOption: true,
                type: 'String'
            },
            body:{
                describe: 'body of note',
                demandOption: true,
                type: 'String'
            }
        },
        handler: function(argv){
           notes.addNotes(argv.title,argv.body)
        }
    }
)
//create command for remove a notes
yargs.command({
    command: 'remove',
    describe: 'removing line',
    builder: {
        title: {
            describe: 'title a note',
            demandOption: true,
            type: 'String'
        }
    },
   
    handler: function(argv) {
        notes.removeNotes(argv.title)
    }
})
    // creating list command
yargs.command({
    command: 'list',
    describe: 'list of notes',
    handler: function(){
        notes.ListNotes()
    }
})

    //creating  read command
yargs.command({
    command: 'read',
    describe: 'read the notes',
    builder: {
        title:{
            describe : 'note title',
            demandOption : true,
            type : String
        }
    },
    handler: function(argv){
       notes.ReadNotes(argv.title)
    }
})

console.log(yargs.argv)