import EntryCard from "../components/EntryCard";
import Entries from "../components/Entries";
import NavBar from "../components/NavBar";
import DreamForm from "../components/DreamForm";

import axios from "axios";
import { useEffect, useState } from "react";


const Dashboard = () => {

    const [savedDreams, setSavedDreams] = useState([]);
    const [updated, setUpdated] = useState(false);
    useEffect(() => {
        axios
        .get('https://the-dream-cabin-backend-2.onrender.com/') //backend server
        .then((res) => setSavedDreams(res.data))
        .catch((err) => console.log(err));
    }, [updated]);

    return(
        <div>
            <NavBar/>
            <div>
                <DreamForm setUpdated = {setUpdated} updated = {updated} />
                <Entries savedDreams = {savedDreams} setUpdated = {setUpdated} updated = {updated}/>
            </div>
        </div>
    )
}

export default Dashboard;