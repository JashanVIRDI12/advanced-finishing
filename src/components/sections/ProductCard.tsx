import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
          <span className="text-primary/60 text-sm font-medium">{product.name}</span>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-2">
          <span className="text-sm text-primary font-medium capitalize">
            {product.category.replace('-', ' ')}
          </span>
        </div>
        <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
        <CardDescription className="text-gray-600 mb-4 line-clamp-2">
          {product.shortDescription}
        </CardDescription>
        <div className="space-y-2 mb-4">
          {product.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
              {feature}
            </div>
          ))}
        </div>
        <Button asChild className="w-full">
          <Link href={`/products/${product.id}`}>
            View Details
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
