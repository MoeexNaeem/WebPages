import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { Service } from "./components/Service";
import { About } from "./components/About";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/service" element={<Service/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
