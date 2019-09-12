import renderEntries from "./entriesDOM.js"

const API = {
    getJournalEntries() {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
            // .then(res => console.log(res))
            .then(res => renderEntries.renderJournalEntries(res))
    }
}

export default API;