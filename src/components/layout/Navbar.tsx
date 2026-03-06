'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white text-xs py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              12545 Coleraine Dr #9, Caledon, ON L7E 3B
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="mailto:info@quincecanada.com" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Mail className="h-3.5 w-3.5" />
              info@quincecanada.com
            </a>
            <a href="tel:2892065308" className="flex items-center gap-1.5 font-medium hover:text-white/80 transition-colors">
              <Phone className="h-3.5 w-3.5" />
              (289) 206-5308
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-secondary text-white shadow-xl border-b border-white/5 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                  <span className="text-secondary font-bold text-xl">Q</span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-bold text-xl sm:text-2xl tracking-tight text-white uppercase">
                    Quince Canada
                  </span>
                  <span className="text-[9px] sm:text-[10px] tracking-widest text-primary uppercase font-bold">
                    Insulation
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wide">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wide">
                About Us
              </Link>
              <Link href="/products" className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wide">
                Products
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-none px-6 uppercase tracking-wider font-semibold">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6 sm:h-8 sm:w-8" /> : <Menu className="h-6 w-6 sm:h-8 sm:w-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-secondary shadow-xl border-b border-white/10 py-6 space-y-4 px-4 pb-8 border-t z-50">
            <Link
              href="/"
              className="block px-4 py-3 text-base font-medium text-white hover:bg-white/10 uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/products"
              className="block px-4 py-3 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <div className="pt-4">
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-none uppercase tracking-wider font-semibold py-6">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
