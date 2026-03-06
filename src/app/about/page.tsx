import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight, Users, Award, Globe, Wrench } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Insulation Solutions for Efficiency',
      description: 'Quince Canada offers innovative insulation foils for enhanced thermal performance.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Energy-Efficient Building',
      description: 'Our Low-E films and sheets minimize heat transfer.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Commercial and Residential Applications',
      description: 'Ideal for both commercial and residential construction projects.'
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Retrofit Glazing Systems',
      description: 'Supporting sustainable energy projects with effective solutions.'
    }
  ];

  const stats = [
    { number: '2M+', label: 'Homes Insulated' },
    { number: '40%', label: 'Average Energy Savings' },
    { number: '50K+', label: 'Contractor Partners' },
    { number: '25', label: 'Years in Business' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-secondary">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/images/hero.png" alt="Quince Canada Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md mb-8">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">Innovative Insulation Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-8">
              Pioneering <span className="text-primary">Thermal</span> Performance
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 border-l-4 border-primary pl-6 bg-secondary/20 p-4 backdrop-blur-sm rounded-r-lg">
              Quince Canada specializes in advanced Low-E insulation foils, enhancing thermal performance for both residential and commercial construction. Our products effectively reduce infrared and ultraviolet heat transfer, promoting energy efficiency.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-none px-10 h-14 text-sm uppercase tracking-widest font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,88,12,0.4)]">
              <Link href="/contact">Discover More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        {/* Decorative background texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary blur-3xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6 tracking-tight">
              Setting New <span className="text-primary">Standards</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto border-b border-white/10 pb-8">
              According to the EPA and ENERGY STAR, the industry average for energy savings from standard insulation upgrades is roughly 15%. Quince Canada's advanced Low-E solutions are engineered to significantly surpass these baselines, minimizing long-term energy costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Industry Average */}
            <div className="flex flex-col items-center text-center px-8 py-12 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors backdrop-blur-sm">
              <div className="text-5xl lg:text-6xl font-extrabold text-white/50 tracking-tight mb-2">15<span className="text-2xl">%</span></div>
              <div className="w-12 h-1 bg-white/20 mx-auto my-4" />
              <div className="text-base font-bold uppercase tracking-widest text-white/80 mb-2">EPA Industry Average</div>
              <div className="text-sm text-white/40 leading-relaxed max-w-[200px]">Typical savings from basic insulation upgrades</div>
            </div>

            {/* Quince Canada Standard */}
            <div className="flex flex-col items-center text-center px-8 py-12 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-sm shadow-[0_0_30px_rgba(234,88,12,0.1)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 w-full flex flex-col items-center">
                <Award className="h-8 w-8 text-primary mb-4" />
                <div className="text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-2">40<span className="text-primary text-3xl">%</span><span className="text-4xl text-primary">+</span></div>
                <div className="w-12 h-1 bg-primary mx-auto my-4" />
                <div className="text-base font-bold uppercase tracking-widest text-white mb-2">Quince Canada Standard</div>
                <div className="text-sm text-gray-300 leading-relaxed max-w-[200px]">Potential energy savings with our premium Low-E foils</div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative solutions tailored for your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Us in Building a More Energy-Efficient Future
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a homeowner, contractor, or distributor, we have solutions to help you save energy and reduce costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-black hover:text-black" asChild>
              <Link href="/for-contractors">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
