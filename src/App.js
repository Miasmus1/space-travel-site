import { Routes, Route } from "react-router-dom";

import DesignSystem from './DesignSystem';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Destination from "./components/Destination";

function App() {
  return (
    <>
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </>
  );
}

export default App;
