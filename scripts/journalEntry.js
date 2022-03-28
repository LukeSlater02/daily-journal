export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry__${entry.id}" class="entries-column">
            <h4 id="entry__${entry.id}">${entry.concept}</h4>
            <br id="entry__${entry.id}">${entry.understanding}
            <h4 id="entry__${entry.id}">${entry.date}</h4>
            <p id="entry__${entry.id}">${entry.entry}</p>
            <span><button id="edit__${entry.id}">Edit</button> <button id="delete__${entry.id}">Delete</button></span>
        </section>
    `
}