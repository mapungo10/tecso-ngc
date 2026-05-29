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

  // Executive Leadership: Chairman and Vice Chairman at the top
  const topExecutiveLeaders = [
    {
      id: 1,
      name: 'Samuel John Nkola',
      position: 'Chairman',
      role: 'Strategic Direction & Policy Oversight',
      bio: 'Samuel John Nkola is a Tanzanian gospel music leader best known as the chairman of the Neema Gospel Choir. He is recognized for guiding one of East Africa\'s most celebrated gospel choirs, contributing to the group\'s musical direction, outreach, and community ministry. As chairman, Nkola oversees the strategic and organizational operations of Neema Gospel Choir. His role encompasses coordinating performances, managing partnerships with churches and sponsors, and ensuring the choir\'s music aligns with its Christian mission. Under his leadership, the group has strengthened its national presence through high-quality recordings and live worship events.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400',
      email: 'chairman@neemagospelchoir.org',
      phone: '+255 766 777 288',
      committees: ['Executive Leadership', 'Legal Committee (Head)'],
      achievements: ['Strategic Plan "Chachu ya Mabadiliko 2021-2026"', 'Expanded regional influence', 'Guided choir to national prominence'],
      icon: Crown,
    },
    {
      id: 2,
      name: 'Baraka Yohana Makaya',
      position: 'Vice Chairman',
      role: 'Leadership Support & Interdepartmental Coordination',
      bio: 'Baraka Yohana Makaya is a Tanzanian gospel musician and church leader best known as the vice chairman of the Neema Gospel Choir. As vice chairman, Makaya supports the administrative and creative direction of the Neema Gospel Choir, a collective known for live performances and television appearances across Tanzania. He is involved in coordinating choir activities, organizing performances, and mentoring younger singers. His role bridges leadership and artistry, ensuring the choir\'s repertoire continues to blend worship traditions with modern harmonies and African rhythms.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400',
      email: 'vicechairman@neemagospelchoir.org',
      phone: '+255 766 777 289',
      committees: ['Executive Leadership'],
      achievements: ['Strengthened choir unity and performance coordination', 'Mentored emerging gospel artists'],
      icon: UserCheck,
    },
  ];

  // Three Secretaries below the Chairman and Vice Chairman
  const secretaryLeaders = [
    {
      id: 3,
      name: 'Alpha Ephafra Makaya',
      position: 'Secretary',
      role: 'Administration & Documentation',
      bio: 'Alpha Ephafra Makaya is the Secretary-General of the Neema Gospel Choir. In this role, Makaya oversees the coordination, communication, and daily administration that sustain one of East Africa\'s most prominent gospel ensembles. He manages all choir secretaries and committee leaders, ensuring different departments work in harmony. His responsibilities include supervising internal communication, guiding committee operations, and maintaining consistency in ministry objectives.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400',
      email: 'secretary@neemagospelchoir.org',
      phone: '+255 766 777 290',
      committees: ['Executive Leadership', 'Administration'],
      achievements: ['Streamlined documentation systems', 'Improved communication protocols', 'Strengthened governance compliance'],
      icon: UserCheck,
    },
    {
      id: 4,
      name: 'Tito Alfred Pendwa',
      position: 'Deputy Secretary',
      role: 'Media, Business Development & Logistics',
      bio: 'Titus Alfred Pendwa serves as the Deputy Secretary of the Neema Gospel Choir, overseeing media operations, digital communication, strategic planning, business development, and logistics. He manages sponsorships, partnerships, branding, publicity, and digital growth strategy. His departments include Media & ICT, Planning & Development, Business Development, and Logistics & Transport. His role ensures alignment between operations, media, and development goals.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400',
      email: 'deputysecretary.media@neemagospelchoir.org',
      phone: '+255 766 777 293',
      committees: ['Executive Leadership', 'Media, Planning & Development', 'Business Development', 'Logistics'],
      achievements: ['Enhanced media presence and digital outreach', 'Developed strategic partnerships', 'Strengthened brand visibility'],
      icon: Users,
    },
    {
      id: 5,
      name: 'Ester Deus Matelanya',
      position: 'Deputy Secretary',
      role: 'Discipline, Prayer & Mission, Outfit & Styling',
      bio: 'Ester Deus is a Tanzanian gospel singer and choir administrator known for her leadership role as Deputy Secretary of the Neema Gospel Choir. She coordinates spiritual welfare, discipline systems, prayer programs, missions, and outreach activities. She supervises member conduct, ethical standards, choir uniforms, styling, and presentation standards. Her departments include Prayer & Mission, Discipline Department, and Outfit & Styling Department.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400',
      email: 'deputysecretary.discipline@neemagospelchoir.org',
      phone: '+255 766 777 294',
      committees: ['Executive Leadership', 'Discipline Department', 'Prayer & Mission', 'Outfit & Styling'],
      achievements: ['Enhanced member discipline and professionalism', 'Strengthened spiritual welfare programs', 'Improved choir presentation standards'],
      icon: HandHeart,
    },
  ];

  // Finance Department
  const financeLeaders = [
    {
      id: 6,
      name: 'Quillian Japhet Kilago',
      position: 'Finance Director',
      role: 'Financial Management & Budgeting',
      bio: 'Quillian Japhet Kilago is a Tanzanian finance professional who serves as the Finance Director of the Neema Gospel Choir. He oversees financial planning, budgeting, income, expenditure, financial reporting, fundraising, and financial sustainability. He also manages choir assets, equipment records, inventory systems, auditing, and compliance processes. His departments include Finance Department and Asset Inventory & Auditing.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400',
      email: 'finance@neemagospelchoir.org',
      phone: '+255 766 777 291',
      committees: ['Finance Committee', 'Asset Inventory & Auditing'],
      achievements: ['Implemented financial accountability systems', 'Increased revenue streams', 'Strengthened asset management'],
    },
    {
      id: 7,
      name: 'Janesuzy Alfred Methuselah',
      position: 'Deputy Finance Director',
      role: 'Financial Operations & Record Keeping',
      bio: 'Janesuzy Alfred Methuselah is a Tanzanian gospel music professional serving as the Deputy Finance Director of the Neema Gospel Choir. She assists the Finance Director in daily financial operations, maintains transaction records, supports budgeting and expenditure monitoring, coordinates payment processing and reconciliations, prepares periodic financial summaries, and assists in fundraising and resource mobilization.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400',
      email: 'finance.assistant@neemagospelchoir.org',
      phone: '+255 766 777 295',
      committees: ['Finance Committee'],
      achievements: ['Streamlined budget processes', 'Improved financial tracking', 'Enhanced transparency'],
    },
  ];

  // Music & Technical Directors
  const musicTechLeaders = [
    {
      id: 8,
      name: 'Kepha Abraham Mndeme',
      position: 'Assistant Technical Director / Music Director',
      role: 'Music Direction & Vocal Training',
      bio: 'Kepha Abraham Mndeme is a Tanzanian gospel music professional serving as the Assistant Technical Director / Music Director of the Neema Gospel Choir. He assists the Technical Director in musical coordination, conducts rehearsals and vocal training, coordinates song arrangements and harmonization, supervises choir performance preparation, assists in stage and worship flow management, and supports music production and live recordings.',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=400',
      email: 'music@neemagospelchoir.org',
      phone: '+255 766 777 296',
      committees: ['Music Committee', 'Technical Committee'],
      achievements: ['Arranged hit songs', 'Improved vocal quality', 'Enhanced choir performance standards'],
    },
    {
      id: 9,
      name: 'Fredrick Japhet Kilago',
      position: 'Technical Director',
      role: 'Sound & Production Management',
      bio: 'Fredrick Japhet Kilago is a Tanzanian gospel music producer, songwriter, and pianist serving as the Technical Director of Neema Gospel Choir. He oversees all music and technical operations, supervises rehearsals and arrangements, ensures high standards in live sound and production quality, coordinates instruments and technical equipment, leads technical teams during recordings and live events, and develops technical systems for concerts and broadcasts.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400',
      email: 'technical@neemagospelchoir.org',
      phone: '+255 766 777 297',
      committees: ['Technical Committee', 'Music Department'],
      achievements: ['Upgraded production systems', 'Led technical team for major concerts', 'Modernized choir sound'],
    },
  ];

  // Public Relations & Discipline
  const prDisciplineLeaders = [
    {
      id: 10,
      name: 'Mariam Protace Wasaga',
      position: 'Spokesperson & Public Relations Manager',
      role: 'Public Relations & Media Spokesperson',
      bio: 'Mariam Protace Wasaga serves as the official Spokesperson and Public Relations Manager of Neema Gospel Choir, responsible for managing the choir\'s public image, institutional communication, media relations, and stakeholder engagement. She functions as the communication bridge between the choir, the public, media institutions, partners, sponsors, and external stakeholders. Her role combines strategic communication, reputation management, publicity coordination, and audience engagement.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400',
      email: 'spokesperson@neemagospelchoir.org',
      phone: '+255 766 777 298',
      committees: ['Public Relations Committee', 'Media & ICT'],
      achievements: ['Represented choir at major events', 'Enhanced media presence', 'Strengthened stakeholder relations'],
    },
    {
      id: 11,
      name: 'Emmanuel Magile Jr.',
      position: 'Discipline Master',
      role: 'Member Discipline & Code of Conduct',
      bio: 'Emmanuel Magile is a Kenyan gospel leader serving as the Discipline Master of the Neema Gospel Choir. He supervises discipline and behavioral standards, coordinates attendance and commitment monitoring, handles disciplinary procedures and corrective actions, supports event order management and member coordination, promotes accountability and institutional culture, and coordinates guidance and support for male members.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400',
      email: 'discipline@neemagospelchoir.org',
      phone: '+255 766 777 299',
      committees: ['Discipline Department'],
      achievements: ['Strengthened code of conduct', 'Improved member accountability', 'Enhanced choir professionalism'],
    },
    {
      id: 12,
      name: 'Jesca Hezron Sato',
      position: 'Discipline Mistress',
      role: 'Member Welfare & Conflict Resolution',
      bio: 'Jesca Hezron Swalala is a Kenyan gospel leader serving as the Discipline Mistress of the Neema Gospel Choir. She monitors discipline and member conduct, enforces choir rules and attendance standards, supports conflict resolution and welfare coordination, maintains order during rehearsals and events, coordinates guidance and counseling for female members, and promotes professionalism and spiritual discipline.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400',
      email: 'welfare@neemagospelchoir.org',
      phone: '+255 766 777 300',
      committees: ['Discipline Department'],
      achievements: ['Resolved member conflicts', 'Improved member relations', 'Strengthened choir unity'],
    },
  ];

  // Legal Committee members
  const legalCommitteeMembers = [
    { name: 'Edson Ryan Mahalu', role: 'Choir Advocate', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100' },
    { name: 'David Mohamed Kusekwa', role: 'Choir Advocate', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100' },
  ];

  // Asset Inventory & Auditing members
  const assetAuditMembers = [
    { name: 'Sarah Emmanuel Gagala', role: 'Internal Auditor', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100' },
    { name: 'Yohana Paul', role: 'Inventory Manager', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100' },
  ];

  // 6 Committees with 4 members each (updated with document info)
  const committees = [
    {
      id: 1,
      name: 'Finance Committee',
      icon: Briefcase,
      color: 'bg-emerald-500/20',
      iconColor: 'text-emerald-400',
      description: 'Responsible for financial planning, budgeting, and accountability',
      members: [
        { name: 'Quillian Japhet Kilago', role: 'Finance Director', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100' },
        { name: 'Janesuzy Alfred Methuselah', role: 'Deputy Finance Director', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100' },
        { name: 'Sarah Emmanuel Gagala', role: 'Internal Auditor', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100' },
        { name: 'Yohana Paul', role: 'Inventory Manager', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100' },
      ]
    },
    {
      id: 2,
      name: 'Technical & Music Department',
      icon: Music,
      color: 'bg-purple-500/20',
      iconColor: 'text-purple-400',
      description: 'Responsible for music direction, arrangement, and technical production',
      members: [
        { name: 'Fredrick Japhet Kilago', role: 'Technical Director', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100' },
        { name: 'Kepha Abraham Mndeme', role: 'Music Director', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=100' },
        { name: 'James Mwakyusa', role: 'Sound Engineer', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100' },
        { name: 'Daniel Mwita', role: 'Lighting Tech', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100' },
      ]
    },
    {
      id: 3,
      name: 'Media, Planning & Development',
      icon: Camera,
      color: 'bg-pink-500/20',
      iconColor: 'text-pink-400',
      description: 'Responsible for content creation, social media, and strategic development',
      members: [
        { name: 'Mariam Protace Wasaga', role: 'Spokesperson & PR', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100' },
        { name: 'Tito Alfred Pendwa', role: 'Director', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100' },
        { name: 'Neema Mushi', role: 'Media Manager', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100' },
        { name: 'Joseph Kileo', role: 'Content Creator', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100' },
      ]
    },
    {
      id: 4,
      name: 'Prayer & Mission Department',
      icon: Church,
      color: 'bg-indigo-500/20',
      iconColor: 'text-indigo-400',
      description: 'Responsible for spiritual welfare, prayer programs, and mission outreach',
      members: [
        { name: 'Ester Deus Matelanya', role: 'Director', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100' },
        { name: 'Pastor John Mwita', role: 'Prayer Coordinator', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100' },
        { name: 'Sister Grace Mrema', role: 'Mission Coordinator', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100' },
        { name: 'Brother Peter Kileo', role: 'Spiritual Advisor', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100' },
      ]
    },
    {
      id: 5,
      name: 'Discipline Department',
      icon: Shield,
      color: 'bg-red-500/20',
      iconColor: 'text-red-400',
      description: 'Responsible for member discipline, code of conduct, and welfare',
      members: [
        { name: 'Emmanuel Magile Jr.', role: 'Discipline Master', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100' },
        { name: 'Jesca Hezron Sato', role: 'Discipline Mistress', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100' },
        { name: 'Peter John', role: 'Secretary', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100' },
        { name: 'Elizabeth Mrema', role: 'Welfare Officer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100' },
      ]
    },
    {
      id: 6,
      name: 'Outfit & Styling Department',
      icon: Layout,
      color: 'bg-amber-500/20',
      iconColor: 'text-amber-400',
      description: 'Responsible for choir uniforms, styling, and presentation standards',
      members: [
        { name: 'Ester Deus Matelanya', role: 'Director', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100' },
        { name: 'Sarah Mwakyembe', role: 'Fashion Coordinator', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100' },
        { name: 'Grace William', role: 'Uniform Manager', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100' },
        { name: 'Neema Mushi', role: 'Stylist', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100' },
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

          {/* Top Executive Section: Chairman and Vice Chairman */}
          <div className="mb-16">
            <div className={`text-center mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 mb-3">
                <Crown className="h-4 w-4 text-orange-400" />
                <span className="text-xs font-semibold text-white">Executive Leadership</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Chairman & Vice Chairman</h2>
              <p className="text-gray-400 mt-2">Top leadership guiding the choir's vision and mission</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {topExecutiveLeaders.map((leader, idx) => (
                <div
                  key={leader.id}
                  className={`group cursor-pointer bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${300 + idx * 100}ms` }}
                  onClick={() => openLeaderModal(leader)}
                >
                  <div className="relative h-80 overflow-hidden">
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

          {/* Three Secretaries Section */}
          <div className="mb-20">
            <div className={`text-center mb-10 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 mb-3">
                <Users className="h-4 w-4 text-orange-400" />
                <span className="text-xs font-semibold text-white">Secretariat</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Secretaries & Deputy Secretaries</h2>
              <p className="text-gray-400 mt-2">Overseeing administration, media, discipline, and mission</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {secretaryLeaders.map((leader, idx) => (
                <div
                  key={leader.id}
                  className={`group cursor-pointer bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${400 + idx * 100}ms` }}
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

          {/* Finance Directors Row */}
          <div className="mb-20">
            <div className={`text-center mb-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

              {/* Discipline Section - Master */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-orange-400" />
                  Discipline Master
                </h3>
                <div className="space-y-3">
                  {prDisciplineLeaders.slice(1, 2).map((leader, idx) => (
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

              {/* Discipline Section - Mistress */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-orange-400" />
                  Discipline Mistress
                </h3>
                <div className="space-y-3">
                  {prDisciplineLeaders.slice(2).map((leader, idx) => (
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

          {/* Legal Committee Section */}
          <div className="mb-16">
            <div className={`text-center mb-10 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 mb-3">
                <Award className="h-4 w-4 text-orange-400" />
                <span className="text-xs font-semibold text-white">Legal Support</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Legal Committee</h2>
              <p className="text-gray-400 mt-2">Providing legal advisory, contract review, and compliance support</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {legalCommitteeMembers.map((member, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 transition-all duration-500 hover:scale-105 hover:border-orange-500/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${600 + idx * 100}ms` }}
                >
                  <img src={member.image} alt={member.name} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <h3 className="text-white font-semibold">{member.name}</h3>
                    <p className="text-orange-400 text-sm">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6 Committees Section */}
          {/* <div className="mb-16">
            <div className={`text-center mb-10 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 mb-3">
                <Users className="h-4 w-4 text-orange-400" />
                <span className="text-xs font-semibold text-white">Operational Structure</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Specialized Committees</h2>
              <p className="text-gray-400 mt-2">Each committee has dedicated members ensuring smooth operations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {committees.map((committee, idx) => (
                <div
                  key={committee.id}
                  className={`group bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-orange-500/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${700 + idx * 100}ms` }}
                >
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
          </div> */}

          {/* Organizational Structure Visual */}
          <div className={`mt-12 p-8 rounded-2xl bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                <p className="text-[9px] text-gray-400">Samuel John Nkola</p>
              </div>
              <div className="text-2xl text-orange-400 self-center">→</div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-2">
                  <UserCheck className="h-8 w-8 text-orange-400" />
                </div>
                <p className="text-xs text-white font-semibold">Vice Chairman</p>
                <p className="text-[9px] text-gray-400">Baraka Yohana Makaya</p>
              </div>
              <div className="text-2xl text-orange-400 self-center">↓</div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-2">
                  <Users className="h-8 w-8 text-orange-400" />
                </div>
                <p className="text-xs text-white font-semibold">3 Secretaries</p>
                <p className="text-[9px] text-gray-400">Alpha, Tito, Ester</p>
              </div>
              <div className="text-2xl text-orange-400 self-center">→</div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-2">
                  <Briefcase className="h-8 w-8 text-orange-400" />
                </div>
                <p className="text-xs text-white font-semibold">Directors</p>
                <p className="text-[9px] text-gray-400">Finance, Technical, PR</p>
              </div>
              <div className="text-2xl text-orange-400 self-center">→</div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-2">
                  <Shield className="h-8 w-8 text-orange-400" />
                </div>
                <p className="text-xs text-white font-semibold">Committees</p>
                <p className="text-[9px] text-gray-400">6 Specialized Teams</p>
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
