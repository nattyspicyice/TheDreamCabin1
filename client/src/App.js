import React from "react";
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

//imported components
import NavBar from "./components/NavBar";
import DreamForm from "./components/DreamForm";
import EntryCard from "./components/EntryCard";

const App = () => {
    return(
        <div>
            <NavBar />
            <DreamForm />
        </div>    
    )
}

export default App;