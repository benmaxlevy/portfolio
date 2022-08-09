import Home from './components/Home';
import About from './components/About';
import './App.css';
import React from "react";

function App() {
    return (
        <div className="App">
            <Home id="home"/>
            <About id="about"/>
        </div>
    );
}

export default App;
