import { notFound } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Calendar, User, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import type { Metadata } from 'next';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      images: [post.featuredImage],
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const postIndex = blogPosts.findIndex((p) => p.slug === params.slug);
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== params.slug && p.category === post.category)
    .slice(0, 2);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-700">Blog</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-10">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" /> {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> {formatDate(post.publishedAt)}
              </span>
            </div>
            {/* Featured Image placeholder */}
            <div className="w-full h-64 lg:h-96 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center">
              <span className="text-primary/60 text-lg font-medium">Featured Image</span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900">
            {post.content.split('\n').map((line, i) => {
              if (line.startsWith('# ')) return <h1 key={i} className="text-3xl font-bold mt-8 mb-4">{line.slice(2)}</h1>;
              if (line.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold mt-8 mb-4">{line.slice(3)}</h2>;
              if (line.startsWith('### ')) return <h3 key={i} className="text-xl font-bold mt-6 mb-3">{line.slice(4)}</h3>;
              if (line.startsWith('- ')) return <li key={i} className="ml-4 text-gray-700">{line.slice(2)}</li>;
              if (line.match(/^\d+\. /)) return <li key={i} className="ml-4 text-gray-700">{line.replace(/^\d+\. /, '')}</li>;
              if (line.startsWith('**') && line.endsWith('**')) return <p key={i} className="font-bold text-gray-900 mt-4">{line.slice(2, -2)}</p>;
              if (line.trim() === '') return <br key={i} />;
              return <p key={i} className="text-gray-700 leading-relaxed my-3">{line}</p>;
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-wrap items-center gap-2">
              <Tag className="h-4 w-4 text-gray-400" />
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </div>

          {/* Prev / Next Navigation */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevPost && (
              <Link href={`/blog/${prevPost.slug}`} className="group">
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                      <ArrowLeft className="h-4 w-4" /> Previous
                    </div>
                    <p className="font-medium text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                      {prevPost.title}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            )}
            {nextPost && (
              <Link href={`/blog/${nextPost.slug}`} className="group sm:col-start-2">
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2 text-sm text-gray-500 mb-1">
                      Next <ArrowRight className="h-4 w-4" />
                    </div>
                    <p className="font-medium text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                      {nextPost.title}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            )}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Card key={related.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">{related.category}</Badge>
                    <h3 className="font-semibold text-gray-900 mb-2 hover:text-primary">
                      <Link href={`/blog/${related.slug}`}>{related.title}</Link>
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{related.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Improve Your Home's Efficiency?</h2>
          <p className="text-primary/10 mb-8">Get a free quote from our insulation experts today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
