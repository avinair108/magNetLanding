import { Magnet, ArrowLeft, Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

function PricingPlans() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#FDFDFD]" style={{ fontFamily: '"Inter", sans-serif' }}>
      {/* Navigation */}
      <header className="bg-[#1A2E40]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white">
            <div className="text-[#3A6EA5]">
              <Magnet size={24} />
            </div>
            <h2 className="text-xl font-semibold tracking-tight">MagNet Agents</h2>
          </div>
          
          <Link
            to="/"
            className="flex items-center gap-2 text-[#E6E6E6] hover:text-[#3A6EA5] text-sm font-medium transition"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#1A2E40] mb-4">Pricing Plans</h1>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Choose the perfect plan for your law practice. All plans include our core AI-powered client acquisition features with different levels of capacity and support. Optional pricing for each is possible with beta testing users.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* MagNet Pro For Individuals (Monthly Plan) */}
            <div className="relative bg-white rounded-2xl shadow-lg border border-[#E6E6E6] p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#1A2E40] mb-2">MagNet Pro For Individuals (Monthly Plan)</h3>
                <p className="text-[#6B7280] mb-6">Best for individuals who want flexibility</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#1A2E40]">$500</span>
                  <span className="text-[#6B7280]">/month</span>
                </div>
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-start gap-3">
                    <Check className="text-[#3A6EA5] mt-1 flex-shrink-0" size={20} />
                    <span className="text-[#6B7280]">Full access to MagNet Pro features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#3A6EA5] mt-1 flex-shrink-0" size={20} />
                    <span className="text-[#6B7280]">AI-powered lead suggestions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#3A6EA5] mt-1 flex-shrink-0" size={20} />
                    <span className="text-[#6B7280]">Client relationship tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#3A6EA5] mt-1 flex-shrink-0" size={20} />
                    <span className="text-[#6B7280]">Email & phone support</span>
                  </li>
                </ul>
                <a
                  href="https://app.magnetlegal.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center px-6 py-3 border border-[#3A6EA5] text-[#3A6EA5] rounded-lg font-medium hover:bg-[#3A6EA5] hover:text-white transition"
                >
                  Start Now
                </a>
              </div>
            </div>

            {/* MagNet Pro For Individuals (Annual Plan) */}
            <div className="relative bg-white rounded-2xl shadow-xl border-2 border-[#3A6EA5] p-8 transform scale-105">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#1A2E40] mb-2">MagNet Pro For Individuals (Annual Plan)</h3>
                <p className="text-[#6B7280] mb-6">Save more with annual billing</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#1A2E40]">$5,000</span>
                  <span className="text-[#6B7280]">/year</span>
                </div>
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-start gap-3">
                    <Check className="text-[#3A6EA5] mt-1 flex-shrink-0" size={20} />
                    <span className="text-[#6B7280]">All monthly plan features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#3A6EA5] mt-1 flex-shrink-0" size={20} />
                    <span className="text-[#6B7280]">Priority support</span>
                  </li>
                </ul>
                <a
                  href="https://app.magnetlegal.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center px-6 py-3 bg-[#3A6EA5] text-white rounded-lg font-medium hover:bg-[#325d8c] transition"
                >
                  Start Now
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A2E40] text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#1A2E40] mb-3">Is there a free trial available?</h3>
                <p className="text-[#6B7280]">
                  Yes! We offer a 14-day free trial for all plans. No credit card required to start your trial.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#1A2E40] mb-3">Can I change my plan later?</h3>
                <p className="text-[#6B7280]">
                  Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#1A2E40] mb-3">What payment methods do you accept?</h3>
                <p className="text-[#6B7280]">
                  We accept all major credit cards (Visa, MasterCard, American Express) and bank transfers for Enterprise plans.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#1A2E40] mb-3">Is my data secure and compliant?</h3>
                <p className="text-[#6B7280]">
                  Yes. We maintain SOC 2 Type II compliance and follow strict data protection standards. All data is encrypted in transit and at rest, and we maintain attorney-client privilege protections.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#1A2E40] mb-3">Do you offer discounts for annual billing?</h3>
                <p className="text-[#6B7280]">
                  Yes! Annual billing saves you 20% compared to monthly billing. Contact us for custom pricing on multi-year agreements.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-[#1A2E40] mb-4">Ready to get started?</h2>
            <p className="text-xl text-[#6B7280] mb-8">
              Join thousands of lawyers who are already using MagNet to grow their practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.magnetlegal.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-8 py-4 bg-[#3A6EA5] text-white rounded-lg font-medium hover:bg-[#325d8c] transition"
              >
                Start Now
              </a>
              <a
                href="https://calendly.com/magnetagents/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-8 py-4 border border-[#3A6EA5] text-[#3A6EA5] rounded-lg font-medium hover:bg-[#3A6EA5] hover:text-white transition"
              >
                Schedule Demo
              </a>
              <a
                href="https://app.magnetlegal.co/auth"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-8 py-4 border border-[#C9A34D] text-[#C9A34D] rounded-lg font-medium hover:bg-[#C9A34D] hover:text-white transition"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
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
            <div className="mt-8 md:mt-0">
              <p className="text-sm text-[#6B7280]">
                &copy; {new Date().getFullYear()} MagNet Agents. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PricingPlans; 