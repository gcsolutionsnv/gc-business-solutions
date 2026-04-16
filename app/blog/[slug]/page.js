import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { getPostBySlug, getAllSlugs } from '@/lib/blog';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'GC Business Solutions'],
    },
  };
}

const mdxComponents = {
  h2: (props) => <h2 className="text-2xl font-bold text-foreground mt-10 mb-4" {...props} />,
  h3: (props) => <h3 className="text-xl font-semibold text-foreground mt-8 mb-3" {...props} />,
  p: (props) => <p className="text-muted-foreground leading-relaxed mb-4 max-w-none" {...props} />,
  ul: (props) => <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside space-y-2 mb-6 text-muted-foreground" {...props} />,
  li: (props) => <li className="leading-relaxed" {...props} />,
  strong: (props) => <strong className="text-foreground font-semibold" {...props} />,
  a: (props) => <a className="text-primary hover:underline" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-muted-foreground" {...props} />
  ),
  img: (props) => (
    <figure className="my-8">
      <img className="rounded-xl shadow-lg border border-border/50 w-full" {...props} />
      {props.alt && (
        <figcaption className="text-center text-sm text-muted-foreground mt-3">{props.alt}</figcaption>
      )}
    </figure>
  ),
  code: (props) => (
    <code className="bg-muted px-2 py-0.5 rounded text-sm font-mono text-foreground" {...props} />
  ),
  pre: (props) => (
    <pre className="bg-muted rounded-xl p-4 overflow-x-auto mb-6 text-sm" {...props} />
  ),
};

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <>
      {/* Hero */}
      <section className="section-spacing bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto container-padding">
          <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to blog
          </Link>

          {post.category && (
            <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
          )}

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {post.author && (
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1.5" />
                {post.author}
              </div>
            )}
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1.5" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            {post.readTime && (
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1.5" />
                {post.readTime}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-spacing bg-background">
        <div className="max-w-4xl mx-auto container-padding">
          <article className="prose-custom">
            <MDXRemote source={post.content} components={mdxComponents} />
          </article>

          {/* CTA */}
          <div className="mt-16 bg-primary text-primary-foreground rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need help with your NetSuite environment?</h3>
            <p className="opacity-90 mb-6 max-w-xl mx-auto">
              Our certified consultants are ready to help you optimize, troubleshoot, and get the most out of NetSuite.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="rounded-full">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
