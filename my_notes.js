const fs = require('fs')
const chalk = require('chalk')

//for  addNotes
const addNotes = (title,body) => {
    const notes = loadNotes()
    const duplicatesNotes = notes.filter( (note) => note.title === title)

    // const duplicatesNotes = notes.filter( function(note) {
    //     return note.title === title
    // })

    if(duplicatesNotes.length === 0){
        notes.push({
            title : title,
            body : body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse("notes added succesfully"))
    }
    else{
        console.log(chalk.yellow.inverse("note title has taken"))
    }

   
}


//for remove notes

const removeNotes = (title) => {

    const rnotes = loadNotes()
    const noteToKeep = rnotes.filter( (note) => note.title !== title)

    // const noteToKeep = rnotes.filter(function(note){
    //     return note.title !== title
    // })

    if(rnotes.length > noteToKeep.length){
        saveNotes(noteToKeep)
        
        console.log(chalk.inverse.green("note removed successful!"))

    }
    else{
        console.log(chalk.inverse.red("Note not found!"))
    }

   
}

//list of notes
const ListNotes = () => {

    const notes = loadNotes()
    console.log(chalk.inverse.yellow('Your Notes are: '))

    notes.forEach( (note) => {
        console.log(note.title)
    })
    
}

//read notes
const ReadNotes = (title) => {
    const notes =  loadNotes()
    const findNotes = notes.find( (note) => note.title === title )

    if(findNotes){

        console.log(chalk.inverse.yellow(findNotes.title))
        console.log(chalk.inverse.green(findNotes.body))
    }else{

        console.log(chalk.red.inverse('Note not Found!'))

    }

}





//save notes
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('my_notes.json',dataJSON)
}



// load notes
const loadNotes = () =>
{   try
    {
        const dataBuffer = fs.readFileSync('my_notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e)
    {
        return []
    }
    
}





module.exports = {
   
    addNotes: addNotes,
    removeNotes: removeNotes,
    ListNotes: ListNotes,
    ReadNotes: ReadNotes
}