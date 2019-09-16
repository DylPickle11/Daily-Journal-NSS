import makeJournal from "./entryHTML.js"

/*
    Responsible for putting entries on the DOM
*/

const renderEntries = {
    renderJournalEntries: (entries) => {
        document.querySelector(".entry--Container").innerHTML += makeJournal(entries);
    }
}




/*import makeJournal from "./entryHTML.js/index.js";

const renderEntries = {
    renderJournalEntries: (entries) => {
        for (let i = 0; i < entries.length; i++) {
            const journalContainer = document.querySelector(".entryLog");
            const journalEntry = entries[i];
            journalContainer.innerHTML += makeJournal.makeJournalEntryComponent(journalEntry);
        }
    }
}

export default renderEntries;

*/

export default renderEntries