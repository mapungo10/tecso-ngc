import React, { useState } from 'react';
import { X, ShoppingBag, CreditCard, Truck, Heart, Star, Shield, ChevronRight, MapPin, Calendar, Info, Zap, ArrowRight } from 'lucide-react';

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  // Convert USD to TSh (using 1 USD = 2,600 TSh)
  const convertToTSh = (usd) => {
    return (usd * 2600).toLocaleString();
  };

  // Merchandise Products only
  const products = [
    {
      id: 1,
      name: 'Neema Choir T-Shirt',
      priceUsd: 24.99,
      priceTSh: 64974,
      originalPriceUsd: 39.99,
      originalPriceTSh: 103974,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500',
      hoverImage: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=500',
      description: 'Premium cotton t-shirt with embroidered Neema Gospel Choir logo. Made from 100% combed ring-spun cotton for ultimate comfort during worship sessions.',
      badge: 'Best Seller',
      badgeColor: 'bg-orange-500',
      type: 'Apparel',
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      colors: ['Black', 'White', 'Navy', 'Orange'],
      rating: 4.8,
      reviews: 234,
      inStock: true,
      deliveryTime: '3-5 business days',
      weight: '0.3 kg',
      features: ['100% Cotton', 'Embroidered Logo', 'Pre-shrunk', 'Double-stitched'],
    },
    {
      id: 2,
      name: 'Worship Hoodie',
      priceUsd: 49.99,
      priceTSh: 129974,
      originalPriceUsd: 79.99,
      originalPriceTSh: 207974,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500',
      hoverImage: 'https://images.unsplash.com/photo-1578681997045-279c5c2c6ba4?q=80&w=500',
      description: 'Comfortable hoodie featuring "Worship in Spirit" design. Perfect for cooler weather and evening worship gatherings.',
      badge: 'Limited Edition',
      badgeColor: 'bg-purple-600',
      type: 'Apparel',
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      colors: ['Black', 'Navy', 'Gray'],
      rating: 4.9,
      reviews: 189,
      inStock: true,
      deliveryTime: '5-7 business days',
      weight: '0.8 kg',
      features: ['80% Cotton 20% Polyester', 'Kangaroo Pocket', 'Adjustable Hood', 'Worship in Spirit Print'],
    },
    {
      id: 3,
      name: 'Neema Cap',
      priceUsd: 19.99,
      priceTSh: 51974,
      originalPriceUsd: 29.99,
      originalPriceTSh: 77974,
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=500',
      hoverImage: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=500',
      description: 'Adjustable cap with embroidered choir logo. Structured fit with curved visor for a classic look.',
      badge: 'New',
      badgeColor: 'bg-green-500',
      type: 'Accessory',
      sizes: ['One Size'],
      colors: ['Black', 'Navy', 'White'],
      rating: 4.7,
      reviews: 156,
      inStock: true,
      deliveryTime: '3-5 business days',
      weight: '0.15 kg',
      features: ['Adjustable Snapback', 'Embroidered Logo', 'Curved Brim', 'Cotton Blend'],
    },
    {
      id: 4,
      name: 'Inspire Tote Bag',
      priceUsd: 14.99,
      priceTSh: 38974,
      originalPriceUsd: 24.99,
      originalPriceTSh: 64974,
      image: 'https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?q=80&w=500',
      hoverImage: 'https://images.unsplash.com/photo-1578389488323-db61d4f1a8e7?q=80&w=500',
      description: 'Eco-friendly tote bag with "Inspire, Empower, Transform" message. Made from recycled materials.',
      badge: 'Eco-Friendly',
      badgeColor: 'bg-emerald-500',
      type: 'Accessory',
      colors: ['Natural', 'Black'],
      rating: 4.8,
      reviews: 98,
      inStock: true,
      deliveryTime: '3-5 business days',
      weight: '0.2 kg',
      features: ['Recycled Materials', 'Reinforced Handles', 'Machine Washable', 'Inspire Message'],
    },
    {
      id: 5,
      name: 'Worship Mug',
      priceUsd: 12.99,
      priceTSh: 33774,
      originalPriceUsd: 19.99,
      originalPriceTSh: 51974,
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=500',
      hoverImage: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?q=80&w=500',
      description: 'Ceramic mug with inspirational scripture verse. Perfect for your morning devotion time.',
      badge: 'Staff Pick',
      badgeColor: 'bg-amber-500',
      type: 'Home',
      colors: ['White', 'Black'],
      rating: 4.9,
      reviews: 312,
      inStock: true,
      deliveryTime: '3-5 business days',
      weight: '0.4 kg',
      features: ['11oz Ceramic', 'Dishwasher Safe', 'Microwave Safe', 'Scripture Verse'],
    },
    {
      id: 6,
      name: 'Faith Wristband Set',
      priceUsd: 9.99,
      priceTSh: 25974,
      originalPriceUsd: 14.99,
      originalPriceTSh: 38974,
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=500',
      hoverImage: 'https://images.unsplash.com/photo-1618354691551-44de113f0164?q=80&w=500',
      description: 'Set of 4 silicone wristbands with faith messages. Great for church groups and events.',
      badge: 'Value Pack',
      badgeColor: 'bg-blue-500',
      type: 'Accessory',
      colors: ['Mix'],
      rating: 4.6,
      reviews: 245,
      inStock: true,
      deliveryTime: '3-5 business days',
      weight: '0.05 kg',
      features: ['Set of 4', 'Silicone', 'Water Resistant', 'Faith Messages'],
    },
    {
      id: 7,
      name: 'Worship Journal',
      priceUsd: 16.99,
      priceTSh: 44174,
      originalPriceUsd: 24.99,
      originalPriceTSh: 64974,
      image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=500',
      hoverImage: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=500',
      description: 'Leather-bound journal with guided worship prompts and scripture references.',
      badge: 'New Release',
      badgeColor: 'bg-indigo-500',
      type: 'Stationery',
      colors: ['Brown', 'Black'],
      rating: 4.8,
      reviews: 67,
      inStock: true,
      deliveryTime: '3-5 business days',
      weight: '0.5 kg',
      features: ['Leather Cover', '200 Pages', 'Ribbon Marker', 'Worship Prompts'],
    },
    {
      id: 8,
      name: 'Neema Blanket',
      priceUsd: 39.99,
      priceTSh: 103974,
      originalPriceUsd: 59.99,
      originalPriceTSh: 155974,
      image: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bac?q=80&w=500',
      hoverImage: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=500',
      description: 'Soft fleece blanket with choir logo. Perfect for cozy worship nights at home.',
      badge: 'Winter Edition',
      badgeColor: 'bg-cyan-500',
      type: 'Home',
      colors: ['Black', 'Navy'],
      rating: 4.9,
      reviews: 89,
      inStock: true,
      deliveryTime: '5-7 business days',
      weight: '1.2 kg',
      features: ['Fleece Material', '50"x60" Size', 'Machine Washable', 'Embroidered Logo'],
    },
    {
      id: 9,
      name: 'Praise Sticker Pack',
      priceUsd: 4.99,
      priceTSh: 12974,
      originalPriceUsd: 9.99,
      originalPriceTSh: 25974,
      image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?q=80&w=500',
      hoverImage: 'https://images.unsplash.com/photo-1606281258491-2ddeffcaf9a9?q=80&w=500',
      description: 'Pack of 10 vinyl stickers with worship themes. Perfect for laptops, water bottles, and journals.',
      badge: 'Bestseller',
      badgeColor: 'bg-pink-500',
      type: 'Stationery',
      rating: 4.7,
      reviews: 423,
      inStock: true,
      deliveryTime: '3-5 business days',
      weight: '0.05 kg',
      features: ['10 Stickers', 'Vinyl Material', 'Water Resistant', 'Various Sizes'],
    },
  ];

  // Create doubled array for seamless marquee
  const marqueeProducts = [...products, ...products, ...products];

  const openModal = (product) => {
    setSelectedProduct(product);
    setSelectedSize(product.sizes?.[0] || '');
    setSelectedColor(product.colors?.[0] || '');
    setQuantity(1);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  const brandOrange = '#F15A2B';

  // Scroll to shop section
  const scrollToShop = () => {
    const shopSection = document.getElementById('shop-marquee');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="shop" className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-950">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, ${brandOrange}15 0%, transparent 50%)`,
          }} />
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F15A2B' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/10 backdrop-blur-md border border-orange-500/30 px-5 py-2 mb-6 shadow-lg">
              <ShoppingBag className="h-4 w-4 text-orange-400" />
              <span className="text-xs font-semibold text-orange-300 tracking-wider uppercase">Merchandise Store</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
                Official Merchandise
              </span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto text-base">
              Wear your faith with pride. Premium quality merchandise designed for worshipers,
              by worshipers. Every purchase supports our ministry and outreach programs.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Zap className="h-4 w-4 text-orange-400" />
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <CreditCard className="h-4 w-4 text-orange-400" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Heart className="h-4 w-4 text-orange-400" />
                <span>30-Day Returns</span>
              </div>
            </div>
          </div>

          {/* Marquee Container - Two Rows */}
          <div id="shop-marquee" className="space-y-6">
            {/* First Row - Left to Right */}
            <div className="relative overflow-hidden py-4">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />
              <div className="overflow-hidden">
                <div className="flex gap-6 animate-marquee-left" style={{ animation: 'scrollLeft 50s linear infinite' }}>
                  {marqueeProducts.slice(0, 12).map((product, idx) => (
                    <div
                      key={`row1-${product.id}-${idx}`}
                      onClick={() => openModal(product)}
                      className="group relative flex-shrink-0 w-64 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border-2 border-white/15 overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:border-orange-500/70 hover:shadow-2xl hover:shadow-orange-500/20"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-[9px] font-bold text-white ${product.badgeColor} z-10`}>
                          {product.badge}
                        </div>
                        {product.originalPriceUsd && (
                          <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">
                            -{Math.round((1 - product.priceUsd / product.originalPriceUsd) * 100)}%
                          </div>
                        )}
                        {/* Hover Overlay - No border hiding */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                          <span className="text-white text-xs font-semibold bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            Quick View →
                          </span>
                        </div>
                      </div>
                      <div className="p-4 relative z-10">
                        <div className="flex items-center gap-1 mb-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} />
                            ))}
                          </div>
                          <span className="text-[10px] text-gray-500">({product.reviews})</span>
                        </div>
                        <h3 className="text-sm font-semibold text-white mb-1 line-clamp-1 group-hover:text-orange-400 transition-colors">{product.name}</h3>
                        <p className="text-[10px] text-gray-400 mb-2 line-clamp-1">{product.type}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-bold" style={{ color: brandOrange }}>TSh {product.priceTSh.toLocaleString()}</span>
                          <span className="text-[10px] text-gray-500 line-through">TSh {product.originalPriceTSh.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Second Row - Right to Left */}
            <div className="relative overflow-hidden py-4">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />
              <div className="overflow-hidden">
                <div className="flex gap-6 animate-marquee-right" style={{ animation: 'scrollRight 50s linear infinite' }}>
                  {marqueeProducts.slice(6, 18).map((product, idx) => (
                    <div
                      key={`row2-${product.id}-${idx}`}
                      onClick={() => openModal(product)}
                      className="group relative flex-shrink-0 w-64 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border-2 border-white/15 overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:border-orange-500/70 hover:shadow-2xl hover:shadow-orange-500/20"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={product.hoverImage || product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-[9px] font-bold text-white ${product.badgeColor} z-10`}>
                          {product.badge}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                          <span className="text-white text-xs font-semibold bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            Quick View →
                          </span>
                        </div>
                      </div>
                      <div className="p-4 relative z-10">
                        <div className="flex items-center gap-1 mb-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} />
                            ))}
                          </div>
                          <span className="text-[10px] text-gray-500">({product.reviews})</span>
                        </div>
                        <h3 className="text-sm font-semibold text-white mb-1 line-clamp-1 group-hover:text-orange-400 transition-colors">{product.name}</h3>
                        <p className="text-[10px] text-gray-400 mb-2 line-clamp-1">{product.type}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-bold" style={{ color: brandOrange }}>TSh {product.priceTSh.toLocaleString()}</span>
                          <span className="text-[10px] text-gray-500 line-through">TSh {product.originalPriceTSh.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Creative Shop All Button - No Gradient */}
          <div className="text-center mt-12">
            <button
              onClick={scrollToShop}
              className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-105 overflow-hidden"
              style={{ backgroundColor: brandOrange, color: 'white' }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                Shop All Merchandise
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              {/* Ripple effect on hover */}
              <span className="absolute inset-0 w-full h-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
            </button>
            <p className="text-gray-500 text-xs mt-3">Free returns on all orders • Secure checkout</p>
          </div>
        </div>

        {/* CSS for Marquee Animations */}
        <style>{`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scrollRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          @keyframes modalIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
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
          .delay-1000 {
            animation-delay: 1s;
          }
          .animate-modal-in {
            animation: modalIn 0.3s ease-out;
          }
        `}</style>
      </section>

      {/* Product Modal - Responsive and Flexible */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={closeModal} />

          {/* Modal Content - Responsive */}
          <div className="relative z-10 max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl shadow-2xl border border-white/20 animate-modal-in" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
              {/* Product Images - Left Column */}
              <div className="space-y-3">
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <img
                    src={selectedProduct.hoverImage || selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-auto object-cover"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white ${selectedProduct.badgeColor}`}>
                    {selectedProduct.badge}
                  </div>
                  {selectedProduct.originalPriceUsd && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      SAVE TSh {(selectedProduct.originalPriceTSh - selectedProduct.priceTSh).toLocaleString()}
                    </div>
                  )}
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-orange-500 flex-shrink-0">
                    <img src={selectedProduct.image} alt="Thumb 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-lg overflow-hidden border border-white/20 flex-shrink-0">
                    <img src={selectedProduct.hoverImage || selectedProduct.image} alt="Thumb 2" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-lg overflow-hidden border border-white/20 flex-shrink-0 bg-white/5 flex items-center justify-center">
                    <span className="text-xs text-gray-400">+ More</span>
                  </div>
                </div>
              </div>

              {/* Product Details - Right Column */}
              <div className="space-y-4 overflow-y-auto max-h-[70vh] md:max-h-none pr-2">
                <div>
                  <p className="text-sm text-orange-400 font-semibold mb-1">{selectedProduct.type}</p>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{selectedProduct.name}</h3>
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(selectedProduct.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">{selectedProduct.rating} out of 5 ({selectedProduct.reviews} reviews)</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{selectedProduct.description}</p>
                </div>

                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-2xl md:text-3xl font-bold" style={{ color: brandOrange }}>TSh {selectedProduct.priceTSh.toLocaleString()}</span>
                  <span className="text-sm text-gray-500 line-through">TSh {selectedProduct.originalPriceTSh.toLocaleString()}</span>
                  <span className="text-xs text-green-400 ml-2 bg-green-500/20 px-2 py-0.5 rounded-full">In Stock</span>
                </div>

                {/* Weight Info */}
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Truck className="h-4 w-4 text-orange-400" />
                  <span>Weight: {selectedProduct.weight}</span>
                </div>

                {/* Features */}
                <div className="pt-2 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-orange-400" />
                    Product Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.features?.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300">{feature}</span>
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                {selectedProduct.sizes && (
                  <div className="pt-2">
                    <h4 className="text-sm font-semibold text-white mb-2">Select Size</h4>
                    <div className="flex gap-2 flex-wrap">
                      {selectedProduct.sizes.map((size, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedSize(size)}
                          className={`w-12 h-10 rounded-lg border text-white text-sm transition-all ${
                            selectedSize === size
                              ? 'border-orange-500 bg-orange-500/20'
                              : 'border-white/20 bg-white/5 hover:border-orange-500'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Colors */}
                {selectedProduct.colors && (
                  <div className="pt-2">
                    <h4 className="text-sm font-semibold text-white mb-2">Select Color</h4>
                    <div className="flex gap-3 flex-wrap">
                      {selectedProduct.colors.map((color, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedColor(color)}
                          className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${
                            selectedColor === color ? 'border-orange-500 scale-110' : 'border-white/30'
                          }`}
                          style={{ backgroundColor: color.toLowerCase() }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity */}
                <div className="pt-2">
                  <h4 className="text-sm font-semibold text-white mb-2">Quantity</h4>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-lg border border-white/20 bg-white/5 text-white hover:border-orange-500 transition-all"
                    >
                      -
                    </button>
                    <span className="text-white font-semibold w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-lg border border-white/20 bg-white/5 text-white hover:border-orange-500 transition-all"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Shipping Info */}
                <div className="pt-2 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-white mb-2">Shipping Information</h4>
                  <div className="bg-white/5 rounded-lg p-3 space-y-2">
                    <div className="flex items-center justify-between text-sm flex-wrap gap-2">
                      <span className="text-gray-400">Delivery Time:</span>
                      <span className="text-white">{selectedProduct.deliveryTime}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm flex-wrap gap-2">
                      <span className="text-gray-400">Dar es Salaam:</span>
                      <span className="text-white">TSh 5,000</span>
                    </div>
                    <div className="flex items-center justify-between text-sm flex-wrap gap-2">
                      <span className="text-gray-400">Upcountry:</span>
                      <span className="text-white">TSh 8,000 - 12,000</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 flex-col sm:flex-row">
                  <button
                    className="flex-1 py-3 rounded-full text-white font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
                    style={{ backgroundColor: brandOrange }}
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Add to Cart - TSh {(selectedProduct.priceTSh * quantity).toLocaleString()}
                  </button>
                  <button className="px-6 py-3 rounded-full border-2 border-white/20 text-white font-semibold hover:border-orange-500 hover:bg-orange-500/10 transition-all">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>

                {/* Foundation Note */}
                <div className="pt-2">
                  <p className="text-center text-[10px] text-gray-500">
                    ♡ A portion of proceeds supports orphans and vulnerable youth through the Neema Gospel Choir Foundation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
