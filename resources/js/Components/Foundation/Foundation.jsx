import React, { useState, useEffect, useRef } from 'react';
import {
  Heart, Users, Globe, BookOpen, Music, Target,
  Eye, Award, CheckCircle, ArrowRight, Sparkles,
  HandHeart, Gift, Star, Calendar, MapPin, Phone,
  Mail, Cross, Shield, TrendingUp, Lightbulb,
  School, Briefcase, Home, Activity, Video
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

  // Partners (using valid icons)
  const partners = [
    { name: 'AICT Chang\'ombe Church', icon: Cross, color: '#F15A2B' },
    { name: 'Crown Media', icon: Video, color: '#FF0000' },
    { name: 'Local Schools', icon: School, color: '#00A8FF' },
    { name: 'Community Organizations', icon: Users, color: '#00B4D8' },
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

        {/* Tab Navigation */}
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
            Impact
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Vision & Mission Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl p-8 border border-orange-500/20 transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                  <Eye className="h-7 w-7 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                <p className="text-gray-300">
                  To build a generation of inspired, empowered, and transformed young people who can positively
                  impact society and contribute to a better world.
                </p>
              </div>

              <div className={`bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl p-8 border border-orange-500/20 transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                  <Target className="h-7 w-7 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                <p className="text-gray-300">
                  To use gospel music, mentorship, and strategic partnerships to inspire hope, empower potential,
                  and transform the lives of orphans and youth in Tanzania.
                </p>
              </div>
            </div>

            {/* Core Objectives */}
            <div className={`bg-white/5 rounded-2xl p-8 border border-white/10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Core Objectives</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {coreObjectives.map((objective, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Approach */}
            <div className={`grid md:grid-cols-3 gap-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all hover:scale-105">
                <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="h-8 w-8 text-orange-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Inspire</h4>
                <p className="text-gray-400 text-sm">Through music, faith, and storytelling</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all hover:scale-105">
                <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-8 w-8 text-orange-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Empower</h4>
                <p className="text-gray-400 text-sm">Through skills, mentorship, and opportunity</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all hover:scale-105">
                <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-3">
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
          <div className="space-y-8">
            <div className={`grid md:grid-cols-2 gap-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {programAreas.map((program, idx) => (
                <div
                  key={idx}
                  className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-500 hover:scale-105"
                >
                  <div className={`w-12 h-12 rounded-xl ${program.color} flex items-center justify-center mb-4`}>
                    <program.icon className={`h-6 w-6 ${program.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{program.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{program.description}</p>
                </div>
              ))}
            </div>

            {/* Upcoming Events */}
            <div className={`mt-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Upcoming Events</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {upcomingEvents.map((event, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all hover:scale-105">
                    <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
                    <div className="p-4">
                      <h4 className="text-white font-semibold mb-1">{event.title}</h4>
                      <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                        <Calendar className="h-3 w-3 text-orange-400" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                        <MapPin className="h-3 w-3 text-orange-400" />
                        <span>{event.venue}</span>
                      </div>
                      <p className="text-gray-500 text-xs">{event.description.substring(0, 80)}...</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Flagship Event */}
            <div className={`mt-8 p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 text-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Star className="h-10 w-10 text-orange-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Flagship Annual Event</h3>
              <p className="text-gray-300">
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
            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {impactStats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`text-center p-6 rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${100 + idx * 100}ms` }}
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-2" style={{ color: stat.color }} />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Target Beneficiaries */}
            <div className={`bg-white/5 rounded-2xl p-8 border border-white/10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Target Beneficiaries</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Heart className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                  <p className="text-white font-semibold">Orphans & Vulnerable Children</p>
                </div>
                <div className="text-center">
                  <Music className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                  <p className="text-white font-semibold">Youth with Untapped Creative Potential</p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                  <p className="text-white font-semibold">Young Individuals Facing Economic Challenges</p>
                </div>
              </div>
            </div>

            {/* Partners */}
            <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Partners</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {partners.map((partner, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-2">
                      <partner.icon className="h-8 w-8" style={{ color: partner.color }} />
                    </div>
                    <p className="text-gray-300 text-sm">{partner.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-orange-500/20 via-orange-600/10 to-transparent rounded-2xl p-8 border border-orange-500/30">
            <Gift className="h-12 w-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Support Our Mission</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              Your donation helps us reach more orphans, vulnerable children, and youth across Tanzania.
              Partner with us in building a generation that is spiritually grounded, creatively empowered,
              and socially responsible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold transition-all hover:scale-105"
                style={{ backgroundColor: brandOrange }}
              >
                <Heart className="h-5 w-5" />
                Donate Now
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:border-orange-500 hover:bg-orange-500/10 transition-all">
                <HandHeart className="h-5 w-5" />
                Become a Partner
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-4">
              All donations go directly to supporting orphans, vulnerable children, and youth empowerment programs.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className={`mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h4 className="text-white font-semibold">Neema Gospel Choir Foundation</h4>
              <p className="text-gray-400 text-sm">AICT Chang'ombe Church, Temeke, Dar es Salaam, Tanzania</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="h-4 w-4 text-orange-400" />
                <span>+255 766 777 288</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="h-4 w-4 text-orange-400" />
                <span>foundation@neemagospelchoir.org</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
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
