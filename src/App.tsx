import React from 'react';
import { Magnet } from 'lucide-react';

function App() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#FFFBF1] group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap px-10 py-3">
          <div className="flex items-center gap-4 text-[#020848]">
            <div className="size-4">
              <Magnet />
            </div>
            <h2 className="text-[#020848] text-lg font-bold leading-tight tracking-[-0.015em]">MagNet Legal</h2>
          </div>
          <div>
            <a 
              href="https://calendly.com/lb827-cornell/30min?month=2025-03"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#111189] text-white text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Book a demo</span>
            </a>
          </div>
        </header>

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl @[480px]:gap-8 items-start justify-end px-4 pb-10 @[480px]:px-10"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://plus.unsplash.com/premium_photo-1694476607274-003dd175d073?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGxhd3llcnN8ZW58MHx8MHx8fDA%3D")'
                  }}
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Client Acquisition, Automated
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      AI-powered platform for legal client acquisition. Discover, engage, and track high-value client leads automatically.
                    </h2>
                  </div>
                  <div className="flex-wrap gap-3 flex">
                    <a
                      href="https://calendly.com/lb827-cornell/30min?month=2025-03"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#111189] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                    >
                      <span className="truncate">Book a demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#020848] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  Features that transform your client acquisition
                </h1>
                <p className="text-[#020848] text-base font-normal leading-normal max-w-[720px]">
                  Our AI-powered platform streamlines your client discovery process, making it easier than ever to find, engage, and track interactions with potential clients. Here's how we make it possible.
                </p>
              </div>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-8">
                <div className="flex flex-col gap-4 pb-4">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage: 'url("https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80")'
                    }}
                  ></div>
                  <div>
                    <p className="text-[#020848] text-lg font-bold leading-normal mb-2">Discover</p>
                    <p className="text-[#020848] text-sm font-normal leading-normal">
                      Intelligent scanning of legal directories, business filings, and other online sources to identify high-potential leads.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 pb-4">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage: 'url("https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FsbCUyMGNlbnRlcnxlbnwwfHwwfHx8MA%3D%3D")'
                    }}
                  ></div>
                  <div>
                    <p className="text-[#020848] text-lg font-bold leading-normal mb-2">Contact</p>
                    <p className="text-[#020848] text-sm font-normal leading-normal">
                      Automated personalized outreach suggestions that you can use to engage prospects effectively and efficiently.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 pb-4">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80")'
                    }}
                  ></div>
                  <div>
                    <p className="text-[#020848] text-lg font-bold leading-normal mb-2">Track</p>
                    <p className="text-[#020848] text-sm font-normal leading-normal">
                      Automatically keep track of your business development efforts and pull comprehensive reports detailing client interactions. 
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
                
            <div className="@container">
              <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                <div className="flex flex-col gap-2 text-center items-center mx-auto">
                  <h1 className="text-[#020848] tracking-light text-[32px] font-bold leading-tight text-center @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Ready to transform your client acquisition? Start today.
                  </h1>
                </div>
                <div className="flex flex-1 justify-center">
                  <div className="flex justify-center">
                    <div className="flex flex-1 gap-3 flex-wrap max-w-[480px] justify-center">
                      <a
                        href="https://calendly.com/lb827-cornell/30min?month=2025-03"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#111189] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow"
                      >
                        <span className="truncate">Book a demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;