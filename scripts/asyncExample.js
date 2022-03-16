
import { JournalEntryComponent } from "./JournalEntry.js";

export async function getSortedJournalEntries() {
    const entriesCollection = await fetch('http://localhost:8088/entries')
        .then(res => res.json())
        .then(data => data);
        
    const sortedEntries = entriesCollection.sort(
        (currentEntry, nextEntry) =>
        Date.parse(nextEntry.date) - Date.parse(currentEntry.date)
        )
    console.log(sortedEntries);
    return sortedEntries
}


export async function EntryListComponent() {
    const entryLog = document.querySelector(".journal-entries")

    const entries = await getSortedJournalEntries();
    entries.forEach((e) => {
        entryLog.innerHTML += JournalEntryComponent(e)
    })
}

