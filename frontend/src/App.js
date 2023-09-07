import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from './components/Header/Header';
import Synonym from './components/similar&opposite/Synonyms';
import Antonym from './components/similar&opposite/Antonyms';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/synonym" exact element={<Synonym />} />
          <Route path="/antonym" exact element={<Antonym />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
