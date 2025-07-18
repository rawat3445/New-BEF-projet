import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import About from './pages/About';
import EventDetails from './pages/EventDetails';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
// import SalesPage from './pages/SalesPage';

function Healthnpharma() {
  return (
    <>
      <Navbar />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<EventDetails />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* <Route path="/sales" element={<SalesPage />} /> */}
        </Routes>
        <ScrollToTopButton />
      </main>
      <Footer />
    </>
  );
}

export default Healthnpharma;
