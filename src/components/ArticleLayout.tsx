import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import type { BlogPost } from '@/config/blog';
import { SITE } from '@/config/site';

interface ArticleLayoutProps {
  post: BlogPost;
  relatedPost: BlogPost;
  structuredData: object;
  children: React.ReactNode;
}

export function ArticleLayout({
  post,
  relatedPost,
  structuredData,
  children,
}: ArticleLayoutProps) {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Header */}
      <header className="border-b border-taupe/40">
        <div className="container-content py-12 md:py-16">
          <div className="mx-auto max-w-prose">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-roasted-brown transition-colors hover:text-espresso"
            >
              <ArrowLeft size={15} />
              The Office Coffee Guide
            </Link>
            <p className="mt-8 eyebrow">{post.category}</p>
            <h1 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-espresso md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-soft-charcoal md:text-xl">
              {post.subtitle}
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-soft-charcoal/60">
              <span>{post.date}</span>
              <span aria-hidden="true">&middot;</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero image */}
      <div className="container-content pt-10 md:pt-14">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-taupe/30">
          <div className="aspect-[16/8]">
            <img
              src={post.image}
              alt={post.imageAlt}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container-content py-12 md:py-16">
        <div className="mx-auto max-w-prose space-y-6">
          {children}

          {/* Contextual link */}
          <div className="my-10 rounded-2xl border border-taupe/60 bg-white p-6 md:p-8">
            <p className="font-serif text-xl text-espresso">
              Looking for the right coffee plan for your office?
            </p>
            <p className="mt-2 body-base">
              Explore our office coffee supply plans and find one that fits your
              team&rsquo;s size, preferences, and consumption.
            </p>
            <Link
              to="/pricing"
              className="mt-4 inline-flex btn-primary"
            >
              Explore Coffee Plans
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Back and related */}
          <div className="border-t border-taupe/50 pt-8">
            <Link to="/blog" className="btn-link">
              <ArrowLeft size={15} />
              Back to the Blogs
            </Link>
          </div>

          <div className="mt-8 rounded-2xl border border-taupe/60 bg-ivory p-6 md:p-8">
            <p className="eyebrow">Keep reading</p>
            <Link
              to={`/blog/${relatedPost.slug}`}
              className="mt-3 block font-serif text-2xl text-espresso transition-colors hover:text-roasted-brown"
            >
              {relatedPost.title}
            </Link>
            <p className="mt-2 body-base">{relatedPost.excerpt}</p>
            <Link
              to={`/blog/${relatedPost.slug}`}
              className="mt-4 inline-flex btn-link"
            >
              Read the Article
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export function buildArticleStructuredData(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      '@type': 'Organization',
      name: SITE.name,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE.url}/blog/${post.slug}`,
    },
  };
}
