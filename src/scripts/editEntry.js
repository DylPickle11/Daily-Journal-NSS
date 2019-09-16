import API from "./dataAPIs.js"
import renderEntries from "./entriesDOM.js"
import entryBuilder from "./EntryHTML.js"

/*
     Reponsible for displaying data from database within input fields
  
*/


const editForm = (entryId) => {
    // const hiddenEntryId = document.querySelector("#entryId");
    const editDate = document.querySelector("#date");
    const editTitle = document.querySelector("#concept");
    const editEntry = document.querySelector("#entry");
    const editMood = document.querySelector("#mood");

    API.getSingle(entryId)
        .then(response => {
            // hiddenEntryId.value = response.entryId;
            editDate.value = response.date;
            editTitle.value = response.concept;
            editEntry.value = response.entry;
            editMood.value = response.mood;
        })
}
export default editForm