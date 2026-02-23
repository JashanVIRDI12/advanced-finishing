import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight, CheckCircle, DollarSign, Thermometer, Shield, Home, Zap, Star } from 'lucide-react';
import CTABanner from '@/components/sections/CTABanner';

export default function ForHomeownersPage() {
  const benefits = [
    { icon: <DollarSign className="h-7 w-7" />, title: 'Save Up to 40% on Energy Bills', description: 'Dramatically reduce heating and cooling costs with our high-performance reflective insulation systems.' },
    { icon: <Thermometer className="h-7 w-7" />, title: 'Year-Round Comfort', description: 'Eliminate hot and cold spots. Enjoy consistent temperatures in every room, every season.' },
    { icon: <Shield className="h-7 w-7" />, title: 'Long-Lasting Protection', description: 'Our products are built to last with 10–25 year warranties and Class 1 fire ratings.' },
    { icon: <Home className="h-7 w-7" />, title: 'Increase Home Value', description: 'Energy-efficient upgrades can increase your property value by 5–10%.' },
    { icon: <Zap className="h-7 w-7" />, title: 'Easy DIY Installation', description: 'Most products are designed for homeowner installation with simple tools and clear guides.' },
    { icon: <Star className="h-7 w-7" />, title: 'Eco-Friendly Choice', description: 'Reduce your carbon footprint and contribute to a more sustainable future.' },
  ];

  const applications = [
    { area: 'Attic', description: 'Block up to 97% of radiant heat from entering your living space through the roof.', savings: 'Save 20–30% on cooling' },
    { area: 'Walls', description: 'Improve wall insulation performance and reduce thermal bridging through studs.', savings: 'Save 10–15% on heating' },
    { area: 'Crawl Space', description: 'Prevent moisture and heat loss through your floor with reflective crawl space insulation.', savings: 'Improve floor comfort' },
    { area: 'Garage', description: 'Keep your garage cooler in summer and warmer in winter for a more comfortable workspace.', savings: 'Protect stored items' },
    { area: 'Basement', description: 'Reduce heat loss and moisture issues in your basement with reflective insulation barriers.', savings: 'Lower heating costs' },
    { area: 'Sunroom / Addition', description: 'Control temperatures in glass-heavy spaces that are prone to extreme heat gain.', savings: 'Extend usable season' },
  ];

  const steps = [
    { step: '1', title: 'Choose Your Product', description: 'Browse our product range and select the right insulation for your application and budget.' },
    { step: '2', title: 'Download the Guide', description: 'Get the free installation guide specific to your product and application area.' },
    { step: '3', title: 'Gather Your Tools', description: 'You\'ll need basic tools: utility knife, staple gun, measuring tape, and foil tape.' },
    { step: '4', title: 'Install & Save', description: 'Follow the step-by-step guide and start enjoying lower energy bills immediately.' },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">For Homeowners</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Make Your Home <span className="text-primary">More Comfortable</span> and Efficient
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Reflective insulation is one of the most cost-effective home improvements you can make. Save money, improve comfort, and protect your home — all with a product you can install yourself.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/products">Shop Products <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/why-insulation">Learn the Science</Link>
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl p-8">
              <div className="space-y-4">
                {[
                  { label: 'Average Energy Savings', value: '40%' },
                  { label: 'Typical Payback Period', value: '2–4 years' },
                  { label: 'Product Warranty', value: 'Up to 25 years' },
                  { label: 'Radiant Heat Blocked', value: '97%' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm">
                    <span className="text-gray-700 font-medium">{stat.label}</span>
                    <span className="text-primary font-bold text-xl">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Homeowners Love Advanced Finishing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real benefits that make a real difference in your home and your wallet.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                    {b.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-gray-600">{b.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Where to Use Reflective Insulation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Every area of your home can benefit from reflective insulation technology.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{app.area}</h3>
                <p className="text-gray-600 mb-4">{app.description}</p>
                <Badge variant="secondary" className="text-green-700 bg-green-100">{app.savings}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get Started in 4 Simple Steps</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">From purchase to installation — it's easier than you think.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Is Your Home Ready for Reflective Insulation?</h2>
            <p className="text-gray-600 text-lg">Check these common signs that your home could benefit from an insulation upgrade:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'High summer cooling bills',
              'Uncomfortable rooms in summer heat',
              'Uneven temperatures throughout the home',
              'Hot attic or upper floors',
              'HVAC running constantly',
              'Drafty rooms in winter',
              'Condensation on walls or windows',
              'Home built before 2000',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <Link href="/products">Find the Right Product <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <CTABanner
        title="Not Sure Which Product Is Right for You?"
        description="Our insulation experts will help you choose the perfect solution for your home and budget — for free."
        buttonText="Get Free Expert Advice"
        buttonHref="/contact"
      />
    </Layout>
  );
}
