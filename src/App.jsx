import React from "react";
import Home from "./routes/Home.jsx";
import Projects from "./routes/Projects.jsx";
import Experience from "./routes/Experience.jsx";
import About from "./routes/About.jsx";
import Contacts from "./routes/Contacts.jsx";

import { Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <>
      
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/projects" element={<Projects />} />

      </Routes>
      </>
    </div>
  );
}

export default App;
