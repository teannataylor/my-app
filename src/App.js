import React, {useState, useEffect} from "react";
import Header from "./Header";
import LegendPage from "./LegendPage";
import NewLegendForm from "./NewLegendForm";
import About from "./About";

import { Route, Routes } from "react-router-dom";

//move legend fetch and state here

function App() {
  const [legends, setLegends] = useState([]);

  useEffect(fetchLegends, []);

  function fetchLegends() {
    fetch("http://localhost:3006/legends")
      .then((res) => res.json())
      .then((data) => setLegends(data));
  }
  return (
    <div className="app">
      <Header />
      <Routes>
      <Route path="/legends" element={<LegendPage legends={legends} setLegends={setLegends}/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="/new" element={<NewLegendForm setLegends={setLegends} />}/>

      
      </Routes>
    </div>
  );
}

export default App;
