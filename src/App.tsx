import { Magnet } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import PrivacyPolicy from './PrivacyPolicy';
import PricingPlans from './PricingPlans';
import TermsOfService from './TermsOfService';

function App() {
  return (
    <Router>
      <div className="relative flex size-full min-h-screen flex-col bg-[#FDFDFD]" style={{ fontFamily: '"Inter", sans-serif' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/pricing-plans" element={<PricingPlans />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        
        {/* Footer - Only shown on home page */}
        <Routes>
          <Route path="/" element={
            <footer className="bg-[#FDFDFD] border-t border-[#E6E6E6]">
              <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
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
                  <div className="mt-8 md:mt-0 flex flex-col md:flex-row items-center gap-4">
                    <div className="flex gap-6 text-sm">
                      <Link 
                        to="/privacy-policy" 
                        className="text-[#6B7280] hover:text-[#3A6EA5] transition"
                      >
                        Privacy Policy
                      </Link>
                      <Link 
                        to="/pricing-plans" 
                        className="text-[#6B7280] hover:text-[#3A6EA5] transition"
                      >
                        Pricing Plans
                      </Link>
                      <Link 
                        to="/terms-of-service" 
                        className="text-[#6B7280] hover:text-[#3A6EA5] transition"
                      >
                        Terms of Service
                      </Link>
                    </div>
                    <p className="text-sm text-[#6B7280]">
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