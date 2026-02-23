import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Thermometer, Sun, Home, DollarSign } from 'lucide-react';

export default function WhyInsulationPage() {
  const heatTransferMethods = [
    {
      type: 'Conduction',
      description: 'Direct heat transfer through materials',
      example: 'Heat moving through walls from warm to cool areas',
      icon: <Home className="h-6 w-6" />,
      percentage: '5-10%'
    },
    {
      type: 'Convection',
      description: 'Heat transfer through air movement',
      example: 'Warm air rising and cool air sinking',
      icon: <Zap className="h-6 w-6" />,
      percentage: '15-25%'
    },
    {
      type: 'Radiation',
      description: 'Heat transfer through electromagnetic waves',
      example: 'Sun heating your roof and attic space',
      icon: <Sun className="h-6 w-6" />,
      percentage: '65-75%'
    }
  ];

  const benefits = [
    {
      title: 'Energy Cost Reduction',
      description: 'Lower heating and cooling bills by up to 40%',
      savings: '$400-800/year',
      icon: <DollarSign className="h-8 w-8" />
    },
    {
      title: 'Enhanced Comfort',
      description: 'Maintain consistent temperatures throughout your home',
      savings: 'Year-round comfort',
      icon: <Thermometer className="h-8 w-8" />
    },
    {
      title: 'Environmental Impact',
      description: 'Reduce carbon footprint and energy consumption',
      savings: '2-4 tons CO2/year',
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: 'Property Value',
      description: 'Increase home value with energy-efficient features',
      savings: '5-10% value increase',
      icon: <Home className="h-8 w-8" />
    }
  ];

  const comparisonData = [
    {
      aspect: 'Heat Transfer Method',
      traditional: 'Slows conduction/convection',
      reflective: 'Blocks 97% of radiant heat'
    },
    {
      aspect: 'Summer Performance',
      traditional: 'Moderate heat reduction',
      reflective: 'Superior heat rejection'
    },
    {
      aspect: 'Winter Performance',
      traditional: 'Good heat retention',
      reflective: 'Reflects interior heat back'
    },
    {
      aspect: 'Installation',
      traditional: 'Requires thick layers',
      reflective: 'Thin, lightweight'
    },
    {
      aspect: 'Moisture Resistance',
      traditional: 'Can absorb moisture',
      reflective: 'Moisture resistant'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Educational Content</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Understanding
                <span className="text-primary"> Reflective Insulation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover the science behind reflective insulation and learn how it can dramatically improve your home's energy efficiency and comfort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/products">
                    Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/blog">Read Articles</Link>
                </Button>
              </div>
            </div>
            <div className="h-96 lg:min-h-[400px] bg-gradient-to-br from-orange-100 to-primary/20 rounded-lg shadow-xl flex items-center justify-center">
              <span className="text-primary font-semibold text-lg">Heat Transfer Diagram</span>
            </div>
          </div>
        </div>
      </section>

      {/* Heat Transfer Education */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How Heat Transfer Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the three types of heat transfer is key to choosing the right insulation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {heatTransferMethods.map((method, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl">{method.type}</CardTitle>
                  <Badge variant="secondary">{method.percentage}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Example:</strong> {method.example}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <p className="text-center text-primary/80">
              <strong>Key Insight:</strong> Radiant heat transfer accounts for up to 75% of heat gain in homes during summer months, making it the most important factor to address for energy efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* How Reflective Insulation Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                How Reflective Insulation Works
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Reflective insulation works on a simple principle: it reflects radiant heat rather than absorbing it. The highly reflective aluminum surface acts as a barrier to radiant heat transfer.
                </p>
                <p>
                  Unlike traditional insulation that slows down conductive and convective heat flow, reflective insulation specifically targets radiant heat - the primary source of heat gain in most buildings.
                </p>
                <p>
                  The effectiveness depends on proper installation with an air gap on one side, allowing the reflective surface to work as intended.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Summer Benefits</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Blocks solar heat gain</li>
                    <li>• Reduces cooling costs</li>
                    <li>• Improves comfort</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Winter Benefits</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Reflects interior heat</li>
                    <li>• Reduces heat loss</li>
                    <li>• Lowers heating costs</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="h-96 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center">
              <span className="text-primary font-semibold">Reflective Barrier Diagram</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Reflective Insulation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real advantages that make a difference in your home and wallet
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {benefit.savings}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Reflective vs Traditional Insulation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare the performance and characteristics of different insulation types
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Aspect</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Traditional Insulation</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-primary">Reflective Insulation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonData.map((row, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.aspect}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.traditional}</td>
                    <td className="px-6 py-4 text-sm text-primary font-medium">{row.reflective}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Installation Considerations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Installation Best Practices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proper installation is crucial for maximum performance
            </p>
          </div>
          <Tabs defaultValue="air-gap" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="air-gap">Air Gap Requirement</TabsTrigger>
              <TabsTrigger value="placement">Proper Placement</TabsTrigger>
              <TabsTrigger value="sealing">Sealing & Finishing</TabsTrigger>
            </TabsList>

            <TabsContent value="air-gap" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>The Critical Air Gap</CardTitle>
                  <CardDescription>
                    Why an air space is essential for reflective insulation performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Why It Matters</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Reflective surfaces need air to reflect heat</li>
                        <li>• Minimum 3/4" gap required on one side</li>
                        <li>• Larger gaps provide better performance</li>
                        <li>• Compression reduces effectiveness dramatically</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Common Applications</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Attic rafters (facing down)</li>
                        <li>• Wall studs (facing interior)</li>
                        <li>• Roof decking (facing up)</li>
                        <li>• Crawl space joists (facing up)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="placement" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Proper Placement</CardTitle>
                  <CardDescription>
                    Where and how to install reflective insulation for best results
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Summer Applications</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Reflective side faces heat source</li>
                        <li>• Install under roof decking</li>
                        <li>• Place on attic rafters facing down</li>
                        <li>• Use in walls facing direct sun</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Winter Applications</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Reflect interior heat back inside</li>
                        <li>• Install on interior wall surfaces</li>
                        <li>• Place in ceiling joists facing up</li>
                        <li>• Use in crawl spaces facing up</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sealing" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Sealing & Finishing</CardTitle>
                  <CardDescription>
                    Proper sealing techniques to maximize performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Proper sealing is crucial for preventing air leaks and maintaining the reflective barrier's integrity. Use foil tape specifically designed for reflective insulation to seal all seams and edges.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Seaming Techniques</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Overlap seams by 2-3 inches</li>
                          <li>• Use foil tape on all seams</li>
                          <li>• Seal around obstacles carefully</li>
                          <li>• Check for gaps after installation</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Edge Treatment</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Seal all perimeter edges</li>
                          <li>• Use proper fasteners</li>
                          <li>• Maintain air gaps at edges</li>
                          <li>• Protect from physical damage</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Improve Your Home's Energy Efficiency?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore our range of reflective insulation products and start saving on energy costs today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/products">View Products</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Get Expert Advice</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
