import { insertEntries, getEntriesData, createPost, deleteEntry, getSingleEntry, getFilteredEntries } from "./useJournalData.js"
import {entryEdit} from "./entryEdit.js"

insertEntries(getEntriesData())
const entries = document.querySelector("main")
entries.addEventListener("change", event => {
    let filteredData;
    if (event.target.id === "understanding-filter") {
        if (event.target.value != "---"){
            getEntriesData().then(data => {
                console.log(data);
                console.log("EVENT VALUE IS:", event.target.value)
                filteredData= data.filter(singleEntry => {
                    if (singleEntry.understanding === event.target.value) {
                        return singleEntry
                    }
    
                })
            }).then(response => {
                getFilteredEntries(filteredData)
            })
        } else {
            insertEntries(getEntriesData())
        }
    }


})

entries.addEventListener("click", event => {
    if (event.target.id.startsWith("delete")){
        deleteEntry(event.target.id.split("__")[1]).then(insertEntries)
    }
    if (event.target.id.startsWith("edit")){
        getSingleEntry(event.target.id.split("__")[1])
        .then(response => {
            showEdit(response)
        })
    }
})

const showEdit = (postObj) => {
    const entryElement = entries;
    entryElement.innerHTML = entryEdit(postObj);
  }

document.querySelector(".record-button").addEventListener("click", event => {
    event.preventDefault()
    if (event.target.id === "record-button") {
        var parts = document.querySelector("input[name='journalDate']").value.split('-');
        var mydate = new Date(parts[0], parts[1] - 1, parts[2]);
        const date = mydate
        const concepts = document.querySelector("textarea[name='conceptsCovered']").value
        const entry = document.querySelector("textarea[name='journalEntry']").value
        const understanding = document.querySelector("#understanding").value

        const entryObject = {
            concept: concepts,
            date: date,
            entry: entry,
            understanding: understanding,
        }
        createPost(entryObject).then(insertEntries)

        document.querySelector("input[name='journalDate']").value = ""
        document.querySelector("textarea[name='conceptsCovered']").value = ""
        document.querySelector("textarea[name='journalEntry']").value = ""
        document.querySelector("#understanding").selectedIndex = 0
    }
})

