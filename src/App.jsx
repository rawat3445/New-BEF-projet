import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingpage/landingPage';
import AdvertisementIndustry from './industries/advertisement/advertisement';
import MediaEntertainmentIndustry from './industries/media/mediaEntertainment';
import RuralDevelopmentIndustry from './industries/ruraldevelopment/RuralDevelopmentIndustry';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<LandingPage />} />

     
        <Route path="/advertisement" element={<AdvertisementIndustry />} />

    
        <Route path="/media-entertainment" element={<MediaEntertainmentIndustry />} />


        <Route path="/rural-development" element={<RuralDevelopmentIndustry />} />

      </Routes>
    </Router>
  );
}

export default App;
