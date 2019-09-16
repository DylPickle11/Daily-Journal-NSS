import newJournalEntry from "./journal.js"
import API from "./dataAPIs.js"
import renderEntries from "./entriesDOM.js"
import makeJournal from "./entryHTML.js"
import editForm from "./editEntry.js"

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

// This makes sure we have journal entries when the page loads!

API.getJournalEntries().then((allEntries) => {
    allEntries.forEach(entry => {
        renderEntries.renderJournalEntries(entry)
    })
})

//Make event Listener 

document.querySelector("#button").addEventListener("click", () => {

    // Collected Form Field Values
    const journalDate = document.querySelector("#journalDate").value;
    const journalConcepts = document.querySelector("#journalConcepts").value;
    const journalEntry = document.querySelector("#journalEntry").value;
    const journalMood = document.querySelector("#journalMood").value;

    /* Need Validation From
if (journalDate === "" || journalConcepts === "" || journalEntry === "" || journalMood === "") {
                return alert("invalid code");
            } else if (journalDate.includes("@", "$", "%", "^", "*") === true || journalConcepts.includes("@", "$", "%", "^", "*") === true || journalEntry.includes("@", "$", "%", "^", "*") === true || journalEntry.includes("@", "$", "%", "^", "*") === true) {
                return alert("Super invalid code");
            } else {
                return "nothing"
            }
     */

    //Build New Journal Object
    const entryObject = newJournalEntry(journalDate, journalConcepts, journalEntry, journalMood)

    //Clear inputs
    document.querySelector("#journalDate").value = "";
    document.querySelector("#journalConcepts").value = "";
    document.querySelector("#journalEntry").value = "";
    document.querySelector("#journalMood").value = "";

    // Save object to JSON
    API.saveJournalEntry(entryObject)

    // Get All the Entries
    API.getJournalEntries().then((allEntries) => {
        allEntries.forEach(entry => {
            renderEntries.renderJournalEntries(entry)
        })
    })

    //Send Entry to the DOM

})

// Delete Entries & Edit Entries

const entriesContainer = document.querySelector(".entry--Container").addEventListener("click", (event) => {
    if (event.target.id.startsWith("deleteEntry--")) {
        // Extract entry id from the button's id attribute
        document.querySelector(".entry--Container").innerHTML = "";
        API.deleteEntries(event.target.id.split("--")[1])
            .then(response => {
                API.getJournalEntries().then((allEntries) => {
                    allEntries.forEach(entry => {
                        renderEntries.renderJournalEntries(entry)
                    })
                })
            })
    } else if (event.target.id.startsWith("editEntry--")) {
        editForm(event.target.id.split("--")[1])
    }
})

//Save Entries
/*
document.querySelector(".entry--Container").addEventListener("click", (event) => {
    API.editEntries(document.querySelector("#entryId").value)
        .then(response => {
            document.querySelector("#entryId").value = "";
            document.querySelector(".edit--Container").innerHTML = "";


            /*
    API.getDonuts().then((allDonuts) => {
        allDonuts.forEach(donut => {
            // 7. needs to send donut to DOM
            addDonutToDOM(donut)
    
})
})

})
}) 
*/