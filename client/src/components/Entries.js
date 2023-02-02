import EntryCard from './EntryCard';

function Entries ({savedDreams, updated, setUpdated}) {
    return(
        <div className="entries">
            {savedDreams.map((dream) => (
                <EntryCard setUpdated = {setUpdated} updated = {updated} key={dream._id} dream={dream} />
            ))}
        </div>
    )
}

export default Entries;