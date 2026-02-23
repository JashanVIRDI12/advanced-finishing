import Layout from '@/components/layout/Layout';
import TestimonialCard from '@/components/sections/TestimonialCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import CTABanner from '@/components/sections/CTABanner';

export default function TestimonialsPage() {
  const residential = testimonials.filter((t) => t.projectType === 'residential');
  const commercial = testimonials.filter((t) => t.projectType === 'commercial');
  const industrial = testimonials.filter((t) => t.projectType === 'industrial');

  const avgRating = (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            What Our <span className="text-primary">Customers Say</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Real stories from homeowners, contractors, and facility managers who have transformed their spaces with Advanced Finishing.
          </p>

          {/* Summary Stats */}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                {[1,2,3,4,5].map((s) => <Star key={s} className="h-6 w-6 fill-yellow-400 text-yellow-400" />)}
              </div>
              <div className="text-3xl font-bold text-gray-900">{avgRating} / 5</div>
              <div className="text-gray-500 text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">{testimonials.length}+</div>
              <div className="text-gray-500 text-sm">Verified Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">2M+</div>
              <div className="text-gray-500 text-sm">Satisfied Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials by Category */}
      {[
        { label: 'Residential', items: residential },
        { label: 'Commercial', items: commercial },
        { label: 'Industrial', items: industrial },
      ].map(({ label, items }) =>
        items.length > 0 ? (
          <section key={label} className={`py-16 ${label === 'Commercial' ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-10">
                <h2 className="text-2xl font-bold text-gray-900">{label} Projects</h2>
                <Badge variant="secondary">{items.length} reviews</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((t) => (
                  <TestimonialCard key={t.id} testimonial={t} />
                ))}
              </div>
            </div>
          </section>
        ) : null
      )}

      {/* Featured Quote */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            {[1,2,3,4,5].map((s) => <Star key={s} className="h-7 w-7 fill-yellow-400 text-yellow-400" />)}
          </div>
          <blockquote className="text-2xl lg:text-3xl font-medium italic mb-8">
            "Installing Advanced Finishing in our warehouse was the single best investment we made this decade. The ROI was under 3 years and the comfort improvement was immediate."
          </blockquote>
          <div className="text-primary/20">
            <p className="font-semibold text-white">Michael Rodriguez</p>
            <p>Facility Director, Midwest Manufacturing</p>
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-primary/20 bg-gray-50">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Share Your Experience</h2>
              <p className="text-gray-600 mb-6">
                Are you an Advanced Finishing customer? We'd love to hear about your experience and results.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Submit Your Story <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <CTABanner
        title="Ready to Join Thousands of Satisfied Customers?"
        description="Get a free quote and discover how much you could save with Advanced Finishing reflective insulation."
        buttonText="Get Your Free Quote"
        buttonHref="/contact"
      />
    </Layout>
  );
}
