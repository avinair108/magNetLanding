import { Magnet } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import PrivacyPolicy from './PrivacyPolicy';
import PricingPlans from './PricingPlans';
import TermsOfService from './TermsOfService';
import Newsletter from './Newsletter';
import ClientMatch from './ClientMatch';
import Press from './Press';

function App() {
  return (
    <Router>
      <div className="relative flex size-full min-h-screen flex-col bg-[#FDFDFD]" style={{ fontFamily: '"Inter", sans-serif' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/press" element={<Press />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/pricing-plans" element={<PricingPlans />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/client-match" element={<ClientMatch />} />
        </Routes>
        
        {/* Footer - Only shown on home page */}
        <Routes>
          <Route path="/" element={
            <footer className="bg-[#FDFDFD] border-t border-[#E6E6E6]">
              <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:items-start md:justify-between">
                  <div className="flex items-center gap-4 text-[#1A2E40]">
                    <div className="text-[#3A6EA5]">
                      <Magnet size={20} />
                    </div>
                    <h2 className="text-lg font-semibold">MagNet Agents</h2>
                    <img 
                      src="/nvidia-inception-program-badge-rgb-for-screen.png" 
                      alt="NVIDIA Inception Program" 
                      className="h-10 w-auto"
                    />
                  </div>
                  <div className="mt-8 md:mt-0 flex flex-col md:flex-row items-start justify-between w-full md:ml-12">
                    <div className="flex flex-col md:flex-row gap-8 text-sm">
                      <div className="flex flex-col gap-2 items-start">
                        <Link 
                          to="/newsletter" 
                          className="text-[#6B7280] hover:text-[#3A6EA5] transition"
                        >
                          Newsletter
                        </Link>
                        <Link 
                          to="/press" 
                          className="text-[#6B7280] hover:text-[#3A6EA5] transition ml-4"
                        >
                          Press
                        </Link>
                      </div>
                      <div className="flex flex-col gap-2 items-start">
                        <Link 
                          to="/terms-of-service" 
                          className="text-[#6B7280] hover:text-[#3A6EA5] transition"
                        >
                          Terms of Service
                        </Link>
                        <Link 
                          to="/privacy-policy" 
                          className="text-[#6B7280] hover:text-[#3A6EA5] transition ml-4"
                        >
                          Privacy Policy
                        </Link>
                      </div>
                    </div>
                    <p className="text-sm text-[#6B7280] mt-4 md:mt-0">
                      &copy; {new Date().getFullYear()} MagNet Agents. All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;