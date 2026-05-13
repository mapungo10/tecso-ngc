import React, { useState, useEffect, useRef } from 'react';
import {
  Users, Shield, Target, Heart, Mic, Video, Calendar,
  MapPin, Mail, Phone, Award, BookOpen, Music, Globe,
  CheckCircle, ArrowRight, Crown, Briefcase, TrendingUp,
  Sparkles, Lightbulb, Star, UserCheck, HandHeart,
  Church, Volume2, Layout, PenTool, Camera, Speaker
} from 'lucide-react';

export default function LeadershipPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeCommittee, setActiveCommittee] = useState(null);
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

  // Executive Leadership (Chairman + 3 Secretaries)
  const executiveLeaders = [
    {
      id: 1,
      name: 'Dr. Samuel J. Nkola',
      position: 'Chairman',
      role: 'Strategic Direction & Policy Oversight',
      bio: 'Dr. Samuel J. Nkola leads the Main Committee as Chairman, providing strategic vision and governance oversight. With extensive leadership experience, he ensures the choir remains aligned with its mission and long-term objectives.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400',
      email: 'chairman@neemagospelchoir.org',
      phone: '+255 766 777 288',
      committees: ['Executive Leadership', 'Main Committee'],
      achievements: ['Strategic Plan "Chachu ya Mabadiliko 2021-2026"', 'Expanded regional influence'],
      icon: Crown,
    },
    {
      id: 2,
      name: 'Alpha John',
      position: 'Secretary',
      role: 'Administration & Documentation',
      bio: 'Alpha John manages all administrative functions, documentation, and official communications of the choir. His organizational excellence ensures smooth operational flow.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400',
      email: 'secretary@neemagospelchoir.org',
      phone: '+255 766 777 290',
      committees: ['Executive Leadership', 'Administration'],
      achievements: ['Streamlined documentation systems', 'Improved communication protocols'],
      icon: UserCheck,
    },
    {
      id: 3,
      name: 'Titus Alfred',
      position: 'Secretary',
      role: 'Member Coordination & Records',
      bio: 'Titus Alfred oversees member records, attendance tracking, and coordinates choir activities. His dedication ensures every member is engaged and informed.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400',
      email: 'members@neemagospelchoir.org',
      phone: '+255 766 777 293',
      committees: ['Executive Leadership', 'Member Services'],
      achievements: ['Implemented digital member database', 'Enhanced member engagement'],
      icon: Users,
    },
    {
      id: 4,
      name: 'Ester Deus',
      position: 'Secretary',
      role: 'Communications & Public Relations',
      bio: 'Ester Deus manages external communications, public relations, and stakeholder engagement. Her expertise in communication strengthens the choir\'s public image.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400',
      email: 'pr@neemagospelchoir.org',
      phone: '+255 766 777 294',
      committees: ['Executive Leadership', 'Public Relations'],
      achievements: ['Enhanced media presence', 'Built strategic partnerships'],
      icon: HandHeart,
    },
  ];

  // Finance Department
  const financeLeaders = [
    {
      id: 5,
      name: 'Quilian Kilago',
      position: 'Finance Director',
      role: 'Financial Management & Budgeting',
      bio: 'Quilian Kilago oversees all financial matters including budgeting, accounting, and financial reporting. His expertise ensures transparency and financial sustainability.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400',
      email: 'finance@neemagospelchoir.org',
      phone: '+255 766 777 291',
      committees: ['Finance Committee'],
      achievements: ['Implemented financial accountability systems', 'Increased revenue streams'],
    },
    {
      id: 6,
      name: 'Janesuzzy Alfred',
      position: 'Assistant Finance Director',
      role: 'Budget Analysis & Reporting',
      bio: 'Janesuzzy Alfred assists in financial planning, budget analysis, and financial reporting. Her attention to detail ensures accurate financial records.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400',
      email: 'finance.assistant@neemagospelchoir.org',
      phone: '+255 766 777 295',
      committees: ['Finance Committee'],
      achievements: ['Streamlined budget processes', 'Improved financial tracking'],
    },
  ];

  // Music & Technical Directors
  const musicTechLeaders = [
    {
      id: 7,
      name: 'Kepha Mdeme',
      position: 'Music Director',
      role: 'Music Direction & Vocal Training',
      bio: 'Kepha Mdeme leads all musical aspects including arrangement, vocal training, and choir performance. His musical excellence has elevated the choir\'s sound.',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=400',
      email: 'music@neemagospelchoir.org',
      phone: '+255 766 777 296',
      committees: ['Music Committee', 'Technical Committee'],
      achievements: ['Arranged hit songs', 'Improved vocal quality'],
    },
    {
      id: 8,
      name: 'Fredric Kilago',
      position: 'Technical Director',
      role: 'Sound & Production Management',
      bio: 'Fredric Kilago manages all technical aspects including sound engineering, lighting, and production quality. He ensures excellence in all technical presentations.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400',
      email: 'technical@neemagospelchoir.org',
      phone: '+255 766 777 297',
      committees: ['Technical Committee'],
      achievements: ['Upgraded production systems', 'Led technical team for major concerts'],
    },
  ];

  // Public Relations & Discipline
  const prDisciplineLeaders = [
    {
      id: 9,
      name: 'Mariam Protus',
      position: 'Choir Spokesperson (Msemaji wa Choir)',
      role: 'Public Relations & Media Spokesperson',
      bio: 'Mariam Protus serves as the official spokesperson for Neema Gospel Choir, representing the choir in media, public events, and official communications.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400',
      email: 'spokesperson@neemagospelchoir.org',
      phone: '+255 766 777 298',
      committees: ['Public Relations Committee'],
      achievements: ['Represented choir at major events', 'Enhanced media presence'],
    },
    {
      id: 10,
      name: 'Emmanuel Magile',
      position: 'Discipline Committee Chair',
      role: 'Member Discipline & Code of Conduct',
      bio: 'Emmanuel Magile leads the Discipline Committee, ensuring members adhere to the choir\'s code of conduct and maintain high standards of professionalism.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400',
      email: 'discipline@neemagospelchoir.org',
      phone: '+255 766 777 299',
      committees: ['Discipline Committee'],
      achievements: ['Strengthened code of conduct', 'Improved member accountability'],
    },
    {
      id: 11,
      name: 'Jesca Swalala',
      position: 'Discipline Committee Vice Chair',
      role: 'Member Welfare & Conflict Resolution',
      bio: 'Jesca Swalala assists in maintaining discipline while focusing on member welfare and conflict resolution. Her compassionate approach balances discipline with care.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400',
      email: 'welfare@neemagospelchoir.org',
      phone: '+255 766 777 300',
      committees: ['Discipline Committee'],
      achievements: ['Resolved member conflicts', 'Improved member relations'],
    },
  ];

  // 6 Committees with 4 members each
  const committees = [
    {
      id: 1,
      name: 'Finance Committee',
      icon: Briefcase,
      color: 'bg-emerald-500/20',
      iconColor: 'text-emerald-400',
      description: 'Responsible for financial planning, budgeting, and accountability',
      members: [
        { name: 'Quilian Kilago', role: 'Director', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100' },
        { name: 'Janesuzzy Alfred', role: 'Assistant Director', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100' },
        { name: 'Peter Mwakyusa', role: 'Accountant', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100' },
        { name: 'Grace William', role: 'Auditor', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100' },
      ]
    },
    {
      id: 2,
      name: 'Music Committee',
      icon: Music,
      color: 'bg-purple-500/20',
      iconColor: 'text-purple-400',
      description: 'Responsible for music direction, arrangement, and vocal training',
      members: [
        { name: 'Kepha Mdeme', role: 'Music Director', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=100' },
        { name: 'Sarah Mwita', role: 'Vocal Coach', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100' },
        { name: 'John Komba', role: 'Arranger', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100' },
        { name: 'Esther Mrema', role: 'Choir Coordinator', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100' },
      ]
    },
    {
      id: 3,
      name: 'Technical Committee',
      icon: Video,
      color: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
      description: 'Responsible for sound, lighting, and production quality',
      members: [
        { name: 'Fredric Kilago', role: 'Technical Director', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100' },
        { name: 'James Mwakyusa', role: 'Sound Engineer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100' },
        { name: 'Daniel Mwita', role: 'Lighting Tech', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100' },
        { name: 'Paul Komba', role: 'Stage Manager', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100' },
      ]
    },
    {
      id: 4,
      name: 'Media & PR Committee',
      icon: Camera,
      color: 'bg-pink-500/20',
      iconColor: 'text-pink-400',
      description: 'Responsible for content creation, social media, and public relations',
      members: [
        { name: 'Mariam Protus', role: 'Spokesperson', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100' },
        { name: 'Neema Mushi', role: 'Media Manager', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100' },
        { name: 'Joseph Kileo', role: 'Content Creator', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100' },
        { name: 'Grace Mwakyembe', role: 'Social Media', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100' },
      ]
    },
    {
      id: 5,
      name: 'Discipline Committee',
      icon: Shield,
      color: 'bg-red-500/20',
      iconColor: 'text-red-400',
      description: 'Responsible for member discipline, code of conduct, and welfare',
      members: [
        { name: 'Emmanuel Magile', role: 'Chair', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100' },
        { name: 'Jesca Swalala', role: 'Vice Chair', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100' },
        { name: 'Peter John', role: 'Secretary', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100' },
        { name: 'Elizabeth Mrema', role: 'Welfare Officer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100' },
      ]
    },
    {
      id: 6,
      name: 'Logistics Committee',
      icon: MapPin,
      color: 'bg-cyan-500/20',
      iconColor: 'text-cyan-400',
      description: 'Responsible for transport, equipment handling, and event logistics',
      members: [
        { name: 'Richard Mwakyusa', role: 'Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100' },
        { name: 'Michael Mushi', role: 'Transport Coordinator', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100' },
        { name: 'John Mwita', role: 'Equipment Manager', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100' },
        { name: 'Paul Mrema', role: 'Event Coordinator', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100' },
      ]
    },
  ];

  const openLeaderModal = (leader) => {
    setSelectedLeader(leader);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedLeader(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div ref={sectionRef} className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header Section */}
          <div className="text-center mb-12">
            <div className={`inline-flex items-center gap-2 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 px-4 py-1.5 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Crown className="h-3.5 w-3.5 text-orange-400" />
              <span className="text-[10px] font-semibold text-orange-300 tracking-wider uppercase">Our Leadership</span>
            </div>

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="bg-gradient-to-r from-white via-orange-100 to-orange-400 bg-clip-text text-transparent">
                Leadership & Committees
              </span>
            </h1>

            <p className={`text-gray-400 max-w-2xl mx-auto text-lg transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Meet the dedicated team leading Neema Gospel Choir with excellence, integrity, and passion for ministry
            </p>
          </div>

          {/* Executive Leadership Section */}
          <div className="mb-20">
            <div className={`text-center mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 mb-3">
                <Crown className="h-4 w-4 text-orange-400" />
                <span className="text-xs font-semibold text-white">Executive Leadership</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Chairman & Secretaries</h2>
              <p className="text-gray-400 mt-2">Strategic leadership guiding the choir's vision and mission</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {executiveLeaders.map((leader, idx) => (
                <div
                  key={leader.id}
                  className={`group cursor-pointer bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${300 + idx * 100}ms` }}
                  onClick={() => openLeaderModal(leader)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-1">
                        <leader.icon className="h-4 w-4 text-orange-400" />
                        <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                      </div>
                      <p className="text-sm text-orange-400 font-semibold">{leader.position}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-400 mb-2 line-clamp-2">{leader.role}</p>
                    <div className="flex flex-wrap gap-1">
                      {leader.committees?.map((committee, i) => (
                        <span key={i} className="text-[9px] bg-orange-500/20 px-2 py-0.5 rounded-full text-orange-300">
                          {committee}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Finance & Music Directors Row */}
          <div className="mb-20">
            <div className={`text-center mb-10 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Department Directors</h2>
              <p className="text-gray-400 mt-2">Leading finance, music, technical, and public relations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Finance Section */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-orange-400" />
                  Finance Department
                </h3>
                <div className="space-y-3">
                  {financeLeaders.map((leader, idx) => (
                    <div
                      key={leader.id}
                      className="group cursor-pointer flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all hover:scale-[1.02]"
                      onClick={() => openLeaderModal(leader)}
                    >
                      <img src={leader.image} alt={leader.name} className="w-12 h-12 rounded-full object-cover" />
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{leader.name}</h4>
                        <p className="text-orange-400 text-xs">{leader.position}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-orange-400" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Music & Technical Section */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Music className="h-5 w-5 text-orange-400" />
                  Music & Technical Department
                </h3>
                <div className="space-y-3">
                  {musicTechLeaders.map((leader, idx) => (
                    <div
                      key={leader.id}
                      className="group cursor-pointer flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all hover:scale-[1.02]"
                      onClick={() => openLeaderModal(leader)}
                    >
                      <img src={leader.image} alt={leader.name} className="w-12 h-12 rounded-full object-cover" />
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{leader.name}</h4>
                        <p className="text-orange-400 text-xs">{leader.position}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-orange-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* PR & Discipline Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* PR Section */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Speaker className="h-5 w-5 text-orange-400" />
                  Public Relations
                </h3>
                <div className="space-y-3">
                  {prDisciplineLeaders.slice(0, 1).map((leader, idx) => (
                    <div
                      key={leader.id}
                      className="group cursor-pointer flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all hover:scale-[1.02]"
                      onClick={() => openLeaderModal(leader)}
                    >
                      <img src={leader.image} alt={leader.name} className="w-12 h-12 rounded-full object-cover" />
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{leader.name}</h4>
                        <p className="text-orange-400 text-xs">{leader.position}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-orange-400" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Discipline Section */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-orange-400" />
                  Discipline Committee
                </h3>
                <div className="space-y-3">
                  {prDisciplineLeaders.slice(1).map((leader, idx) => (
                    <div
                      key={leader.id}
                      className="group cursor-pointer flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all hover:scale-[1.02]"
                      onClick={() => openLeaderModal(leader)}
                    >
                      <img src={leader.image} alt={leader.name} className="w-12 h-12 rounded-full object-cover" />
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{leader.name}</h4>
                        <p className="text-orange-400 text-xs">{leader.position}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-orange-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 6 Committees Section */}
          <div className="mb-16">
            <div className={`text-center mb-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 mb-3">
                <Users className="h-4 w-4 text-orange-400" />
                <span className="text-xs font-semibold text-white">Operational Structure</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Six Specialized Committees</h2>
              <p className="text-gray-400 mt-2">Each committee has 4 dedicated members ensuring smooth operations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {committees.map((committee, idx) => (
                <div
                  key={committee.id}
                  className={`group bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-orange-500/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${600 + idx * 100}ms` }}
                >
                  {/* Committee Header */}
                  <div className={`p-4 ${committee.color} border-b border-white/10`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-black/30 flex items-center justify-center">
                        <committee.icon className={`h-5 w-5 ${committee.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-white font-bold">{committee.name}</h3>
                        <p className="text-gray-400 text-[10px]">{committee.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Committee Members */}
                  <div className="p-4 space-y-3">
                    {committee.members.map((member, memberIdx) => (
                      <div key={memberIdx} className="flex items-center gap-3">
                        <img src={member.image} alt={member.name} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                          <p className="text-white text-sm font-medium">{member.name}</p>
                          <p className="text-orange-400 text-[10px]">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Organizational Structure Visual */}
          <div className={`mt-12 p-8 rounded-2xl bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-lg font-bold text-white text-center mb-6 flex items-center justify-center gap-2">
              <Target className="h-5 w-5 text-orange-400" />
              Organizational Structure
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-2 border-2 border-orange-500">
                  <Crown className="h-8 w-8 text-orange-400" />
                </div>
                <p className="text-xs text-white font-semibold">Chairman</p>
              </div>
              <div className="text-2xl text-orange-400 self-center">→</div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-2">
                  <Users className="h-8 w-8 text-orange-400" />
                </div>
                <p className="text-xs text-white font-semibold">3 Secretaries</p>
              </div>
              <div className="text-2xl text-orange-400 self-center">→</div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-2">
                  <Briefcase className="h-8 w-8 text-orange-400" />
                </div>
                <p className="text-xs text-white font-semibold">Directors</p>
              </div>
              <div className="text-2xl text-orange-400 self-center">→</div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-2">
                  <Shield className="h-8 w-8 text-orange-400" />
                </div>
                <p className="text-xs text-white font-semibold">6 Committees</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leader Modal */}
      {showModal && selectedLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={closeModal} />

          <div className="relative z-10 max-w-3xl w-full max-h-[85vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl shadow-2xl border border-white/20 animate-modal-in" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-80 md:h-full">
                <img src={selectedLeader.image} alt={selectedLeader.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />
                <div className="absolute bottom-4 left-4 right-4 md:hidden">
                  <h3 className="text-xl font-bold text-white">{selectedLeader.name}</h3>
                  <p className="text-orange-400 text-sm">{selectedLeader.position}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="hidden md:block mb-4">
                  <h3 className="text-2xl font-bold text-white">{selectedLeader.name}</h3>
                  <p className="text-orange-400 font-semibold">{selectedLeader.position}</p>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-400 mb-1">Role</p>
                  <p className="text-sm text-white">{selectedLeader.role}</p>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-400 mb-1">Biography</p>
                  <p className="text-sm text-gray-300 leading-relaxed">{selectedLeader.bio}</p>
                </div>

                {selectedLeader.committees && (
                  <div className="mb-4">
                    <p className="text-xs text-gray-400 mb-1">Committees</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedLeader.committees.map((committee, idx) => (
                        <span key={idx} className="text-[10px] bg-orange-500/20 px-2 py-1 rounded-full text-orange-300">
                          {committee}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedLeader.achievements && (
                  <div className="mb-4">
                    <p className="text-xs text-gray-400 mb-1">Key Achievements</p>
                    <ul className="space-y-1">
                      {selectedLeader.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 text-orange-400 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-400 mb-2">Contact Information</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Mail className="h-4 w-4 text-orange-400" />
                      <span>{selectedLeader.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Phone className="h-4 w-4 text-orange-400" />
                      <span>{selectedLeader.phone}</span>
                    </div>
                  </div>
                </div>
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
