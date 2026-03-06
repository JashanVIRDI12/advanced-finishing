import { notFound } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { ArrowRight, Download, Shield, Zap, DollarSign, ChevronRight, CheckCircle2 } from 'lucide-react';
import { products } from '@/data/products';
import Image from 'next/image';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find(p => p.id === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <Layout>
      {/* Premium Dark Hero */}
      <section className="bg-secondary text-white pt-8 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
          {product.images?.[0] && <Image src={product.images[0]} alt="" fill className="object-cover blur-sm" />}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary via-transparent to-secondary"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex mb-12" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-xs font-medium tracking-widest uppercase">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><ChevronRight className="h-4 w-4 text-gray-500" /></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><ChevronRight className="h-4 w-4 text-gray-500" /></li>
              <li className="text-primary">{product.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Product Images */}
            <div className="space-y-6">
              <div className="relative h-[400px] md:h-[500px] w-full bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center p-8 backdrop-blur-sm">
                {product.images && product.images.length > 0 ? (
                  <Image src={product.images[0]} alt={product.name} fill className="object-contain p-4" />
                ) : (
                  <span className="text-primary text-xl font-bold uppercase tracking-widest">{product.name}</span>
                )}
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images?.slice(1, 4).map((img, index) => (
                  <div key={index} className="relative h-28 bg-white/5 border border-white/10 cursor-pointer hover:border-primary/50 transition-colors">
                    <Image src={img} alt={`${product.name} - View ${index + 2}`} fill className="object-cover opacity-70 hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">
                  {product.category.replace('-', ' ')}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                {product.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 border-l-2 border-primary pl-5 py-1">
                {product.description}
              </p>

              {/* Key Features Grid */}
              <div className="mb-12">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Key Advantages</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-10 h-14 text-sm uppercase tracking-widest font-bold shadow-[0_0_15px_rgba(234,88,12,0.3)] transition-all hover:shadow-[0_0_25px_rgba(234,88,12,0.5)]" asChild>
                  <Link href="/contact">
                    Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-gray-500 text-gray-300 hover:bg-white hover:text-secondary rounded-none px-10 h-14 text-sm uppercase tracking-widest font-bold transition-colors" asChild>
                  <Link href="/locations">
                    Find Dealer
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div className="text-center group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-300">25-Yr Warranty</p>
                </div>
                <div className="text-center group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-300">High Efficiency</p>
                </div>
                <div className="text-center group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-300">Energy Savings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-gray-100 p-1 rounded-sm mb-12">
              <TabsTrigger value="specifications" className="text-xs md:text-sm font-bold uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-none py-3">Specifications</TabsTrigger>
              <TabsTrigger value="applications" className="text-xs md:text-sm font-bold uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-none py-3">Applications</TabsTrigger>
              <TabsTrigger value="installation" className="text-xs md:text-sm font-bold uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-none py-3">Installation</TabsTrigger>
              <TabsTrigger value="downloads" className="text-xs md:text-sm font-bold uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-none py-3">Downloads</TabsTrigger>
            </TabsList>

            <TabsContent value="specifications">
              <div className="bg-white p-8 md:p-12 border border-gray-200 shadow-sm rounded-sm">
                <div className="mb-8">
                  <h2 className="text-2xl font-extrabold text-secondary tracking-tight mb-2">Technical Specifications</h2>
                  <p className="text-gray-500">Comprehensive engineered data for {product.name}.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-4 border-b border-gray-100 group hover:border-primary/30 transition-colors">
                      <span className="font-bold text-gray-900 capitalize text-sm tracking-wide">
                        {key.replace(/-/g, ' ')}
                      </span>
                      <span className="text-gray-600 font-medium text-right text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="applications">
              <div className="bg-white p-8 md:p-12 border border-gray-200 shadow-sm rounded-sm">
                <div className="mb-8">
                  <h2 className="text-2xl font-extrabold text-secondary tracking-tight mb-2">Ideal Applications</h2>
                  <p className="text-gray-500">Recommended use-cases and environments.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {product.applications.map((application, index) => (
                    <div key={index} className="bg-gray-50 p-6 border-l-4 border-primary hover:shadow-md transition-shadow">
                      <h4 className="font-extrabold text-gray-900 mb-2 uppercase tracking-wide">{application}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Engineered to deliver peak thermal performance specifically tailored for {application.toLowerCase()} environments.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="installation">
              <div className="bg-white p-8 md:p-12 border border-gray-200 shadow-sm rounded-sm">
                <div className="mb-8">
                  <h2 className="text-2xl font-extrabold text-secondary tracking-tight mb-2">Installation Guide</h2>
                  <p className="text-gray-500">Step-by-step procedures for optimal performance.</p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {product.installationSteps.map((step, index) => (
                    <AccordionItem key={index} value={`step-${index + 1}`} className="border-gray-100">
                      <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-primary transition-colors py-4">
                        Step {index + 1}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                        {step}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="mt-10 p-6 bg-primary/5 border border-primary/20 rounded-sm flex items-start">
                  <Shield className="h-6 w-6 text-primary shrink-0 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 uppercase tracking-widest text-xs">Professional Installation Recommended</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      For best results and warranty compliance, we strongly recommend professional installation by certified contractors.
                      <Link href="/contact" className="text-primary font-bold hover:underline ml-2">
                        Contact us to find an installer.
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="downloads">
              <div className="bg-white p-8 md:p-12 border border-gray-200 shadow-sm rounded-sm">
                <div className="mb-8">
                  <h2 className="text-2xl font-extrabold text-secondary tracking-tight mb-2">Downloads & Resources</h2>
                  <p className="text-gray-500">Technical documentation and warranty details.</p>
                </div>

                <div className="space-y-4 mb-10">
                  {product.downloadablePDFs.map((pdf, index) => (
                    <div key={index} className="flex items-center justify-between p-5 bg-gray-50 border border-gray-100 hover:border-primary/50 transition-colors group">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{pdf.name}</h4>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">PDF Document</p>
                      </div>
                      <Button variant="outline" size="sm" className="rounded-none border-gray-300 text-gray-600 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors" asChild>
                        <a href={pdf.url} download>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-secondary text-white rounded-sm">
                  <h4 className="font-bold uppercase tracking-widest text-sm text-primary mb-3">Warranty Information</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{product.warranty}</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 border-b border-gray-200 pb-4 gap-4 sm:gap-0">
            <div>
              <h2 className="text-3xl font-extrabold text-secondary tracking-tight mb-2">Related Products</h2>
              <p className="text-gray-500">Explore alternative solutions in this category.</p>
            </div>
            <Link href="/products" className="text-primary font-bold tracking-widest text-sm uppercase flex items-center hover:text-primary/80 transition-colors">
              View All <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link href={`/products/${relatedProduct.id}`} key={relatedProduct.id} className="group block bg-white rounded-sm border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                  <div className="h-48 w-full overflow-hidden bg-gray-50 flex items-center justify-center p-6 border-b border-gray-100 relative">
                    {relatedProduct.images && relatedProduct.images.length > 0 ? (
                      <Image src={relatedProduct.images[0]} alt={relatedProduct.name} fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-700" />
                    ) : (
                      <span className="text-primary/40 font-bold uppercase tracking-widest text-sm">{relatedProduct.name}</span>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">{relatedProduct.category.replace('-', ' ')}</span>
                    <h3 className="text-xl font-extrabold text-gray-900 mb-3">{relatedProduct.name}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2 mb-6 leading-relaxed">
                      {relatedProduct.shortDescription}
                    </p>
                    <span className="text-sm font-bold text-secondary uppercase tracking-widest flex items-center group-hover:text-primary transition-colors">
                      Get a Quote <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
