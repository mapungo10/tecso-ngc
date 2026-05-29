import { useState, useEffect } from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
// import About from '@/Components/About/About';
// import Shop from '@/Components/shop/shop';
import Offering from '@/Components/offering/offering';
// import Leadership from '@/Components/About/Leadership';
import { Cross, Music, Heart } from 'lucide-react';

export default function WebLayout() {
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Worship');

  const brandOrange = '#F15A2B';

  const loadingMessages = [
    { text: 'Worship', icon: Music },
    { text: 'Inspire', icon: Heart },
    { text: 'Transform', icon: Cross },
    { text: 'Empower', icon: Music },
  ];

  useEffect(() => {
    // Simulate loading with progress
    let progress = 0;
    let messageIndex = 0;

    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
        }, 200);
      }

      setLoadingProgress(Math.min(Math.floor(progress), 100));

      // Change loading message based on progress
      if (progress > 75 && messageIndex < 3) {
        messageIndex = 3;
        setLoadingText(loadingMessages[3].text);
      } else if (progress > 50 && messageIndex < 2) {
        messageIndex = 2;
        setLoadingText(loadingMessages[2].text);
      } else if (progress > 25 && messageIndex < 1) {
        messageIndex = 1;
        setLoadingText(loadingMessages[1].text);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = loadingMessages.find(m => m.text === loadingText)?.icon || Music;

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
          {/* Floating Musical Notes */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-note"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 15}s`,
                opacity: 0.1 + Math.random() * 0.15,
              }}
            >
              {Math.random() > 0.5 ? '♪' : '♫'}
            </div>
          ))}
        </div>

        {/* Main Loading Card */}
        <div className="relative z-10 text-center">
          {/* Logo Circle */}
          <div className="relative mx-auto mb-8">
            <div className="absolute inset-0 rounded-full animate-ping-slow opacity-30" style={{ backgroundColor: brandOrange }} />
            <div className="absolute inset-0 rounded-full animate-pulse-slow opacity-20" style={{ backgroundColor: brandOrange }} />
            <div
              className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-black to-gray-900 border-2"
              style={{ borderColor: brandOrange }}
            >
              <span className="text-2xl font-bold" style={{ color: brandOrange }}>NGC</span>
            </div>
          </div>

          {/* Loading Title */}
          <h2 className="text-2xl font-bold text-white mb-2">
            Neema Gospel Choir
          </h2>
          <p className="text-sm text-gray-400 mb-6">Dar es Salaam, Tanzania</p>

          {/* Rotating Message */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center animate-pulse">
              <CurrentIcon className="h-5 w-5" style={{ color: brandOrange }} />
            </div>
            <div className="relative h-8 overflow-hidden">
              <div
                className="absolute inset-0 flex flex-col transition-transform duration-300 ease-out"
                style={{ transform: `translateY(-${loadingMessages.findIndex(m => m.text === loadingText) * 100}%)` }}
              >
                {loadingMessages.map((msg) => (
                  <span
                    key={msg.text}
                    className="h-8 flex items-center text-xl font-semibold"
                    style={{ color: brandOrange }}
                  >
                    {msg.text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-64 mx-auto mb-3">
            <div className="h-1 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-300 ease-out"
                style={{
                  width: `${loadingProgress}%`,
                  background: `linear-gradient(90deg, ${brandOrange}, #ff7b33)`
                }}
              />
            </div>
          </div>
          <p className="text-xs text-gray-500">{loadingProgress}%</p>

          <p className="text-[10px] text-gray-600 mt-4">AICT Chang'ombe Church • Since 1992</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main className="relative">
        {/* About Section */}
        <Offering />

        {/* Leadership Section */}
        {/* <Leadership /> */}
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTopButton brandColor={brandOrange} />
    </div>
  );
}

// Back to Top Button Component
function BackToTopButton({ brandColor }) {
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
      className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
      style={{
        background: `linear-gradient(135deg, ${brandColor}, #ff7b33)`,
        boxShadow: `0 4px 20px ${brandColor}60`
      }}
      aria-label="Back to top"
    >
      <svg className="h-5 w-5 text-white group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}

// Add this to your global CSS or component style
const styles = `
  @keyframes float-note {
    0%, 100% {
      transform: translateY(0px) translateX(0px);
      opacity: 0;
    }
    25% {
      opacity: 0.3;
    }
    75% {
      opacity: 0.15;
    }
    50% {
      transform: translateY(-30px) translateX(15px);
      opacity: 0.25;
    }
  }
  .animate-float-note {
    animation: float-note linear infinite;
    font-size: 14px;
    color: #F15A2B;
    position: absolute;
    pointer-events: none;
  }
  @keyframes ping-slow {
    0% {
      transform: scale(1);
      opacity: 0.3;
    }
    75%, 100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }
  .animate-ping-slow {
    animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
  @keyframes pulse-slow {
    0%, 100% {
      opacity: 0.2;
      transform: scale(1);
    }
    50% {
      opacity: 0.4;
      transform: scale(1.05);
    }
  }
  .animate-pulse-slow {
    animation: pulse-slow 2s ease-in-out infinite;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
