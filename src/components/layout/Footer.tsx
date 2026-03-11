import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white relative overflow-hidden border-t border-white/5">
      {/* Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-none flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <span className="text-secondary font-bold text-xl">Q</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-2xl tracking-tight text-white uppercase">
                  Quince Canada
                </span>
                <span className="text-[10px] tracking-widest text-primary uppercase font-bold mt-1">
                  Insulation
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Quince Canada specializes in advanced engineered insulation materials. Our meticulously designed products help reduce heat loss and are engineered to deliver top-tier performance for both commercial and residential applications.

            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-white">Explore</h3>
            <ul className="space-y-4 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'Products', path: '/products' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                    <span className="w-3 h-px bg-primary mr-3 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-white">Contact</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start space-x-4 group">
                <div className="w-8 h-8 rounded-none bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-400 leading-relaxed mt-1 group-hover:text-gray-300 transition-colors">
                  12545 Coleraine Dr #9<br />Caledon, ON L7E 3B
                </span>
              </li>
              <li className="flex items-center space-x-4 group">
                <div className="w-8 h-8 rounded-none bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <a href="tel:2892065308" className="text-gray-400 hover:text-white transition-colors mt-0.5">(289) 206-5308</a>
              </li>
              <li className="flex items-center space-x-4 group">
                <div className="w-8 h-8 rounded-none bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <a href="mailto:info@quincecanada.com" className="text-gray-400 hover:text-white transition-colors mt-0.5">
                  info@quincecanada.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center text-center">
            <div className="text-gray-500 text-sm">
              © Copyright {currentYear} Quince Canada. All rights reserved.<br />
              <span className="text-xs mt-2 inline-block">All registered trademarks herein are the property of their respective owners.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
