import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../src/pages/Home";
import { Buffets } from "../src/pages/Buffets";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buffets" element={<Buffets />} />
      </Routes>
    </Router>
  );
}

export default App;
