import {JournalEntryComponent} from "./journalEntry.js"

export const getEntriesData = () => {
    return fetch('http://localhost:8088/entries')
    .then(response => response.json())
}
/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getSortedJournalEntries = (APIdata) => {
        let sortedEntries = APIdata.sort(
            (currentEntry, nextEntry) =>
                Date.parse(nextEntry.date) - Date.parse(currentEntry.date)
        )
        return sortedEntries
     }

const entryLog = document.querySelector(".journal-entries")

export const EntryListComponent = () => {
    getEntriesData()
    .then(dataFromAPI => getSortedJournalEntries(dataFromAPI))
    .then(entries => {
        for (const entry of entries) {      
            entryLog.innerHTML += JournalEntryComponent(entry)
        }
    })
}
