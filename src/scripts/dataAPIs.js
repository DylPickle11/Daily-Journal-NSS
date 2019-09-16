const API = {
    getJournalEntries: () => {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    },
    // Use `fetch` with the POST method to add your entry to your API
    saveJournalEntry: (entryObject) => {
        return fetch("http://localhost:3000/entries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entryObject)
            })
            .then(response => response.json())
            .then(res => {})
    },
    deleteEntries: (id) => {
        return fetch(`http://localhost:3000/entries/${id}`, {
            method: "DELETE"
        }).then(response => response.json())
    },
    editEntries: (id) => {
        const entryUpdateObject = {
            name: document.querySelector("#entryName").value
        }
        return fetch(`http://localhost:3000/entries/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryUpdateObject)
        }).then(response => response.json())
    },
    getSingle: (entryId) => {
        return fetch(`http://localhost:3000/entries/${entryId}`)
            .then(response => response.json())
    }
}


export default API






















//Previous Code
/* import renderEntries from "./entriesDOM.js"

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

*/