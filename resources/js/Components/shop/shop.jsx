import React, { useState, useEffect, useRef } from 'react';
import {
  X, ShoppingBag, CreditCard, Truck, Heart, Star, Shield,
  ChevronRight, MapPin, Calendar, Info, Zap, ArrowRight,
  Filter, Check, Package, Award, TrendingUp, Clock, Sparkles,
  Phone, Mail,
} from 'lucide-react';

export default function ProductsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
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

  // Convert USD to TSh (using 1 USD = 2,600 TSh)
  const convertToTSh = (usd) => {
    return (usd * 2600).toLocaleString();
  };

  // All Products
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
      category: 'Apparel',
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
      category: 'Apparel',
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
      category: 'Accessories',
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
      category: 'Accessories',
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
      category: 'Home & Living',
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
      category: 'Accessories',
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
      category: 'Stationery',
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
      category: 'Home & Living',
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
      category: 'Stationery',
      rating: 4.7,
      reviews: 423,
      inStock: true,
      deliveryTime: '3-5 business days',
      weight: '0.05 kg',
      features: ['10 Stickers', 'Vinyl Material', 'Water Resistant', 'Various Sizes'],
    },
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Products', icon: ShoppingBag },
    { id: 'Apparel', name: 'Apparel', icon: Package },
    { id: 'Accessories', name: 'Accessories', icon: Sparkles },
    { id: 'Home & Living', name: 'Home & Living', icon: Home },
    { id: 'Stationery', name: 'Stationery', icon: Award },
  ];

  // Filter products based on category
  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

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

  // Features section data
  const features = [
    { icon: Truck, title: 'Free Shipping', description: 'On orders over TSh 200,000' },
    { icon: Shield, title: 'Secure Payment', description: '100% secure transactions' },
    { icon: Heart, title: 'Quality Guaranteed', description: 'Premium materials only' },
    { icon: Clock, title: 'Fast Delivery', description: '3-7 business days' },
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 px-4 py-1.5 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <ShoppingBag className="h-3.5 w-3.5 text-orange-400" />
            <span className="text-[10px] font-semibold text-orange-300 tracking-wider uppercase">Merchandise Store</span>
          </div>

          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="bg-gradient-to-r from-white via-orange-100 to-orange-400 bg-clip-text text-transparent">
              Official Merchandise
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Wear Your Faith
            </span>
          </h1>

          <p className={`text-gray-400 max-w-2xl mx-auto text-lg transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Premium quality merchandise designed for worshipers, by worshipers.
            Every purchase supports our ministry and outreach programs.
          </p>
        </div>

        {/* Features Row */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {features.map((feature, idx) => (
            <div key={idx} className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all">
              <feature.icon className="h-6 w-6 text-orange-400 mx-auto mb-2" />
              <h4 className="text-white text-sm font-semibold">{feature.title}</h4>
              <p className="text-gray-500 text-[10px]">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className={`flex justify-center gap-2 flex-wrap mb-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'text-white shadow-lg'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              style={activeCategory === category.id ? { backgroundColor: brandOrange } : {}}
            >
              <category.icon className="h-3.5 w-3.5" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              onClick={() => openModal(product)}
              className="group cursor-pointer bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/20"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-[9px] font-bold text-white ${product.badgeColor} z-10`}>
                  {product.badge}
                </div>
                {product.originalPriceUsd && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">
                    -{Math.round((1 - product.priceUsd / product.originalPriceUsd) * 100)}%
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Quick View →
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1 mb-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-500">({product.reviews})</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-orange-400 transition-colors">{product.name}</h3>
                <p className="text-xs text-gray-400 mb-2">{product.category}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold" style={{ color: brandOrange }}>TSh {product.priceTSh.toLocaleString()}</span>
                  <span className="text-xs text-gray-500 line-through">TSh {product.originalPriceTSh.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Foundation Impact Note */}
        <div className={`mt-12 p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/20 text-center transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Heart className="h-8 w-8 text-orange-400 mx-auto mb-2" />
          <h3 className="text-lg font-bold text-white mb-1">Every Purchase Makes an Impact</h3>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            A portion of proceeds from every item goes directly to the Neema Gospel Choir Foundation,
            supporting orphans, vulnerable children, and youth empowerment programs across Tanzania.
          </p>
        </div>

        {/* Contact Section */}
        <div className={`mt-12 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 transition-all duration-700 delay-700 hover:border-orange-500/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                <ShoppingBag className="h-4 w-4 text-orange-400" />
                <h4 className="text-white font-semibold">Neema Gospel Choir Merchandise</h4>
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
                <span>shop@neemagospelchoir.org</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={closeModal} />

          <div className="relative z-10 max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl shadow-2xl border border-white/20 animate-modal-in" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
              {/* Product Images */}
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
              </div>

              {/* Product Details */}
              <div className="space-y-4 overflow-y-auto max-h-[70vh] md:max-h-none pr-2">
                <div>
                  <p className="text-sm text-orange-400 font-semibold mb-1">{selectedProduct.category}</p>
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

      <style>{`
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
        .animate-modal-in {
          animation: modalIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

// Helper component for Home icon (since it wasn't imported)
function Home(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  );
}
