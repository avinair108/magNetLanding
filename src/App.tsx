import { Magnet, ChevronRight, BarChart3, Search, MessageSquare, TrendingUp, Clock, Users } from 'lucide-react';

function App() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#FDFDFD] overflow-x-hidden" style={{ fontFamily: '"Inter", sans-serif' }}>
      <div className="flex h-full grow flex-col">
        {/* Navigation */}
        <header className="sticky top-0 z-10 border-b border-[#E6E6E6] bg-white/90 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-[#1A2E40]">
              <div className="text-[#3A6EA5]">
                <Magnet size={24} />
              </div>
              <h2 className="text-xl font-semibold tracking-tight">MagNet Agents</h2>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#benefits" className="text-[#6B7280] hover:text-[#3A6EA5] text-sm font-medium transition">Benefits</a>
              <a href="#features" className="text-[#6B7280] hover:text-[#3A6EA5] text-sm font-medium transition">Features</a>
              <a href="#how-it-works" className="text-[#6B7280] hover:text-[#3A6EA5] text-sm font-medium transition">How It Works</a>
            </div>
            
            <div>
              <a 
                href="https://calendly.com/lb827-cornell/30min?month=2025-03"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg bg-[#3A6EA5] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#325d8c] transition"
              >
                <span>Book a demo</span>
                <ChevronRight className="ml-1" size={16} />
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#1A2E40] py-20 sm:py-32">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
              <path fill="none" stroke="#C9A34D" strokeWidth="1.5" d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63"></path>
              <path fill="none" stroke="#C9A34D" strokeWidth="1.5" d="M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764"></path>
              <path fill="none" stroke="#C9A34D" strokeWidth="1.5" d="M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880"></path>
              <path fill="none" stroke="#C9A34D" strokeWidth="1.5" d="M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382"></path>
              <path fill="none" stroke="#C9A34D" strokeWidth="1.5" d="M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-31 229"></path>
            </svg>
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
              <div className="flex flex-col justify-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Client Acquisition,
                  <span className="block text-[#3A6EA5]">Automated</span>
                </h1>
                <p className="mt-6 max-w-xl text-lg text-[#E6E6E6]">
                  Personalized AI agent for lawyers to establish new client relationships and drive revenue.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://calendly.com/lb827-cornell/30min?month=2025-03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-[#3A6EA5] px-6 py-3 text-base font-medium text-white shadow-md hover:bg-[#325d8c] focus:outline-none focus:ring-2 focus:ring-[#3A6EA5] focus:ring-offset-2 focus:ring-offset-[#1A2E40] transition"
                  >
                    Book a demo
                  </a>
                  <a
                    href="#benefits"
                    className="rounded-lg border border-[#6B7280] bg-transparent px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition"
                  >
                    Learn more
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-xl bg-[#E6E6E6]/10 backdrop-blur-sm p-6 shadow-xl ring-1 ring-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3A6EA5]/20 to-[#1A2E40] opacity-20"></div>
                  <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                  alt="Attorney using MagNet Agents" 
                  className="relative z-10 w-full rounded-lg shadow-md"
                />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-[#FDFDFD]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#1A2E40] sm:text-4xl">
                Accelerate Your Client Acquisition with MagNet
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#6B7280]">
                Our AI-powered platform delivers exceptional results for modern law firms.
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
                    src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    alt="Legal Analytics Dashboard"
                    className="rounded-xl shadow-lg z-0"
                  />
                <div className="absolute -bottom-6 -right-6 hidden lg:block">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A34D] text-[#1A2E40]">
                    <Users size={24} />
                  </div>
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

        {/* Features Section */}
        <section id="features" className="py-20 bg-[#1A2E40]/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#1A2E40] sm:text-4xl">
                Features that transform your client acquisition
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
        
        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-[#FDFDFD]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#1A2E40] sm:text-4xl">
                How MagNet Agents Works
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#6B7280]">
                Our intuitive platform functions standalone and also seamlessly integrates with your exisiting tools, providing immediate value with minimal setup.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="relative rounded-xl bg-white p-8 shadow-sm overflow-hidden border-t-4 border-[#3A6EA5]">
                <div className="absolute -right-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#3A6EA5] text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-[#1A2E40]">Connect Your Data</h3>
                <p className="mt-4 text-[#6B7280]">
                  Sync MagNet with your existing business data sources, CRM, and calendars to create a unified platform.
                </p>
                <p className="mt-3 text-[#6B7280]">
                  Our secure integration process takes less than 15 minutes and preserves all client confidentiality.
                </p>
              </div>
              
              <div className="relative rounded-xl bg-white p-8 shadow-sm overflow-hidden border-t-4 border-[#3A6EA5]">
                <div className="absolute -right-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#3A6EA5] text-white font-bold">
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
              
              <div className="relative rounded-xl bg-white p-8 shadow-sm overflow-hidden border-t-4 border-[#C9A34D]">
                <div className="absolute -right-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#C9A34D] text-white font-bold">
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
                  Get started today and see how MagNet Agents can help your firm grow.
                </p>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:justify-end">
                <div className="rounded-md shadow">
                  <a
                    href="https://calendly.com/lb827-cornell/30min?month=2025-03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-lg bg-[#C9A34D] px-6 py-4 text-base font-medium text-[#1A2E40] hover:bg-[#b89344] transition"
                  >
                    Book a demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-[#FDFDFD] border-t border-[#E6E6E6]">
          <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex items-center gap-2 text-[#1A2E40]">
                <div className="text-[#3A6EA5]">
                  <Magnet size={20} />
                </div>
                <h2 className="text-lg font-semibold">MagNet Agents</h2>
              </div>
              <div className="mt-8 md:mt-0">
                <p className="text-center text-sm text-[#6B7280]">
                  &copy; {new Date().getFullYear()} MagNet Agents. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;