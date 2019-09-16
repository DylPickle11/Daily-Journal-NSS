import API from "./dataAPIs.js"
import renderEntries from "./entriesDOM.js"
import makeJournal from "./editEntry.js"

/*
     Reponsible for displaying data from database within input fields
  
*/
const makeEdit = (entries) => {
    return `
      <div class="makejournal"> 
             <h2 id="date">${entries.date}</h2>
             <section id="concept">${entries.concept}</section>
             <section id="entry">${entries.entry}</section>
             <aside id="mood">${entries.mood}</aside>
      </div>       
      
      `
}

const editForm = (entryId) => {
    const hiddenEntryId = document.querySelector("#entryId");
    const editDate = document.querySelector("#date");
    const editTitle = document.querySelector("#concept");
    const editEntry = document.querySelector("#entry");
    const editMood = document.querySelector("#mood");

    makeEdit(entryId);



    API.getSingle(entryId)
        .then(response => {
            renderEntries.renderJournalEntries(response);
            hiddenEntryId.value = response.entryId;
            editDate.value = response.date;
            editTitle.value = response.concept;
            editEntry.value = response.entry;
            editMood.value = response.mood;
        })
}
export default editForm