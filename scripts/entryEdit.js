export const entryEdit = (entry) => {
	return `
    <section id="entry__${entry.id}" class="entries-column">
    <fieldset>
    
    <label for="newConcepts">Concepts covered</label>
    <textarea style="width: 25em" name="newConcepts" id="" cols="10" rows="">${entry.concept}</textarea>
    </fieldset>

    <fieldset>
    <label for="newJournalEntry">Journal Entry</label>
    <textarea name="newJournalEntry" id="" cols="50" rows="4">${entry.entry}</textarea>
    </fieldset>

    <fieldset>
                <label for="newUnd">Level of understanding</label>
                <select style="width:23em" name="newUnd" id="newUnd">
                    <option>${entry.understanding}</option>
                    <option>Got it down.</option>
                    <option>I think I've got it, but will need to check notes.</option>
                    <option>Need more practice.</option>
                    <option>Having trouble.</option>
                    <option>Completely baffled.</option>
                    <option>I'm going to quit.</option>
                </select>
            </fieldset>
</section>
		
		<input type="hidden" value="${entry.id}" name="entryId">
		<input type="hidden" value="${entry.date}" name="entryTime">	
        <input id="updateEntry__${entry.id}" type="button" value="Update"> <input id="newEntry__cancel" type="button" value="Cancel">
	</div>
	`
}