import { notFound } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { ArrowRight, Download, Shield, Zap, DollarSign } from 'lucide-react';
import { products } from '@/data/products';

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
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-300">/</span>
              </li>
              <li>
                <Link href="/products" className="text-gray-500 hover:text-gray-700">
                  Products
                </Link>
              </li>
              <li>
                <span className="text-gray-300">/</span>
              </li>
              <li className="text-gray-900 font-medium">{product.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Header */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="h-96 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                <span className="text-primary/80 text-lg font-semibold">{product.name}</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1, 4).map((_, index) => (
                  <div key={index} className="h-24 rounded-lg overflow-hidden bg-gradient-to-br from-gray-50 to-primary/10 flex items-center justify-center">
                    <span className="text-primary/60 text-xs">View {index + 2}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="text-sm text-primary font-medium capitalize">
                  {product.category.replace('-', ' ')}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {product.description}
              </p>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/locations">
                    Find Dealer
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">25-Year Warranty</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">99% Efficiency</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">Energy Savings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="installation">Installation</TabsTrigger>
              <TabsTrigger value="downloads">Downloads</TabsTrigger>
            </TabsList>

            <TabsContent value="specifications" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                  <CardDescription>
                    Detailed specifications for {product.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                        <span className="font-medium text-gray-900 capitalize">
                          {key.replace(/-/g, ' ')}
                        </span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="applications" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Applications</CardTitle>
                  <CardDescription>
                    Ideal applications for {product.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {product.applications.map((application, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium text-gray-900 mb-2">{application}</h4>
                        <p className="text-sm text-gray-600">
                          Perfect solution for {application.toLowerCase()} projects
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="installation" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Installation Guide</CardTitle>
                  <CardDescription>
                    Step-by-step installation instructions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {product.installationSteps.map((step, index) => (
                      <AccordionItem key={index} value={`step-${index + 1}`}>
                        <AccordionTrigger>
                          Step {index + 1}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">{step}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-primary/80">
                      <strong>Professional Installation Recommended:</strong> For best results and warranty compliance, consider professional installation. 
                      <Link href="/contact" className="text-primary hover:text-primary/90 ml-1">
                        Contact us for installation services.
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="downloads" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Downloads & Resources</CardTitle>
                  <CardDescription>
                    Technical documents and support materials
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {product.downloadablePDFs.map((pdf, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <div>
                          <h4 className="font-medium text-gray-900">{pdf.name}</h4>
                          <p className="text-sm text-gray-600">PDF document</p>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <a href={pdf.url} download>
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </a>
                        </Button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Warranty Information</h4>
                    <p className="text-gray-600">{product.warranty}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Products</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <div className="h-48 w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                      <span className="text-primary/60 text-sm font-medium">{relatedProduct.name}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-lg mb-2">{relatedProduct.name}</CardTitle>
                    <CardDescription className="text-gray-600 mb-4 line-clamp-2">
                      {relatedProduct.shortDescription}
                    </CardDescription>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/products/${relatedProduct.id}`}>
                        View Product
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
