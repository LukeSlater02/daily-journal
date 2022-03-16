export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="entries-column">
            <h4 id="entry--${entry.id}">${entry.concept}</h4>
            <br id="entry--${entry.id}">${entry.understanding}
            <h4 id="entry--${entry.id}">${entry.date}</h4>
            <p id="entry--${entry.id}">${entry.entry}</p>
        </section>
    `
}