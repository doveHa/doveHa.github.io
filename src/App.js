import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GameDetail from "./pages/GameDetail";
import './App.css';
import './dark.css';

function App() {
  return (
      <div className="app dark-mode">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games/:id" element={<GameDetail />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;