import entryBuilder from "./entryHTML.js"

/*
    Responsible for putting entries on the DOM
*/

const renderEntries = {
    renderJournalEntries: (entries) => {
        document.querySelector(".entry--Container").innerHTML += entryBuilder.makeJournal(entries);
    },
    renderSingleEntry: (entry) => {
        document.querySelector(".edit--Container").innerHTML = entryBuilder.editJournal(entry);
    }
}

export default renderEntries