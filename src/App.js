import "./styles.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import AboutUs from "./routes/AboutUs";
import GetInvolved from "./routes/GetInvolved";
import Pantries from "./routes/Pantries";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/pantries" element={<Pantries />} />
      </Routes>
    </div>
  );
}
