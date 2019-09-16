import API from "./dataAPIs.js"

/*
     Reponsible for displaying data from database within input fields
  
*/

const editForm = (entryId) => {
    const hiddenEntryId = document.querySelector("${entries.id}");
    const editDate = document.querySelector("#date");
    const editTitle = document.querySelector("c#oncept");
    const editEntry = document.querySelector("#entry");
    const editMood = document.querySelector("#mood");

    API.getSingle(entryId)
        .then(response => {
            hiddenEntryId.value = entryId;
            editDate.value = response.date;
            editTitle.value = response.concept;
            editEntry.value = response.entry;
            editMood.value = response.mood;
        })
}
export default editForm