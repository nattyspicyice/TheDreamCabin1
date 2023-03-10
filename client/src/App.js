import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";

//imported components
import NavBar from "./components/NavBar";
import DreamForm from "./components/DreamForm";
import Entries from "./components/Entries";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import axios from "axios";

const App = () => {
    const [savedDreams, setSavedDreams] = useState([]);
    const [updated, setUpdated] = useState(false);
    useEffect(() => {
        axios
        .get('https://the-dream-cabin-backend-2.onrender.com/') //backend server
        .then((res) => setSavedDreams(res.data))
        .catch((err) => console.log(err));
    }, [updated]);

    return(
        <div className="App">
                <div className="pages">
                <BrowserRouter>
                    <Routes>
                        <Route path = '/' element={<Dashboard/>}/>
                        <Route path ='/login' element={<Login/>}/>
                    </Routes>
                </BrowserRouter>
                </div>
        </div>    
    );
}

export default App;