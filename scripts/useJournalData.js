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
    entryLog.innerHTML = ""
    getEntriesData()
    .then(data => {
        for (const entry of data){
            entryLog.innerHTML += JournalEntryComponent(entry)
        }
    })
}

export const getFilteredEntries = (data) => {
    entryLog.innerHTML = ""
    for (const entry of data){
        entryLog.innerHTML += JournalEntryComponent(entry)
    }
}

export const createPost = postObj => {
    return fetch('http://localhost:8088/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
    })

        .then(response => response.json())
}

export const getFormattedDate = date => {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
  
    return month + '/' + day + '/' + year;
}

export const deleteEntry = entryId => {
    return fetch(`http://localhost:8088/entries/${entryId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
}

export const getSingleEntry = (entryId) => {
    return fetch(`http://localhost:8088/entries/${entryId}`).then(response => response.json())
}

export const updateEntry = entryObj => {
    return fetch(`http://localhost:8088/entries/${entryObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObj)
  
    })
        .then(response => response.json())
        
  }
