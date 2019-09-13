import API from "./data.js";
import renderEntries from "./entriesDOM.js";
import makeJournal from "./entryComponent.js";

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

API.getJournalEntries().then(renderEntries.renderJournalEntries(journalEntry));

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

    //Send Entry to the DOM
})

const newJournalEntry = (journalDate, journalConcepts, journalEntry, journalMood) => {
    const newEntry = {
        concept: journalDate,
        date: journalConcepts,
        entry: journalEntry,
        mood: journalMood
    }
    return newEntry
}


//In main module, invoke method to save entry, then add item to local array.
API.saveJournalEntry()

//Update DOM with updated array values.