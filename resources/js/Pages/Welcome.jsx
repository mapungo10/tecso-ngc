import { useState, useEffect } from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import HeroSection from '@/Components/Home/HeroSection';
import ProductionSection from '@/Components/Home/ProductSection';
import Ministry from '@/Components/Home/Ministry';
import Updates from '@/Components/Home/update';


export default function WebLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or perform initial setup
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950">
        <div className="text-center">
          <div className="relative mx-auto h-24 w-24">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-purple-600 animate-ping opacity-75" />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-orange-500">
              <span className="text-3xl font-bold text-gray-950">NGC</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-purple-300 animate-pulse">Loading Neema Gospel Choir...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950">
      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />

        <Ministry />


        <ProductionSection />

        <Updates />


      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTopButton />
    </div>
  );
}

// Back to Top Button Component
function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg shadow-yellow-500/30 transition-all duration-300 hover:scale-110 hover:shadow-yellow-500/50 group"
      aria-label="Back to top"
    >
      <svg className="h-5 w-5 text-gray-950 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}
