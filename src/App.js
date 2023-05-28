import Home from "./components/Home";
import Dish from "./components/Dish";
import { Routes, Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dish/:id" element={<Dish />} />
      </Routes>
    </div>
  );
}
