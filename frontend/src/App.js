import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from './components/Header/Navbar';
import Synonym from './components/similar&opposite/Synonyms';
import Antonym from './components/similar&opposite/Antonyms';
import AddSynonyms from './components/similar&opposite/AddSynonyms/AddSynonyms';
import UpdateSynonyms from './components/similar&opposite/UpdateSynonyms/UpdateSynonyms';
import AddAntonyms from './components/similar&opposite/AddAntonyms/AddAntonyms';
import UpdateAntonyms from './components/similar&opposite/UpdateAntonyms/UpdateAntonyms';
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
          <Route path="/addSynonyms" exact element={<AddSynonyms />} />
          <Route path="/updateSynonyms" exact element={<UpdateSynonyms />} />
          <Route path="/addAntonyms" exact element={<AddAntonyms />} />
          <Route path="/updateAntonyms" exact element={<UpdateAntonyms />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
