import {getLoggedInUser} from "./login.js"
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry__${entry.id}" class="entries-column">
            <h4 id="entry__${entry.id}">${entry.concept}</h4>
            <br id="entry__${entry.id}">${entry.understanding}
            <h4 id="entry__${entry.id}">${entry.date}</h4>
            <p id="entry__${entry.id}">${entry.entry}</p>
            <p>Author: <em>${entry.user.name}</em> </p>
            ${entry.user.id === getLoggedInUser().id ? `<input id="edit__${entry.id}" type="button" value="Edit"> <input id="delete__${entry.id}" type="button" value="Delete">` : ''} 
        </section>
    `
}