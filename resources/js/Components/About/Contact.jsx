import React, { useState, useRef } from 'react';
import {
  MapPin, Phone, Mail, Clock,
  Send, CheckCircle, User, MessageSquare, Calendar, Music, Heart,
  Globe, Award, Users, Mic, Video, ArrowRight, Sparkles, Cross
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ submitted: false, success: false, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const mapRef = useRef(null);

  const brandOrange = '#F15A2B';

  // Contact Information
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['AICT Chang\'ombe Church', 'Temeke, Dar es Salaam', 'Tanzania'],
      color: '#F15A2B'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+255 766 777 288', '+255 766 777 289', '+255 766 777 290'],
      color: '#10B981'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@neemagospelchoir.org', 'booking@neemagospelchoir.org', 'foundation@neemagospelchoir.org'],
      color: '#3B82F6'
    },
    {
      icon: Clock,
      title: 'Service Times',
      details: ['Sunday Worship: 08:00 AM EAT', 'Monday Prayer: 5:30 PM EAT', 'Wednesday Prayer: 5:30 PM EAT', 'Saturday Choir Rehersal: 2:00 PM EAT'],
      color: '#8B5CF6'
    },
  ];

  // Department Contacts
  const departments = [
    {
      name: 'General Inquiries',
      email: 'info@neemagospelchoir.org',
      phone: '+255 766 777 288',
      icon: Mail,
    },
    {
      name: 'Bookings & Events',
      email: 'booking@neemagospelchoir.org',
      phone: '+255 766 777 291',
      icon: Calendar,
    },
    {
      name: 'Media & PR',
      email: 'media@neemagospelchoir.org',
      phone: '+255 766 777 292',
      icon: Video,
    },
    {
      name: 'Foundation',
      email: 'foundation@neemagospelchoir.org',
      phone: '+255 766 777 293',
      icon: Heart,
    },
    {
      name: 'Music Ministry',
      email: 'music@neemagospelchoir.org',
      phone: '+255 766 777 294',
      icon: Music,
    },
    {
      name: 'Membership',
      email: 'membership@neemagospelchoir.org',
      phone: '+255 766 777 295',
      icon: Users,
    },
  ];

  // Social Media Links with SVG icons
  const socialLinks = [
    {
      name: 'Facebook',
      url: '#',
      color: '#1877F2',
      username: '@NeemaGospelChoir',
      svg: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: '#',
      color: '#E4405F',
      username: '@neemagospelchoir',
      svg: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: '#',
      color: '#FF0000',
      username: 'Neema Gospel Choir',
      svg: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: '#',
      color: '#1DA1F2',
      username: '@NeemaChoir',
      svg: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
      )
    },
  ];



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! We will get back to you within 24 hours.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);

      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitted: false, success: false, message: '' });
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 px-4 py-1.5 mb-6">
            <Mail className="h-3.5 w-3.5 text-orange-400" />
            <span className="text-[10px] font-semibold text-orange-300 tracking-wider uppercase">Get in Touch</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-orange-100 to-orange-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We'd love to hear from you! Whether you have questions about our ministry,
            want to book us for an event, or simply want to connect.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-500 hover:scale-105 hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-all">
                <info.icon className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-400 text-sm">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Main Contact Section - 2 Columns */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-orange-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
            </div>

            {formStatus.submitted ? (
              <div className={`p-4 rounded-xl ${formStatus.success ? 'bg-green-500/20 border border-green-500/30' : 'bg-red-500/20 border border-red-500/30'}`}>
                <div className="flex items-center gap-3">
                  <CheckCircle className={`h-6 w-6 ${formStatus.success ? 'text-green-400' : 'text-red-400'}`} />
                  <p className="text-white">{formStatus.message}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <User className="h-3 w-3 inline mr-1 text-orange-400" />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Mail className="h-3 w-3 inline mr-1 text-orange-400" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: `linear-gradient(135deg, ${brandOrange}, #ff7b33)` }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Department Contacts */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                <Users className="h-5 w-5 text-orange-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Department Contacts</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {departments.map((dept, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                      <dept.icon className="h-4 w-4 text-orange-400" />
                    </div>
                    <h3 className="text-white font-semibold text-sm">{dept.name}</h3>
                  </div>
                  <div className="space-y-1 ml-11">
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <Mail className="h-3 w-3 text-orange-400" />
                      <a href={`mailto:${dept.email}`} className="hover:text-orange-400 transition-colors">
                        {dept.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <Phone className="h-3 w-3 text-orange-400" />
                      <a href={`tel:${dept.phone}`} className="hover:text-orange-400 transition-colors">
                        {dept.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-orange-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Find Us</h2>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.456789!2d39.267890!3d-6.823456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4e8f2d5c5c5d%3A0x123456789abcdef!2sAICT%20Chang&#39;ombe%20Church!5e0!3m2!1sen!2stz!4v1700000000000!5m2!1sen!2stz"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Neema Gospel Choir Location"
              className="w-full"
            />
          </div>
          <p className="text-gray-500 text-sm text-center mt-3">
            AICT Chang'ombe Church, Temeke, Dar es Salaam, Tanzania
          </p>
        </div>



        {/* Affiliation Note */}
        <div className="mt-12 text-center p-4 rounded-xl bg-white/5 border border-white/10">
          <p className="text-gray-400 text-sm">
            <strong className="text-orange-400">Neema Gospel Choir</strong> is a ministry of
            <strong className="text-white"> Neema Ministries</strong> under
            <strong className="text-white"> Africa Inland Church Tanzania (AICT Chang'ombe)</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
