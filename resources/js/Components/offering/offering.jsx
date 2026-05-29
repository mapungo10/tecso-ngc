import React, { useState, useEffect, useRef } from 'react';
import {
  Heart, Gift, Banknote, CreditCard, Smartphone, Package,
  HandHeart, Church, Users, ArrowRight, CheckCircle,
  Calendar, MapPin, Phone, Mail, Globe, Clock,
  Shield, Award, Target, Eye, Cross, BookOpen, DollarSign,
  Building2, Landmark, Utensils, Book, Shirt, School,
  Droplet, Coffee, Home, Baby, Activity, AlertCircle
} from 'lucide-react';

export default function OfferingsDonationsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('financial');
  const [copiedBank, setCopiedBank] = useState(null);
  const [copiedMobile, setCopiedMobile] = useState(null);
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

  // Bank Accounts - CRDB
  const bankAccounts = [
    {
      id: 1,
      bankName: 'CRDB Bank',
      accountName: 'Neema Gospel Choir Foundation',
      accountNumber: '0150234567800',
      accountType: 'Current Account',
      currency: 'TZS',
      branch: 'Chang\'ombe Branch, Dar es Salaam',
      swiftCode: 'CORUTZTZ',
      color: 'bg-blue-500/20',
      icon: Landmark,
    },
    {
      id: 2,
      bankName: 'CRDB Bank',
      accountName: 'Neema Gospel Choir - Ministry Fund',
      accountNumber: '0150234567801',
      accountType: 'Collection Account',
      currency: 'TZS',
      branch: 'Temeke Branch, Dar es Salaam',
      swiftCode: 'CORUTZTZ',
      color: 'bg-emerald-500/20',
      icon: Building2,
    },
  ];

  // Mobile Money - Vodacom
  const mobileMoneyAccounts = [
    {
      id: 1,
      provider: 'Vodacom M-Pesa',
      number: '0766777288',
      name: 'Neema Gospel Choir',
      type: 'Pay Bill',
      businessNumber: '767777',
      accountNumber: '288',
      instructions: 'Go to M-Pesa > Pay Bill > Enter Business Number 767777 > Account Number 288 > Enter Amount > Confirm',
      color: 'bg-red-500/20',
      icon: Smartphone,
    },
    {
      id: 2,
      provider: 'Vodacom M-Pesa',
      number: '0766777289',
      name: 'Neema Gospel Choir Foundation',
      type: 'Send Money',
      instructions: 'Go to M-Pesa > Send Money > Enter Number 0766777289 > Enter Amount > Confirm',
      color: 'bg-red-500/20',
      icon: Smartphone,
    },
  ];

  // Material Donation Items
  const materialDonations = [
    {
      id: 1,
      category: 'School Supplies',
      icon: School,
      color: 'bg-orange-500/20',
      iconColor: 'text-orange-400',
      items: [
        'Exercise books (30+ pages)',
        'Pens and pencils',
        'School uniforms',
        'Backpacks/bags',
        'Mathematics sets',
        'Dictionaries',
      ],
    },
    {
      id: 2,
      category: 'Food Items',
      icon: Utensils,
      color: 'bg-green-500/20',
      iconColor: 'text-green-400',
      items: [
        'Rice (10kg, 25kg)',
        'Beans',
        'Maize flour',
        'Cooking oil',
        'Sugar',
        'Milk powder',
      ],
    },
    {
      id: 3,
      category: 'Clothing & Shoes',
      icon: Shirt,
      color: 'bg-purple-500/20',
      iconColor: 'text-purple-400',
      items: [
        'Children\'s clothes (ages 5-17)',
        'School shoes',
        'Sweaters/jackets',
        'Socks and underwear (new)',
        'Church outfits',
        'Sandals',
      ],
    },
    {
      id: 4,
      category: 'Hygiene & Medical',
      icon: Droplet,
      color: 'bg-cyan-500/20',
      iconColor: 'text-cyan-400',
      items: [
        'Soap and detergent',
        'Toothpaste and toothbrushes',
        'Sanitary pads',
        'First aid kits',
        'Mosquito nets',
        'Hand sanitizers',
      ],
    },
    {
      id: 5,
      category: 'Furniture & Equipment',
      icon: Home,
      color: 'bg-amber-500/20',
      iconColor: 'text-amber-400',
      items: [
        'Desks and chairs',
        'Bookshelves',
        'Mattresses',
        'Musical instruments',
        'Audio equipment',
        'Computers/laptops',
      ],
    },
    {
      id: 6,
      category: 'Children\'s Needs',
      icon: Baby,
      color: 'bg-pink-500/20',
      iconColor: 'text-pink-400',
      items: [
        'Diapers',
        'Baby formula',
        'Toys and games',
        'Blankets',
        'Bibles (children\'s version)',
        'Story books',
      ],
    },
  ];

  // Donation Impact Statistics
  const impactStats = [
    { value: '500+', label: 'Children Supported', icon: Users, color: '#F15A2B' },
    { value: '10+', label: 'Schools Reached', icon: School, color: '#00A8FF' },
    { value: '50+', label: 'Youth Mentored', icon: Heart, color: '#FF69B4' },
    { value: '1000+', label: 'Meals Provided', icon: Utensils, color: '#FFD700' },
  ];

  const copyToClipboard = (text, type, id) => {
    navigator.clipboard.writeText(text);
    if (type === 'bank') {
      setCopiedBank(id);
      setTimeout(() => setCopiedBank(null), 2000);
    } else {
      setCopiedMobile(id);
      setTimeout(() => setCopiedMobile(null), 2000);
    }
  };

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 px-4 py-1.5 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <HandHeart className="h-3.5 w-3.5 text-orange-400" />
            <span className="text-[10px] font-semibold text-orange-300 tracking-wider uppercase">Give Today</span>
          </div>

          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="bg-gradient-to-r from-white via-orange-100 to-orange-400 bg-clip-text text-transparent">
              Support Our Mission
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Give With Purpose
            </span>
          </h1>

          <p className={`text-gray-400 max-w-2xl mx-auto text-lg transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Your generous support helps us spread the Gospel through music, support orphans and vulnerable children,
            and empower youth across Tanzania.
          </p>
        </div>

        {/* Impact Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {impactStats.map((stat, idx) => (
            <div key={idx} className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all">
              <stat.icon className="h-6 w-6 mx-auto mb-2" style={{ color: stat.color }} />
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className={`flex justify-center gap-3 flex-wrap mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={() => setActiveTab('financial')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'financial'
                ? 'text-white shadow-lg'
                : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
            style={activeTab === 'financial' ? { backgroundColor: brandOrange } : {}}
          >
            <Banknote className="h-4 w-4" />
            Financial Giving
          </button>
          <button
            onClick={() => setActiveTab('material')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'material'
                ? 'text-white shadow-lg'
                : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
            style={activeTab === 'material' ? { backgroundColor: brandOrange } : {}}
          >
            <Package className="h-4 w-4" />
            Material Donations
          </button>
        </div>

        {/* Financial Giving Tab */}
        {activeTab === 'financial' && (
          <div className="space-y-10">
            {/* Bank Accounts Section */}
            <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-blue-500/20 rounded-full px-4 py-1.5 mb-3">
                  <Landmark className="h-3.5 w-3.5 text-blue-400" />
                  <span className="text-xs font-semibold text-blue-300">Bank Transfer</span>
                </div>
                <h2 className="text-2xl font-bold text-white">CRDB Bank Accounts</h2>
                <p className="text-gray-400 text-sm mt-1">Direct bank transfers to our official accounts</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {bankAccounts.map((account) => (
                  <div key={account.id} className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-orange-500/30 transition-all">
                    <div className={`p-4 ${account.color} border-b border-white/10`}>
                      <div className="flex items-center gap-3">
                        <account.icon className="h-6 w-6 text-blue-400" />
                        <div>
                          <h3 className="text-white font-bold">{account.bankName}</h3>
                          <p className="text-gray-400 text-xs">{account.accountType}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 space-y-3">
                      <div className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span className="text-gray-400 text-sm">Account Name:</span>
                        <span className="text-white text-sm font-medium">{account.accountName}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span className="text-gray-400 text-sm">Account Number:</span>
                        <div className="flex items-center gap-2">
                          <span className="text-white text-sm font-mono">{account.accountNumber}</span>
                          <button
                            onClick={() => copyToClipboard(account.accountNumber, 'bank', account.id)}
                            className="text-orange-400 hover:text-orange-300 text-xs"
                          >
                            {copiedBank === account.id ? 'Copied!' : 'Copy'}
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span className="text-gray-400 text-sm">Currency:</span>
                        <span className="text-white text-sm">{account.currency}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span className="text-gray-400 text-sm">Branch:</span>
                        <span className="text-white text-sm">{account.branch}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Swift Code:</span>
                        <span className="text-white text-sm font-mono">{account.swiftCode}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Money Section - Vodacom */}
            <div className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-red-500/20 rounded-full px-4 py-1.5 mb-3">
                  <Smartphone className="h-3.5 w-3.5 text-red-400" />
                  <span className="text-xs font-semibold text-red-300">Mobile Money</span>
                </div>
                <h2 className="text-2xl font-bold text-white">Vodacom M-Pesa</h2>
                <p className="text-gray-400 text-sm mt-1">Send money directly from your mobile phone</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl border border-red-500/20 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">Pay Bill (Business)</h3>
                      <p className="text-red-400 text-xs">For larger donations</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-gray-400 text-xs mb-1">Business Number:</p>
                      <div className="flex items-center justify-between">
                        <span className="text-white text-lg font-mono">767777</span>
                        <button
                          onClick={() => copyToClipboard('767777', 'mobile', 1)}
                          className="text-orange-400 text-sm"
                        >
                          {copiedMobile === 1 ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-gray-400 text-xs mb-1">Account Number:</p>
                      <div className="flex items-center justify-between">
                        <span className="text-white text-lg font-mono">288</span>
                        <button
                          onClick={() => copyToClipboard('288', 'mobile', 2)}
                          className="text-orange-400 text-sm"
                        >
                          {copiedMobile === 2 ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                    <p className="text-gray-300 text-xs">Instructions:</p>
                    <p className="text-gray-400 text-xs mt-1">Go to M-Pesa &gt; Pay Bill &gt; Enter Business Number 767777 &gt; Account Number 288 &gt; Enter Amount &gt; Confirm</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl border border-green-500/20 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">Send Money (Direct)</h3>
                      <p className="text-green-400 text-xs">For instant transfers</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-gray-400 text-xs mb-1">M-Pesa Number:</p>
                      <div className="flex items-center justify-between">
                        <span className="text-white text-lg font-mono">0766 777 289</span>
                        <button
                          onClick={() => copyToClipboard('0766777289', 'mobile', 3)}
                          className="text-orange-400 text-sm"
                        >
                          {copiedMobile === 3 ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <p className="text-gray-400 text-xs mb-1">Account Name:</p>
                      <p className="text-white text-sm">Neema Gospel Choir Foundation</p>
                    </div>
                  </div>
                  <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                    <p className="text-gray-300 text-xs">Instructions:</p>
                    <p className="text-gray-400 text-xs mt-1">Go to M-Pesa &gt; Send Money &gt; Enter Number 0766777289 &gt; Enter Amount &gt; Confirm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Payment Methods Note */}
            <div className={`text-center p-6 rounded-2xl bg-white/5 border border-white/10 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <CreditCard className="h-8 w-8 text-orange-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Other Payment Methods</h3>
              <p className="text-gray-400 text-sm">
                International donations via credit/debit card coming soon. For now, please use bank transfer.
              </p>
            </div>
          </div>
        )}

        {/* Material Donations Tab */}
        {activeTab === 'material' && (
          <div className="space-y-10">
            {/* Introduction */}
            <div className={`text-center p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Package className="h-10 w-10 text-orange-400 mx-auto mb-3" />
              <h2 className="text-xl font-bold text-white mb-2">Give Material Items</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-sm">
                Your in-kind donations make a direct impact on the lives of orphans and vulnerable children.
                Below are the items we currently need. All donations are tax-deductible.
              </p>
            </div>

            {/* Material Items Grid */}
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {materialDonations.map((category) => (
                <div
                  key={category.id}
                  className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-orange-500/30 transition-all hover:scale-105"
                >
                  <div className={`p-4 ${category.color} border-b border-white/10`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-black/30 flex items-center justify-center">
                        <category.icon className={`h-5 w-5 ${category.iconColor}`} />
                      </div>
                      <h3 className="text-white font-bold">{category.category}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                          <CheckCircle className="h-3 w-3 text-orange-400 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Donation Drop-off Information */}
            <div className={`bg-white/5 rounded-2xl p-8 border border-white/10 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-bold text-white text-center mb-6">How to Donate Material Items</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <MapPin className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                  <h4 className="text-white font-semibold mb-1">Drop-off Location</h4>
                  <p className="text-gray-400 text-sm">
                    AICT Chang'ombe Church<br />
                    Temeke, Dar es Salaam, Tanzania
                  </p>
                  <p className="text-orange-400 text-xs mt-2">Mon-Fri: 9AM - 5PM | Sat: 9AM - 1PM</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <Phone className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                  <h4 className="text-white font-semibold mb-1">Pick-up Arrangement</h4>
                  <p className="text-gray-400 text-sm">
                    For large donations, call us to arrange pick-up
                  </p>
                  <p className="text-orange-400 text-xs mt-2">+255 766 777 288</p>
                </div>
              </div>
              <div className="mt-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center">
                <AlertCircle className="h-5 w-5 text-blue-400 mx-auto mb-2" />
                <p className="text-gray-300 text-sm">
                  Please ensure all donated items are in good, usable condition. For clothing, please wash before donating.
                  For more information about specific needs, please contact us before donating.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Thank You / Call to Action */}
        <div className={`mt-12 text-center transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-orange-500/20 via-orange-500/10 to-transparent rounded-2xl p-8 border border-orange-500/30">
            <Heart className="h-12 w-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Thank You for Your Generosity</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-4">
              Your support changes lives. Every contribution, whether financial or material,
              helps us reach more children and youth with the love of Christ.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Shield className="h-3 w-3 text-orange-400" />
                <span>100% Secure Giving</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <CheckCircle className="h-3 w-3 text-orange-400" />
                <span>Tax Deductible Receipts Available</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Heart className="h-3 w-3 text-orange-400" />
                <span>Direct Impact on Communities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className={`mt-12 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 transition-all duration-700 delay-900 hover:border-orange-500/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                <HandHeart className="h-4 w-4 text-orange-400" />
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
                <span>giving@neemagospelchoir.org</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
