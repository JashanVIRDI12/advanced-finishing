'use client';

import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Leaf } from 'lucide-react';
import Link from 'next/link';
import ProductCard from '@/components/sections/ProductCard';
import CTABanner from '@/components/sections/CTABanner';
import { products } from '@/data/products';
import Image from 'next/image';

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <Layout>
      {/* Editorial Luxury Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-secondary overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary/10 blur-[120px] mix-blend-screen pointer-events-none"></div>
          <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#0m3624]/20 blur-[100px] mix-blend-screen pointer-events-none"></div>
          <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left: Typography & CTA */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="mb-8 overflow-hidden">
                <span className="inline-block py-1.5 px-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-primary text-xs font-bold tracking-widest uppercase">
                  Engineered Thermal Excellence
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white leading-[1.05] tracking-tight mb-8">
                Mastering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-primary/80">
                  Energy Efficiency.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl border-l-2 border-primary pl-6">
                Quince Canada specializes in advanced engineered insulation materials. Our meticulously designed products help reduce heat loss and are engineered to deliver top-tier performance for both commercial and residential applications.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-10 h-14 text-sm uppercase tracking-widest font-bold shadow-[0_0_20px_rgba(234,88,12,0.3)] transition-all hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] cursor-pointer">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
                <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-black border border-white rounded-none px-10 h-14 text-sm uppercase tracking-widest font-bold transition-all cursor-pointer shadow-lg">
                  <Link href="/products">Explore Solutions</Link>
                </Button>
              </div>
            </div>

            {/* Right: Modern Abstract Graphic */}
            <div className="lg:col-span-5 relative hidden lg:block h-[600px]">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="absolute w-[400px] h-[500px] border border-white/10 bg-white/5 backdrop-blur-xl rotate-[-6deg] rounded-sm transform transition-transform hover:rotate-[-2deg] duration-700 p-4 shadow-2xl z-20">
                  <div className="relative w-full h-full border border-white/10 overflow-hidden">
                    <Image src="/images/gallery/img1.png" alt="Quince Canada Material Preview" fill className="object-cover opacity-90 grayscale-[20%] contrast-125" />
                  </div>
                </div>
                <div className="absolute w-[350px] h-[450px] border border-primary/20 bg-primary/10 backdrop-blur-md rotate-[8deg] rounded-sm -right-8 bottom-8 z-10"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Modern Features Strip */}
      <section className="bg-white border-b border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="flex flex-col items-center text-center px-4 md:px-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-extrabold text-secondary tracking-tight mb-3 uppercase">Maximum Durability</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Engineered to withstand extreme environmental conditions, providing longevity and consistent performance.</p>
            </div>
            <div className="flex flex-col items-center text-center px-4 md:px-8 pt-12 md:pt-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-extrabold text-secondary tracking-tight mb-3 uppercase">High Thermal Resistance</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Our advanced reflective technology bounces back radiant heat, radically reducing energy consumption.</p>
            </div>
            <div className="flex flex-col items-center text-center px-4 md:px-8 pt-12 md:pt-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-extrabold text-secondary tracking-tight mb-3 uppercase">Eco-Conscious</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Enhance building sustainability profiles while drastically cutting greenhouse gas emissions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 border-b border-gray-200 pb-6 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-3">Our Collection</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight">
                Featured Solutions
              </h2>
            </div>
            <Link href="/products" className="group mt-6 md:mt-0 flex items-center justify-center md:justify-start text-sm font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors">
              Explore All <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Split Section */}
      <section className="bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[500px] lg:min-h-full">
            <Image src="/images/gallery/img5.png" alt="Quince Canada Manufacturing" fill className="object-cover" />
          </div>
          <div className="p-12 md:p-24 flex flex-col justify-center bg-secondary text-white relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full"></div>

            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-6">Our Methodology</span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-8">
              Pioneering <br />Radiant Barriers.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 border-l border-primary/50 pl-6">
              At Quince Canada, we are dedicated to research, development, and the production of advanced engineered reflective insulation. Our high-performance Low-Emissivity solutions are the cornerstone of super-efficient architecture, delivering unparalleled sustainability.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-black border border-white rounded-none px-10 h-14 text-sm uppercase tracking-widest font-bold transition-all shadow-lg">
                <Link href="/about">Discover Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Banner */}
      <CTABanner
        title="Ready to Start Your Project?"
        description="Connect with our experts to evaluate your thermal needs and receive a tailored, high-performance insulation solution."
        buttonText="Request a Consultation"
        buttonHref="/contact"
        variant="primary"
      />
    </Layout>
  );
}
