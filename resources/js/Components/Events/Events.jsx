import React, { useState, useEffect, useRef } from 'react';
import {
  Calendar, MapPin, Clock, Ticket, Users, Music, Mic,
  CheckCircle, Sparkles, Bell, Star, ArrowRight, Heart,
  Church, Share2, Video, Award, TrendingUp
} from 'lucide-react';

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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

    return () => observer.disconnect();
  }, []);

  const brandOrange = '#F15A2B';

  // Categories
  const categories = [
    { id: 'all', name: 'All Events', icon: Calendar },
    { id: 'concert', name: 'Concerts', icon: Music },
    { id: 'worship', name: 'Worship Nights', icon: Church },
    { id: 'charity', name: 'Charity Events', icon: Heart },
    { id: 'recording', name: 'Live Recordings', icon: Video },
  ];

  // All Events based on document
  const allEvents = [
    {
      id: 1,
      title: 'Annual Worship Concert 2025',
      category: 'concert',
      date: 'December 15, 2025',
      time: '4:00 PM - 9:00 PM EAT',
      venue: 'Leaders Club Grounds, Dar es Salaam',
      description: 'Join us for the biggest gospel worship event of the year featuring NEEMA Gospel Choir and special guest artists. An evening of powerful praise, life-changing worship, and divine encounters.',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070',
      price: 'TSh 25,000 - 150,000',
      expectedAttendees: '35,000+',
      featured: true,
      status: 'upcoming',
      speakers: ['Dr. Samuel J. Nkola', 'Pastor John Mwita', 'Minister Sarah Komba', 'Guest Artists TBA'],
      schedule: [
        { time: '4:00 PM', activity: 'Doors Open & Pre-Show' },
        { time: '5:00 PM', activity: 'Opening Worship - NEEMA Gospel Choir' },
        { time: '6:30 PM', activity: 'Main Performance' },
        { time: '8:00 PM', activity: 'Guest Artists' },
        { time: '8:45 PM', activity: 'Closing Prayer & Benediction' },
      ]
    },
    {
      id: 2,
      title: 'Worship in Spirit - Live Recording',
      category: 'recording',
      date: 'November 10, 2025',
      time: '2:00 PM - 7:00 PM EAT',
      venue: 'AICT Chang\'ombe Church, Temeke',
      description: 'Be part of the live audience as we record our next album "Worship in Spirit". Experience raw, powerful worship and be part of history.',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070',
      price: 'TSh 15,000 (Regular) | TSh 50,000 (VIP)',
      expectedAttendees: '2,000+',
      featured: true,
      status: 'upcoming',
      speakers: ['NEEMA Gospel Choir', 'Guest Worship Leaders'],
      schedule: [
        { time: '2:00 PM', activity: 'Registration & Seating' },
        { time: '3:00 PM', activity: 'Sound Check & Warm-up' },
        { time: '4:00 PM', activity: 'Live Recording Session 1' },
        { time: '5:30 PM', activity: 'Break & Refreshments' },
        { time: '6:00 PM', activity: 'Live Recording Session 2' },
        { time: '7:00 PM', activity: 'Closing' },
      ]
    },
    {
      id: 3,
      title: 'Inspire, Empower, Transform Charity Event',
      category: 'charity',
      date: 'August 20, 2025',
      time: '10:00 AM - 4:00 PM EAT',
      venue: 'Dar es Salaam, Tanzania',
      description: 'A free charity event supporting orphans and vulnerable youth through music, mentorship, and empowerment programs.',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070',
      price: 'FREE (Donations Welcome)',
      expectedAttendees: '5,000+',
      featured: false,
      status: 'upcoming',
      speakers: ['Community Leaders', 'Youth Mentors', 'NEEMA Foundation Team'],
      schedule: [
        { time: '10:00 AM', activity: 'Opening Ceremony' },
        { time: '11:00 AM', activity: 'Youth Empowerment Session' },
        { time: '1:00 PM', activity: 'Lunch & Networking' },
        { time: '2:00 PM', activity: 'Gospel Concert' },
        { time: '4:00 PM', activity: 'Closing & Donation Presentation' },
      ]
    },
    {
      id: 4,
      title: 'Uhuru Stadium Worship Night 2023',
      category: 'concert',
      date: 'October 28, 2023',
      time: '5:00 PM - 10:00 PM EAT',
      venue: 'Uhuru Stadium, Dar es Salaam',
      description: 'A historic worship night with over 25,000 attendees. An unforgettable evening of praise and worship.',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070',
      price: 'TSh 10,000 - 50,000',
      expectedAttendees: '25,000+',
      featured: false,
      status: 'past',
      highlights: [
        { label: 'Attendance', value: '25,000+', icon: '👥' },
        { label: 'Souls Saved', value: '1,200+', icon: '❤️' },
        { label: 'Choirs', value: '15+', icon: '🎵' },
      ],
      testimonial: 'A night of unforgettable worship! The presence of God was tangible.',
      testimonialAuthor: 'Pastor Michael'
    },
    {
      id: 5,
      title: 'CCC Upanga Gospel Fest 2021',
      category: 'concert',
      date: 'March 15, 2021',
      time: '3:00 PM - 8:00 PM EAT',
      venue: 'CCC Upanga Church, Dar es Salaam',
      description: 'The choir\'s first major concert with over 6,000 attendees.',
      image: 'https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d?q=80&w=2070',
      price: 'TSh 5,000 - 20,000',
      expectedAttendees: '6,000+',
      featured: false,
      status: 'past',
      highlights: [
        { label: 'Attendance', value: '6,000+', icon: '👥' },
        { label: 'Choirs', value: '8+', icon: '🎵' },
        { label: 'Donations', value: 'TSh 15M+', icon: '💰' },
      ],
      testimonial: 'NEEMA brought the house down! Such anointed ministration.',
      testimonialAuthor: 'Sister Grace'
    },
    {
      id: 6,
      title: 'East Africa Gospel Music Festival',
      category: 'concert',
      date: 'September 5, 2024',
      time: '2:00 PM - 9:00 PM EAT',
      venue: 'Arusha, Tanzania',
      description: 'NEEMA represented Tanzania at this regional festival featuring artists from 7 East African countries.',
      image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070',
      price: 'TSh 15,000 - 40,000',
      expectedAttendees: '15,000+',
      featured: false,
      status: 'past',
      highlights: [
        { label: 'Countries', value: '7+', icon: '🌍' },
        { label: 'Artists', value: '25+', icon: '🎤' },
        { label: 'Attendance', value: '15,000+', icon: '👥' },
      ],
      testimonial: 'NEEMA represented Tanzania with excellence and anointing!',
      testimonialAuthor: 'EAGMA Committee'
    },
  ];

  const upcomingEvents = allEvents.filter(event => event.status === 'upcoming');
  const pastEvents = allEvents.filter(event => event.status === 'past');

  const filteredEvents = activeCategory === 'all'
    ? upcomingEvents
    : upcomingEvents.filter(event => event.category === activeCategory);

  const featuredEvent = upcomingEvents.find(e => e.featured);

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

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 px-4 py-1.5 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Calendar className="h-3.5 w-3.5 text-orange-400" />
            <span className="text-[10px] font-semibold text-orange-300 tracking-wider uppercase">Join Us</span>
          </div>

          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="bg-gradient-to-r from-white via-orange-100 to-orange-400 bg-clip-text text-transparent">
              Upcoming Events
            </span>
          </h1>

          <p className={`text-gray-400 max-w-2xl mx-auto text-lg transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Experience powerful worship, life-changing concerts, and community outreach programs
          </p>
        </div>

        {/* Featured Event Card */}
        {featuredEvent && (
          <div className={`mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative bg-gradient-to-br from-orange-500/10 to-white/5 rounded-3xl border border-orange-500/30 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Content */}
                <div className="p-8 md:p-10">
                  <div className="inline-flex items-center gap-2 bg-orange-500/20 rounded-full px-3 py-1 mb-4">
                    <Star className="h-3 w-3 text-orange-400 fill-orange-400" />
                    <span className="text-[10px] font-semibold text-orange-300">Featured Event</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                    {featuredEvent.title}
                  </h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Calendar className="h-5 w-5 text-orange-400" />
                      <span>{featuredEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Clock className="h-5 w-5 text-orange-400" />
                      <span>{featuredEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <MapPin className="h-5 w-5 text-orange-400" />
                      <span>{featuredEvent.venue}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Ticket className="h-5 w-5 text-orange-400" />
                      <span>{featuredEvent.price}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6 line-clamp-3">{featuredEvent.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => openEventModal(featuredEvent)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-semibold transition-all hover:scale-105"
                      style={{ backgroundColor: brandOrange }}
                    >
                      <Ticket className="h-4 w-4" />
                      Get Tickets
                    </button>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Users className="h-4 w-4 text-orange-400" />
                      <span className="text-sm">{featuredEvent.expectedAttendees} expected</span>
                    </div>
                  </div>
                </div>
                {/* Right Image */}
                <div className="relative h-80 lg:h-auto">
                  <img
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'text-white shadow-lg'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              style={activeCategory === category.id ? { backgroundColor: brandOrange } : {}}
            >
              <category.icon className="h-4 w-4" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredEvents.map((event, idx) => (
            <div
              key={event.id}
              className={`group bg-white/5 rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-orange-500/30 hover:shadow-xl cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${500 + idx * 100}ms` }}
              onClick={() => openEventModal(event)}
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
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1">
                  <div className="flex items-center gap-1 text-white text-[10px]">
                    <Calendar className="h-3 w-3 text-orange-400" />
                    <span>{event.date}</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors line-clamp-1">
                  {event.title}
                </h3>
                <div className="space-y-1 mb-3">
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
                  <button className="text-xs font-semibold text-white px-3 py-1.5 rounded-full transition-all hover:scale-105 flex items-center gap-1" style={{ backgroundColor: brandOrange }}>
                    Details
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Past Events Section */}
        <div className={`mt-12 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Past Events</h2>
            <p className="text-gray-400 mt-2">Memorable moments from our journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, idx) => (
              <div
                key={event.id}
                className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-orange-500/30"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1">
                    <div className="flex items-center gap-1 text-white text-[9px]">
                      <Calendar className="h-2.5 w-2.5 text-orange-400" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-md font-bold text-white mb-2">{event.title}</h3>
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                    <MapPin className="h-3 w-3 text-orange-400" />
                    <span className="line-clamp-1">{event.venue}</span>
                  </div>

                  {/* Highlights with emoji icons */}
                  <div className="grid grid-cols-3 gap-2 mb-3 pt-2 border-t border-white/10">
                    {event.highlights?.map((highlight, i) => (
                      <div key={i} className="text-center">
                        <div className="text-base">{highlight.icon}</div>
                        <div className="text-[8px] font-bold text-white">{highlight.value}</div>
                        <div className="text-[6px] text-gray-500">{highlight.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  {event.testimonial && (
                    <p className="text-[10px] text-gray-400 italic mt-2 line-clamp-2">
                      "{event.testimonial}"
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className={`mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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

      {/* Event Modal */}
      {showModal && selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={closeModal} />

          <div className="relative z-10 max-w-4xl w-full max-h-[85vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl shadow-2xl border border-white/20 animate-modal-in" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
              {selectedEvent.featured && (
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <Star className="h-3 w-3 text-orange-400 fill-orange-400" />
                  <span className="text-[10px] font-semibold text-orange-300">Featured Event</span>
                </div>
              )}
            </div>

            <div className="p-6 md:p-8">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 rounded-full px-3 py-1 mb-4">
                <Calendar className="h-3 w-3 text-orange-400" />
                <span className="text-[10px] font-semibold text-orange-300">{selectedEvent.date}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{selectedEvent.title}</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
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
                  <div className="flex items-center gap-3 text-gray-300 text-sm">
                    <Users className="h-4 w-4 text-orange-400" />
                    <span>{selectedEvent.expectedAttendees} expected attendees</span>
                  </div>
                </div>

                {/* Highlights for past events with emoji */}
                {selectedEvent.highlights && (
                  <div className="bg-white/5 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-white mb-3">Event Highlights</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {selectedEvent.highlights.map((highlight, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-xl">{highlight.icon}</div>
                          <div className="text-xs font-bold text-white">{highlight.value}</div>
                          <div className="text-[8px] text-gray-500">{highlight.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">{selectedEvent.description}</p>

              {/* Testimonial for past events */}
              {selectedEvent.testimonial && (
                <div className="mb-6 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <p className="text-gray-300 text-sm italic">"{selectedEvent.testimonial}"</p>
                  <p className="text-orange-400 text-xs mt-2">— {selectedEvent.testimonialAuthor}</p>
                </div>
              )}

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
                        <span className="text-orange-400 font-mono w-20">{item.time}</span>
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
                <button className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:border-orange-500 hover:bg-orange-500/10 transition-all flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Share Event
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
    </div>
  );
}
