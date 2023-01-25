import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

//imported components
import NavBar from "./components/NavBar";
import Form from "./components/dreamForm";


const App = () => {
    return(
        <div>
            <NavBar />
            <Form />
        </div>    
    )
}

export default App;