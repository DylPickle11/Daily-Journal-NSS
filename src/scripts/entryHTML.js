//import editForm from "./editEntry";

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
         <button type="button" id="btnEditEntry--${entries.id}">
            Edit Entry
         </button>
       </div>
       `
    },
    editJournal: (response) => {
        const editTitle = response.concept;
        const editDate = response.date;
        const editEntry = response.entry;
        const editMood = response.mood;

        document.querySelector(".edit--Container").innerHTML =
            `
        <form>
            <input id="concept" value="${editTitle}"/>
            <input id="date" type="date" value="${editDate}"/>
            <input id="entry" value="${editEntry}"/>
            <select value="${editMood}">
              <option value="Blissful">Blissful</option>
              <option value="Cheerful">Cheerful</option>
              <option value="Excited">Excited</option>
              <option value="Mellow">Mellow</option>
              <option value="Loving">Loving</option>
              <option value="Energetic">Energetic</option>
              <option value="Peaceful">Peaceful</option>
              <option value="Silly">Silly</option>
              <option value="Sympathetic">Sympathetic</option>
              <option value="Angry">Angry</option>
              <option value="Annoyed">Annoyed</option>
              <option value="Apathetic">Apathetic</option>
              <option value="Cranky">Cranky</option>
              <option value="Guilty">Guilty</option>
              <option value="Melancholy">Melancholy</option>
              <option value="Rejected">Rejected</option>
              <option value="Restless">Restless</option>
              <option value="Sad">Sad</option>
              <option value="Weird">Weird</option>
            </select>
            <button id="saveEntry">Save Entry</button>
        </form>
        `
    }
}



export default entryBuilder;