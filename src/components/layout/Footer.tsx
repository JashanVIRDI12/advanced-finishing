import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-none flex items-center justify-center">
                <span className="text-secondary font-bold text-xl">X</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-2xl tracking-tight text-white uppercase">
                  Quince Canada
                </span>
                <span className="text-[10px] tracking-widest text-primary uppercase font-bold">
                  Insulation
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Innovative insulation solutions for energy efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-white">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/products/reflective-shield-elite" className="text-gray-400 hover:text-primary transition-colors">
                  Exterior Insulation
                </Link>
              </li>
              <li>
                <Link href="/products/thermal-guard-pro" className="text-gray-400 hover:text-primary transition-colors">
                  Interior Insulation
                </Link>
              </li>
              <li>
                <Link href="/products/eco-shield-basics" className="text-gray-400 hover:text-primary transition-colors">
                  Facade Renovation
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-primary transition-colors">
                  View All
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-white">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-white">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-400 leading-snug">12545 Coleraine Dr #9<br />Caledon, ON L7E 3B</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:2892065308" className="text-gray-400 hover:text-white transition-colors">(289) 206-5308</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@quincecanada.com" className="text-gray-400 hover:text-white transition-colors">
                  info@quincecanada.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © Copyright 2026 Network Solutions, LLC. All rights reserved.<br />
              <span className="text-xs">All registered trademarks herein are the property of their respective owners.</span>
            </div>
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">
                Legal Notice
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
