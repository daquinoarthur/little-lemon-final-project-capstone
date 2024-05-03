import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/Homepage";
import { Booking } from "./pages/Booking";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
