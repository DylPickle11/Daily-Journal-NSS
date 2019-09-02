fetch("http://localhost:3000/entries")
    .then(entries => entries.json())  // Parse as JSON
    .then(parsedEntries => {
        renderJournalEntries(parsedEntries)// What should happen when we finally have the array?
    })


const journalContainer = document.querySelector(".entryLog");

// Create your own HTML structure for a journal entry
const makeJournalEntryComponent = (journalEntry) => { 
   return  `
      <h2>${journalEntry.date}</h2>
      <section>${journalEntry.concept}</section>
      <section>${journalEntry.entry}</section>
      <aside>${journalEntry.mood}</aside>
    `;
 
}
const renderJournalEntries = (entries) => {
  for (let i = 0; i < entries.length; i++) {
    const journalEntry = entries[i];
    journalContainer.innerHTML += makeJournalEntryComponent(journalEntry);   
  }
}

//renderJournalEntries(journalEntries)
/*
console.log(journalCollections.push(journalEntry, journalEntry2, journalEntry3));
console.log(journalCollections);i
*/
