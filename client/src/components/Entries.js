// import React, { useState, useEffect } from 'react';
import EntryCard from './EntryCard';


function Entries ({savedDreams, updated, setUpdated}) {
    return(
        <div>
            {savedDreams.map((dream) => (
                <EntryCard setUpdated = {setUpdated} updated = {updated} key={dream._id} dream={dream} />
            ))}
        </div>
    )
}

export default Entries;