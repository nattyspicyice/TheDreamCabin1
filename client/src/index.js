import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { DreamsContextProvider } from "./context/DreamContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);