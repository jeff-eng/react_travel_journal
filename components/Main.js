import React from 'react';
import JournalEntry from './JournalEntry';
import data from '../data';

export default function Main() {
    // Create array of JournalEntry components to render
    const journalEntries = data.map(entry => <JournalEntry key={entry.id} obj={entry} />);
    
    return (       
        <main>
            <section className="entries-section">
                {journalEntries}  
            </section>    
        </main>
    );
}