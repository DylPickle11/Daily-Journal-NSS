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

    console.log(journalDate)
    console.log(journalConcepts)
    console.log(journalEntry)
    console.log(journalMood)
/*
    function validateForm() {
        const form = document.forms["myForm"]["concepts"]["message"]["mood"].value
        if (form == "") {
            alert("name must be filled out");
            return false;
        }
    }
*/
    // Function makes journal objects
    const newJournalEntry = (journalDate, journalConcepts, journalEntry, journalMood) => {
        const newEntry = {
            concept: journalDate,
            date: journalConcepts,
            entry: journalEntry,
            mood: journalMood
        }
        return newEntry
    }
    console.log("My new journal pls", newJournalEntry);
})

/*
// Use `fetch` with the POST method to add your entry to your API
fetch("url", { http://localhost:3000
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry)
})

*/