/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/

const journalEntries = [
  {
    date: "08/19/2019",
    concept: "Monday NoFunday",
    entry:"fsjdhfskdhfdskfhsdjkhfdskjhfdskjfhsdkfjshfdsjkfh",
    mood: "sad" 
  },
  {
    date: "08/20/2019",
    concept: "Tuesday Chooseday",
    entry:"fsjdhfskdhfdskfhsdjkhfdskjhfdskjfhsdkfjshfdsjkfh",
    mood: "Hungry" 
  },
  {
    date: "08/21/2019",
    concept: "Wednesday NoWay",
    entry:"fsjdhfskdhfdskfhsdjkhfdskjhfdskjfhsdkfjshfdsjkfh",
    mood: "Tired" 
  }
];

let journalCollections = [];
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
  for (let i = 0; i < journalEntries.length; i++) {
    const journalEntry = journalEntries[i];
    journalContainer.innerHTML += makeJournalEntryComponent(journalEntry);   
  }
}

renderJournalEntries(journalEntries)
/*
console.log(journalCollections.push(journalEntry, journalEntry2, journalEntry3));
console.log(journalCollections);i
*/
