import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <blockquote className="text-gray-700 mb-6 italic">
          "{testimonial.content}"
        </blockquote>
        <div className="flex items-center">
          <div className="h-12 w-12 mr-4 rounded-full bg-gradient-to-br from-primary/60 to-primary flex items-center justify-center text-white font-bold text-lg shrink-0">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-gray-900">{testimonial.name}</div>
            <div className="text-sm text-gray-600">{testimonial.role}</div>
            <div className="text-sm text-primary">{testimonial.company}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
