import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CTABannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  variant?: 'primary' | 'secondary';
}

const CTABanner = ({ 
  title, 
  description, 
  buttonText, 
  buttonHref, 
  variant = 'primary' 
}: CTABannerProps) => {
  const bgClasses = variant === 'primary' 
    ? 'bg-secondary text-white border-t-4 border-primary' 
    : 'bg-gray-100 text-gray-900 border-t-4 border-gray-300';
  
  const buttonClasses = variant === 'primary' 
    ? 'bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-12 uppercase tracking-wider font-semibold' 
    : 'bg-secondary hover:bg-secondary/90 text-white rounded-none px-8 h-12 uppercase tracking-wider font-semibold';

  return (
    <section className={`${bgClasses} py-20 relative overflow-hidden`}>
      {/* Decorative background elements */}
      {variant === 'primary' && (
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 uppercase tracking-tight">{title}</h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
          {description}
        </p>
        <Button asChild className={buttonClasses}>
          <Link href={buttonHref}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  );
};

export default CTABanner;
