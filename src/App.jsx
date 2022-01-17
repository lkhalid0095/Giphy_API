import React from "react";
import Giphy from "./components/Giphy";
import Navbar from "./components/NavBar";

import "./App.css";

const App = () => {
    return <div className="app-container">
        <Navbar />
        <Giphy />
         </div>
};

export default App