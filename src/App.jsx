import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingpage/landingPage';
import AdvertisementIndustry from './industries/advertisement/advertisement';
import AgricultureIndustry from './industries/agriculture/agriculture';
import AgricultureSalesPage from './industries/agriculture/pages/salespage/SalesPage';
import MediaEntertainmentIndustry from './industries/media/mediaEntertainment';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<LandingPage />} />


        <Route path="/advertisement" element={<AdvertisementIndustry />} />

        <Route path="/agriculture" element={<AgricultureIndustry />} />
        <Route path="/agriculture/sales" element={<AgricultureSalesPage />} />


        <Route path="/media-entertainment" element={<MediaEntertainmentIndustry />} />

      </Routes>
    </Router>
  );
}

export default App;
