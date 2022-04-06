export const createJournal = () => {
    `    <main>
    <section class="journal-input-container">
    <section class="journal-input">
        <h2 style="color: black;"><em>new entry</em></h2>
    <article class="input-column"> 
    <form action="">  
        <fieldset>
            <label for="journalDate">Date of entry</label>
            <input style="width:9.5em" type="date" name="journalDate" id="journalDate"> 
        </fieldset>
    </form>
    </article>
    <article class="input-column">
    <form action="">
        <fieldset>
            <label for="conceptsCovered">Concepts covered</label>
            <textarea style="width: 25em" name="conceptsCovered" id="" cols="10" rows=""></textarea>
        </fieldset>
    </form>
    </article>
    <article class="input-column">
    <form action="">
        <fieldset>
            <label for="journalEntry">Journal Entry</label>
            <textarea name="journalEntry" id="" cols="60" rows="4"></textarea>
        </fieldset>
    </form>
    </article>
    <article class="input-column">
    <form action="">
        <fieldset>
            <label for="understanding">Level of understanding</label>
            <select style="width:23em" name="understanding" id="understanding">
                <option>---</option>
                <option>Got it down.</option>
                <option>I think I've got it, but will need to check notes.</option>
                <option>Need more practice.</option>
                <option>Having trouble.</option>
                <option>Completely baffled.</option>
                <option>I'm going to quit.</option>
            </select>
        </fieldset>
        <article class="input-column">
            <input class="record-button" id="record-button" type="button" value="Record Journal Entry">
        </article>
    </form>
    </article>
</section>
</section>

<section class="journal-filter">
            <h2 class="section-title" style="text-align:center; margin-top: 4em; margin-bottom: 0;">Journal Entries</h2>
    <h3 style="margin-bottom: .1em; color: white;">Filter:</h3>
    <p style="color: rgba(255, 255, 255, 1);">by level of understanding:</p>
    <select style="width:23em" name="understanding" id="understanding-filter">
        <option>---</option>
        <option>Got it down.</option>
        <option>I think I've got it, but will need to check notes.</option>
        <option>Need more practice.</option>
        <option>Having trouble.</option>
        <option>Completely baffled.</option>
    </select>  
    <p style="color: rgba(255, 255, 255, 1);">by only your posts:</p>
    <input type="button" id="filter-button" value="Click">
</section>

<section class="journal-entries">
</section>

</main>

<footer>
    &copy; art courtesy of <a href="https://www.artstation.com/stargrave">Artem Demura</a>
</footer>`
}