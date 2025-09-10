import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, ArrowRight, Magnet, ArrowLeft } from 'lucide-react';

// --- UI Component Definitions (in-file) ---
// NOTE: These are simplified versions for demonstration.
// In a real app, these would be in separate files, likely using a UI library.

const Card: React.FC<React.HTMLAttributes<HTMLDivElement> & { popular?: boolean }> = ({ className, children, popular, ...props }) => (
  <div className={`bg-white relative rounded-2xl shadow-lg border border-[#E6E6E6] p-8 flex flex-col ${popular ? 'ring-2 ring-[#3A6EA5] scale-105' : ''} ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={`text-center ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className, children, ...props }) => (
  <h3 className={`text-primary text-lg font-bold text-[#1A2E40] mb-2 ${className}`} {...props}>
    {children}
  </h3>
);

const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
    <div className={`flex-grow flex flex-col justify-between ${className}`} {...props}>
        {children}
    </div>
);

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, children, ...props }) => (
  <button className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-lg font-medium transition ${className}`} {...props}>
    {children}
  </button>
);

const Badge: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${className}`} {...props}>
      <span className="bg-[#3A6EA5] text-white px-3 py-1 rounded-full text-xs flex items-center">
        {children}
      </span>
  </div>
);

// --- Product Configuration (in-file) ---

const products = [
  {
    priceId: 'price_1S5TGrAl20PLMb1WXedFWU80',
    name: 'MagNet Starter – Monthly',
    description: 'Start building client relationships in under 30 minutes a week.',
    mode: 'subscription',
    price: 5900, // $59.00 in cents
    currency: 'usd',
    billingPeriod: 'monthly',
    features: [
      '5 matched Leads per week',
      'Weekly market intel reports & LinkedIn Post Suggestion',
      'Basic event discovery',
      'Unlimited Lead Uploads & enrich with AI',
      'Unlimited AI-assisted Outreach Strategy Steps & Messaging',
      'Basic BD tracking dashboard',
      'Email support',
    ],
  },
  {
    priceId: 'price_1S5THKAl20PLMb1WqaIdBLQ1',
    name: 'MagNet Pro – Monthly',
    description: 'Maximize BD efficiency and capture new clients early.',
    mode: 'subscription',
    price: 25900, // $259.00 in cents
    currency: 'usd',
    billingPeriod: 'monthly',
    features: [
      '5 matched Leads per day',
      'Daily market intel reports & LinkedIn Post Suggestion',
      'Advanced event discovery (niche & invite-only)',
      'Coming soon: Competitor intel reports & Lead sharing',
      'Unlimited Lead Uploads & enrich with AI',
      'Unlimited AI-assisted Outreach Strategy Steps & Messaging',
      'Advanced analytics & ROI tracking',
      'Exportable reports',
      'Coming soon: Team-wide visibility',
      'Priority email support + quarterly check-ins',
    ],
  },
  // {
  //   priceId: 'price_1RqmQ7Al20PLMb1WIkg3E3xN',
  //   name: 'MagNet Starter – Monthly',
  //   description: 'Start building your client pipeline with essential AI tools',
  //   mode: 'subscription',
  //   price: 2000, // $20.00 in cents
  //   currency: 'usd',
  //   billingPeriod: 'monthly',
  //   features: [
  //     'Discover: AI-suggested client leads every month tailored to your practice',
  //     'General legal market intel and selected event listings',
  //     'Contact: Standard outreach templates',
  //     'Calendar-based reminders and follow-up suggestions',
  //     'Track: Basic activity log and summary dashboard',
  //     'Support: Email support',
  //     'Beta user access to new features as they roll out',
  //   ],
  // },
  // {
  //   priceId: 'price_1RmI4sAl20PLMb1WnQkqeC1J',
  //   name: 'MagNet Basic – Monthly',
  //   description: 'Start building your client pipeline with essential AI tools',
  //   mode: 'subscription',
  //   price: 10000, // $100.00 in cents
  //   currency: 'usd',
  //   billingPeriod: 'monthly',
  //   betaSpecial: 'Use code MAGNETBETA50 for 50% off your first 3 months',
  //   features: [
  //     'Discover: Up to 10 AI-suggested client leads per month tailored to your practice',
  //     'General legal market intel and selected event listings',
  //     'Contact: Standard outreach templates',
  //     'Calendar-based reminders and follow-up suggestions',
  //     'Track: Basic activity log and summary dashboard',
  //     'Support: Email support',
  //     'Beta user access to new features as they roll out',
  //   ],
  //   popular: false,
  // },
  {
    priceId: 'price_1RmI6UAl20PLMb1WD8dd7QNQ',
    name: 'MagNet Basic – Annual',
    description: 'Save with annual billing',
    mode: 'subscription',
    price: 100000, // $1,000.00 in cents
    currency: 'usd',
    billingPeriod: 'annual',
    betaSpecial: 'Use code MAGNETBETA25 for 25% off your first year',
    features: [
      'Everything in MagNet Basic Monthly',
      'Locked-in pricing for 12 months',
      'Early access to select new features',
    ],
    popular: false,
  },
  // {
  //   priceId: 'price_1RhXOjAl20PLMb1WzJbeXc59',
  //   name: 'MagNet Pro – Monthly',
  //   price: 50000, // $500.00 in cents
  //   currency: 'usd',
  //   billingPeriod: 'monthly',
  //   description: 'Unlock full AI capabilities and accelerate your business development',
  //   betaSpecial: 'Use code MAGNETBETA50 for 50% off your first 3 months',
  //   features: [
  //     'Includes everything in MagNet Basic',
  //     'Discover: Unlimited AI-matched client leads, continuously updated based on your practice, preferences, and market shifts',
  //     'Practice-specific legal intel reports',
  //     'Curated, high-value networking event recommendations',
  //     'Contact: Fully personalized outreach strategies and AI-written messaging for both LinkedIn and email',
  //     'Custom outreach playbooks tailored to your niche',
  //     'Smart sequencing and timing for follow-ups',
  //     'Track: Automatic logging of every client interaction',
  //     'Exportable business development reports (PDF/CSV)',
  //     'ROI dashboard to track which efforts lead to new clients',
  //     'Support & Services: Priority support',
  //     'Dedicated account manager',
  //     'Custom integration capabilities (CRM, Outlook, etc.)',
  //     'Exclusive legal industry insights',
  //     'Early access to new features',
  //     'Direct feedback channel to the development team',
  //   ],
  //   popular: false,
  // },
  {
    priceId: 'price_1RhXMoAl20PLMb1W5XMcAuIx',
    name: 'MagNet Pro – Annual',
    price: 500000, // $5,000.00 in cents
    currency: 'usd',
    billingPeriod: 'annual',
    description: 'Save over 15% with annual billing',
    betaSpecial: 'Use code MAGNETBETA25 for 25% off your first year',
    features: [
      'Everything in MagNet Pro Monthly',
      'Annual strategy and performance review with your account manager',
      'Locked-in pricing and extended Beta perks',
    ],
    popular: true,
  },
];

// --- Main Pricing Component ---

function PricingPlans() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const handlePurchase = () => {
    window.location.href = 'https://app.magnetlegal.co/auth';
  };

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(price / 100);
  };

  // Filter products based on billing period
  const filteredProducts = products.filter(product => product.billingPeriod === billingPeriod);

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#FDFDFD]" style={{ fontFamily: '"Inter", sans-serif' }}>
      <header className="bg-[#1A2E40]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/">
          <div className="flex items-center gap-2 text-white">
            <div className="text-[#3A6EA5]">
              <Magnet size={24} />
            </div>
            <h2 className="text-xl font-semibold tracking-tight">MagNet Agents</h2>
          </div>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-[#E6E6E6] hover:text-[#3A6EA5] text-sm font-medium transition"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-semibold text-[#1A2E40] mb-4">
              Choose Your MagNet Plan
            </h1>
            <p className="text-[#6B7280] max-w-2xl mx-auto mb-8">
              Join our beta program and get exclusive early access to MagNet Agents with special pricing.
              Help us shape the future of legal business development while growing your practice.
            </p>
            
            {/* Billing Period Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-[#1A2E40]' : 'text-[#6B7280]'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#3A6EA5] transition-colors"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingPeriod === 'annual' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${billingPeriod === 'annual' ? 'text-[#1A2E40]' : 'text-[#6B7280]'}`}>
                Annual
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredProducts.map((product) => {
              const isExpanded = expanded[product.priceId] || false;
              return (
                <Card
                  key={product.priceId}
                  popular={product.popular}
                >
                  {product.popular && (
                    <Badge>
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  )}

                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <div className="text-3xl font-bold text-[#1A2E40] mt-4">
                      {formatPrice(product.price, product.currency)}
                      <span className="text-sm font-normal text-[#6B7280]">
                        /{billingPeriod === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    <p className="text-[#6B7280] text-sm mt-2">
                      {product.description}
                    </p>
                    {product.betaSpecial && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
                     
                      <p className="text-green-800 text-sm font-medium">
                        Beta User Special Pricing
                      </p>
                      <p className="text-green-700 text-xs mt-1">
                        {product.betaSpecial}
                      </p>
                      
                    </div>)}
                    {!product.betaSpecial && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
                     
                      <p className="text-green-800 text-sm font-medium">
                        Easy Way to Get Started!
                      </p>
                      <p className="text-green-700 text-xs mt-1">
                        {product.betaSpecial}
                      </p>
                      
                    </div>)}
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3 text-left">
                    {(isExpanded ? product.features : product.features.slice(0, 3)).map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#1A2E40]">{feature}</span>
                      </div>
                    ))}
                    {product.features.length > 3 && (
                      <button
                        className="text-[#3A6EA5] text-xs font-medium mt-2 hover:underline focus:outline-none"
                        onClick={() => setExpanded((prev) => ({ ...prev, [product.priceId]: !isExpanded }))}
                      >
                        {isExpanded ? 'Show less' : `Show all ${product.features.length} features`}
                      </button>
                    )}
                    </div>

                    <Button
                      className="mt-8 bg-[#3A6EA5] text-white hover:bg-[#325d8c]"
                      onClick={handlePurchase}
                    >
                      Get Started
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center text-sm text-[#6B7280] max-w-2xl mx-auto mt-12">
            <p>
              All plans include customer support and access to our beta program.
              As a beta user, you'll have direct access to our development team.
              Questions? Contact us at contact@magnetlegal.co.
            </p>
          </div>
        </div>
      </main>
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