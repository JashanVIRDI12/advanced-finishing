import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight, Users, Award, Globe, Wrench } from 'lucide-react';

export default function AboutPage() {
  const milestones = [
    { year: '1998', title: 'Company Founded', description: 'Started with a mission to provide energy-efficient insulation solutions' },
    { year: '2005', title: 'First Patent', description: 'Developed revolutionary multi-layer reflective insulation technology' },
    { year: '2012', title: 'National Expansion', description: 'Expanded distribution network across all provinces and territories' },
    { year: '2018', title: 'Innovation Award', description: 'Received industry recognition for sustainable insulation solutions' },
    { year: '2024', title: 'Market Leader', description: 'Became the leading provider of reflective insulation in North America' }
  ];

  const values = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Sustainability',
      description: 'Committed to reducing environmental impact through energy-efficient solutions'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality',
      description: 'Rigorous testing and quality control ensure superior product performance'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Customer Focus',
      description: 'Dedicated to helping customers achieve their energy efficiency goals'
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Continuously developing new technologies to advance insulation performance'
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
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Leading the Future of
                <span className="text-primary"> Energy Efficiency</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                For over 25 years, Advanced Finishing has been at the forefront of reflective insulation technology, helping millions of homeowners and businesses reduce energy costs while improving comfort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/products">View Products</Link>
                </Button>
              </div>
            </div>
            <div className="h-96 lg:min-h-[400px] bg-gradient-to-br from-primary/10 to-primary/30 rounded-lg shadow-xl flex items-center justify-center">
              <span className="text-primary/80 font-semibold text-lg">Advanced Finishing Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary/10">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 1998 by a team of engineers passionate about energy efficiency, Advanced Finishing began with a simple mission: to make high-performance insulation accessible to everyone.
                </p>
                <p>
                  Our breakthrough came in 2005 when we developed our patented multi-layer reflective insulation technology, setting new industry standards for thermal performance and durability.
                </p>
                <p>
                  Today, with distribution centers across North America and a network of over 50,000 certified contractors, we continue to innovate and lead the industry in sustainable insulation solutions.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="h-96 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                <span className="text-gray-500 font-semibold">Manufacturing Facility</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our mission to advance energy efficiency
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-1/2"></div>
                <div className="relative flex items-center justify-center w-12 h-12 bg-primary rounded-full">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="w-1/2 px-8">
                  <Card className="p-6">
                    <CardContent className="p-0">
                      <Badge variant="secondary" className="mb-2">{milestone.year}</Badge>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
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

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts driving our innovation and growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Robert Chen', role: 'CEO & Founder', bio: 'Visionary leader with 25+ years in energy efficiency solutions' },
              { name: 'Sarah Mitchell', role: 'CTO', bio: 'Engineering expert specializing in thermal insulation technology' },
              { name: 'Michael Thompson', role: 'VP Operations', bio: 'Operations excellence expert ensuring quality and efficiency' }
            ].map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
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
            <Button size="lg" variant="outline" asChild>
              <Link href="/for-contractors">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
