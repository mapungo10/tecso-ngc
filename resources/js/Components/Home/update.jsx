import React, { useState, useEffect, useRef } from 'react';
import {
  Calendar, MapPin, Clock, Ticket, Users, Music, Mic, ChevronRight,
  ChevronLeft, CheckCircle, Sparkles, Bell, Gift, Star, ArrowRight,
  X, Heart, Globe, Cross
} from 'lucide-react';

export default function EventUpdatesSection() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [currentPastIndex, setCurrentPastIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  // Auto-slide past events
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeTab === 'past') {
        setCurrentPastIndex((prev) => (prev + 1) % pastEvents.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [activeTab]);

  const brandOrange = '#F15A2B';

  // Upcoming Events
  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Worship Concert 2025',
      date: 'December 15, 2025',
      time: '4:00 PM - 9:00 PM EAT',
      venue: 'Leaders Club Grounds, Dar es Salaam',
      description: 'Join us for the biggest gospel worship event of the year featuring NEEMA Gospel Choir and special guest artists. An evening of powerful praise, life-changing worship, and divine encounters.',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070',
      price: 'TSh 25,000 - 150,000',
      expectedAttendees: '35,000+',
      featured: true,
      speakers: ['Dr. Samuel J. Nkola', 'Pastor John Mwita', 'Minister Sarah Komba'],
      schedule: [
        { time: '4:00 PM', activity: 'Doors Open & Pre-Show' },
        { time: '5:00 PM', activity: 'Opening Worship' },
        { time: '6:30 PM', activity: 'NEEMA Gospel Choir Performance' },
        { time: '8:00 PM', activity: 'Guest Artists' },
        { time: '8:45 PM', activity: 'Closing Prayer & Benediction' },
      ],
    },
    {
      id: 2,
      title: 'Worship in Spirit - Live Recording',
      date: 'November 10, 2025',
      time: '2:00 PM - 7:00 PM EAT',
      venue: 'AICT Chang\'ombe Church, Temeke',
      description: 'Be part of the live audience as we record our next album "Worship in Spirit". Experience raw, powerful worship and be part of history.',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070',
      price: 'TSh 15,000 (Regular) | TSh 50,000 (VIP)',
      expectedAttendees: '2,000+',
      featured: true,
      speakers: ['NEEMA Gospel Choir', 'Guest Worship Leaders'],
      schedule: [
        { time: '2:00 PM', activity: 'Registration & Seating' },
        { time: '3:00 PM', activity: 'Sound Check & Warm-up' },
        { time: '4:00 PM', activity: 'Live Recording Session 1' },
        { time: '5:30 PM', activity: 'Break & Refreshments' },
        { time: '6:00 PM', activity: 'Live Recording Session 2' },
        { time: '7:00 PM', activity: 'Closing' },
      ],
    },
    {
      id: 3,
      title: 'Inspire, Empower, Transform Charity Event',
      date: 'August 20, 2025',
      time: '10:00 AM - 4:00 PM EAT',
      venue: 'Dar es Salaam, Tanzania',
      description: 'A free charity event supporting orphans and vulnerable youth through music, mentorship, and empowerment programs.',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070',
      price: 'FREE (Donations Welcome)',
      expectedAttendees: '5,000+',
      featured: false,
      speakers: ['Community Leaders', 'Youth Mentors', 'NEEMA Foundation Team'],
      schedule: [
        { time: '10:00 AM', activity: 'Opening Ceremony' },
        { time: '11:00 AM', activity: 'Youth Empowerment Session' },
        { time: '1:00 PM', activity: 'Lunch & Networking' },
        { time: '2:00 PM', activity: 'Gospel Concert' },
        { time: '4:00 PM', activity: 'Closing & Donation Presentation' },
      ],
    },
  ];

  // Past Events with statistics
  const pastEvents = [
    {
      id: 4,
      title: 'Uhuru Stadium Worship Night 2023',
      date: 'October 28, 2023',
      venue: 'Uhuru Stadium, Dar es Salaam',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070',
      highlights: [
        { label: 'Attendance', value: '25,000+', icon: 'Users' },
        { label: 'Souls Saved', value: '1,200+', icon: 'Heart' },
        { label: 'Choirs', value: '15+', icon: 'Music' },
      ],
      testimonial: 'A night of unforgettable worship! The presence of God was tangible.',
      testimonialAuthor: 'Pastor Michael',
    },
    {
      id: 5,
      title: 'CCC Upanga Gospel Fest 2021',
      date: 'March 15, 2021',
      venue: 'CCC Upanga Church, Dar es Salaam',
      image: 'https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d?q=80&w=2070',
      highlights: [
        { label: 'Attendance', value: '6,000+', icon: 'Users' },
        { label: 'Choirs', value: '8+', icon: 'Music' },
        { label: 'Donations Raised', value: 'TSh 15M+', icon: 'Heart' },
      ],
      testimonial: 'NEEMA brought the house down! Such anointed ministration.',
      testimonialAuthor: 'Sister Grace',
    },
    {
      id: 6,
      title: 'East Africa Gospel Music Festival',
      date: 'September 5, 2024',
      venue: 'Arusha, Tanzania',
      image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070',
      highlights: [
        { label: 'Attendance', value: '15,000+', icon: 'Users' },
        { label: 'Countries', value: '7+', icon: 'Globe' },
        { label: 'Artists', value: '25+', icon: 'Mic' },
      ],
      testimonial: 'NEEMA represented Tanzania with excellence and anointing!',
      testimonialAuthor: 'EAGMA Committee',
    },
  ];

  // Map icon strings to actual components
  const getIconComponent = (iconName) => {
    switch(iconName) {
      case 'Users':
        return Users;
      case 'Heart':
        return Heart;
      case 'Music':
        return Music;
      case 'Globe':
        return Globe;
      case 'Mic':
        return Mic;
      default:
        return Users;
    }
  };

  const openEventModal = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
    document.body.style.overflow = 'auto';
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  const nextPastEvent = () => {
    setCurrentPastIndex((prev) => (prev + 1) % pastEvents.length);
  };

  const prevPastEvent = () => {
    setCurrentPastIndex((prev) => (prev - 1 + pastEvents.length) % pastEvents.length);
  };

  const featuredEvent = upcomingEvents.find(e => e.featured);
  const otherEvents = upcomingEvents.filter(e => !e.featured);

  return (
    <>
      <section ref={sectionRef} className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{ background: `radial-gradient(circle, ${brandOrange}08 0%, transparent 70%)` }}
          />
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute animate-float-particle ${isVisible ? 'opacity-15' : 'opacity-0'}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 15}s`,
              }}
            >
              {Math.random() > 0.5 ? <Music size={10} className="text-orange-500/20" /> : <Sparkles size={8} className="text-orange-500/20" />}
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className={`inline-flex items-center gap-2 rounded-full bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 px-4 py-1.5 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Calendar className="h-3.5 w-3.5 text-orange-400" />
              <span className="text-[10px] font-semibold text-orange-300 tracking-wider uppercase">Stay Connected</span>
            </div>

            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="bg-gradient-to-r from-white via-orange-100 to-orange-300 bg-clip-text text-transparent">
                Events & Updates
              </span>
            </h2>

            <p className={`text-gray-400 max-w-2xl mx-auto text-lg transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Join us for powerful worship experiences, concerts, and community outreach programs
            </p>
          </div>

          {/* Tab Navigation */}
          <div className={`flex justify-center gap-4 mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'upcoming'
                  ? 'text-white shadow-lg'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              style={activeTab === 'upcoming' ? { backgroundColor: brandOrange } : {}}
            >
              <Calendar className="h-4 w-4" />
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'past'
                  ? 'text-white shadow-lg'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              style={activeTab === 'past' ? { backgroundColor: brandOrange } : {}}
            >
              <CheckCircle className="h-4 w-4" />
              Past Events
            </button>
          </div>

          {/* Upcoming Events Tab */}
          {activeTab === 'upcoming' && (
            <div className="space-y-8">
              {/* Featured Event Card */}
              {featuredEvent && (
                <div className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-orange-500/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="absolute top-0 left-0 w-32 h-32 bg-orange-500/10 rounded-full -translate-x-16 -translate-y-16 blur-3xl" />
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Left Content */}
                    <div className="p-8 md:p-10">
                      <div className="inline-flex items-center gap-2 bg-orange-500/20 rounded-full px-3 py-1 mb-4">
                        <Star className="h-3 w-3 text-orange-400 fill-orange-400" />
                        <span className="text-[10px] font-semibold text-orange-300">Featured Event</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{featuredEvent.title}</h3>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <Calendar className="h-4 w-4 text-orange-400" />
                          <span>{featuredEvent.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <Clock className="h-4 w-4 text-orange-400" />
                          <span>{featuredEvent.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <MapPin className="h-4 w-4 text-orange-400" />
                          <span>{featuredEvent.venue}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                        {featuredEvent.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-4">
                        <button
                          onClick={() => openEventModal(featuredEvent)}
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
                          style={{ backgroundColor: brandOrange }}
                        >
                          <Ticket className="h-4 w-4" />
                          Get Tickets
                        </button>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Users className="h-4 w-4" />
                          <span>{featuredEvent.expectedAttendees} expected</span>
                        </div>
                      </div>
                    </div>
                    {/* Right Image */}
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img
                        src={featuredEvent.image}
                        alt={featuredEvent.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              )}

              {/* Other Events Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {otherEvents.map((event, idx) => (
                  <div
                    key={event.id}
                    className={`group bg-white/5 rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-orange-500/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${400 + idx * 100}ms` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {event.price === 'FREE (Donations Welcome)' && (
                        <div className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                          Free Entry
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors line-clamp-1">
                        {event.title}
                      </h3>
                      <div className="space-y-1 mb-4">
                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                          <Calendar className="h-3 w-3 text-orange-400" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                          <Clock className="h-3 w-3 text-orange-400" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                          <MapPin className="h-3 w-3 text-orange-400" />
                          <span className="line-clamp-1">{event.venue}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold" style={{ color: brandOrange }}>
                          {event.price}
                        </span>
                        <button
                          onClick={() => openEventModal(event)}
                          className="text-xs font-semibold text-white px-4 py-1.5 rounded-full transition-all hover:scale-105 flex items-center gap-1"
                          style={{ backgroundColor: brandOrange }}
                        >
                          Details
                          <ArrowRight className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Past Events Tab - Sliding Carousel */}
          {activeTab === 'past' && pastEvents.length > 0 && (
            <div className="relative">
              {/* Carousel Container */}
              <div className="relative overflow-hidden rounded-3xl">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentPastIndex * 100}%)` }}
                >
                  {pastEvents.map((event) => (
                    <div key={event.id} className="w-full flex-shrink-0">
                      <div className="grid md:grid-cols-2 gap-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/10 overflow-hidden">
                        {/* Image Side */}
                        <div className="relative h-80 md:h-auto">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                        </div>
                        {/* Content Side */}
                        <div className="p-8 md:p-10">
                          <div className="inline-flex items-center gap-2 bg-orange-500/20 rounded-full px-3 py-1 mb-4">
                            <CheckCircle className="h-3 w-3 text-orange-400" />
                            <span className="text-[10px] font-semibold text-orange-300">Past Event</span>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{event.title}</h3>
                          <div className="flex items-center gap-2 text-gray-300 text-sm mb-6 flex-wrap">
                            <Calendar className="h-4 w-4 text-orange-400" />
                            <span>{event.date}</span>
                            <span className="mx-2">•</span>
                            <MapPin className="h-4 w-4 text-orange-400" />
                            <span>{event.venue}</span>
                          </div>

                          {/* Highlights */}
                          <div className="grid grid-cols-3 gap-4 mb-6">
                            {event.highlights.map((highlight, idx) => {
                              const IconComponent = getIconComponent(highlight.icon);
                              return (
                                <div key={idx} className="text-center">
                                  <IconComponent className="h-5 w-5 text-orange-400 mx-auto mb-1" />
                                  <div className="text-lg font-bold text-white">{highlight.value}</div>
                                  <div className="text-[9px] text-gray-500">{highlight.label}</div>
                                </div>
                              );
                            })}
                          </div>

                          {/* Testimonial */}
                          <div className="bg-white/5 rounded-xl p-4 mb-6">
                            <p className="text-sm text-gray-300 italic">"{event.testimonial}"</p>
                            <p className="text-xs text-orange-400 mt-2">— {event.testimonialAuthor}</p>
                          </div>

                          <button className="inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors">
                            Watch Highlights
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevPastEvent}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextPastEvent}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {pastEvents.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentPastIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentPastIndex
                          ? 'w-6 bg-orange-500'
                          : 'w-1.5 bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Newsletter Subscription */}
          <div className={`mt-20 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative bg-gradient-to-r from-orange-500/10 via-orange-600/5 to-transparent rounded-3xl border border-orange-500/20 p-8 md:p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />

              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <Bell className="h-10 w-10 text-orange-400 mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Never Miss an Event</h3>
                <p className="text-gray-400 mb-6">
                  Subscribe to our newsletter and get the latest updates on concerts, worship nights, and special events
                </p>

                {subscribed ? (
                  <div className="flex items-center justify-center gap-2 text-green-400 bg-green-500/10 rounded-full px-4 py-2 w-full max-w-md mx-auto">
                    <CheckCircle className="h-5 w-5" />
                    <span>Successfully subscribed! Check your email.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                      required
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-full text-white font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
                      style={{ backgroundColor: brandOrange }}
                    >
                      <Bell className="h-4 w-4" />
                      Subscribe
                    </button>
                  </form>
                )}
                <p className="text-xs text-gray-500 mt-4">No spam, unsubscribe anytime.</p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes floatParticle {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
            25% { opacity: 0.3; }
            75% { opacity: 0.15; }
            50% { transform: translateY(-30px) translateX(15px); opacity: 0.2; }
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
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </section>

      {/* Event Modal */}
      {showModal && selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={closeModal} />

          <div className="relative z-10 max-w-3xl w-full max-h-[85vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl shadow-2xl border border-white/20 animate-modal-in" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
            </div>

            <div className="p-6 md:p-8">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 rounded-full px-3 py-1 mb-4">
                <Calendar className="h-3 w-3 text-orange-400" />
                <span className="text-[10px] font-semibold text-orange-300">{selectedEvent.date}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{selectedEvent.title}</h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <Clock className="h-4 w-4 text-orange-400" />
                  <span>{selectedEvent.time}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <MapPin className="h-4 w-4 text-orange-400" />
                  <span>{selectedEvent.venue}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <Ticket className="h-4 w-4 text-orange-400" />
                  <span>{selectedEvent.price}</span>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">{selectedEvent.description}</p>

              {/* Schedule */}
              {selectedEvent.schedule && (
                <div className="mb-6">
                  <h4 className="text-md font-semibold text-white mb-3 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-orange-400" />
                    Event Schedule
                  </h4>
                  <div className="space-y-2">
                    {selectedEvent.schedule.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 text-sm flex-wrap">
                        <span className="text-orange-400 font-mono w-16">{item.time}</span>
                        <span className="text-gray-300">{item.activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Speakers */}
              {selectedEvent.speakers && (
                <div className="mb-6">
                  <h4 className="text-md font-semibold text-white mb-3 flex items-center gap-2">
                    <Mic className="h-4 w-4 text-orange-400" />
                    Featured Speakers / Artists
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.speakers.map((speaker, idx) => (
                      <span key={idx} className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300">
                        {speaker}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-4 flex-col sm:flex-row">
                <button
                  className="flex-1 py-3 rounded-full text-white font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
                  style={{ backgroundColor: brandOrange }}
                >
                  <Ticket className="h-4 w-4" />
                  {selectedEvent.price === 'FREE (Donations Welcome)' ? 'Register Now' : 'Get Tickets'}
                </button>
                <button className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:border-orange-500 hover:bg-orange-500/10 transition-all">
                  Add to Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-modal-in { animation: modalIn 0.3s ease-out; }
      `}</style>
    </>
  );
}
