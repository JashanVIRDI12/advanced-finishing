'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const productsMenu = [
    { label: 'Reflective Insulation', href: '/products?category=reflective-insulation' },
    { label: 'Bubble Insulation', href: '/products?category=bubble-insulation' },
    { label: 'Accessories', href: '/products?category=accessories' },
  ];

  const resourcesMenu = [
    { label: 'Blog', href: '/blog' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Resources', href: '/resources' },
    { label: 'Why Our Insulation', href: '/why-insulation' },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar - Red */}
      <div className="bg-primary text-white text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              123 Maple Street, Toronto ON M5V 2T6
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="mailto:contact@advancedfinishing.ca" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Mail className="h-3.5 w-3.5" />
              contact@advancedfinishing.ca
            </a>
            <a href="tel:18009737866" className="flex items-center gap-1.5 font-medium hover:text-white/80 transition-colors">
              <Phone className="h-3.5 w-3.5" />
              1-800-ADVANCED
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - Dark Gray */}
      <nav className="bg-secondary text-white shadow-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="text-secondary font-bold text-xl">X</span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-bold text-2xl tracking-tight text-white uppercase">
                    Advanced Finishing
                  </span>
                  <span className="text-[10px] tracking-widest text-primary uppercase font-bold">
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

              {/* Products Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button type="button" className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wide focus:outline-none">
                    <span>Exterior Insulation</span>
                    <ChevronDown className="h-4 w-4 opacity-70" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-secondary border-sky-700 text-white rounded-none shadow-2xl mt-4">
                  {productsMenu.map((item) => (
                    <DropdownMenuItem key={item.href} asChild className="focus:bg-primary focus:text-white rounded-none cursor-pointer">
                      <Link href={item.href}>
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Resources Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button type="button" className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wide focus:outline-none">
                    <span>Facade Renovation</span>
                    <ChevronDown className="h-4 w-4 opacity-70" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-secondary border-sky-700 text-white rounded-none shadow-2xl mt-4">
                  {resourcesMenu.map((item) => (
                    <DropdownMenuItem key={item.href} asChild className="focus:bg-primary focus:text-white rounded-none cursor-pointer">
                      <Link href={item.href}>
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wide">
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-none px-6 uppercase tracking-wider font-semibold">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 space-y-4 border-t border-sky-800">
              <Link
                href="/"
                className="block px-4 py-2 text-base font-medium text-white hover:bg-sky-900 uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/about"
                className="block px-4 py-2 text-base font-medium text-gray-300 hover:bg-sky-900 hover:text-white uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>

              <div className="space-y-2">
                <div className="px-4 py-2 text-sm font-bold text-primary uppercase tracking-widest">Insulation</div>
                {productsMenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-8 py-2 text-base text-gray-400 hover:text-white hover:bg-sky-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="space-y-2">
                <div className="px-4 py-2 text-sm font-bold text-primary uppercase tracking-widest">Renovation</div>
                {resourcesMenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-8 py-2 text-base text-gray-400 hover:text-white hover:bg-sky-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <Link
                href="/contact"
                className="block px-4 py-2 text-base font-medium text-gray-300 hover:bg-sky-900 hover:text-white uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-6 px-4">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-none uppercase tracking-wider font-semibold">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
