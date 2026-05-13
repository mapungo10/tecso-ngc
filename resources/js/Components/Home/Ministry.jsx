import React, { useState, useEffect, useRef } from 'react';
import { Heart, Users, Church, BookOpen, Music, HandHeart, Globe, Sparkles, ArrowRight, Cross, Flame, ChevronLeft, ChevronRight } from 'lucide-react';

export default function SpiritualGrowthSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef(null);

  // Sliding images for the right side
  const slidingImages = [
    {
      url: 'https://images.unsplash.com/photo-1516214104703-d8707987c1b4?q=80&w=2070',
      caption: 'United in Worship',
      description: 'Lifting voices together in praise',
    },
    {
      url: 'https://images.unsplash.com/photo-1438037490935-1e61d7de869a?q=80&w=2070',
      caption: 'Community Outreach',
      description: 'Serving with love and compassion',
    },
    {
      url: 'https://images.unsplash.com/photo-1445888985293-8e1b904061c4?q=80&w=2070',
      caption: 'Youth Empowerment',
      description: 'Building the next generation of leaders',
    },
    {
      url: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070',
      caption: 'Prayer & Fellowship',
      description: 'Growing together in faith',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-slide images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slidingImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slidingImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % slidingImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + slidingImages.length) % slidingImages.length);
  };

  const brandOrange = '#F15A2B';

  const coreValues = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We reach out with love and practical support to those in need, embodying Christ\'s hands and feet.',
    },
    {
      icon: Users,
      title: 'Vibrant Community',
      description: 'A family of believers walking together, sharing burdens and celebrating victories in unity.',
    },
    {
      icon: Church,
      title: 'Faithful Worship',
      description: 'Exalting God through Spirit-filled praise, prayer, and the proclamation of His Word.',
    },
    {
      icon: BookOpen,
      title: 'Biblical Teaching',
      description: 'Rooted in Scripture, equipping believers to live purposefully and grow in spiritual maturity.',
    },
  ];

  const pillars = [
    { title: 'Worship', icon: Music, description: 'Lifting hearts in authentic praise and adoration.' },
    { title: 'Outreach', icon: Globe, description: 'Sharing hope and serving communities beyond our walls.' },
    { title: 'Discipleship', icon: HandHeart, description: 'Mentoring and guiding believers in their faith walk.' },
    { title: 'Education', icon: BookOpen, description: 'Equipping minds with biblical truth and wisdom.' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-8 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: `radial-gradient(circle, ${brandOrange}08 0%, transparent 70%)` }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-float-particle ${isVisible ? 'opacity-20' : 'opacity-0'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 15}s`,
            }}
          >
            {Math.random() > 0.6 ?
              <Cross className="text-orange-500/10" size={16} /> :
              <Sparkles className="text-orange-500/10" size={12} />
            }
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 rounded-full bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 px-4 py-1.5 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Flame className="h-3.5 w-3.5 text-orange-400" />
            <span className="text-[10px] font-semibold text-orange-300 tracking-wider uppercase">Our Spiritual Foundation</span>
          </div>

          {/* <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="bg-gradient-to-r from-white via-orange-100 to-orange-300 bg-clip-text text-transparent">
              A Beacon for
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Spiritual Growth
            </span>
          </h2>

          <p className={`text-gray-400 max-w-2xl mx-auto text-lg transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Fostering faith and connection here — a vibrant community rooted in Christian values,
            caring for people and inspiring lives through worship, outreach, and education.
          </p> */}
        </div>

        {/* Main Message Card + Sliding Images - Two Column Layout */}
        <div className={`grid lg:grid-cols-2 gap-8 mb-20 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left Side - Faithful Card */}
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden group hover:border-orange-500/30 transition-all duration-500">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-orange-500/30 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-orange-500/30 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-orange-500/30 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-orange-500/30 rounded-br-3xl" />

            <div className="p-8 md:p-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/20 mb-6">
                <Cross className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                "Faithful is a vibrant community rooted in Christian values"
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                We are dedicated to caring for people and inspiring lives through worship, outreach, and education.
                Our mission is to create a welcoming space where everyone can encounter God's love, grow in faith,
                and discover their purpose in Christ.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: brandOrange, color: 'white' }}
                >
                  <Heart className="h-4 w-4" />
                  Join Our Family
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <div className="flex items-center gap-2 text-orange-400 text-sm">
                  <span>Learn more about us</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Sliding Images Carousel */}
          <div className="relative rounded-3xl overflow-hidden group">
            {/* Main Image */}
            <div className="relative h-[400px] md:h-[450px] overflow-hidden rounded-3xl">
              {slidingImages.map((image, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    idx === currentImageIndex
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-110'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                  {/* Dark Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Image Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-0 transition-all duration-500">
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-1">{image.caption}</h4>
                    <p className="text-gray-300 text-sm">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slidingImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex
                      ? 'w-8 bg-orange-500'
                      : 'w-1.5 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mb-20">
          <div className={`text-center mb-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Our Core Values</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These principles guide everything we do as a community of faith
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <div
                key={value.title}
                className={`group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-orange-500/30 transition-all duration-500 hover:scale-105 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${500 + idx * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/10 mb-4 group-hover:bg-orange-500/20 transition-all duration-300">
                  <value.icon className="h-6 w-6 text-orange-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Four Pillars */}
        <div className="mb-16">
          <div className={`text-center mb-10 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Our Ministry Pillars</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Four key areas that drive our mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className={`group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:bg-orange-500/5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${700 + idx * 100}ms` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-all duration-300">
                  <pillar.icon className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{pillar.title}</h4>
                  <p className="text-[10px] text-gray-500 line-clamp-1">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block p-0.5 rounded-full bg-gradient-to-r from-orange-500/30 to-orange-600/30">
            <div className="bg-black rounded-full px-1 py-1">
              <button
                className="group inline-flex items-center gap-3 px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: brandOrange, color: 'white' }}
              >
                <Heart className="h-5 w-5" />
                Become Part of Our Family
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-4">
            Join us for worship every Sunday at 08AM EAT • AICT Chang'ombe Church
          </p>
        </div>
      </div>

      {/* Custom Animations CSS */}
      <style>{`
        @keyframes floatParticle {
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
            opacity: 0.2;
          }
        }
        .animate-float-particle {
          animation: floatParticle linear infinite;
          opacity: 0;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
