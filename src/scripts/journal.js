//Functions that builds the Journal Entry

const newJournalEntry = (journalDate, journalConcepts, journalEntry, journalMood) => {
    const newEntry = {
        concept: journalDate,
        date: journalConcepts,
        entry: journalEntry,
        mood: journalMood
    }
    return newEntry
}

export default newJournalEntry