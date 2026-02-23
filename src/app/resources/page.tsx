import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight, Download, FileText, Video, Calculator, BookOpen, Wrench } from 'lucide-react';

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: 'Technical Documents',
      description: 'Detailed specifications and technical data',
      icon: <FileText className="h-8 w-8" />,
      resources: [
        { title: 'Installation Guides', description: 'Step-by-step installation instructions', type: 'PDF', size: '2.3 MB' },
        { title: 'Technical Data Sheets', description: 'Complete product specifications', type: 'PDF', size: '1.8 MB' },
        { title: 'Safety Data Sheets', description: 'Material safety information', type: 'PDF', size: '156 KB' },
        { title: 'Warranty Information', description: 'Product warranty details', type: 'PDF', size: '445 KB' }
      ]
    },
    {
      title: 'Video Tutorials',
      description: 'Watch and learn from our experts',
      icon: <Video className="h-8 w-8" />,
      resources: [
        { title: 'DIY Attic Installation', description: 'Complete attic installation guide', type: 'Video', duration: '12:45' },
        { title: 'Commercial Applications', description: 'Installing in commercial buildings', type: 'Video', duration: '18:30' },
        { title: 'Sealing Techniques', description: 'Proper sealing methods', type: 'Video', duration: '8:15' },
        { title: 'Tools & Equipment', description: 'Essential installation tools', type: 'Video', duration: '6:20' }
      ]
    },
    {
      title: 'Calculators & Tools',
      description: 'Interactive tools for project planning',
      icon: <Calculator className="h-8 w-8" />,
      resources: [
        { title: 'Energy Savings Calculator', description: 'Estimate your energy savings', type: 'Tool', interactive: true },
        { title: 'Material Quantity Calculator', description: 'Calculate needed materials', type: 'Tool', interactive: true },
        { title: 'R-Value Calculator', description: 'Determine insulation requirements', type: 'Tool', interactive: true },
        { title: 'ROI Calculator', description: 'Return on investment analysis', type: 'Tool', interactive: true }
      ]
    },
    {
      title: 'Guides & Articles',
      description: 'In-depth educational content',
      icon: <BookOpen className="h-8 w-8" />,
      resources: [
        { title: 'Homeowner\'s Guide to Insulation', description: 'Complete guide for homeowners', type: 'Guide', pages: 24 },
        { title: 'Contractor Handbook', description: 'Professional installation manual', type: 'Guide', pages: 56 },
        { title: 'Building Code Compliance', description: 'Understanding local requirements', type: 'Article', readTime: '8 min' },
        { title: 'Energy Efficiency Basics', description: 'Fundamentals of energy efficiency', type: 'Article', readTime: '5 min' }
      ]
    }
  ];

  const featuredResources = [
    {
      title: 'Complete Installation Guide',
      description: 'Comprehensive guide covering all aspects of reflective insulation installation',
      type: 'PDF',
      size: '4.2 MB',
      category: 'Technical Documents',
      featured: true
    },
    {
      title: 'Energy Savings Calculator',
      description: 'Calculate potential energy savings for your specific project',
      type: 'Interactive Tool',
      category: 'Calculators & Tools',
      featured: true
    },
    {
      title: 'Video Installation Series',
      description: 'Professional video tutorials covering all installation scenarios',
      type: 'Video Series',
      duration: '2 hours total',
      category: 'Video Tutorials',
      featured: true
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Resources &
              <span className="text-primary"> Learning Center</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Access comprehensive guides, technical documents, videos, and tools to help you make informed decisions about insulation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/products">
                  Browse Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get Expert Help</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with our most popular and comprehensive resources
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Download className="h-8 w-8 text-primary" />
                  </div>
                  <Badge variant="secondary" className="w-fit mb-2">Featured</Badge>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{resource.type}</span>
                    <span>{resource.size || resource.duration}</span>
                  </div>
                  <Button className="w-full">
                    {resource.type.includes('Tool') ? 'Use Tool' : 'Download'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find exactly what you need organized by topic and format
            </p>
          </div>
          <div className="space-y-12">
            {resourceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 text-primary">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.resources.map((resource, resourceIndex) => (
                    <Card key={resourceIndex} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-gray-900 mb-2">{resource.title}</h4>
                        <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {resource.type}
                          </Badge>
                          <Button size="sm" variant="outline">
                            {resource.type.includes('PDF') ? (
                              <><Download className="h-3 w-3 mr-1" /> Download</>
                            ) : resource.type.includes('Video') ? (
                              <><Video className="h-3 w-3 mr-1" /> Watch</>
                            ) : resource.type.includes('Tool') ? (
                              <><Calculator className="h-3 w-3 mr-1" /> Use</>
                            ) : (
                              <><FileText className="h-3 w-3 mr-1" /> Read</>
                            )}
                          </Button>
                        </div>
                        <div className="mt-2 text-xs text-gray-500">
                          {'size' in resource && resource.size || 
                           'duration' in resource && resource.duration || 
                           'pages' in resource && `${resource.pages} pages` || 
                           'readTime' in resource && `${resource.readTime} read`}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Tools */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quick Access Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interactive tools to help with your insulation project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Project Estimator',
                description: 'Get instant estimates for materials and costs',
                icon: <Calculator className="h-8 w-8" />,
                action: 'Start Estimating'
              },
              {
                title: 'Installation Planner',
                description: 'Step-by-step project planning tool',
                icon: <Wrench className="h-8 w-8" />,
                action: 'Plan Project'
              },
              {
                title: 'Energy Audit',
                description: 'Analyze your home\'s energy efficiency',
                icon: <FileText className="h-8 w-8" />,
                action: 'Run Audit'
              }
            ].map((tool, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.title}</h3>
                  <p className="text-gray-600 mb-6">{tool.description}</p>
                  <Button className="w-full">{tool.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl mb-6">
                Our team of insulation experts is here to help. Get personalized advice and support for your specific project needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Contact Expert <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/faqs">Browse FAQs</Link>
                </Button>
              </div>
            </div>
            <div className="h-64 rounded-lg overflow-hidden bg-white/20 flex items-center justify-center">
              <span className="text-white/70 font-medium">Expert Support Team</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
