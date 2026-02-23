import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User } from 'lucide-react';
import { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/10 to-indigo-200 flex items-center justify-center">
          <span className="text-primary/80 text-xs font-medium px-4 text-center line-clamp-2">{post.category}</span>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {formatDate(post.publishedAt)}
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {post.author}
          </div>
        </div>
        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </CardDescription>
        <div className="flex items-center justify-between">
          <span className="text-sm text-primary font-medium capitalize">
            {post.category}
          </span>
          <Link 
            href={`/blog/${post.slug}`}
            className="text-primary hover:text-primary/90 font-medium text-sm"
          >
            Read More →
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
