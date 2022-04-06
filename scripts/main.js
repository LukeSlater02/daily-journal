import { insertEntries, getEntriesData, createPost, deleteEntry, getSingleEntry, getFilteredEntries, updateEntry, header} from "./useJournalData.js"
import {entryEdit} from "./entryEdit.js"
import {JournalEntryComponent} from "./journalEntry.js"
import {checkForUser, getLoggedInUser, loginUser, registerUser} from "./login.js"
const entries = document.querySelector("main")

checkForUser()

entries.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "login__submit") {
      //collect all the details into an object
        const userObject = {
        name: document.querySelector("input[name='name']").value,
        email: document.querySelector("input[name='email']").value
      }
      loginUser(userObject)
      .then(dbUserObj => {
        if(dbUserObj){
          sessionStorage.setItem("user", JSON.stringify(dbUserObj))
        }
        else {
          //got a false value - no user
          const entryElement = document.querySelector(".entryForm");
          entryElement.innerHTML = `<p class="center">That user does not exist. Please try again or register for your free account.</p> ${LoginForm()} <hr/> <hr/> ${RegisterForm()}`;
        }
      })
    }
  })

  entries.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "register__submit") {
      //collect all the details into an object
      const userObject = {
        name: document.querySelector("input[name='registerName']").value,
        email: document.querySelector("input[name='registerEmail']").value
      }
      registerUser(userObject)
      .then(dbUserObj => {
        sessionStorage.setItem("user", JSON.stringify(dbUserObj));
        insertEntries();
      })
    }
  })


entries.addEventListener("change", event => {
    let filteredData;
    if (event.target.id === "understanding-filter") {
        if (event.target.value != "---"){
            getEntriesData().then(data => {
                console.log(data);
                console.log("EVENT VALUE IS:", event.target.value)
                filteredData = data.filter(singleEntry => {
                    if (singleEntry.understanding === event.target.value) {
                        return singleEntry
                    }
    
                })
            }).then(response => {
                getFilteredEntries(filteredData)
            })
        } else {
            insertEntries()
        }
    }


})

header()

entries.addEventListener("click", event => {
    if (event.target.id.startsWith("delete")){
        event.preventDefault()
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
    const entryElement = document.querySelector(".journal-entries");
    entryElement.innerHTML = entryEdit(postObj);
  }

entries.addEventListener("click", event => {
    if (event.target.id.startsWith("updateEntry")){
        const date = document.querySelector("input[name='entryTime']").value
        const concepts = document.querySelector("textarea[name='newConcepts']").value
        const entry = document.querySelector("textarea[name='newJournalEntry']").value
        const understanding = document.querySelector("#newUnd").value
        const entryId = event.target.id.split("__")[1]
        const userId = getLoggedInUser().id

        const entryObject = {
            concept: concepts,
            date: date,
            entry: entry,
            understanding: understanding,
            id: entryId,
            userId: userId
        }
        updateEntry(entryObject).then(insertEntries)
    }

    if (event.target.id === "newEntry__cancel"){
        insertEntries()
    }
})

document.querySelector(".record-button").addEventListener("click", event => {
    event.preventDefault()
    if (event.target.id === "record-button") {
        const date = document.querySelector("input[name='journalDate']").value
        const concepts = document.querySelector("textarea[name='conceptsCovered']").value
        const entry = document.querySelector("textarea[name='journalEntry']").value
        const understanding = document.querySelector("#understanding").value

        const entryObject = {
            concept: concepts,
            date: date,
            entry: entry,
            understanding: understanding,
            userId: getLoggedInUser().id
        }
        createPost(entryObject).then(insertEntries)

        document.querySelector("input[name='journalDate']").value = ""
        document.querySelector("textarea[name='conceptsCovered']").value = ""
        document.querySelector("textarea[name='journalEntry']").value = ""
        document.querySelector("#understanding").selectedIndex = 0
    }
})

entries.addEventListener("click", event => {
  if (event.target.id === "filter-button"){
    getEntriesData().then(data => {
      let myEntries = data.filter(ele => {
        return ele.userId === getLoggedInUser().id
      })
      for (const entry of myEntries){
        document.querySelector(".journal-entries").innerHTML = JournalEntryComponent(entry)
    }
    })
  }
})