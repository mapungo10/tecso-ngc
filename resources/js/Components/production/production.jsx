import React, { useState, useEffect, useRef } from 'react';
import {
  Mic, Video, Camera, Monitor, Sparkles, Music,
  Play, Tv, Award, Briefcase, Calendar, MapPin,
  Users, ArrowRight, CheckCircle, Star, Heart,
  Headphones, Film, Radio, Volume2, Lightbulb,
  TrendingUp, Globe, Phone, Mail, MessageCircle, Target,
  Layers, Palette, Zap, Clock, Shield, Truck
} from 'lucide-react';

export default function VictoriousProductionPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('services');
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
  const brandOrangeLight = '#F15A2B/20';
  const brandOrangeDark = '#C43D1E';

  // Services offered
  const services = [
    {
      icon: Mic,
      title: 'Audio Production',
      description: 'Professional capturing, mixing, and mastering for music, podcasts, and voiceovers.',
      features: ['Studio Recording', 'Mixing & Mastering', 'Voiceover Production', 'Podcast Production'],
      color: 'bg-orange-500/20',
      iconColor: 'text-orange-400',
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'Full-service video production from concept to final cut, including filming, editing, and direction.',
      features: ['Music Videos', 'Corporate Videos', 'Documentaries', 'Commercials'],
      color: 'bg-orange-500/20',
      iconColor: 'text-orange-400',
    },
    {
      icon: Tv,
      title: 'Live Event Production',
      description: 'End-to-end technical execution for concerts, conferences, and live performances.',
      features: ['Stage Setup', 'Sound Engineering', 'LED Screens', 'Live Broadcasting'],
      color: 'bg-orange-500/20',
      iconColor: 'text-orange-400',
    },
    {
      icon: Palette,
      title: 'Event Branding',
      description: 'Visual identity development for events, including graphic design and motion graphics.',
      features: ['Graphic Design', 'Motion Graphics', 'Promotional Materials', 'Brand Identity'],
      color: 'bg-orange-500/20',
      iconColor: 'text-orange-400',
    },
    {
      icon: Briefcase,
      title: 'Event Management',
      description: 'Structured planning, budgeting, and vendor coordination for seamless event execution.',
      features: ['Event Planning', 'Budget Management', 'Vendor Coordination', 'Production Consulting'],
      color: 'bg-orange-500/20',
      iconColor: 'text-orange-400',
    },
    {
      icon: Camera,
      title: 'Multi-Camera Production',
      description: 'Professional multi-camera setup for live recordings and broadcast production.',
      features: ['Multi-Camera Setup', 'Live Switching', 'Broadcast Production', 'Post-Production'],
      color: 'bg-orange-500/20',
      iconColor: 'text-orange-400',
    },
  ];

  // Portfolio Projects
  const portfolioProjects = [
    {
      title: 'Worship in Spirit TV Show',
      category: 'Television Production',
      description: 'Weekly gospel TV broadcast produced for Crown Media, featuring live worship performances.',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800',
      icon: Tv,
    },
    {
      title: 'Neema Live Concert 2025',
      category: 'Live Event Production',
      description: 'Full-scale concert production for 35,000+ attendees at Leaders Club Grounds.',
      image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=800',
      icon: Music,
    },
    {
      title: 'Dhahabu Live Album',
      category: 'Audio Production',
      description: 'Complete audio production, mixing, and mastering for the hit live album.',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800',
      icon: Mic,
    },
    {
      title: 'Ngiyabonga EP',
      category: 'Music Production',
      description: 'Studio production for the 2026 EP release featuring contemporary African gospel.',
      image: 'https://images.unsplash.com/photo-1593697821028-7c2c4b4bb3b7?q=80&w=800',
      icon: Headphones,
    },
  ];

  // Equipment Highlights
  const equipment = [
    { name: 'Professional Audio Console', icon: Volume2 },
    { name: 'Multi-Camera Broadcast System', icon: Video },
    { name: 'LED Video Walls', icon: Monitor },
    { name: 'Professional Lighting Rig', icon: Lightbulb },
    { name: 'Studio Recording Booth', icon: Mic },
    { name: 'Live Streaming Setup', icon: Radio },
  ];

  // Team Roles
  const teamRoles = [
    'Production Manager',
    'Stage Operations',
    'Audio Engineering',
    'Sound Engineering',
    'Video Direction',
    'Cinematography',
    'Visual Systems',
    'Creative Direction',
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Professional Standards',
      description: 'Industry-standard equipment and experienced professionals.',
    },
    {
      icon: Zap,
      title: 'End-to-End Service',
      description: 'From concept to delivery, we handle everything.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Structured workflows ensure deadlines are met.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Services tailored to any budget or scale.',
    },
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 px-4 py-1.5 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Sparkles className="h-3.5 w-3.5 text-orange-400" />
            <span className="text-[10px] font-semibold text-orange-300 tracking-wider uppercase">Victorious Production</span>
          </div>

          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="bg-gradient-to-r from-white via-orange-100 to-orange-400 bg-clip-text text-transparent">
              Victorious Production
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Media & Event Production
            </span>
          </h1>

          <p className={`text-gray-400 max-w-2xl mx-auto text-lg transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Full-service media and event production company delivering high-standard commercial and creative solutions
            for live events, digital media, and brand-driven content.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`flex justify-center gap-3 flex-wrap mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'services'
                ? 'text-white shadow-lg'
                : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
            style={activeTab === 'services' ? { backgroundColor: brandOrange } : {}}
          >
            <Mic className="h-4 w-4" />
            Services
          </button>
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'portfolio'
                ? 'text-white shadow-lg'
                : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
            style={activeTab === 'portfolio' ? { backgroundColor: brandOrange } : {}}
          >
            <Camera className="h-4 w-4" />
            Portfolio
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'about'
                ? 'text-white shadow-lg'
                : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
            style={activeTab === 'about' ? { backgroundColor: brandOrange } : {}}
          >
            <Award className="h-4 w-4" />
            About
          </button>
        </div>

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="space-y-12">
            {/* Services Grid */}
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-orange-500/30 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10"
                >
                  <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-all`}>
                    <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, fIdx) => (
                      <span key={fIdx} className="text-[10px] bg-white/10 px-2 py-1 rounded-full text-gray-300">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Flagship Program */}
            <div className={`mt-8 p-6 rounded-2xl bg-gradient-to-r from-orange-500/15 to-orange-500/5 border border-orange-500/30 text-center transition-all duration-700 delay-200 hover:shadow-lg hover:shadow-orange-500/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-16 h-16 rounded-full bg-orange-500/30 flex items-center justify-center mx-auto mb-3">
                <Tv className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Flagship Program: WORSHIP IN SPIRIT</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Weekly TV broadcast airing Sundays 4:00-5:00 PM on Crown Media, hosted by MC Ablent.
                Produced entirely by Victorious Production, integrating live worship, performances, and behind-the-scenes content.
              </p>
            </div>

            {/* Equipment Highlights */}
            <div className={`bg-white/5 rounded-2xl p-8 border border-white/10 transition-all duration-700 delay-300 hover:border-orange-500/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white">Equipment & Capabilities</h3>
                <p className="text-gray-400 mt-1">Industry-standard gear for professional production</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {equipment.map((item, idx) => (
                  <div key={idx} className="text-center p-3 rounded-xl bg-white/5 hover:bg-orange-500/10 transition-all group">
                    <item.icon className="h-8 w-8 text-orange-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-300 text-xs">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Portfolio Tab */}
        {activeTab === 'portfolio' && (
          <div className="space-y-12">
            {/* Projects Grid */}
            <div className={`grid md:grid-cols-2 gap-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {portfolioProjects.map((project, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl overflow-hidden bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-orange-500/30 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                        <project.icon className="h-3 w-3 text-orange-400" />
                        <span className="text-[10px] text-white">{project.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-gray-400 text-sm">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action for Portfolio */}
            <div className={`text-center p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-gray-300 mb-4">Want to see more of our work?</p>
              <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-semibold transition-all hover:scale-105 hover:shadow-lg" style={{ backgroundColor: brandOrange }}>
                <Play className="h-4 w-4" />
                View Full Portfolio
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* About Tab */}
        {activeTab === 'about' && (
          <div className="space-y-12">
            {/* Company Overview */}
            <div className={`grid md:grid-cols-2 gap-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 hover:border-orange-500/40 transition-all group">
                <div className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-all">
                  <Briefcase className="h-7 w-7 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Who We Are</h3>
                <p className="text-gray-300 leading-relaxed">
                  Victorious Production is a full-service media and event production company operating under Neema Gospel Choir,
                  established to deliver high-standard commercial and creative production solutions. We integrate technical excellence
                  with strong creative direction, providing end-to-end production services for live events, digital media,
                  and brand-driven content.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 hover:border-orange-500/40 transition-all group">
                <div className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-all">
                  <Target className="h-7 w-7 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To deliver exceptional production experiences that elevate content, engage audiences, and transform visions into reality.
                  We combine creative direction, technical expertise, and structured management to produce work that meets international standards.
                </p>
              </div>
            </div>

            {/* Team Structure */}
            <div className={`bg-white/5 rounded-2xl p-8 border border-white/10 transition-all duration-700 delay-200 hover:border-orange-500/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-orange-500/20 rounded-full px-4 py-1.5 mb-3">
                  <Users className="h-3.5 w-3.5 text-orange-400" />
                  <span className="text-xs font-semibold text-orange-300">Our Team</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Production Team Structure</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {teamRoles.map((role, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-full bg-white/10 text-gray-300 text-sm hover:bg-orange-500/20 hover:text-white transition-all">
                    {role}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-sm text-center mt-4">
                Our hybrid team combines experienced professionals from Neema Gospel Choir with external industry experts,
                ensuring creative authenticity and technical depth.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white">Why Choose Victorious Production</h3>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                {whyChooseUs.map((item, idx) => (
                  <div key={idx} className="text-center p-4 rounded-xl bg-white/5 hover:bg-orange-500/10 transition-all group">
                    <item.icon className="h-8 w-8 text-orange-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-xs">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Integration Note */}
            <div className={`p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/20 text-center transition-all duration-700 delay-400 hover:border-orange-500/40 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Globe className="h-8 w-8 text-orange-400 mx-auto mb-2" />
              <p className="text-gray-300 max-w-2xl mx-auto">
                All production activities related to Neema Gospel Choir are executed through Victorious Production
                in collaboration with the Media Department, ensuring consistency in quality, brand alignment,
                and efficient use of production resources across all platforms.
              </p>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-orange-500/20 via-orange-500/10 to-transparent rounded-2xl p-8 border border-orange-500/30">
            <Sparkles className="h-12 w-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Ready to Bring Your Vision to Life?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              Whether you need audio production, video production, live event support, or complete event management,
              Victorious Production delivers professional results that exceed expectations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold transition-all hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: brandOrange }}
              >
                <MessageCircle className="h-5 w-5" />
                Request a Quote
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:border-orange-500 hover:bg-orange-500/10 transition-all hover:scale-105">
                <Phone className="h-5 w-5" />
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className={`mt-12 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 transition-all duration-700 delay-600 hover:border-orange-500/30 hover:bg-orange-500/5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                <Sparkles className="h-4 w-4 text-orange-400" />
                <h4 className="text-white font-semibold">Victorious Production</h4>
              </div>
              <p className="text-gray-400 text-sm">A Division of Neema Gospel Choir | Dar es Salaam, Tanzania</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-gray-400 text-sm hover:text-orange-400 transition-colors">
                <Phone className="h-4 w-4 text-orange-400" />
                <span>+255 766 777 288</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm hover:text-orange-400 transition-colors">
                <Mail className="h-4 w-4 text-orange-400" />
                <span>production@neemagospelchoir.org</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
