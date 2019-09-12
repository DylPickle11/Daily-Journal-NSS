const makeJournal = {
    makeJournalEntryComponent: (journalEntry) => {
        return `
       <h2>${journalEntry.date}</h2>
       <section>${journalEntry.concept}</section>
       <section>${journalEntry.entry}</section>
       <aside>${journalEntry.mood}</aside>
     `;
    }
}

export default makeJournal;