import {JournalEntryComponent} from "./journalEntry.js"

export const getEntriesData = () => {
    return fetch('http://localhost:8088/entries')
    .then(response => response.json())
    .then(data => {
       let sortedEntries = data.sort(
            (currentEntry, nextEntry) =>
                Date.parse(nextEntry.date) - Date.parse(currentEntry.date)
        )
        return sortedEntries
    })
}

const entryLog = document.querySelector(".journal-entries")

export const insertEntries = () => {
    getEntriesData()
    .then(data => {
        for (const entry of data){
            entryLog.innerHTML += JournalEntryComponent(entry)
        }
    })
}

