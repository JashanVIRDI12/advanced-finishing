'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  projectType: string;
  message: string;
  honeypot: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
  subject?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    projectType: '',
    message: '',
    honeypot: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Anti-spam: honeypot check
    if (formData.honeypot) return;
    if (!validate()) return;
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const contactInfo = [
    { icon: <Phone className="h-5 w-5" />, label: 'Phone', value: '1-800-Advanced Finishing-ON', sub: 'Mon–Fri, 8am–6pm EST' },
    { icon: <Mail className="h-5 w-5" />, label: 'Email', value: 'contact@advancedfinishing.ca', sub: 'We reply within 24 hours' },
    { icon: <MapPin className="h-5 w-5" />, label: 'Headquarters', value: '123 Maple Street, Toronto ON M5V 2T6', sub: 'National distribution network' },
    { icon: <Clock className="h-5 w-5" />, label: 'Business Hours', value: 'Mon–Fri: 8am–6pm EST', sub: 'Sat: 9am–2pm EST' },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 uppercase tracking-tight">
            CONTACT <span className="text-primary">US</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a question or need a quote? Our insulation experts are ready to help you find the perfect solution.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6 uppercase tracking-tight">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-white border border-gray-200 rounded-none flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                        <p className="font-semibold text-gray-900 text-lg">{item.value}</p>
                        <p className="text-sm text-gray-500">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-gray-200 rounded-none flex flex-col items-center justify-center border border-gray-300 relative overflow-hidden group">
                <MapPin className="h-10 w-10 text-gray-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-widest">Interactive Map</p>
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <Card className="border-green-500 border-2 bg-white rounded-none shadow-xl">
                  <CardContent className="p-16 text-center">
                    <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4 uppercase tracking-tight">Message Sent!</h2>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                      Thank you for reaching out. One of our insulation experts will contact you within 24 hours.
                    </p>
                    <Button 
                      className="bg-secondary hover:bg-secondary/90 text-white rounded-none px-8 h-12 uppercase tracking-wider font-semibold"
                      onClick={() => { setSubmitted(false); setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', projectType: '', message: '', honeypot: '' }); }}
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="rounded-none border-gray-200 shadow-xl bg-white">
                  <CardHeader className="bg-secondary text-white p-8 border-b-4 border-primary">
                    <CardTitle className="text-2xl font-extrabold uppercase tracking-tight">Send Us a Message</CardTitle>
                    <CardDescription className="text-gray-300 text-base mt-2">Fill out the form and we'll get back to you within 24 hours.</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} noValidate className="space-y-6">
                      {/* Honeypot – hidden from real users */}
                      <input
                        type="text"
                        name="website"
                        value={formData.honeypot}
                        onChange={(e) => handleChange('honeypot', e.target.value)}
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">
                            First Name <span className="text-primary">*</span>
                          </label>
                          <Input
                            value={formData.firstName}
                            onChange={(e) => handleChange('firstName', e.target.value)}
                            placeholder="JOHN"
                            className={`bg-gray-50 border-gray-200 rounded-none h-12 focus-visible:ring-primary ${errors.firstName ? 'border-primary ring-1 ring-primary/20' : ''}`}
                          />
                          {errors.firstName && <p className="text-primary text-xs mt-2 font-medium">{errors.firstName}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">
                            Last Name <span className="text-primary">*</span>
                          </label>
                          <Input
                            value={formData.lastName}
                            onChange={(e) => handleChange('lastName', e.target.value)}
                            placeholder="SMITH"
                            className={`bg-gray-50 border-gray-200 rounded-none h-12 focus-visible:ring-primary ${errors.lastName ? 'border-primary ring-1 ring-primary/20' : ''}`}
                          />
                          {errors.lastName && <p className="text-primary text-xs mt-2 font-medium">{errors.lastName}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">
                            Email <span className="text-primary">*</span>
                          </label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            placeholder="JOHN@EXAMPLE.COM"
                            className={`bg-gray-50 border-gray-200 rounded-none h-12 focus-visible:ring-primary ${errors.email ? 'border-primary ring-1 ring-primary/20' : ''}`}
                          />
                          {errors.email && <p className="text-primary text-xs mt-2 font-medium">{errors.email}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Phone</label>
                          <Input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            placeholder="(555) 000-0000"
                            className="bg-gray-50 border-gray-200 rounded-none h-12 focus-visible:ring-primary"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">
                            Subject <span className="text-primary">*</span>
                          </label>
                          <Input
                            value={formData.subject}
                            onChange={(e) => handleChange('subject', e.target.value)}
                            placeholder="HOW CAN WE HELP?"
                            className={`bg-gray-50 border-gray-200 rounded-none h-12 focus-visible:ring-primary ${errors.subject ? 'border-primary ring-1 ring-primary/20' : ''}`}
                          />
                          {errors.subject && <p className="text-primary text-xs mt-2 font-medium">{errors.subject}</p>}
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Project Type</label>
                          <Select value={formData.projectType} onValueChange={(v) => handleChange('projectType', v)}>
                            <SelectTrigger className="bg-gray-50 border-gray-200 rounded-none h-12 focus-visible:ring-primary">
                              <SelectValue placeholder="SELECT PROJECT TYPE" />
                            </SelectTrigger>
                            <SelectContent className="rounded-none border-gray-200">
                              <SelectItem value="residential" className="cursor-pointer focus:bg-primary focus:text-white">Residential</SelectItem>
                              <SelectItem value="commercial" className="cursor-pointer focus:bg-primary focus:text-white">Commercial</SelectItem>
                              <SelectItem value="industrial" className="cursor-pointer focus:bg-primary focus:text-white">Industrial</SelectItem>
                              <SelectItem value="agricultural" className="cursor-pointer focus:bg-primary focus:text-white">Agricultural</SelectItem>
                              <SelectItem value="other" className="cursor-pointer focus:bg-primary focus:text-white">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">
                          Message <span className="text-primary">*</span>
                        </label>
                        <Textarea
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          placeholder="TELL US ABOUT YOUR PROJECT..."
                          rows={6}
                          className={`bg-gray-50 border-gray-200 rounded-none resize-none focus-visible:ring-primary ${errors.message ? 'border-primary ring-1 ring-primary/20' : ''}`}
                        />
                        {errors.message && <p className="text-primary text-xs mt-2 font-medium">{errors.message}</p>}
                        <p className="text-xs text-gray-400 mt-2 text-right">{formData.message.length} / 20 MIN CHARACTERS</p>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90 text-white rounded-none h-14 text-lg font-bold uppercase tracking-widest transition-all duration-300" 
                        disabled={loading}
                      >
                        {loading ? 'SENDING...' : 'SEND MESSAGE'}
                      </Button>

                      <p className="text-xs text-gray-400 text-center font-medium">
                        By submitting this form you agree to our{' '}
                        <a href="/privacy" className="text-gray-600 underline hover:text-primary transition-colors">Privacy Policy</a>.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
