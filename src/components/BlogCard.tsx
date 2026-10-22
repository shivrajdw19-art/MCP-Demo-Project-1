import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/config/blog';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-taupe/60 bg-white transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(44,33,28,0.06)]">
      <Link
        to={`/blog/${post.slug}`}
        className="block overflow-hidden"
        aria-label={`Read ${post.title}`}
      >
        <div className="aspect-[16/10] overflow-hidden bg-taupe/30">
          <img
            src={post.image}
            alt={post.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-center gap-3 text-xs text-soft-charcoal/60">
          <span className="font-medium uppercase tracking-[0.15em] text-roasted-brown">
            {post.category}
          </span>
          <span aria-hidden="true">&middot;</span>
          <span>{post.readingTime}</span>
        </div>
        <h3 className="mt-4 font-serif text-2xl leading-snug text-espresso">
          <Link
            to={`/blog/${post.slug}`}
            className="transition-colors hover:text-roasted-brown"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-base leading-relaxed text-soft-charcoal">
          {post.excerpt}
        </p>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm text-soft-charcoal/60">{post.date}</span>
          <Link
            to={`/blog/${post.slug}`}
            className="btn-link"
          >
            Read Article
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}
