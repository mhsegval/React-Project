import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PickupForm from "./pages/RequestPickup";
import Confirmation from "./pages/Confirmation";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import AboutUs from "./pages/AboutUs";
//import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pickup" element={<PickupForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
