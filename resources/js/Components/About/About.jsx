import React, { useState, useEffect, useRef } from 'react';
import {
  Calendar, MapPin, Users, Music, Heart, Globe, Award,
  Cross, Flame, Sparkles, ArrowRight, CheckCircle,
  Target, Eye, TrendingUp, Shield, BookOpen, Church,
  Mic, Video, Radio, Star, Trophy, Clock, HandHeart,
  ChevronRight, Quote, Leaf, Zap, Coffee, Gift, Phone,
  Mail
} from 'lucide-react';

// Social icons from lucide-react (alternative names)
// Facebook, Instagram, Youtube, Twitter are not available in lucide-react
// Using alternative icons or custom SVGs

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('history');
  const sectionRef = useRef(null);

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

    // Scroll to top on page load
    window.scrollTo(0, 0);

    return () => observer.disconnect();
  }, []);

  const brandOrange = '#F15A2B';

  // Key Facts
  const keyFacts = [
    { icon: Calendar, label: 'Founded', value: '12 June 1992' },
    { icon: MapPin, label: 'Origin', value: 'Dar es Salaam, Tanzania' },
    { icon: Users, label: 'Members', value: '150+' },
    { icon: Music, label: 'Genre', value: 'Gospel, Contemporary' },
    { icon: Globe, label: 'Languages', value: 'Swahili & English' },
    { icon: Church, label: 'Affiliation', value: 'Neema Ministries, AICT' },
  ];

  // Core Values
  const coreValues = [
    {
      icon: Shield,
      title: 'Spiritual Integrity',
      description: 'Commitment to the Word of God, prayer, and disciplined Christian living.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Pursuit of high standards in music, performance, production, and ministry execution.',
    },
    {
      icon: CheckCircle,
      title: 'Discipline & Accountability',
      description: 'Structured leadership, strong internal systems, and personal responsibility.',
    },
    {
      icon: Sparkles,
      title: 'Creativity & Innovation',
      description: 'Continuous improvement in music, presentation, and use of technology.',
    },
    {
      icon: Heart,
      title: 'Community Impact',
      description: 'Active engagement through gospel outreach, mentorship, and social initiatives.',
    },
    {
      icon: HandHeart,
      title: 'Collaboration & Unity',
      description: 'Strong relationships within the choir, church, and external stakeholders.',
    },
    {
      icon: TrendingUp,
      title: 'Growth & Development',
      description: 'Commitment to spiritual, professional, and organizational growth.',
    },
  ];

  // Digital Stats
  const digitalStats = [
    { value: '50M+', label: 'YouTube Views', icon: Video, color: '#FF0000' },
    { value: '300K+', label: 'Followers', icon: Users, color: brandOrange },
    { value: '11M+', label: 'Engagement', icon: Heart, color: '#FF69B4' },
    { value: '4+', label: 'Platforms', icon: Globe, color: '#00A8FF' },
  ];

  // Timeline Events
  const timelineEvents = [
    { year: '1992', title: 'The Beginning', description: 'Started as a small prayer fellowship in Wailesi, Temeke.', icon: Cross },
    { year: '1993', title: 'Outreach Ministry', description: 'Transitioned from prayer meetings to active home-to-home outreach.', icon: Heart },
    { year: '1995', title: 'Music Introduction', description: 'Music was introduced as part of ministry, starting with hymns.', icon: Music },
    { year: '1997', title: 'Choir Formation', description: 'Formally recognized as a choir at AICT Chang\'ombe.', icon: Church },
    { year: '2021', title: 'First Major Concert', description: '6,000+ attendees at CCC Upanga Church.', icon: Users },
    { year: '2023', title: 'Uhuru Stadium', description: '25,000+ attendees at historic worship night.', icon: Star },
    { year: '2024', title: 'East Africa Recognition', description: 'Won Best Gospel Choir - East Africa at EAGMA.', icon: Trophy },
    { year: '2025', title: 'Victorious Production', description: 'Launched full-service media production company.', icon: Video },
  ];

  // Major Awards
  const awards = [
    { title: 'East Africa Gospel Music Awards', year: '2025', category: 'Best Gospel Choir - East Africa', icon: Trophy, color: '#FFD700' },
    { title: 'Tanzania Gospel Music Awards', year: '2025', category: 'Best Gospel Choir - Tanzania', icon: Award, color: '#C0C0C0' },
    { title: 'Tanzania Gospel Excellence Awards', year: '2026', category: 'Best Gospel Choir - Tanzania', icon: Star, color: '#CD7F32' },
    { title: 'Rhema Gospel Music Awards', year: '2021', category: 'Best Gospel Choir - East Africa', icon: Trophy, color: '#FFD700' },
  ];

  // Notable Songs
  const notableSongs = [
    { title: 'Nikurejeshee', views: '30M+', image: 'https://img.youtube.com/vi/AwXP9okjjbE/maxresdefault.jpg', duration: '12:44' },
    { title: 'Mungu ni Mmoja', views: '38M+', image: 'https://img.youtube.com/vi/AwXP9okjjbE/maxresdefault.jpg', duration: '8:45', feat: 'ft. Bella Kombo' },
    { title: 'Mwema', views: '5M+', image: 'https://img.youtube.com/vi/bz1KMVZYjxk/maxresdefault.jpg', duration: '5:18' },
    { title: 'Sijawahi Shinda', views: '5M+', image: 'https://img.youtube.com/vi/2ZEljr4QJPY/maxresdefault.jpg', duration: '7:23' },
  ];

  // Social Media Links with custom SVG icons (since lucide-react doesn't export social icons)
  const socialLinks = [
    { name: 'Facebook', url: '#', color: '#1877F2', svg: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ) },
    { name: 'Instagram', url: '#', color: '#E4405F', svg: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
      </svg>
    ) },
    { name: 'YouTube', url: '#', color: '#FF0000', svg: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
      </svg>
    ) },
    { name: 'Twitter', url: '#', color: '#1DA1F2', svg: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    ) },
    { name: 'TikTok', url: '#', color: '#000000', svg: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ) },
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black pt-32">

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070"
            alt="Neema Gospel Choir"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-gray-950" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`inline-flex items-center gap-2 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 px-4 py-1.5 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Cross className="h-3.5 w-3.5 text-orange-400" />
            <span className="text-[10px] font-semibold text-orange-300 tracking-wider uppercase">Our Story</span>
          </div>

          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="bg-gradient-to-r from-white via-orange-100 to-orange-400 bg-clip-text text-transparent">
              About Neema
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Gospel Choir
            </span>
          </h1>

          <p className={`text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            A leading gospel music and media institution based in Dar es Salaam, Tanzania,
            recognized for excellence in music, ministry, and media since 1992.
          </p>
        </div>
      </section>

      {/* Key Facts Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {keyFacts.map((fact, idx) => (
              <div
                key={fact.label}
                className={`text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${300 + idx * 50}ms` }}
              >
                <fact.icon className="h-6 w-6 text-orange-400 mx-auto mb-2" />
                <div className="text-xs text-gray-400 mb-1">{fact.label}</div>
                <div className="text-sm font-semibold text-white">{fact.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-3 flex-wrap">
            <button
              onClick={() => setActiveTab('history')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'history'
                  ? 'text-white shadow-lg'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              style={activeTab === 'history' ? { backgroundColor: brandOrange } : {}}
            >
              <BookOpen className="h-4 w-4" />
              History & Formation
            </button>
            <button
              onClick={() => setActiveTab('identity')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'identity'
                  ? 'text-white shadow-lg'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              style={activeTab === 'identity' ? { backgroundColor: brandOrange } : {}}
            >
              <Target className="h-4 w-4" />
              Vision & Mission
            </button>
            <button
              onClick={() => setActiveTab('values')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'values'
                  ? 'text-white shadow-lg'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              style={activeTab === 'values' ? { backgroundColor: brandOrange } : {}}
            >
              <Heart className="h-4 w-4" />
              Core Values
            </button>
            <button
              onClick={() => setActiveTab('awards')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'awards'
                  ? 'text-white shadow-lg'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              style={activeTab === 'awards' ? { backgroundColor: brandOrange } : {}}
            >
              <Trophy className="h-4 w-4" />
              Awards
            </button>
          </div>
        </div>
      </section>

      {/* History Content */}
      {activeTab === 'history' && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">From Prayer to Praise</h2>
                <p className="text-gray-300 leading-relaxed">
                  Neema Gospel Choir was founded on 12 June 1992 in Dar es Salaam, Tanzania, as part of
                  Neema Ministries under Africa Inland Church Tanzania (AICT Chang'ombe). What exists today
                  as a nationally recognized gospel institution began as a small, deeply committed spiritual
                  movement rooted in prayer, fellowship, and a shared calling to serve God through music.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The ministry started as a small prayer fellowship formed by two families in the Wailesi area
                  of Temeke, Dar es Salaam. The group would gather in a house known among members as "behewa",
                  where they conducted overnight prayer meetings (mikesha). These gatherings were focused on
                  interceding for the growth of the church, the expansion of the gospel, and the spiritual
                  strengthening of believers.
                </p>
                <div className="bg-gradient-to-r from-orange-500/10 to-transparent rounded-2xl p-6 border-l-4 border-orange-500">
                  <Quote className="h-8 w-8 text-orange-400 mb-3" />
                  <p className="text-gray-200 italic text-lg">
                    "The origin of Neema Gospel Choir is not musical — it is spiritual."
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-400" />
                  Our Journey Through Time
                </h3>
                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-4 custom-scroll">
                  {timelineEvents.map((event, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-all">
                        <event.icon className="h-5 w-5 text-orange-400" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-orange-400">{event.year}</div>
                        <h4 className="text-white font-semibold">{event.title}</h4>
                        <p className="text-gray-400 text-sm">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Identity & Mission Content */}
      {activeTab === 'identity' && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Identity & Positioning</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Neema Gospel Choir occupies a hybrid position in the gospel ecosystem. It is not limited
                  to traditional church choir functions but operates as a multi-dimensional platform integrating:
                </p>
                <div className="space-y-3 mb-8">
                  {['Worship ministry', 'Music production', 'Media broadcasting', 'Digital audience engagement'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-orange-400" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-white/5 rounded-2xl p-6">
                  <p className="text-gray-200">
                    This positioning enables the choir to operate across both ministry and commercial
                    environments without diluting its core spiritual mandate.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Eye className="h-5 w-5 text-orange-400" />
                  Vision & Mission
                </h3>
                <div className="bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl p-6 mb-6 border border-orange-500/20">
                  <h4 className="text-orange-400 font-semibold mb-2">Our Vision</h4>
                  <p className="text-white text-lg italic mb-4">
                    "To be a catalyst for transformation, leading people to follow Jesus Christ through gospel music."
                  </p>
                  <h4 className="text-orange-400 font-semibold mb-2">Our Mission</h4>
                  <p className="text-white text-lg italic">
                    "To preach the Gospel of Jesus Christ to people across the world through music,
                    so they may hear, believe, repent, and receive salvation."
                  </p>
                </div>

                {/* Digital Stats */}
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Video className="h-5 w-5 text-orange-400" />
                  Digital Footprint
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {digitalStats.map((stat, idx) => (
                    <div key={idx} className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                      <stat.icon className="h-5 w-5 mx-auto mb-1" style={{ color: stat.color }} />
                      <div className="text-lg font-bold text-white">{stat.value}</div>
                      <div className="text-[10px] text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Notable Songs */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Our Most Popular Songs</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {notableSongs.map((song, idx) => (
                  <div key={idx} className="group relative rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all hover:scale-105">
                    <img src={song.image} alt={song.title} className="w-full h-32 object-cover" />
                    <div className="p-3">
                      <h4 className="text-white font-semibold text-sm">{song.title}</h4>
                      {song.feat && <p className="text-[10px] text-gray-400">{song.feat}</p>}
                      <div className="flex items-center gap-2 mt-1">
                        <TrendingUp className="h-3 w-3 text-orange-400" />
                        <span className="text-xs text-gray-400">{song.views} views</span>
                        <span className="text-xs text-gray-500">• {song.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Core Values Content */}
      {activeTab === 'values' && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
                  Our Core Values
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                These principles guide everything we do as a community of faith
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, idx) => (
                <div
                  key={value.title}
                  className={`group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-500 hover:scale-105 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${400 + idx * 80}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/10 mb-4 group-hover:bg-orange-500/20 transition-all">
                    <value.icon className="h-6 w-6 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Awards Content */}
      {activeTab === 'awards' && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 rounded-full px-3 py-1 mb-4">
                <Trophy className="h-3 w-3 text-orange-400" />
                <span className="text-[10px] font-semibold text-orange-300">Recognition</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
                  Awards & Recognition
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                One of the most awarded gospel choirs in Tanzania and East Africa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {awards.map((award, idx) => (
                <div
                  key={idx}
                  className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-500 hover:scale-105"
                >
                  <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                    <award.icon className="h-8 w-8" style={{ color: award.color }} />
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1">{award.title}</h3>
                  <p className="text-xs text-orange-400 mb-2">{award.year}</p>
                  <p className="text-xs text-gray-400">{award.category}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-green-400 text-xs">
                    <CheckCircle className="h-3 w-3" />
                    Winner
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="inline-block p-4 rounded-2xl bg-white/5 border border-white/10 max-w-2xl">
                <p className="text-gray-300 text-sm">
                  <strong className="text-orange-400">Strategic Value:</strong> These awards differentiate the choir,
                  increase negotiation power with sponsors, and build trust with audiences and institutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Chairman's Message Section - Shown on all tabs */}
      <section className="py-16 mt-8 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 rounded-full px-3 py-1 mb-4">
                <Mic className="h-3 w-3 text-orange-400" />
                <span className="text-[10px] font-semibold text-orange-300">Leadership Message</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Word from the Chairman</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Neema Gospel Choir was founded on a clear and unwavering mandate to proclaim the Gospel of
                  Jesus Christ to all people through the ministry of music. From its humble beginnings as a
                  small prayer fellowship, the choir has grown into a structured and impactful ministry,
                  reaching communities within and beyond Tanzania.
                </p>
                <p>
                  Our vision is to be a catalyst for transformation, leading people to follow Jesus Christ
                  through the power of gospel music. This vision is operational — it guides every program,
                  every investment, and every decision we make as a choir.
                </p>
                <p>
                  We are also intentional about embracing technology as a tool for ministry expansion. Through
                  digital platforms, live recordings, and media production, we are extending the reach of the
                  Gospel beyond physical boundaries. Our goal is to ensure that the message of Christ is
                  accessible to a wider audience in a format that is relevant to this generation.
                </p>
                <div className="pt-4 border-t border-white/10 mt-4">
                  <p className="font-semibold text-white text-lg">Dr. Samuel J. Nkola</p>
                  <p className="text-sm text-orange-400">Chairman, Neema Gospel Choir</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl p-6 border border-orange-500/20">
              <Quote className="h-10 w-10 text-orange-400 mb-4" />
              <p className="text-white italic text-lg mb-4">
                "We are intentional about embracing technology as a tool for ministry expansion.
                The message of Christ must be accessible to this generation."
              </p>
              <p className="text-orange-400 font-semibold">— Dr. Samuel J. Nkola</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <button
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: brandOrange }}
            >
              <Heart className="h-5 w-5" />
              Support Our Ministry
              <ArrowRight className="h-5 w-5" />
            </button>
            <p className="text-gray-500 text-xs mt-4">
              Join us for worship every Sunday at 08AM EAT • AICT Chang'ombe Church
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .custom-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #F15A2B;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
