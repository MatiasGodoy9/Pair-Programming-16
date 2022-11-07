import React from 'react';
import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import Footer from './components/Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
    return (
        <Router>
            <Header/>
            <Cards />
            <Footer/>
        </Router>
    )
}

export default App;