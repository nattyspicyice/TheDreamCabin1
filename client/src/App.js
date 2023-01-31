import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";

//imported components
import NavBar from "./components/NavBar";
import DreamForm from "./components/DreamForm";
import Entries from "./components/Entries";
import Dashboard from "./pages/Dashboard";
import axios from "axios";

const App = () => {
    const [savedDreams, setSavedDreams] = useState([]);
    const [updated, setUpdated] = useState(false);
    useEffect(() => {
        axios
        .get('http://localhost:8000/') //backend server
        .then((res) => setSavedDreams(res.data))
        .catch((err) => console.log(err));
    }, [updated]);

    return(
        <div className="App">
            <div>
                <NavBar />
            </div>
                <div className="pages">
                    {/* <Routes>
                        <Route path = '/' element={<Dashboard />}></Route>
                    </Routes> */}
                </div>
                <div>
                    <DreamForm  setUpdated = {setUpdated} updated = {updated} />
                    <Entries savedDreams = {savedDreams} setUpdated = {setUpdated} updated = {updated}/>
                </div>
        </div>    
    );
}

export default App;


{/* <div >
            <NavBar />
            <div style={{
                display: "flex",
                margin: "20px",
                gap: "20px"
            }}>
                <DreamForm />
                <Entries />
            </div>
            </div> */}