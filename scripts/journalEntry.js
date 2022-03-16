export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="entries-column">
            <h4>${entry.concept}</h4>
            <h4>${entry.date}</h4>
            <p>${entry.entry}</p>
        </section>
    `
}