import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Seo } from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you are looking for does not exist."
        path="/404"
      />
      <section className="flex min-h-[60vh] items-center">
        <div className="container-content text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-4 heading-lg">This page does not exist.</h1>
          <p className="mt-4 body-base">
            The page you were looking for may have moved or been removed.
          </p>
          <Link to="/" className="mt-8 inline-flex btn-primary">
            Back to home
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
