import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import Shop from './pages/Shop';
import Registration from './pages/Registration';
import Podcast from './pages/Podcast';
import Workshops from './pages/Workshops';
import WorkshopDetail from './pages/WorkshopDetail';
import Magazine from './pages/Magazine';
import SocialMedia from './pages/SocialMedia';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/workshops/:id" element={<WorkshopDetail />} />
            <Route path="/magazine" element={<Magazine />} />
            <Route path="/social" element={<SocialMedia />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;