import renderEntries from "./entriesDOM.js"

const API = {
    getJournalEntries() {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
            // .then(res => console.log(res))
            .then(res => renderEntries.renderJournalEntries(res))
    },
    // Use `fetch` with the POST method to add your entry to your API
    saveJournalEntry(entryObject) {
        return fetch("http://localhost:3000/entries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entryObject)
            })
            .then(response => response.json())
            .then(res => {
                
            })
    }
}







export default API;