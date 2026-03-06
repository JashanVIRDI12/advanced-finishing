'use client';

import { useState } from 'react';

import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/sections/ProductCard';
import { products } from '@/data/products';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

export default function ProductsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Layout>
      {/* Premium Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero.png" alt="Quince Canada Products" className="w-full h-full object-cover blur-sm opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-28 pb-16 text-center">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md mb-6 text-primary font-bold tracking-widest text-xs uppercase">
            Curated Excellence
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-8">
            <span className="text-primary">Premium</span> Insulation<br />Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Explore Quince Canada's premium range of thermal management products, engineered to provide unparalleled energy efficiency for commercial and residential applications.
          </p>
          <a href="#product-grid" className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300 mx-auto animate-bounce">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </section>

      <div className="bg-background min-h-screen py-24" id="product-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-6">
            <div>
              <h2 className="text-3xl font-extrabold text-secondary tracking-tight mb-2">Our Product Lines</h2>
              <p className="text-gray-500">Discover {products.length} engineered solutions for thermal control.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-primary pb-1">All Products</span>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Image Gallery Showcase - Moved to bottom */}
          <div className="border-t border-gray-200 pt-24 text-center mb-16 relative">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold tracking-widest text-[10px] uppercase mb-6">
              Visual Showcase
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-secondary tracking-tight mb-6">Our Product Photos</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Take a closer look at our premium insulation materials. From robust residential foils to specialized commercial shielding, explore the texture, quality, and structure of Quince Canada's industry-leading solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[1, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="relative h-64 md:h-80 rounded-sm bg-stone-100 overflow-hidden shadow-sm group border border-gray-200 cursor-pointer"
                onClick={() => setSelectedImage(`/images/gallery/img${num}.png`)}
              >
                <Image
                  src={`/images/gallery/img${num}.png`}
                  alt={`Quince Canada Product Photo ${num}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="text-white font-bold tracking-widest uppercase text-sm border-b border-primary pb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Expand Photo
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Expanded Product Photo"
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-black bg-white hover:bg-gray-200 shadow-md transition-colors rounded-full p-2 z-50"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}
