import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Archieves } from "./Pages/Archieves";
import { HabitDetails } from "./Pages/HabitDetails";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:habitName" element={<HabitDetails />} />
        <Route path="/archieves" element={<Archieves />} />
      </Routes>
    </div>
  );
}
