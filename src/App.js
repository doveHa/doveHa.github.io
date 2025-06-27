import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GameDetail from "./pages/GameDetail";
import './App.css';
import './dark.css';
import VerticalMap from "./components/VerticalMap";
import Scene from "./components/Scene";
import HomeScene from "./pages/scenePages/HomeScene";
import UserMainScene from "./pages/scenePages/UserMainScene";
import LoadingScene from "./pages/scenePages/LoadingScene";
import GameScene from "./pages/scenePages/GameScene";

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