import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from "./pages/Home";
import Adverts from "./pages/Adverts";
import Footer from "./components/Footer";
import { VehicleContextProvider } from "./context/vehicle-context"
import { CompareContextProvider } from "./context/compare-context";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <VehicleContextProvider>
        <CompareContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tüm-ilanlar" element={<Adverts />} />
          </Routes>
        </CompareContextProvider>
      </VehicleContextProvider>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
