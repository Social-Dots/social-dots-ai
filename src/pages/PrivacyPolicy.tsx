import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
const PrivacyPolicy = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">Last updated: April 11, 2025</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                At WRLDS Technologies ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Contact us through our website</li>
                <li>Subscribe to our newsletter</li>
                <li>Register for our services</li>
                <li>Participate in our surveys or promotions</li>
              </ul>
              <p className="text-gray-600 mb-4">
                This information may include your name, email address, company name, phone number, and any other information you choose to provide.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We may use the information we collect for various purposes, including to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Understand and analyze how you use our services</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you about our services, updates, and other information</li>
                <li>Process transactions and send related information</li>
                <li>Find and prevent fraud</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 mb-4">
                We may use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Third-Party Services</h2>
              <p className="text-gray-600 mb-4">
                We may use third-party services that collect, monitor, and analyze data to improve our services. These third parties have their own privacy policies addressing how they use such information.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Retention</h2>
              <p className="text-gray-600 mb-4">
                We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Security</h2>
              <p className="text-gray-600 mb-4">
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your personal information.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our website prior to the change becoming effective.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
              <p className="text-gray-600 mb-4">If you have any questions about this Privacy Policy, please contact us at hello@wrlds.com</p>
              
            </div>
          </div>
        </div>
      </section>
    </PageLayout>;
};
export default PrivacyPolicy;