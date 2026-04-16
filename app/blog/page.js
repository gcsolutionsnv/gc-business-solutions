import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { ArrowRight, Calendar } from 'lucide-react';

export const metadata = {
  title: 'Blog',
  description:
    'NetSuite tips, guides, and best practices from the certified consultants at GC Business Solutions.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="section-spacing bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight tracking-tight">
            NetSuite Insights &amp; Guides
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Practical tips, troubleshooting guides, and best practices from our certified NetSuite consultants.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-spacing bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          {posts.length === 0 ? (
            <p className="text-center text-muted-foreground">No posts yet. Check back soon!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  {post.image && (
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {post.category && (
                      <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                        {post.category}
                      </span>
                    )}
                    <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5 mr-1.5" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                      <span className="text-primary text-sm font-medium flex items-center">
                        Read more
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
