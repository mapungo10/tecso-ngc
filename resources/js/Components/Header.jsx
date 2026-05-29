import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  ShoppingBagIcon,
  NewspaperIcon,
  EnvelopeIcon,
  PlayCircleIcon,
  HeartIcon,
  ChevronDownIcon,
  UserGroupIcon,
  CalendarIcon,
  MicrophoneIcon,
  VideoCameraIcon,
  StarIcon,
  MapPinIcon,
  PhoneIcon,
  PhotoIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Leadership', href: '/leadership' },
  { name: 'Victorious', href: '/production' },
  { name: 'Foundation', href: '/foundation' },
//   { name: 'Gallery', href: '#gallery' },
  { name: 'Shop', href: '/shop' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const brandOrange = '#F15A2B';

  return (
    <>
      {/* Top Bar - Location, Social, Phone */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="bg-black/80 backdrop-blur-md border-b border-white/10">
          <div className="relative mx-auto max-w-7xl px-4 py-2 lg:px-16">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              {/* Left - Phone */}
              <div className="hidden md:flex items-center gap-1.5 text-gray-300">
                <PhoneIcon className="h-3.5 w-3.5 text-[#F15A2B]" />
                <span>+255 766 777 288</span>
              </div>

              {/* Center - Location */}
              <div className="flex items-center gap-1.5 text-gray-300 mx-auto md:mx-0">
                <MapPinIcon className="h-3.5 w-3.5 text-[#F15A2B]" />
                <span>AICT Chang'ombe Church, Dar es Salaam, Tanzania</span>
              </div>

              {/* Right - Social Icons */}
              <div className="hidden md:flex items-center gap-2">
                <a href="#" className="p-1.5 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110">
                  <svg className="h-3.5 w-3.5 text-gray-300 hover:text-[#F15A2B]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="p-1.5 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110">
                  <svg className="h-3.5 w-3.5 text-gray-300 hover:text-[#F15A2B]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                  </svg>
                </a>
                <a href="#" className="p-1.5 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110">
                  <svg className="h-3.5 w-3.5 text-gray-300 hover:text-[#F15A2B]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
                <a href="#" className="p-1.5 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110">
                  <svg className="h-3.5 w-3.5 text-gray-300 hover:text-[#F15A2B]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Main Header */}
      <header
        className={`fixed left-0 right-0 z-40 mt-6 transition-all duration-700 ease-out ${
          isVisible ? 'translate-y-1' : '-translate-y-full'
        }`}
        style={{ top: '2.5rem' }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className={`relative rounded-full transition-all duration-500 ${
              scrolled
                ? 'bg-black/90 shadow-2xl shadow-[#F15A2B]/20 backdrop-blur-xl border border-[#F15A2B]/30'
                : 'bg-black/70 backdrop-blur-lg border border-white/10'
            }`}
          >

            {/* Background glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F15A2B]/5 via-transparent to-[#F15A2B]/5 opacity-0 transition-opacity duration-500" />

            <nav className="relative flex items-center justify-between px-4 py-2 lg:px-6">
              {/* Logo Section - Left */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative">

                  <div className="relative flex h-12 w-70 items-center justify-center rounded-full overflow-hidden  p-1 transition-all duration-300 group-hover:scale-110">
                    <img
                      src="../logo.png"
                      alt="Neema Gospel Choir Logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Desktop Navigation - Center */}
              <div className="hidden lg:flex lg:gap-x-0.5 xl:gap-x-1">
                {navigation.map((item) => (
                  <div key={item.name} className="relative">
                    <a
                      href={item.href}
                      className="relative flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300 text-gray-200 hover:text-white"
                      style={{ hover: { color: brandOrange } }}
                      onMouseEnter={(e) => e.currentTarget.style.color = brandOrange}
                      onMouseLeave={(e) => e.currentTarget.style.color = ''}
                    >
                      <span>{item.name}</span>
                      <span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-4/5"
                        style={{ background: `linear-gradient(90deg, ${brandOrange}, #ff7b33)` }}
                      />
                    </a>
                  </div>
                ))}
              </div>

              {/* Right Section - Offering Button */}
              <div className="hidden lg:flex items-center gap-3">
                <a
                  href="/offering"
                  className="relative group overflow-hidden rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${brandOrange}, #ff7b33)`,
                    color: 'white',
                    boxShadow: `0 2px 10px ${brandOrange}40`
                  }}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    <HeartIcon className="h-3.5 w-3.5" />
                    Give Offering
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#F15A2B] to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2 inline-flex items-center justify-center rounded-full p-2 text-gray-300 transition-all duration-300 hover:scale-105 hover:bg-white/10"
                  style={{ hover: { color: brandOrange } }}
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile menu - Full screen floating style */}
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/95 backdrop-blur-xl px-6 py-6 sm:max-w-sm border-l border-[#F15A2B]/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full overflow-hidden bg-white p-1">
                <img
                  src="/logo.png"
                  alt="Neema Gospel Choir Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-lg font-bold">
                <span style={{ color: '#F15A2B' }}>NEEMA</span>
                <span className="text-white"> Gospel</span>
              </span>
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-full p-2.5 text-gray-300 transition-all duration-300 hover:scale-105 hover:bg-white/10"
              style={{ hover: { color: '#F15A2B' } }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Location & Phone */}
          <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2 text-xs text-gray-300 mb-2">
              <MapPinIcon className="h-3.5 w-3.5 text-[#F15A2B]" />
              <span>AICT Chang'ombe Church, Tanzania</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <PhoneIcon className="h-3.5 w-3.5 text-[#F15A2B]" />
              <span>+255 766 777 288</span>
            </div>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-800">
              <div className="space-y-1 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className="-mx-3 flex items-center gap-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 transition-all duration-200 hover:bg-white/10"
                      style={{ hover: { color: '#F15A2B' } }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#offering"
                  className="flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, #F15A2B, #ff7b33)`,
                    color: 'white'
                  }}
                >
                  <HeartIcon className="h-4 w-4" />
                  Give Offering
                </a>
                <div className="mt-6 flex justify-center gap-4">
                  <a href="#" className="rounded-full bg-white/10 p-2 transition-all duration-300 hover:scale-110 hover:bg-[#F15A2B]">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                  </a>
                  <a href="#" className="rounded-full bg-white/10 p-2 transition-all duration-300 hover:scale-110 hover:bg-[#F15A2B]">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" /></svg>
                  </a>
                  <a href="#" className="rounded-full bg-white/10 p-2 transition-all duration-300 hover:scale-110 hover:bg-[#F15A2B]">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
