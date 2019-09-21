import newJournalEntry from "./journal.js"
import API from "./dataAPIs.js"
import renderEntries from "./entriesDOM.js"
import entryBuilder from "./entryHTML.js"
//import editForm from "./editEntry.js"

// Renders previous journal entries

API.getJournalEntries().then((allEntries) => {
    allEntries.forEach(entry => {
        renderEntries.renderJournalEntries(entry)
    })
})

//Event Listener to save Journal Entry to JSON and Put on DOM

document.querySelector("#btnSaveJournal").addEventListener("click", () => {

    // Collected Form Field Values
    const date = document.querySelector("#date").value;
    const concepts = document.querySelector("#concepts").value;
    const entry = document.querySelector("#entry").value;
    const mood = document.querySelector("#mood").value;

    /* Input validation
    const validCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .,(){}:;-!?"
    const validateInputString = (string) => {
        return string.split('').filter(character => validCharacters.includes(character)).join('');
    }

    validateInputString(concepts);
    validateInputString(entry);
*/
    if (date === "" || concepts === "" || entry === "" || mood === "") {
        return alert("Nope to empty")
    } else {
        // Build New Journal Object
        const entryObject = newJournalEntry(date, concepts, entry, mood)

        // Clear inputs
        document.querySelector("#date").value = "";
        document.querySelector("#concepts").value = "";
        document.querySelector("#entry").value = "";
        document.querySelector("#mood").value = "";

        // Save object to JSON
        API.saveJournalEntry(entryObject)

        // Send Entry to the DOM
        renderEntries.renderJournalEntries(entryObject)
    }
});


// Delete Entries & Edit Entries

const entriesContainer = document.querySelector(".entry--Container").addEventListener("click", (event) => {
    if (event.target.id.startsWith("deleteEntry--")) {
        // Extract entry id from the button's id attribute
        document.querySelector(".entry--Container").innerHTML = "";
        // Calls method to delete specified entries 
        API.deleteEntries(event.target.id.split("--")[1])
            // Get all entries and post
            .then(response => {
                API.getJournalEntries().then((allEntries) => {
                    allEntries.forEach(entry => {
                        renderEntries.renderJournalEntries(entry)
                    })
                })
            })
    } else if (event.target.id.startsWith("btnEditEntry--")) {
        // Get specific entry
        API.getSingle(event.target.id.split("--")[1])
            .then(response => {
                entryBuilder.editJournal(response)
            })
    }
})

// Save Entry Button


document.querySelector(".entry--Container").addEventListener("click", (event) => {
    API.editEntries(document.querySelector("#entryId").value)
        .then(response => {
            document.querySelector("#entryId").value = "";
            document.querySelector(".edit--Container").innerHTML = "";

        })
})