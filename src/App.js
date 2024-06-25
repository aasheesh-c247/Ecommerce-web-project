import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import ServicesOne from "./Pages/ServicesOne";
import Product from "./Pages/Product";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";


function App() {
  return (
    <>
      <div className="App">
        <Header />
      </div>

      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/servicesone" element={<ServicesOne />} />
          <Route path="/product" element={<Product />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      <div className="App">
        <Footer />
      </div>
    </>
  );
}

export default App;
