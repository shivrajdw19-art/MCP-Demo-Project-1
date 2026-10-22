import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/config/site';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-taupe/50 bg-ivory/90 backdrop-blur-sm">
      <div className="container-content">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link
            to="/"
            className="flex items-center gap-2 font-serif text-xl tracking-tight text-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-roasted-brown focus-visible:ring-offset-2 focus-visible:ring-offset-ivory md:text-2xl"
            aria-label="Breakroom Coffee Co. — Home"
          >
            <BreakroomMark />
            <span>Breakroom Coffee Co.</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:underline ${
                    isActive
                      ? 'text-espresso'
                      : 'text-soft-charcoal hover:text-espresso'
                  }`
                }
                end={link.path === '/'}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link to="/pricing" className="btn-primary">
              Explore Coffee Plans
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="flex items-center justify-center rounded-full p-2 text-espresso transition-colors hover:bg-taupe/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-roasted-brown focus-visible:ring-offset-2 focus-visible:ring-offset-ivory md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="border-t border-taupe/50 bg-ivory md:hidden"
        >
          <nav
            className="container-content flex flex-col gap-1 py-4"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-taupe/40 text-espresso'
                      : 'text-soft-charcoal hover:bg-taupe/20'
                  }`
                }
                end={link.path === '/'}
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/pricing" className="btn-primary mt-3 w-full">
              Explore Coffee Plans
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function BreakroomMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="14" cy="14" r="13" stroke="#76513B" strokeWidth="1.2" />
      <path
        d="M10 9h6a3 3 0 0 1 0 6h-6V9Z"
        fill="none"
        stroke="#76513B"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M10 15v4M13 15v4M16 15v4"
        stroke="#76513B"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M14 20c-1 1.2-1.5 2.4-1.5 3.5 0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c0-1.1-.5-2.3-1.5-3.5Z"
        fill="#89927C"
      />
    </svg>
  );
}
