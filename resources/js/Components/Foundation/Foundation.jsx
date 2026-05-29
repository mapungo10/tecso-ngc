import React, { useState, useEffect, useRef } from 'react';
import {
  Heart, Users, Globe, BookOpen, Music, Target,
  Eye, Award, CheckCircle, ArrowRight, Sparkles,
  HandHeart, Gift, Star, Calendar, MapPin, Phone,
  Mail, Cross, Shield, TrendingUp, Lightbulb,
  School, Briefcase, Home, Activity, Video,
  Church, Mic, Megaphone, Handshake
} from 'lucide-react';

export default function FoundationPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
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

  // Program Areas
  const programAreas = [
    {
      icon: Heart,
      title: 'Charity & Welfare Support',
      description: 'Provision of basic needs, including school supplies, clothing, food assistance, and healthcare support for orphans and disadvantaged youth.',
      color: 'bg-rose-500/20',
      iconColor: 'text-rose-400',
    },
    {
      icon: Music,
      title: 'Talent Development & Creative Empowerment',
      description: 'Identification and nurturing of young talents in gospel music, performance arts, and digital media production, equipping them with practical skills for self-reliance.',
      color: 'bg-purple-500/20',
      iconColor: 'text-purple-400',
    },
    {
      icon: Users,
      title: 'Mentorship & Leadership Development',
      description: 'Structured mentorship programs connecting youth with experienced leaders, creatives, and professionals for personal and career guidance.',
      color: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
    },
    {
      icon: Cross,
      title: 'Spiritual Growth & Outreach',
      description: 'Organizing worship events, gospel concerts, and outreach missions aimed at strengthening faith, building character, and promoting positive values.',
      color: 'bg-emerald-500/20',
      iconColor: 'text-emerald-400',
    },
    {
      icon: Globe,
      title: 'Community Engagement & Advocacy',
      description: 'Mobilizing communities, partners, and stakeholders to actively participate in youth development initiatives and social transformation efforts.',
      color: 'bg-cyan-500/20',
      iconColor: 'text-cyan-400',
    },
  ];

  // Core Objectives
  const coreObjectives = [
    'Provide essential support (education, basic needs, and welfare) to orphans and vulnerable youth',
    'Empower young people through talent development, particularly in music, arts, and media',
    'Create mentorship platforms that guide youth in purpose, discipline, and leadership',
    'Inspire hope and spiritual growth through gospel-centered outreach programs',
    'Build sustainable partnerships that support long-term community impact',
  ];

  // Impact Statistics
  const impactStats = [
    { value: '500+', label: 'Children Supported', icon: Heart, color: '#F15A2B' },
    { value: '50+', label: 'Youth Mentored', icon: Star, color: '#FFD700' },
    { value: '10+', label: 'Schools Reached', icon: School, color: '#00A8FF' },
    { value: '5+', label: 'Annual Events', icon: Calendar, color: '#FF69B4' },
  ];

  // Upcoming Events
  const upcomingEvents = [
    {
      title: 'Annual Inspire, Empower, Transform Charity Event',
      date: 'August 20, 2025',
      venue: 'Dar es Salaam, Tanzania',
      description: 'A free charity event supporting orphans and vulnerable youth through music, mentorship, and empowerment programs.',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800',
    },
    {
      title: 'Youth Talent Showcase',
      date: 'September 15, 2025',
      venue: 'AICT Chang\'ombe Church',
      description: 'Young talents display their gifts in music, dance, and creative arts.',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800',
    },
    {
      title: 'Mentorship Bootcamp',
      date: 'October 10-12, 2025',
      venue: 'Dar es Salaam',
      description: 'Intensive mentorship program for youth leaders and aspiring creatives.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800',
    },
  ];

  // Partners
  const partners = [
    { name: 'AICT Chang\'ombe Church', icon: Church, color: '#F15A2B' },
    { name: 'Crown Media', icon: Video, color: '#FF0000' },
    { name: 'Local Schools', icon: School, color: '#00A8FF' },
    { name: 'Community Organizations', icon: Handshake, color: '#00B4D8' },
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Sarah Mwita',
      role: 'Program Beneficiary',
      quote: 'The foundation gave me hope when I had none. Through their support, I was able to complete school and now I mentor other young girls.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100',
    },
    {
      name: 'Pastor John Mrema',
      role: 'Community Leader',
      quote: 'Neema Gospel Choir Foundation is transforming lives in our community. Their holistic approach to youth development is exemplary.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100',
    },
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 px-4 py-1.5 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Heart className="h-3.5 w-3.5 text-orange-400" />
            <span className="text-[10px] font-semibold text-orange-300 tracking-wider uppercase">Foundation</span>
          </div>

          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="bg-gradient-to-r from-white via-orange-100 to-orange-400 bg-clip-text text-transparent">
              Inspire, Empower, Transform
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              For a Better World
            </span>
          </h1>

          <p className={`text-gray-400 max-w-2xl mx-auto text-lg transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            A flagship outreach ministry focused on uplifting orphans, vulnerable children, and youth across Tanzania
            through faith-driven interventions, creative empowerment, and sustainable support systems.
          </p>
        </div>

        {/* Tab Navigation - Improved */}
        <div className={`flex justify-center gap-3 flex-wrap mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'overview'
                ? 'text-white shadow-lg'
                : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
            style={activeTab === 'overview' ? { backgroundColor: brandOrange } : {}}
          >
            <Eye className="h-4 w-4" />
            Overview
          </button>
          <button
            onClick={() => setActiveTab('programs')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'programs'
                ? 'text-white shadow-lg'
                : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
            style={activeTab === 'programs' ? { backgroundColor: brandOrange } : {}}
          >
            <Target className="h-4 w-4" />
            Programs
          </button>
          <button
            onClick={() => setActiveTab('impact')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'impact'
                ? 'text-white shadow-lg'
                : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
            style={activeTab === 'impact' ? { backgroundColor: brandOrange } : {}}
          >
            <Award className="h-4 w-4" />
            Impact & Stories
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Vision & Mission Cards - Enhanced */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`group bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl p-8 border border-orange-500/20 transition-all duration-500 hover:scale-105 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-all">
                  <Eye className="h-7 w-7 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To build a generation of inspired, empowered, and transformed young people who can positively
                  impact society and contribute to a better world.
                </p>
              </div>

              <div className={`group bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl p-8 border border-orange-500/20 transition-all duration-500 hover:scale-105 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-all">
                  <Target className="h-7 w-7 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To use gospel music, mentorship, and strategic partnerships to inspire hope, empower potential,
                  and transform the lives of orphans and youth in Tanzania.
                </p>
              </div>
            </div>

            {/* Core Objectives - Improved */}
            <div className={`bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-8 border border-white/10 transition-all duration-700 delay-200 hover:border-orange-500/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-orange-500/20 rounded-full px-4 py-1.5 mb-3">
                  <CheckCircle className="h-3.5 w-3.5 text-orange-400" />
                  <span className="text-xs font-semibold text-orange-300">Our Commitments</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Core Objectives</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {coreObjectives.map((objective, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Approach - Enhanced */}
            <div className={`grid md:grid-cols-3 gap-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-orange-500/30 transition-all hover:scale-105 group">
                <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-500/30 transition-all">
                  <Lightbulb className="h-8 w-8 text-orange-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Inspire</h4>
                <p className="text-gray-400 text-sm">Through music, faith, and storytelling</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-orange-500/30 transition-all hover:scale-105 group">
                <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-500/30 transition-all">
                  <TrendingUp className="h-8 w-8 text-orange-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Empower</h4>
                <p className="text-gray-400 text-sm">Through skills, mentorship, and opportunity</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-orange-500/30 transition-all hover:scale-105 group">
                <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-500/30 transition-all">
                  <Sparkles className="h-8 w-8 text-orange-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Transform</h4>
                <p className="text-gray-400 text-sm">Through sustained support and life-changing interventions</p>
              </div>
            </div>
          </div>
        )}

        {/* Programs Tab */}
        {activeTab === 'programs' && (
          <div className="space-y-12">
            {/* Program Areas Grid */}
            <div className={`grid md:grid-cols-2 gap-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {programAreas.map((program, idx) => (
                <div
                  key={idx}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-orange-500/30 transition-all duration-500 hover:scale-105 hover:shadow-lg"
                >
                  <div className={`w-12 h-12 rounded-xl ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-all`}>
                    <program.icon className={`h-6 w-6 ${program.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{program.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{program.description}</p>
                </div>
              ))}
            </div>

            {/* Upcoming Events Section */}
            <div className={`mt-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-orange-500/20 rounded-full px-4 py-1.5 mb-3">
                  <Calendar className="h-3.5 w-3.5 text-orange-400" />
                  <span className="text-xs font-semibold text-orange-300">Save the Dates</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Upcoming Events</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {upcomingEvents.map((event, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-orange-500/30 transition-all hover:scale-105 group">
                    <div className="relative h-40 overflow-hidden">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>
                    <div className="p-4">
                      <h4 className="text-white font-semibold mb-2 line-clamp-1">{event.title}</h4>
                      <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                        <Calendar className="h-3 w-3 text-orange-400" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                        <MapPin className="h-3 w-3 text-orange-400" />
                        <span className="line-clamp-1">{event.venue}</span>
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Flagship Event Banner */}
            <div className={`mt-8 p-6 rounded-2xl bg-gradient-to-r from-orange-500/15 to-orange-600/5 border border-orange-500/30 text-center transition-all duration-700 delay-300 hover:shadow-lg hover:shadow-orange-500/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-16 h-16 rounded-full bg-orange-500/30 flex items-center justify-center mx-auto mb-3">
                <Star className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Flagship Annual Event</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                The annual <strong className="text-orange-400">Inspire, Empower, Transform</strong> charity event serves as the primary
                fundraising and awareness platform, bringing together worship, live music performances, testimonies,
                and partner engagement.
              </p>
            </div>
          </div>
        )}

        {/* Impact Tab */}
        {activeTab === 'impact' && (
          <div className="space-y-12">
            {/* Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {impactStats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 transition-all duration-500 hover:scale-105 hover:border-orange-500/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${100 + idx * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6" style={{ color: stat.color }} />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Target Beneficiaries */}
            <div className={`bg-gradient-to-br from-white/5 to-transparent rounded-2xl p-8 border border-white/10 transition-all duration-700 delay-300 hover:border-orange-500/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-orange-500/20 rounded-full px-4 py-1.5 mb-3">
                  <Users className="h-3.5 w-3.5 text-orange-400" />
                  <span className="text-xs font-semibold text-orange-300">Who We Serve</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Target Beneficiaries</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                  <Heart className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                  <p className="text-white font-semibold">Orphans & Vulnerable Children</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                  <Music className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                  <p className="text-white font-semibold">Youth with Untapped Creative Potential</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                  <Shield className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                  <p className="text-white font-semibold">Young Individuals Facing Economic Challenges</p>
                </div>
              </div>
            </div>

            {/* Testimonials Section - New Addition */}
            <div className={`transition-all duration-700 delay-350 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-orange-500/20 rounded-full px-4 py-1.5 mb-3">
                  <Megaphone className="h-3.5 w-3.5 text-orange-400" />
                  <span className="text-xs font-semibold text-orange-300">Stories of Hope</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Testimonials</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-orange-500/30 transition-all">
                    <div className="flex items-center gap-4 mb-3">
                      <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <p className="text-white font-semibold">{testimonial.name}</p>
                        <p className="text-orange-400 text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm italic leading-relaxed">"{testimonial.quote}"</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Partners Section */}
            <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-orange-500/20 rounded-full px-4 py-1.5 mb-3">
                  <Handshake className="h-3.5 w-3.5 text-orange-400" />
                  <span className="text-xs font-semibold text-orange-300">Collaborations</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Our Partners</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                {partners.map((partner, idx) => (
                  <div key={idx} className="text-center group">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-white/20 transition-all group-hover:scale-110">
                      <partner.icon className="h-8 w-8" style={{ color: partner.color }} />
                    </div>
                    <p className="text-gray-300 text-sm">{partner.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Call to Action - Enhanced */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-orange-500/20 via-orange-600/10 to-transparent rounded-2xl p-8 border border-orange-500/30">
            <div className="w-16 h-16 rounded-full bg-orange-500/30 flex items-center justify-center mx-auto mb-4">
              <Gift className="h-8 w-8 text-orange-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Support Our Mission</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              Your donation helps us reach more orphans, vulnerable children, and youth across Tanzania.
              Partner with us in building a generation that is spiritually grounded, creatively empowered,
              and socially responsible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold transition-all hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: brandOrange }}
              >
                <Heart className="h-5 w-5" />
                Donate Now
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:border-orange-500 hover:bg-orange-500/10 transition-all hover:scale-105">
                <HandHeart className="h-5 w-5" />
                Become a Partner
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-4">
              All donations go directly to supporting orphans, vulnerable children, and youth empowerment programs.
            </p>
          </div>
        </div>

        {/* Contact Section - Enhanced */}
        <div className={`mt-12 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 transition-all duration-700 delay-600 hover:border-orange-500/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                <Heart className="h-4 w-4 text-orange-400" />
                <h4 className="text-white font-semibold">Neema Gospel Choir Foundation</h4>
              </div>
              <p className="text-gray-400 text-sm">AICT Chang'ombe Church, Temeke, Dar es Salaam, Tanzania</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-gray-400 text-sm hover:text-orange-400 transition-colors">
                <Phone className="h-4 w-4 text-orange-400" />
                <span>+255 766 777 288</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm hover:text-orange-400 transition-colors">
                <Mail className="h-4 w-4 text-orange-400" />
                <span>foundation@neemagospelchoir.org</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
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
      `}</style>
    </div>
  );
}
