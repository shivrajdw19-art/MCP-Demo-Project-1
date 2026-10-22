import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { BlogCard } from '@/components/BlogCard';
import { BLOG_POSTS } from '@/config/blog';
import { IMAGES } from '@/config/site';

export default function BlogListPage() {
  return (
    <>
      <Seo
        title="The Office Coffee Guide \u2014 Blogs"
        description="Practical guidance on office coffee, supply planning, choosing coffee, and creating a workplace coffee experience people enjoy. Read the Breakroom Coffee Co. blogs."
        path="/blog"
        image={IMAGES.officeBreak}
      />

      {/* Hero */}
      <section className="border-b border-taupe/40">
        <div className="container-content py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">The Office Coffee Guide</p>
            <h1 className="mt-5 heading-xl">
              A better workplace coffee break starts here.
            </h1>
            <p className="mt-5 body-lg">
              Practical guidance on office coffee, supply planning, choosing
              coffee, and creating a workplace coffee experience people enjoy.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-spacing">
        <div className="container-content">
          <div className="grid gap-8 md:grid-cols-2 md:gap-8 lg:gap-10">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="mt-16 border-t border-taupe/50 pt-10 text-center">
            <p className="body-base">
              Looking for the right coffee plan for your office?
            </p>
            <Link to="/pricing" className="mt-4 inline-flex btn-link">
              Explore Coffee Plans
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
