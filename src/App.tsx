import { Routes, Route } from "react-router-dom";
import Home from "./home/index";
import About from "./aboutUs/index";
import Contact from "./healthBenefits/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
