import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landingpage/landingPage';
import AdvertisementIndustry from './industries/advertisement/advertisement';
import AgricultureIndustry from './industries/agriculture/agriculture';
import AgricultureSalesPage from './industries/agriculture/pages/salespage/SalesPage';
import BeautyWellnessIndustry from './industries/beauty';
import MediaEntertainmentIndustry from './industries/media/mediaEntertainment';
import RuralDevelopmentIndustry from './industries/ruraldevelopment/RuralDevelopmentIndustry';
import EnvironmentIndustry from './industries/environment/environment';
import RetailIndustry from './industries/retail/retail';
import WomenEntrepreneurship from './industries/women-entrepreneurship';
import Web3AI from './industries/web3_ai/landingpage/LandingPage'
import Web3AISales from './industries/web3_ai/salespage/components/homepage';
import AutomobileIndustry from './industries/Automobile & mobility/automobile';
import Finance from './industries/finance-investment/finance';
import Healthnpharma from './industries/healthnpharma/Healthnpharma';
import RealEstateIndustry from './industries/real-estate-and-urban-planning';
import Policyandgovernance from './industries/policyandgovernance';
import Contact from './pages/Contact';
import About from './pages/About';
import Event from './pages/Event';





function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<LandingPage />} />


        <Route path="/advertisement" element={<AdvertisementIndustry />} />
        <Route path="/agriculture" element={<AgricultureIndustry />} />
        <Route path="/agriculture/sales" element={<AgricultureSalesPage />} />
        <Route path="/beauty-wellness" element={<BeautyWellnessIndustry />} />
        <Route path="/media-entertainment" element={<MediaEntertainmentIndustry />} />
        <Route path="/environment" element={<EnvironmentIndustry />} />
        <Route path="/retail" element={<RetailIndustry />} />
        <Route path="/women-entrepreneurship" element={<WomenEntrepreneurship />} />
        <Route path="/web_ai" element={<Web3AI />} />
        <Route path="/web_ai/salespage" element={<Web3AISales />} />
        <Route path="/automobile" element={<AutomobileIndustry />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/real-estate" element={<RealEstateIndustry />} />
        <Route path="/health-pharma/*" element={<Navigate to="/healthnpharma" replace />} />
        <Route path="/healthnpharma/*" element={<Healthnpharma />} />
        <Route path="/rural-development" element={<RuralDevelopmentIndustry />} />
        <Route path="/policy-and-governance" element={<Policyandgovernance />} />
        
        {/* Redirects for old paths */}

        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />







        {/* Example Placeholder for future industries */}
        {/*DO NOT TOUCH THIS CODE BELOW IT'S JUST AN EXAMPLE!*/}
        {/* <Route path="/education" element={<EducationIndustry />} */}




      </Routes>
    </Router>
  );
}

export default App;
