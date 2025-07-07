import React from 'react';
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
    priceId: 'price_monthly_beta',
    name: 'MagNet Pro (Monthly)',
    price: 50000, // $500.00 in cents
    currency: 'usd',
    description: 'Best for individuals who want flexibility.',
    features: [
      'Full access to MagNet Pro features',
      'AI-powered lead suggestions',
      'Client relationship tracking',
      'Email & phone support',
    ],
    popular: false,
  },
  {
    priceId: 'price_annual_beta',
    name: 'MagNet Pro (Annual)',
    price: 500000, // $5,000.00 in cents
    currency: 'usd',
    description: 'Save more with annual billing.',
    features: [
      'Full access to MagNet Pro features',
      'AI-powered lead suggestions',
      'Client relationship tracking',
      'Email & phone support',
    ],
    popular: true,
  },
];

// --- Main Pricing Component ---

function PricingPlans() {

  const handlePurchase = () => {
    window.location.href = 'https://app.magnetlegal.co/auth';
  };

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(price / 100);
  };

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
              Choose Your MagNet Pro Plan
            </h1>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Join our beta program and get exclusive early access to MagNet Agents with special pricing.
              Help us shape the future of legal business development while growing your practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product) => (
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
                      /{product.name.includes('Monthly') ? 'month' : 'year'}
                    </span>
                  </div>
                  <p className="text-[#6B7280] text-sm mt-2">
                    {product.description}
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
                    <p className="text-green-800 text-sm font-medium">
                      Beta User Special Pricing
                    </p>
                    <p className="text-green-700 text-xs mt-1">
                      {product.name.includes('Annual')
                        ? 'Use code MAGNETBETA1 for 25% off first year'
                        : 'Use code MAGNETBETA3 for 50% off first 3 months'
                      }
                    </p>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3 text-left">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#1A2E40]">{feature}</span>
                      </div>
                    ))}
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
            ))}
          </div>

          <div className="text-center text-sm text-[#6B7280] max-w-2xl mx-auto mt-12">
            <p>
              All plans include customer support and access to our beta program.
              As a beta user, you'll have direct access to our development team.
              Questions? Contact our support team at contact@magnetlegal.co.
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