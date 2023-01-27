import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

//imported components
import NavBar from "./components/NavBar";
import DreamForm from "./components/DreamForm";
import Entries from "./components/Entries";
import EntryCard from "./components/EntryCard";

const App = () => {
    return(
        <div>
            <div >
            <NavBar />
            <div style={{
                display: "flex",
                margin: "20px",
                gap: "20px"
            }}>
                <DreamForm />
                <Entries />
            </div>
            </div>
        </div>    
    )
}

export default App;