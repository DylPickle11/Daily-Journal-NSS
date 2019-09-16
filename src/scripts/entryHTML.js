const makeJournal = (entries) => {
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
}

export default makeJournal;