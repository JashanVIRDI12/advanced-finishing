import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ProductCard from '@/components/sections/ProductCard';
import TestimonialCard from '@/components/sections/TestimonialCard';
import BlogCard from '@/components/sections/BlogCard';
import CTABanner from '@/components/sections/CTABanner';
import { products } from '@/data/products';
import { testimonials } from '@/data/testimonials';
import { blogPosts } from '@/data/blog';

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);
  const recentBlogPosts = blogPosts.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white pt-16 pb-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Content & Form */}
            <div className="z-10 mt-8">
              <p className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-6">
                Family-owned in Canada since 2010
              </p>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-secondary leading-[1.05] tracking-tight mb-6">
                Facade renovation and high-performance exterior insulation
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl">
                Improve comfort, reduce energy loss, and refresh your home’s exterior. Get an on-site evaluation and a clear, detailed quote from our team.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-12 text-sm uppercase tracking-wider font-semibold">
                  <Link href="/contact">Get a free quote</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-none border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 h-12 text-sm uppercase tracking-wider font-semibold">
                  <Link href="/products">Explore solutions</Link>
                </Button>
              </div>

              <div className="bg-white">
                <p className="text-gray-600 mb-6 font-medium">
                  Prefer to leave your details here? We’ll contact you to schedule an on-site visit.
                </p>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="FULL NAME*" className="bg-white border-gray-400 rounded-none h-12 text-sm placeholder:text-gray-500" required />
                    <Input placeholder="EMAIL*" type="email" className="bg-white border-gray-400 rounded-none h-12 text-sm placeholder:text-gray-500" required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="PHONE*" type="tel" className="bg-white border-gray-400 rounded-none h-12 text-sm placeholder:text-gray-500" required />
                    <Input placeholder="ADDRESS*" className="bg-white border-gray-400 rounded-none h-12 text-sm placeholder:text-gray-500" required />
                  </div>
                  <Textarea 
                    placeholder="START TYPING HERE..." 
                    className="bg-gray-50 border-gray-300 rounded-none min-h-[120px] resize-none text-sm placeholder:text-gray-400" 
                  />
                  
                  <div className="flex items-start space-x-3 pt-2">
                    <Checkbox id="terms" className="mt-1 border-gray-400 rounded-none" />
                    <label 
                      htmlFor="terms" 
                      className="text-xs text-gray-500 leading-relaxed"
                    >
                      By submitting this form, I agree that the information entered may be used by Advanced Finishing for the purpose of contacting me as part of a commercial relationship.
                    </label>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-12 text-sm uppercase tracking-wider font-semibold w-auto">
                      Send request <ArrowRight className="ml-2 h-4 w-4 -rotate-45" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column - Staggered Images Effect */}
            <div className="relative h-[700px] hidden lg:block mt-20">
              <div className="absolute right-0 top-0 w-full h-full">
                {/* Background decorative arches */}
                <div className="absolute bottom-10 left-[-50px] w-[400px] h-[400px] border-t border-l border-gray-300 rounded-tl-full opacity-50"></div>
                <div className="absolute bottom-10 left-[-30px] w-[360px] h-[360px] border-t border-l border-gray-300 rounded-tl-full opacity-50"></div>
                <div className="absolute bottom-10 left-[-10px] w-[320px] h-[320px] border-t border-l border-gray-300 rounded-tl-full opacity-50"></div>

                {/* Staggered Floating Cards */}
                <div className="absolute top-10 right-0 w-[450px] h-[350px] bg-gray-200 transform translate-x-12 translate-y-24 shadow-2xl border-4 border-white z-10">
                  <img src="/images/products/thermal-guard-pro-1.jpg" alt="Isolation" className="w-full h-full object-cover" />
                </div>
                
                <div className="absolute top-0 right-10 w-[450px] h-[350px] bg-gray-300 transform translate-x-4 translate-y-12 shadow-2xl border-4 border-white z-20">
                  <img src="/images/products/reflective-shield-elite-2.jpg" alt="Renovation" className="w-full h-full object-cover" />
                </div>

                <div className="absolute top-[-20px] right-20 w-[450px] h-[350px] bg-gray-400 shadow-2xl border-4 border-white z-30">
                  <img src="/images/hero-insulation.jpg" alt="Expert Installation" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary leading-tight uppercase">
              Advanced Finishing for facade renovation and exterior thermal insulation in Canada
            </h2>
            <div className="text-gray-600 text-lg leading-relaxed border-l-4 border-primary pl-6">
              Our teams work across Canada on facade renovation and exterior insulation. Since 2010, we’ve focused on durable workmanship, clean finishes, and measurable energy performance—so you can feel the difference season after season.
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary mb-4 uppercase">
              What we do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two core services, one goal: a better-looking exterior and a more efficient home.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group">
              <h3 className="text-2xl font-extrabold text-secondary mb-4 uppercase flex items-center gap-4">
                <span className="text-4xl text-primary">1 -</span> FACADE RENOVATION
              </h3>
              <div className="h-64 bg-gray-200 rounded-none mb-6 overflow-hidden relative">
                <img src="/images/products/eco-shield-basics-1.jpg" alt="Renovation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Restore and protect your exterior with a renovation plan tailored to your surface and exposure. Clean lines, lasting protection, and a finish that elevates curb appeal.
              </p>
              <Button variant="link" className="text-primary hover:text-primary/80 font-bold uppercase p-0 h-auto" asChild>
                <Link href="/products">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="group">
              <h3 className="text-2xl font-extrabold text-secondary mb-4 uppercase flex items-center gap-4">
                <span className="text-4xl text-primary">2 -</span> EXTERIOR INSULATION
              </h3>
              <div className="h-64 bg-gray-300 rounded-none mb-6 overflow-hidden relative">
                <img src="/images/products/thermal-guard-pro-2.jpg" alt="Insulation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Improve comfort and reduce heat loss without sacrificing interior space. Exterior insulation can help stabilize temperatures and modernize the look of your home.
              </p>
              <Button variant="link" className="text-primary hover:text-primary/80 font-bold uppercase p-0 h-auto" asChild>
                <Link href="/products">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary mb-4 uppercase">
              Featured solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore high-performance materials and accessories selected for reliable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="rounded-none border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold uppercase tracking-wider" asChild>
              <Link href="/products">
                View all products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-sky-50 border-t border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary mb-4 uppercase">
              Homeowners trust our work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A few words from customers who chose us for renovation and insulation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Insights & guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical tips, material comparisons, and advice for improving energy performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentBlogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/blog">
                Read All Articles <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to start your project?"
        description="Request a free quote. Our experts evaluate your needs and offer the best insulation solution for your home."
        buttonText="Request a free quote"
        buttonHref="/contact"
        variant="primary"
      />
    </Layout>
  );
}
