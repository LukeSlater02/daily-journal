import {insertEntries, getEntriesData, createPost} from "./useJournalData.js"
import {JournalEntryComponent} from "./journalEntry.js"

insertEntries()

document.querySelector(".journal-entries").addEventListener("change", event => {
    if (event.target.id === "understanding-filter"){
        getEntriesData().then(data => {
            const filteredData = data.filter(singleEntry => { 
                if (singleEntry.understanding === event.target.value){
                    return singleEntry
                }
               
            })
            console.log(filteredData); 
        })
    }
})

document.querySelector(".record-button").addEventListener("click", event => {
    event.preventDefault()
    if (event.target.id === "record-button"){
        const date = document.querySelector("input[name='journalDate']").value
        const concepts = document.querySelector("textarea[name='conceptsCovered']").value
        const entry = document.querySelector("textarea[name='journalEntry']").value
        const understanding = document.querySelector("#understanding").value
        
        const entryObject = {
            concept: concepts,
            date: date,
            entry: entry,
            understanding: understanding,
        }
        createPost(entryObject)
        document.querySelector("input[name='journalDate']").value = ""
        document.querySelector("textarea[name='conceptsCovered']").value = ""
        document.querySelector("textarea[name='journalEntry']").value = ""
        document.querySelector("#understanding").selectedIndex = 0
    }
})

