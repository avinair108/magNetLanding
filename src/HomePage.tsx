import { Magnet, ChevronRight, BarChart3, Search, MessageSquare, TrendingUp, Clock, Users, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

function HomePage() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const productImages = [
    '/home.png',
    '/discover.png',
    '/outreach.png',
    '/analytics.png',
  ];

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Show navbar when scrolling up or when at the top of the page
      if (prevScrollPos > currentScrollPos || currentScrollPos < 10) {
        setVisible(true);
      } else {
        // Hide navbar when scrolling down (but not at the top)
        setVisible(false);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    // Add throttling to avoid excessive function calls
    let timeoutId: number | null = null;
    const throttledScroll = () => {
      if (timeoutId === null) {
        timeoutId = window.setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 100);
      }
    };

    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [productImages.length]);

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#FDFDFD] overflow-x-hidden" style={{ fontFamily: '"Inter", sans-serif' }}>
      <div className="flex h-full grow flex-col">
        {/* Navigation */}
        <header className={`fixed top-0 left-0 right-0 z-10 bg-[#1A2E40] backdrop-blur-sm transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <a href="#" className="flex items-center gap-2 text-white">
              <div className="text-[#3A6EA5]">
                <Magnet size={24} />
              </div>
              <h2 className="text-xl font-semibold tracking-tight">MagNet Agents</h2>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#benefits" className="text-[#E6E6E6] hover:text-[#3A6EA5] text-sm font-medium transition">Benefits</a>
              <a href="#features" className="text-[#E6E6E6] hover:text-[#3A6EA5] text-sm font-medium transition">Features</a>
              <a href="#how-it-works" className="text-[#E6E6E6] hover:text-[#3A6EA5] text-sm font-medium transition">How It Works</a>
              <a href="/pricing-plans" className="text-[#E6E6E6] hover:text-[#3A6EA5] text-sm font-medium transition">Pricing</a>
              <a href="/press" className="text-[#E6E6E6] hover:text-[#3A6EA5] text-sm font-medium transition">Press</a>
            </div>
            
            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://app.magnetlegal.co"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg border border-[#C9A34D] bg-transparent px-5 py-2.5 text-sm font-medium text-[#C9A34D] hover:bg-[#C9A34D] hover:text-[#1A2E40] transition"
              >
                <span>Sign up/Login</span>
              </a>
              <a 
                href="https://calendly.com/magnetagents/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg bg-[#3A6EA5] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#325d8c] transition"
              >
                <span>Book a demo</span>
                <ChevronRight className="ml-1" size={16} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#E6E6E6] hover:text-[#3A6EA5] hover:bg-[#3A6EA5]/10 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="px-4 pb-4 pt-2 space-y-4 bg-[#1A2E40] border-t border-[#3A6EA5]/20">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-3">
                <a 
                  href="#benefits" 
                  className="text-[#E6E6E6] hover:text-[#3A6EA5] text-base font-medium transition py-2 border-b border-[#3A6EA5]/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Benefits
                </a>
                <a 
                  href="#features" 
                  className="text-[#E6E6E6] hover:text-[#3A6EA5] text-base font-medium transition py-2 border-b border-[#3A6EA5]/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#how-it-works" 
                  className="text-[#E6E6E6] hover:text-[#3A6EA5] text-base font-medium transition py-2 border-b border-[#3A6EA5]/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </a>
                <a 
                  href="/pricing-plans" 
                  className="text-[#E6E6E6] hover:text-[#3A6EA5] text-base font-medium transition py-2 border-b border-[#3A6EA5]/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a 
                  href="/press" 
                  className="text-[#E6E6E6] hover:text-[#3A6EA5] text-base font-medium transition py-2 border-b border-[#3A6EA5]/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Press
                </a>
              </div>
              
              {/* Mobile CTA Buttons */}
              <div className="flex flex-col space-y-3 pt-4">
                <a
                  href="https://app.magnetlegal.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-lg border border-[#C9A34D] bg-transparent px-5 py-3 text-base font-medium text-[#C9A34D] hover:bg-[#C9A34D] hover:text-[#1A2E40] transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Sign up/Login</span>
                </a>
                <a 
                  href="https://calendly.com/magnetagents/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-lg bg-[#3A6EA5] px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-[#325d8c] transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Book a demo</span>
                  <ChevronRight className="ml-1" size={16} />
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#1A2E40] h-screen flex items-center">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
              <path fill="none" stroke="#C9A34D" strokeWidth="1.5" d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63"></path>
              <path fill="none" stroke="#C9A34D" strokeWidth="1.5" d="M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764"></path>
              <path fill="none" stroke="#C9A34D" strokeWidth="1.5" d="M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880"></path>
              <path fill="none" stroke="#C9A34D" strokeWidth="1.5" d="M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382"></path>
              <path fill="none" stroke="#C9A34D" strokeWidth="1.5" d="M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-31 229"></path>
            </svg>
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Client Acquisition,
                <span className="block text-[#3A6EA5]">Automated</span>
              </h1>
              <p className="mt-8 max-w-2xl text-xl text-[#E6E6E6]">
                AI agents for lawyers to reach new clients
              </p>
              <div className="mt-10 flex flex-wrap gap-6 justify-center">
                <a
                  href="https://calendly.com/magnetagents/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-[#3A6EA5] px-8 py-4 text-lg font-medium text-white shadow-md hover:bg-[#325d8c] focus:outline-none focus:ring-2 focus:ring-[#3A6EA5] focus:ring-offset-2 focus:ring-offset-[#1A2E40] transition"
                >
                  Book a demo
                </a>
                <a
                  href="https://app.magnetlegal.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-[#C9A34D] px-8 py-4 text-lg font-medium text-[#1A2E40] shadow-md hover:bg-[#b89344] transition"
                >
                  Sign up/Login
                </a>
              </div>
              
              {/* As Featured In Banner */}
              <div className="mt-16 text-center">
                <p className="text-sm font-medium text-[#E6E6E6] mb-4">As featured in</p>
                <div className="flex justify-center">
                  <img 
                    src="/lawdotcom.png" 
                    alt="Law.com" 
                    className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

                {/* Features Section */}
                <section id="features" className="py-20 bg-[#1A2E40]/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#1A2E40] sm:text-4xl">
                How MagNet Helps You Establish New Client Relationships
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#6B7280]">
                Our AI-powered platform streamlines your client discovery process, making it easier than ever to find, engage, and track interactions with potential clients.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="rounded-xl bg-white p-8 shadow-sm hover:shadow-md transition">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#3A6EA5]/10 text-[#3A6EA5]">
                  <Search size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[#1A2E40]">Discover</h3>
                <p className="mt-4 text-[#6B7280]">
                  Intelligent scanning of legal directories, business filings, and other online sources to identify high-potential leads.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="rounded-xl bg-white p-8 shadow-sm hover:shadow-md transition">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#3A6EA5]/10 text-[#3A6EA5]">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[#1A2E40]">Contact</h3>
                <p className="mt-4 text-[#6B7280]">
                  Automated personalized outreach suggestions that you can use to engage prospects effectively and efficiently.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="rounded-xl bg-white p-8 shadow-sm hover:shadow-md transition">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#3A6EA5]/10 text-[#3A6EA5]">
                  <BarChart3 size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[#1A2E40]">Track</h3>
                <p className="mt-4 text-[#6B7280]">
                  Automatically keep track of your business development efforts and pull comprehensive reports detailing client interactions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-[#FDFDFD]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#1A2E40] sm:text-4xl">
                Why Our Customers Love MagNet
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#6B7280]">
                Our AI-powered platform delivers exceptional results for modern lawyers.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl bg-[#E6E6E6] p-8 shadow-sm">
                <div className="mb-4 text-[#C9A34D]">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[#1A2E40]">Save Valuable Time</h3>
                <p className="text-[#6B7280]">
                  Automated prospecting and client tracking free up lawyers to focus on billable work and case preparation.
                </p>
              </div>
              
              <div className="rounded-xl bg-[#E6E6E6] p-8 shadow-sm">
                <div className="mb-4 text-[#C9A34D]">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[#1A2E40]">Increase Revenue</h3>
                <p className="text-[#6B7280]">
                  Systematic lead generation creates a consistent pipeline of qualified prospects, leading to predictable growth.
                </p>
              </div>
              
              <div className="rounded-xl bg-[#E6E6E6] p-8 shadow-sm">
                <div className="mb-4 text-[#C9A34D]">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold text-[#1A2E40]">Build Better Relationships</h3>
                <p className="text-[#6B7280]">
                  AI-powered insights help you connect with prospects on a deeper level, fostering long-term client relationships.
                </p>
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12">
              <div className="relative">
                <img
                  src={productImages[currentImageIndex]}
                  alt="MagNet Platform Screenshot"
                  className="rounded-xl shadow-lg z-0 w-full h-auto transition-opacity duration-500 cursor-pointer"
                  onClick={handleImageClick}
                />
                <div className="absolute -bottom-6 -right-6 hidden lg:block">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A34D] text-[#1A2E40]">
                    <Users size={24} />
                  </div>
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-[#3A6EA5] w-4' 
                          : 'bg-[#E6E6E6] hover:bg-[#3A6EA5]/50'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#1A2E40]">Designed Specifically for Lawyers</h3>
                <div className="mt-6 space-y-6 text-[#6B7280]">
                  <p>
                    MagNet Agents was built from the ground up for lawyers, with features that address the unique challenges 
                    of legal business development.
                  </p>
                  <p>
                    Our platform integrates seamlessly with your existing workflow, providing powerful automation without 
                    disrupting your practice.
                  </p>
                  <p>
                    Every feature is designed with compliance and ethical considerations in mind, ensuring your client 
                    acquisition efforts maintain the highest standards of professionalism.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        
        {/* Press Section */}
        <section className="py-16 bg-[#FDFDFD]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#1A2E40] sm:text-4xl mb-6">
                Press & Media
              </h2>
              <div className="flex flex-col items-center justify-center gap-4">
                <a
                  href="https://www.law.com/" // TODO: Replace with actual article URL if available
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-lg border border-[#E6E6E6] bg-white shadow-sm hover:shadow-md transition"
                  style={{ minWidth: 220 }}
                >
                  {/* If you have the Law.com logo, replace the text below with an <img> tag */}
                  <span className="text-lg font-semibold text-[#1A2E40]">Featured in</span>
                  <span className="text-xl font-bold text-[#3A6EA5] tracking-wide">Law.com</span>
                </a>
                <p className="text-[#6B7280] mt-2 max-w-xl">
                  MagNet Agents was recently featured in Law.com for our innovative approach to AI-powered client acquisition for lawyers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-[#1A2E40]/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#1A2E40] sm:text-4xl">
                What Our Customers Say
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#6B7280]">
                Hear from lawyers who have transformed their client acquisition with MagNet Agents.
              </p>
            </div>
            
            <div className="mt-16">
              <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* First Testimonial */}
                  <div className="rounded-xl bg-white p-8 shadow-sm">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-6">
                        <img 
                          src="/jj.jpeg" 
                          alt="Jonathan Joannides" 
                          className="h-24 w-24 rounded-full object-cover border-4 border-[#3A6EA5]/20"
                        />
                      </div>
                      <blockquote className="text-lg text-[#1A2E40] leading-relaxed">
                        "Having supported startups and growing businesses at Wilson Sonsini and Fenwick, I know how dynamic client development can be. Now that I've launched my own Silicon Valley firm, MagNet Agents has become a core part of how we identify future clients. It simplifies research, streamlines outreach, and keeps everything organized in an elegant, intuitive way. MagNet Agents is now a key driver in our business development workflow."
                      </blockquote>
                      <div className="mt-6">
                        <p className="font-semibold text-[#1A2E40]">Jonathan Joannides</p>
                        <p className="text-[#6B7280]">AI, IP, Privacy, and Cybersecurity Lawyer at Digital Frontier Law, APC</p>
                      </div>
                    </div>
                  </div>

                  {/* Second Testimonial */}
                  <div className="rounded-xl bg-white p-8 shadow-sm">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-6">
                        <img 
                          src="/mazen.jpeg" 
                          alt="Mazen Osman" 
                          className="h-24 w-24 rounded-full object-cover border-4 border-[#3A6EA5]/20"
                        />
                      </div>
                      <blockquote className="text-lg text-[#1A2E40] leading-relaxed">
                        "MagNet is an essential and incredibly easy-to-use product for lawyers involved in business development. The interface is clean, intuitive, and helps us focus on winning clients."
                      </blockquote>
                      <div className="mt-6">
                        <p className="font-semibold text-[#1A2E40]">Mazen Osman</p>
                        <p className="text-[#6B7280]">Associate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-[#FDFDFD]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#1A2E40] sm:text-4xl">
                Get Started with MagNet Today
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#6B7280]">
                Our intuitive platform functions standalone and also seamlessly integrates with your exisiting tools, providing immediate value with minimal setup.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Step 1: Onboard Your Profile */}
              <div className="relative rounded-xl bg-white p-8 shadow-sm overflow-hidden border-t-4 border-[#3A6EA5]">
                <div className="absolute -right-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#3A6EA5] text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-[#1A2E40]">Onboard Your Profile</h3>
                <p className="mt-4 text-[#6B7280]">
                  Quickly set up your MagNet account and provide key details about your practice, areas of expertise, and business goals.
                </p>
                <p className="mt-3 text-[#6B7280]">
                  Our onboarding process is simple and secure, ensuring your information is protected at every step.
                </p>
              </div>
              {/* Step 2: Set Your Preferences */}
              <div className="relative rounded-xl bg-white p-8 shadow-sm overflow-hidden border-t-4 border-[#C9A34D]">
                <div className="absolute -right-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#C9A34D] text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-[#1A2E40]">Set Your Preferences</h3>
                <p className="mt-4 text-[#6B7280]">
                  Customize your ideal client profile, practice areas of focus, and business development goals within the platform.
                </p>
                <p className="mt-3 text-[#6B7280]">
                  MagNet's AI engine adapts to your preferences, continuously improving its recommendations.
                </p>
              </div>
              {/* Step 3: Start Growing */}
              <div className="relative rounded-xl bg-white p-8 shadow-sm overflow-hidden border-t-4 border-[#3A6EA5]">
                <div className="absolute -right-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#3A6EA5] text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-[#1A2E40]">Start Growing</h3>
                <p className="mt-4 text-[#6B7280]">
                  Begin receiving AI-powered lead suggestions, outreach templates, and follow-up reminders tailored to your practice.
                </p>
                <p className="mt-3 text-[#6B7280]">
                  Monitor your results through our comprehensive analytics dashboard and adjust your strategy as needed.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-[#1A2E40] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to transform your client acquisition?
                </h2>
                <p className="mt-4 text-lg text-[#E6E6E6]">
                Sign up and start establishing tomorrow's new client relationships today.
                </p>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:justify-end">
                <div className="flex gap-4">
                  <a
                    href="https://app.magnetlegal.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-lg border border-[#C9A34D] bg-transparent px-6 py-4 text-base font-medium text-[#C9A34D] hover:bg-[#C9A34D] hover:text-[#1A2E40] transition"
                  >
                    Sign up/Login
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

      
      </div>
    </div>
  );
}

export default HomePage; 