import React from 'react';
import "./App.css";
import Leftbar from './components/leftbar/Leftbar';
import Navbar from './components/navbar/Navbar';
import Rightbar from './components/rightbar/Rightbar';
import Update from './components/update/Update';

const App = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Leftbar />
                <Update />
                <Rightbar />    
            </div>  
        </>
    )
}

export default App