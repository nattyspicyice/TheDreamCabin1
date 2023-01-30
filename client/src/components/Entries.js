import React, { useState, useEffect } from 'react';
import axios from 'axios'
import EntryCard from './EntryCard';


function Entries () {
    const [savedDreams, setSavedDreams] = useState([]);
    
  useEffect(() => {
        axios
        .get('http://localhost:8000')
        .then((res) => setSavedDreams(res.data))
        .catch((err) => console.log(err));
    }, []);

    console.log(savedDreams)

    return(
        <div>
            {savedDreams.map((dream) => (
                <EntryCard key={dream._id} dream={dream} />
            ))}
        </div>
    )
}

export default Entries;