//Functions that builds the Journal Entry

const newJournalEntry = (date, concepts, entry, mood) => {
    const newEntry = {
        concept: concepts,
        date: date,
        entry: entry,
        mood: mood
    }
    return newEntry
}

export default newJournalEntry