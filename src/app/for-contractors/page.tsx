'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { CheckCircle, ArrowRight, DollarSign, Users, Award, Wrench, Star } from 'lucide-react';

interface LeadFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  license: string;
  experience: string;
  services: string;
  message: string;
  honeypot: string;
}

interface LeadFormErrors {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
}

export default function ForContractorsPage() {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '', company: '', email: '', phone: '', license: '',
    experience: '', services: '', message: '', honeypot: '',
  });
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: LeadFormErrors = {};
    if (!formData.name.trim()) e.name = 'Full name is required.';
    if (!formData.company.trim()) e.company = 'Company name is required.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Valid email is required.';
    if (!formData.phone.trim()) e.phone = 'Phone number is required.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (field: keyof LeadFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof LeadFormErrors]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const benefits = [
    { icon: <DollarSign className="h-7 w-7" />, title: 'Competitive Pricing', description: 'Volume discounts and contractor-exclusive pricing on all product lines.' },
    { icon: <Award className="h-7 w-7" />, title: 'Certification Program', description: 'Become a certified Advanced Finishing installer and gain credibility with clients.' },
    { icon: <Users className="h-7 w-7" />, title: 'Lead Generation', description: 'Receive qualified leads from homeowners in your service area.' },
    { icon: <Wrench className="h-7 w-7" />, title: 'Technical Support', description: '24/7 access to our team of insulation engineers and installation experts.' },
    { icon: <Star className="h-7 w-7" />, title: 'Marketing Materials', description: 'Co-branded marketing materials, product samples, and sales tools.' },
    { icon: <ArrowRight className="h-7 w-7" />, title: 'Fast Shipping', description: 'Priority fulfillment and next-day delivery available for contractors.' },
  ];

  const tiers = [
    { name: 'Silver', requirement: '$10K/year', perks: ['5% volume discount', 'Technical support', 'Marketing kit', 'Contractor directory listing'] },
    { name: 'Gold', requirement: '$25K/year', perks: ['12% volume discount', 'Priority support', 'Lead referrals', 'Co-op advertising', 'Dedicated rep'] },
    { name: 'Platinum', requirement: '$50K/year', perks: ['20% volume discount', 'Dedicated account manager', 'Premium lead program', 'Custom co-branding', 'Training & certification'] },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary text-white">Contractor Program</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Grow Your Business with <span className="text-primary/60">Advanced Finishing</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of contractors who trust Advanced Finishing for premium insulation products, competitive pricing, and dedicated support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="#apply">Apply Now <ArrowRight className="ml-2 h-5 w-5" /></a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
                  <Link href="/contact">Talk to a Rep</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '50K+', label: 'Active Contractors' },
                { number: '20%', label: 'Max Discount' },
                { number: '48hr', label: 'Avg Delivery' },
                { number: '25yr', label: 'In Business' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary/60 mb-1">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to win more jobs and deliver exceptional results.</p>
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

      {/* Tier Program */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Contractor Tier Program</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">The more you grow, the more you save. Unlock exclusive benefits at every level.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <Card key={i} className={`relative ${i === 1 ? 'border-primary border-2 shadow-xl' : ''}`}>
                {i === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 ${i === 0 ? 'bg-gray-200' : i === 1 ? 'bg-yellow-100' : 'bg-primary/10'}`}>
                    <Award className={`h-8 w-8 ${i === 0 ? 'text-gray-500' : i === 1 ? 'text-yellow-600' : 'text-primary'}`} />
                  </div>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <p className="text-gray-500 text-sm">Starting at {tier.requirement}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.perks.map((perk, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={i === 1 ? 'default' : 'outline'} asChild>
                    <a href="#apply">Get Started</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="apply" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Apply to the Contractor Program</h2>
            <p className="text-xl text-gray-600">Fill out the form below and a contractor specialist will contact you within 1 business day.</p>
          </div>

          {submitted ? (
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-12 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Received!</h2>
                <p className="text-gray-600 mb-8">
                  Thank you for applying to the Advanced Finishing Contractor Program. A specialist will reach out within 1 business day.
                </p>
                <Button onClick={() => setSubmitted(false)}>Submit Another Application</Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <input type="text" name="website" value={formData.honeypot} onChange={(e) => handleChange('honeypot', e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                      <Input value={formData.name} onChange={(e) => handleChange('name', e.target.value)} placeholder="John Smith" className={errors.name ? 'border-red-400' : ''} />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Name <span className="text-red-500">*</span></label>
                      <Input value={formData.company} onChange={(e) => handleChange('company', e.target.value)} placeholder="Smith Insulation LLC" className={errors.company ? 'border-red-400' : ''} />
                      {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                      <Input type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} placeholder="john@smithinsulation.com" className={errors.email ? 'border-red-400' : ''} />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone <span className="text-red-500">*</span></label>
                      <Input type="tel" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} placeholder="(555) 000-0000" className={errors.phone ? 'border-red-400' : ''} />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Contractor License #</label>
                      <Input value={formData.license} onChange={(e) => handleChange('license', e.target.value)} placeholder="TX-12345" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                      <Select value={formData.experience} onValueChange={(v) => handleChange('experience', v)}>
                        <SelectTrigger><SelectValue placeholder="Select experience" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-2">0–2 years</SelectItem>
                          <SelectItem value="3-5">3–5 years</SelectItem>
                          <SelectItem value="6-10">6–10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Primary Services</label>
                    <Select value={formData.services} onValueChange={(v) => handleChange('services', v)}>
                      <SelectTrigger><SelectValue placeholder="Select primary service" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential Insulation</SelectItem>
                        <SelectItem value="commercial">Commercial Insulation</SelectItem>
                        <SelectItem value="industrial">Industrial Insulation</SelectItem>
                        <SelectItem value="mixed">Mixed / All Types</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                    <Textarea value={formData.message} onChange={(e) => handleChange('message', e.target.value)} placeholder="Tell us about your business, typical project sizes, and what you're looking for in a supplier..." rows={4} />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </Layout>
  );
}
