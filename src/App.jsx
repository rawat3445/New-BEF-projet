import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingpage/landingPage';
import AdvertisementIndustry from './industries/advertisement/advertisement';
import AgricultureIndustry from './industries/agriculture/agriculture';
import MediaEntertainmentIndustry from './industries/media/mediaEntertainment';
import './App.css';
import BeautyWellnessIndustry from './industries/beauty';
import EnvironmentIndustry from './industries/environment/environment';

function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<LandingPage />} />

     
        <Route path="/advertisement" element={<AdvertisementIndustry />} />
        <Route path="/agriculture" element={<AgricultureIndustry />} />
        <Route path="/beauty-wellness" element={<BeautyWellnessIndustry />} />
        <Route path="/media-entertainment" element={<MediaEntertainmentIndustry />} />
        <Route path="/environment" element={<EnvironmentIndustry />} />


        {/* Example Placeholder for future industries */}
        {/*DO NOT TOUCH THIS CODE BELOW IT'S JUST AN EXAMPLE!*/}
        {/* <Route path="/education" element={<EducationIndustry />} /> */}


      </Routes>
    </Router>
  );
}

export default App;
