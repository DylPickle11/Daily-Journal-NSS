import makeJournal from "./entryComponent.js";

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