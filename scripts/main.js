import {insertEntries, getEntriesData} from "./useJournalData.js"
import {JournalEntryComponent} from "./journalEntry.js"
insertEntries()

document.querySelector(".journal-entries").addEventListener("click", event => {
    if (event.target.id.startsWith("entry")){
        console.log(event.target.id);
    }
})

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
    // let entries = getEntriesData()
    // for (entry of entries){
    //     if (entry.understanding === event.target.value){

    //     }
    // }
})
