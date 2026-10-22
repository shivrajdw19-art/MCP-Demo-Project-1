import { Link } from 'react-router-dom';
import { NAV_LINKS, SITE } from '@/config/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-taupe/50 bg-espresso text-ivory">
      <div className="container-content py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-2xl tracking-tight"
              aria-label="Breakroom Coffee Co. — Home"
            >
              Breakroom Coffee Co.
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/70">
              A curated office coffee sourcing and recurring supply service.
              Discover specialty coffee from independent roasters and arrange
              recurring deliveries for your workplace.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-ivory/40">
              {SITE.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-ivory/50">
              Explore
            </h2>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-ivory/80 transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/pricing"
                  className="text-sm text-ivory/80 transition-colors hover:text-ivory"
                >
                  Explore Coffee Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-ivory/50">
              Get in touch
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ivory/80 transition-colors hover:text-ivory"
                >
                  Book a Coffee Consultation
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-ivory/80 transition-colors hover:text-ivory"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-ivory/40">
              Booking and email links are placeholders and must be replaced
              before launch.
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-ivory/10 pt-6">
          <p className="text-xs text-ivory/50">
            &copy; {year} Breakroom Coffee Co. All content is fictional and for
            demonstration purposes only. Illustrative pricing must be validated
            before commercial use.
          </p>
        </div>
      </div>
    </footer>
  );
}
