import {useState, useEffect} from 'react';
import axios from 'axios'
import EntryCard from './EntryCard';

function Entries () {
    const [savedDreams, setSavedDreams] = useState(null);
    
    useEffect(() => {
        axios
        .get('http://localhost:8000')
        .then((res) => setSavedDreams(res.data))
        .catch((err) => console.log(err));
    }, []);
 console.log(savedDreams)
    return(
        <div>
            <EntryCard dreams = {savedDreams}/>
        </div>
    )
}

export default Entries;