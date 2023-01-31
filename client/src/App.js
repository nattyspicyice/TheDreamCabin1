import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

//imported components
import NavBar from "./components/NavBar";
import DreamForm from "./components/DreamForm";
import Entries from "./components/Entries";
import Dashboard from "./pages/Dashboard";

const App = () => {
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
                    <DreamForm />
                    <Entries />
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