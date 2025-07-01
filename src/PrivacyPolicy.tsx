import { Magnet, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-[#1A2E40] mb-8">Privacy Policy</h1>
            
            <div className="text-sm text-[#6B7280] mb-8">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1A2E40] mb-4">1. Introduction</h2>
              <p className="text-[#6B7280] mb-4">
                MagNet Agents ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered client acquisition platform for legal professionals.
              </p>
              <p className="text-[#6B7280]">
                By using our service, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1A2E40] mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-[#1A2E40] mb-3">2.1 Personal Information</h3>
              <p className="text-[#6B7280] mb-4">
                We may collect personal information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-[#6B7280] mb-4">
                <li>Name, email address, and contact information</li>
                <li>Professional credentials and practice information</li>
                <li>Client relationship data and business development preferences</li>
                <li>Communication preferences and marketing opt-ins</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1A2E40] mb-3">2.2 Usage Information</h3>
              <p className="text-[#6B7280] mb-4">
                We automatically collect certain information about your use of our platform, including:
              </p>
              <ul className="list-disc pl-6 text-[#6B7280] mb-4">
                <li>Log data and device information</li>
                <li>Usage patterns and feature interactions</li>
                <li>Performance data and error reports</li>
                <li>IP address and location data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1A2E40] mb-4">3. How We Use Your Information</h2>
              <p className="text-[#6B7280] mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-[#6B7280] mb-4">
                <li>Provide and maintain our AI-powered client acquisition services</li>
                <li>Personalize your experience and improve our platform</li>
                <li>Generate AI-powered lead suggestions and recommendations</li>
                <li>Send you important updates and service notifications</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Ensure compliance with legal and ethical obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1A2E40] mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-[#6B7280] mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-[#6B7280] mb-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>With trusted service providers who assist in operating our platform</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1A2E40] mb-4">5. Data Security</h2>
              <p className="text-[#6B7280] mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-[#6B7280] mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection practices</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1A2E40] mb-4">6. Your Rights and Choices</h2>
              <p className="text-[#6B7280] mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-[#6B7280] mb-4">
                <li>Access and review your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1A2E40] mb-4">7. Legal and Ethical Compliance</h2>
              <p className="text-[#6B7280] mb-4">
                As a platform designed for legal professionals, we are committed to maintaining the highest standards of legal and ethical compliance. Our data practices are designed to:
              </p>
              <ul className="list-disc pl-6 text-[#6B7280] mb-4">
                <li>Respect attorney-client privilege and confidentiality</li>
                <li>Comply with applicable legal professional conduct rules</li>
                <li>Maintain data integrity and accuracy</li>
                <li>Support compliance with legal marketing regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1A2E40] mb-4">8. Changes to This Policy</h2>
              <p className="text-[#6B7280] mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1A2E40] mb-4">9. Contact Us</h2>
              <p className="text-[#6B7280] mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-[#E6E6E6] p-4 rounded-lg">
                <p className="text-[#1A2E40] font-medium">MagNet Agents</p>
                <p className="text-[#6B7280]">Email: privacy@magnetlegal.co</p>
                <p className="text-[#6B7280]">Address: [Your Business Address]</p>
              </div>
            </section>
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

export default PrivacyPolicy; 