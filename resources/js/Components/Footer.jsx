import { useState, useEffect } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [imageLoaded, setImageLoaded] = useState(true);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (subscriberEmail) {
      setEmailSubscribed(true);
      setTimeout(() => setEmailSubscribed(false), 3000);
      setSubscriberEmail('');
    }
  };

  const brandOrange = '#F15A2B';

  // Check if image exists on mount
  useEffect(() => {
    const img = new Image();
    img.src = '/neema-choir-bg.jpg';
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);
  }, []);

  // Custom SVG Icons with brand orange
  const Icons = {
    MusicalNote: () => (
      <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
      </svg>
    ),
    Facebook: () => (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
    Instagram: () => (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
      </svg>
    ),
    YouTube: () => (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
      </svg>
    ),
    Twitter: () => (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    ),
    MapPin: () => (
      <svg className="h-4 w-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    Envelope: () => (
      <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    Phone: () => (
      <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    Heart: () => (
      <svg className="h-3 w-3 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ color: brandOrange }}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    ArrowRight: () => (
      <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    ),
    Check: () => (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  };

  const navigationLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Music', href: '#music' },
    { name: 'VPro', href: '#production' },
    { name: 'Foundation', href: '#foundation' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Shop', href: '#shop' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  const ministries = [
    'Sunday Worship Service',
    'Weekly Prayer Meeting',
    'Youth Gospel Outreach',
    'Prison Ministry',
    'Hospital Visitation',
    'School Programs',
  ];

  const upcomingEvents = [
    { name: 'Neema Gospel Anniversary', date: 'June 12, 2026' },
    { name: 'Worship In Spirit Live', date: 'Every Sunday' },
    { name: 'Inspire Conference', date: 'Coming Soon' },
  ];

  // Fallback background image (unsplash choir image)
  const backgroundImage = imageLoaded
    ? "url('/neema-choir-bg.jpg')"
    : "url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070')";

  return (
    <footer className="relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: backgroundImage,
            backgroundBlendMode: 'overlay'
          }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95" />
        {/* Orange tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F15A2B]/10 via-transparent to-[#F15A2B]/5" />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg viewBox%3D%220%200%20200%20200%22 xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cfilter id%3D%22noiseFilter%22%3E%3CfeTurbulence type%3D%22fractalNoise%22 baseFrequency%3D%220.65%22 numOctaves%3D%223%22 stitchTiles%3D%22stitch%22/%3E%3C/filter%3E%3Crect width%3D%22100%25%22 height%3D%22100%25%22 filter%3D%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] pointer-events-none" />
      </div>

      {/* Animated glowing orbs */}
      <div className="absolute top-0 -left-20 w-80 h-80 rounded-full opacity-20 blur-3xl animate-pulse" style={{ backgroundColor: brandOrange }} />
      <div className="absolute bottom-0 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl animate-pulse" style={{ backgroundColor: brandOrange, animationDelay: '1s' }} />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F15A2B] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

          {/* Brand Column - 4 cols */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-full animate-ping opacity-40" style={{ backgroundColor: brandOrange, animationDuration: '2s' }} />
                <div
                  className="relative flex h-14 w-14 items-center justify-center rounded-full overflow-hidden bg-white shadow-lg transition-all duration-300 hover:scale-110"
                  style={{ boxShadow: `0 0 20px ${brandOrange}40` }}
                >
                  <img
                    src="/neema.png"
                    alt="Neema Gospel Choir Logo"
                    className="h-full w-full object-contain p-2"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/logo.png';
                    }}
                  />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  <span style={{ color: brandOrange }}>NEEMA</span>
                  <span className="text-white"> GOSPEL CHOIR</span>
                </h2>
                <p className="text-xs text-gray-400 tracking-wider">CATALYST FOR TRANSFORMATION</p>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Neema Gospel Choir is a leading gospel music and media institution based in Dar es Salaam,
              Tanzania, recognized for excellence in music, ministry, and media since 1992.
            </p>

            {/* Social Links */}
            <div className="flex gap-2 pt-2">
              {['Facebook', 'Instagram', 'YouTube', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="group relative p-2 rounded-full bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg, #F15A2B, #ff7b33)`;
                    e.currentTarget.style.boxShadow = `0 0 15px ${brandOrange}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  <div className="text-gray-400 group-hover:text-white transition-colors">
                    {social === 'Facebook' && <Icons.Facebook />}
                    {social === 'Instagram' && <Icons.Instagram />}
                    {social === 'YouTube' && <Icons.YouTube />}
                    {social === 'Twitter' && <Icons.Twitter />}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links - 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 relative inline-block">
              Explore
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 rounded-full" style={{ backgroundColor: brandOrange }} />
            </h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all duration-200"
                    onMouseEnter={(e) => e.currentTarget.style.color = brandOrange}
                    onMouseLeave={(e) => e.currentTarget.style.color = ''}
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0">
                      <Icons.ArrowRight />
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries - 3 cols */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 relative inline-block">
              Ministries
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 rounded-full" style={{ backgroundColor: brandOrange }} />
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {ministries.map((ministry, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all duration-200"
                    onMouseEnter={(e) => e.currentTarget.style.color = brandOrange}
                    onMouseLeave={(e) => e.currentTarget.style.color = ''}
                  >
                    <span className="h-1 w-1 rounded-full transition-colors" style={{ backgroundColor: brandOrange }} />
                    {ministry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Events - 3 cols */}
          <div className="lg:col-span-3 space-y-5">
            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 relative inline-block">
                Contact
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 rounded-full" style={{ backgroundColor: brandOrange }} />
              </h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <div className="mt-0.5"><Icons.MapPin /></div>
                  <span>AICT Chang'ombe Church, Temeke, Dar es Salaam, Tanzania</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icons.Envelope />
                  <a href="mailto:info@neemagospelchoir.org" className="text-gray-400 hover:text-white transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = brandOrange} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                    info@neemagospelchoir.org
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icons.Phone />
                  <a href="tel:+255766777288" className="text-gray-400 hover:text-white transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = brandOrange} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                    +255 766 777 288
                  </a>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 relative inline-block">
                Upcoming Events
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 rounded-full" style={{ backgroundColor: brandOrange }} />
              </h3>
              <div className="space-y-2">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs text-gray-400">
                    <div className="h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ backgroundColor: `${brandOrange}20`, color: brandOrange }}>
                      {event.date === 'Dec 12, 2026' ? '12' : event.date === 'Every Sunday' ? 'SU' : 'SO'}
                    </div>
                    <div>
                      <p className="text-gray-300">{event.name}</p>
                      <p className="text-gray-500 text-[10px]">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section - Glass morphism style */}
        <div className="relative my-10 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#F15A2B]/10 to-transparent backdrop-blur-sm" />
          <div className="relative backdrop-blur-md rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="text-center sm:text-left">
                <h4 className="text-lg font-semibold text-white">Stay Updated with Neema</h4>
                <p className="text-sm text-gray-400">Get latest news, events, and music releases directly to your inbox.</p>
              </div>
              <form onSubmit={handleSubscribe} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  value={subscriberEmail}
                  onChange={(e) => setSubscriberEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 rounded-full bg-black/50 px-5 py-2.5 text-sm text-white placeholder-gray-500 border border-white/10 focus:border-[#F15A2B] focus:outline-none focus:ring-1 focus:ring-[#F15A2B] transition-all"
                  required
                />
                <button
                  type="submit"
                  className="group relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                  style={{ background: `linear-gradient(135deg, ${brandOrange}, #ff7b33)` }}
                >
                  <span className="relative z-10">Subscribe</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#F15A2B] to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>
            </div>
            {emailSubscribed && (
              <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-green-500/20 backdrop-blur-sm px-3 py-1 text-xs text-green-400 animate-in fade-in slide-in-from-top-2">
                <Icons.Check />
                Subscribed!
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-gray-500 sm:flex-row">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:text-white transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = brandOrange} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              Privacy Policy
            </a>
            <span className="text-white/10">•</span>
            <a href="#" className="hover:text-white transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = brandOrange} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              Terms of Service
            </a>
            <span className="text-white/10">•</span>
            <a href="#" className="hover:text-white transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = brandOrange} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              Cookie Policy
            </a>
          </div>

          <div className="flex items-center gap-1">
            <span>© {currentYear} Neema Gospel Choir.</span>
            <span className="hidden sm:inline">All rights reserved.</span>
            <Icons.Heart />
            <span className="hidden sm:inline">For God's glory.</span>
          </div>
        </div>
      </div>

      {/* Bottom glowing accent */}
      <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#F15A2B]/50 to-transparent" />
    </footer>
  );
}
