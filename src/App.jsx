import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingpage/landingPage';
import AdvertisementIndustry from './industries/advertisement/advertisement';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Industry-Specific Pages */}
        <Route path="/advertisement" element={<AdvertisementIndustry />} />

        {/* Example Placeholder for future industries */}
        {/* <Route path="/industries/banking" element={<BankingIndustry />} /> */}
        {/* <Route path="/industries/education" element={<EducationIndustry />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
