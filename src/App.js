
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container min-100-vh">
          <Routes>
            <Route path="react-portfolio/" element={<Home />} />
            <Route path="react-portfolio/about" element={<About />} />
            <Route path="react-portfolio/contact" element={<Contact />} />
            <Route path="react-portfolio/portfolio" element={<Portfolio />} />
            <Route path="react-portfolio/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
