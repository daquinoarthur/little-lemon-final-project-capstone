import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/Homepage";
import { ReserverATable } from "./pages/ReserveATable";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/reserve-a-table" element={<ReserverATable />} />
      </Routes>
    </Router>
  );
}

export default App;
