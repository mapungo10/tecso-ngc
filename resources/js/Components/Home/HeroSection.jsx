import { useEffect, useState, useRef } from 'react';

export default function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const rotatingWords = ['Worship', 'Inspire', 'Transform', 'Empower'];

  // Background images for zoom slider effect
  const backgroundImages = [
    'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070',
    'https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d?q=80&w=2070',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2070',
    'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070',
  ];

  // Sample YouTube videos data
  const recentVideos = [
    {
      id: 'AwXP9okjjbE',
      title: 'Nikurejeshee - Official Live',
      views: '28M+',
      duration: '12:44',
      thumbnail: 'https://img.youtube.com/vi/AwXP9okjjbE/maxresdefault.jpg'
    },
    {
      id: 'bz1KMVZYjxk',
      title: 'Mwema - Official Live',
      views: '4M+',
      duration: '5:18',
      thumbnail: 'https://img.youtube.com/vi/bz1KMVZYjxk/maxresdefault.jpg'
    },
    {
      id: '2ZEljr4QJPY',
      title: 'Sijawahi Shinda - Live',
      views: '5M+',
      duration: '7:23',
      thumbnail: 'https://img.youtube.com/vi/2ZEljr4QJPY/maxresdefault.jpg'
    },
  ];

  // Digital music platforms with actual CDN logo URLs
  const musicPlatforms = [
    { name: 'Spotify', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/spotify.svg', color: '#1DB954', url: '#' },
    { name: 'Apple Music', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/applemusic.svg', color: '#FA243C', url: '#' },
    { name: 'YouTube Music', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtubemusic.svg', color: '#FF0000', url: '#' },
    { name: 'Boomplay', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Boomplay_Logo_2020.svg', color: '#00B4D8', url: '#' },
    { name: 'Audiomack', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/audiomack.svg', color: '#FF6B00', url: '#' },
    { name: 'Amazon Music', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonmusic.svg', color: '#00A8FF', url: '#' },
  ];

  // Ref for the target section to scroll to
  const nextSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);

    const bgInterval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);

    // Find the next section
    const nextSection = document.querySelector('#music') || document.querySelector('section:not(.hero)');
    if (nextSection) {
    //   nextSectionRef.current = nextSection as HTMLElement;
    }

    return () => {
      clearInterval(wordInterval);
      clearInterval(bgInterval);
    };
  }, []);

  const brandOrange = '#F15A2B';

  // Scroll to next section function
  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image Slider with Zoom Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-all duration-[6000ms] ease-out"
            style={{
              backgroundImage: `url('${img}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: currentBgIndex === index ? 0.7 : 0,
              transform: `scale(${currentBgIndex === index ? 1.08 : 1})`,
              transition: 'opacity 2s ease-in-out, transform 8s ease-out',
            }}
          />
        ))}

        {/* Gradient Overlay from Right to Left */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />

        {/* Additional bottom gradient for text readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>



      <div className="relative z-20 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 w-full">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">

          {/* LEFT COLUMN - Digital Music Platforms with CDN Logos */}
          <div className="hidden lg:block lg:col-span-1 animate-fade-in-up" style={{ animationDelay: '0s' }}>
            <div className="flex flex-col gap-4">
              {musicPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  className="group relative flex h-12 w-12 items-center justify-center rounded-xl bg-black/40 backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-xl"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = platform.color;
                    e.currentTarget.style.background = `${platform.color}30`;
                    e.currentTarget.style.boxShadow = `0 0 20px ${platform.color}80`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '';
                    e.currentTarget.style.background = '';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  <img
                    src={platform.logoUrl}
                    alt={platform.name}
                    className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ filter: 'brightness(0) invert(1)' }}
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.currentTarget.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.textContent = platform.name.charAt(0);
                      fallback.className = 'text-white font-bold text-sm';
                      e.currentTarget.parentNode?.appendChild(fallback);
                    }}
                  />
                  <span className="absolute -right-24 whitespace-nowrap rounded-full bg-black/90 px-3 py-1.5 text-xs font-medium opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:right-12 pointer-events-none backdrop-blur-sm border border-white/10" style={{ color: platform.color }}>
                    {platform.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* MIDDLE COLUMN - Main Content */}
          <div className="lg:col-span-6 animate-fade-in-up text-center lg:text-left" style={{ animationDelay: '0.1s' }}>
            {/* Live Indicator */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-1.5 backdrop-blur-md border border-white/10 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: brandOrange }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: brandOrange }} />
                </span>
                <span className="text-[11px] font-medium text-white tracking-wide">LIVE WORSHIP • SUNDAY 10AM EAT</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="inline-block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                NEEMA
              </span>
              <br className="hidden sm:block" />
              <span className="inline-block bg-gradient-to-r from-[#F15A2B] via-[#ff7b33] to-[#F15A2B] bg-clip-text text-transparent animate-gradient">
                GOSPEL CHOIR
              </span>
            </h1>

            {/* Rotating Word */}
            <div className="mt-3 flex justify-center lg:justify-start items-center gap-2 text-lg sm:text-xl font-semibold">
              <span className="text-gray-300">Mark 16:15</span>
              {/* <div className="relative h-7 sm:h-8 overflow-hidden">
                <div
                  className="absolute inset-0 flex flex-col transition-transform duration-500 ease-out"
                  style={{ transform: `translateY(-${currentWordIndex * 100}%)` }}
                >
                  {rotatingWords.map((word) => (
                    <span
                      key={word}
                      className="h-7 sm:h-8 flex items-center justify-center lg:justify-start font-bold bg-gradient-to-r from-[#F15A2B] to-orange-400 bg-clip-text text-transparent"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div> */}
            </div>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-xl text-sm text-gray-200 leading-relaxed lg:mx-0">
              A leading gospel music and media institution based in Dar es Salaam, Tanzania,
              recognized for excellence in music, ministry, and media since 1992.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="#music"
                className="group relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${brandOrange}, #ff7b33)`,
                  boxShadow: `0 4px 15px ${brandOrange}40`
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                  Listen to Music
                </span>
              </a>
              <a
                href="#events"
                className="rounded-full border border-white/30 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#F15A2B]/50 hover:bg-white/10"
              >
                <span className="flex items-center gap-2">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Upcoming Events
                </span>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-8">
              {[
                { value: '1992', label: 'Founded' },
                { value: '150+', label: 'Members' },
                { value: '50M+', label: 'Youtube Views' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-gray-400 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - YouTube Videos */}
          <div className="lg:col-span-5 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 p-4">
              {/* Section Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-1 rounded-full" style={{ background: brandOrange }} />
                  <h3 className="text-sm font-semibold text-white">Latest Videos</h3>
                </div>
                <a href="#music" className="text-xs text-[#F15A2B] hover:text-orange-400 transition-colors flex items-center gap-1">
                  View All
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* YouTube Video Cards */}
              <div className="space-y-3">
                {recentVideos.map((video) => (
                  <a
                    key={video.id}
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="relative flex gap-3 rounded-xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:border-[#F15A2B]/50 hover:bg-white/10">
                      {/* Thumbnail */}
                      <div className="relative w-28 flex-shrink-0 overflow-hidden">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          style={{ aspectRatio: '16/9' }}
                        />
                        {/* Duration Badge */}
                        <div className="absolute bottom-1 right-1 rounded bg-black/80 px-1 py-0.5 text-[9px] font-medium text-white">
                          {video.duration}
                        </div>
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F15A2B] text-white shadow-lg">
                            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Video Info */}
                      <div className="flex-1 py-2 pr-3">
                        <h4 className="text-sm font-semibold text-white line-clamp-2 group-hover:text-[#F15A2B] transition-colors">
                          {video.title}
                        </h4>
                        <div className="mt-1.5 flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <svg className="h-3 w-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h-2l5-5-5-5h2l5 5-5 5z" />
                            </svg>
                            <span className="text-xs text-gray-400">{video.views}</span>
                          </div>
                          <div className="h-1 w-1 rounded-full bg-gray-600" />
                          <span className="text-xs text-gray-500">Watch Now →</span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* YouTube Channel Badge */}
              <div className="mt-4 rounded-xl bg-gradient-to-r from-[#F15A2B]/15 to-orange-500/10 p-3 border border-[#F15A2B]/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 shadow-lg">
                      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Subscribe to NEEMA GOSPEL CHOIR</p>
                      <p className="text-[10px] text-gray-400">Join 365K+ subscribers</p>
                    </div>
                  </div>
                  <a
                    href="https://youtube.com/@neemagospelchoir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-red-600 px-4 py-1.5 text-xs font-semibold text-white transition-all hover:bg-red-700 hover:scale-105 shadow-lg"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - CLICKABLE */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 cursor-pointer group focus:outline-none"
        aria-label="Scroll to next section"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 bg-black/30 backdrop-blur-sm transition-all duration-300 group-hover:border-[#F15A2B] group-hover:bg-black/50 group-hover:scale-110">
          <div
            className="mt-1.5 h-2 w-1 rounded-full animate-scroll"
            style={{ backgroundColor: brandOrange }}
          />
        </div>
      </button>

      {/* Custom Animations CSS */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(6px); opacity: 0; }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-scroll {
          animation: scroll 1.2s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradientShift 3s ease infinite;
        }
        .animate-float {
          animation: float linear infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
