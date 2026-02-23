'use client';

import { useState, useMemo } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { locations, states } from '@/data/locations';
import { MapPin, Phone, Mail, Globe, Search } from 'lucide-react';

export default function LocationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('all');

  const filtered = useMemo(() => {
    return locations.filter((loc) => {
      const matchesSearch =
        loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        loc.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        loc.zipCode.includes(searchTerm);
      const matchesProvince = selectedProvince === 'all' || loc.state === selectedProvince;
      return matchesSearch && matchesProvince;
    });
  }, [searchTerm, selectedProvince]);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Find a <span className="text-primary">Location Near You</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            With distribution centers and authorized dealers across the country, premium insulation is always close by.
          </p>

          {/* Search + Filter */}
          <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search by city, name, or ZIP..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <Select value={selectedProvince} onValueChange={setSelectedProvince}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="All Provinces" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Provinces</SelectItem>
                {states.map((s) => (
                  <SelectItem key={s.code} value={s.code}>{s.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Placeholder */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="w-full h-[500px] bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex flex-col items-center justify-center sticky top-24">
                <MapPin className="h-16 w-16 text-primary/60 mb-4" />
                <h3 className="text-xl font-semibold text-primary/90 mb-2">Interactive Map</h3>
                <p className="text-primary/80 text-sm text-center max-w-xs">
                  Integrate Google Maps or Mapbox here using the <code>NEXT_PUBLIC_MAPS_API_KEY</code> environment variable.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {filtered.slice(0, 4).map((loc) => (
                    <div key={loc.id} className="bg-white rounded-lg px-3 py-2 text-xs text-gray-700 shadow-sm flex items-center gap-1.5">
                      <MapPin className="h-3 w-3 text-primary/80 shrink-0" />
                      {loc.city}, {loc.state}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Location List */}
            <div className="order-1 lg:order-2 space-y-4">
              <p className="text-gray-500 text-sm font-medium">
                {filtered.length} location{filtered.length !== 1 ? 's' : ''} found
              </p>

              {filtered.length === 0 ? (
                <div className="text-center py-12">
                  <MapPin className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">No locations found</h3>
                  <p className="text-gray-500 mb-4">Try a different search or province filter.</p>
                  <Button variant="outline" onClick={() => { setSearchTerm(''); setSelectedProvince('all'); }}>
                    Clear Filters
                  </Button>
                </div>
              ) : (
                filtered.map((loc) => (
                  <Card key={loc.id} className="hover:shadow-md transition-shadow border hover:border-primary/30">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base leading-snug">{loc.name}</CardTitle>
                      <div className="flex items-start gap-1.5 text-sm text-gray-500 mt-1">
                        <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary/80" />
                        <span>{loc.address}, {loc.city}, {loc.state} {loc.zipCode}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="h-4 w-4 text-primary/80 shrink-0" />
                        <a href={`tel:${loc.phone}`} className="hover:text-primary">{loc.phone}</a>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="h-4 w-4 text-primary/80 shrink-0" />
                        <a href={`mailto:${loc.email}`} className="hover:text-primary truncate">{loc.email}</a>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Globe className="h-4 w-4 text-primary/80 shrink-0" />
                        <a href={`https://${loc.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary truncate">{loc.website}</a>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {loc.services.slice(0, 3).map((service) => (
                          <Badge key={service} variant="secondary" className="text-xs">{service}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Become a Dealer CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Becoming an Authorized Dealer?</h2>
          <p className="text-xl text-primary/10 mb-8 max-w-2xl mx-auto">
            Join our growing network of authorized dealers and supply your community with premium insulation products.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/for-contractors">Learn About Our Dealer Program</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
