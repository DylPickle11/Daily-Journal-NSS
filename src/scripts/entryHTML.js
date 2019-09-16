const entryBuilder = {
        makeJournal: (entries) => {
            return `
       <div class="makejournal"> 
         <h2 id="date">${entries.date}</h2>
         <section id="concept">${entries.concept}</section>
         <section id="entry">${entries.entry}</section>
         <aside id="mood">${entries.mood}</aside>
         <button type="button" id="deleteEntry--${entries.id}">
            Delete Entry
         </button>
         <button type="button" id="editEntry--${entries.id}">
            Edit Entry
         </button>
       </div>
       `
        },
        editJournal: (entry) => {
            return `
        <form>
            <h2 id="date">${entry.date}</h2>
            <section id="concept">${entry.concept}</section>
            <section id="entry">${entry.entry}</section>
            <aside id="mood">${entry.mood}</aside>
            <button id="saveEntry">Save Entry</button>
        </form>

          `
        }
    }
    /*  
      return `
        <div class="edit--Container">
        <h2 id="date">${entries.date}</h2>
         <section id="concept">${entries.concept}</section>
         <section id="entry">${entries.entry}</section>
         <aside id="mood">${entries.mood}</aside>

            <
            input id = "entryId"
        value = "" >
            <
            button id = "saveEntry" > < /button> < /
            div >`
     */


export default entryBuilder;