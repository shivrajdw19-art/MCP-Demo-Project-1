import { Link } from 'react-router-dom';
import { ArrowRight, Coffee, ClipboardList, Building2, Calendar } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { IMAGES, SITE } from '@/config/site';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="Our Story"
        description="Breakroom Coffee Co. is a curated office coffee sourcing and subscription platform. We help companies discover specialty coffee and arrange recurring office deliveries."
        path="/about"
        image={IMAGES.officeCoffeeStation}
      />

      {/* Hero */}
      <section className="border-b border-taupe/40">
        <div className="container-content py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Our story</p>
            <h1 className="mt-5 heading-xl">
              Better coffee should be easier to bring to work.
            </h1>
            <p className="mt-5 body-lg">
              We believe the office coffee break deserves more thought. Breakroom
              Coffee Co. brings together specialty coffee discovery, practical
              supply planning, and a simpler way to arrange recurring office
              deliveries.
            </p>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section>
        <div className="container-content pt-12 md:pt-16">
          <div className="aspect-[16/7] overflow-hidden rounded-2xl bg-taupe/30">
            <img
              src={IMAGES.officeKitchen}
              alt="Colleagues enjoying coffee in a modern office kitchen"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="section-spacing">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
            <div>
              <p className="eyebrow">The problem</p>
              <h2 className="mt-5 heading-md">
                The everyday friction of office coffee.
              </h2>
            </div>
            <div className="max-w-prose space-y-5">
              <p className="body-lg">
                Anyone who has managed an office knows the coffee situation is
                never as simple as it looks.
              </p>
              <ul className="space-y-3">
                {[
                  'Remembering when to reorder before supplies run out.',
                  'Finding coffee that employees genuinely enjoy \u2014 not just tolerate.',
                  'Estimating how much a team actually consumes each month.',
                  'Coordinating supply for a workplace where attendance and team size keep changing.',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 body-base"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-roasted-brown"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="body-base">
                Breakroom Coffee Co. is a proposed service designed to simplify these
                decisions \u2014 so the people responsible for workplace
                experience can spend less time chasing coffee orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-content">
          <div className="max-w-2xl">
            <p className="eyebrow">Our philosophy</p>
            <h2 className="mt-5 heading-lg">Three things we believe.</h2>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {[
              {
                icon: Coffee,
                title: 'Good coffee should be accessible',
                body: 'Specialty coffee should feel approachable, not intimidating. The office coffee break should be a moment people look forward to \u2014 not a compromise.',
              },
              {
                icon: ClipboardList,
                title: 'Office supplies should be easier to manage',
                body: 'The people responsible for workplace experience should spend less time chasing coffee orders and more time on the things that actually need their attention.',
              },
              {
                icon: Building2,
                title: 'Every workplace is different',
                body: 'The right coffee selection and quantity depend on team size, preferences, equipment, and consumption patterns. There is no one-size-fits-all answer.',
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-taupe/60 pt-6">
                <item.icon
                  size={26}
                  className="text-roasted-brown"
                  strokeWidth={1.5}
                />
                <h3 className="mt-4 heading-sm">{item.title}</h3>
                <p className="mt-3 body-base">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing */}
      <section className="section-spacing">
        <div className="container-content">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-taupe/30">
                <img
                  src={IMAGES.coffeeBagsShelf}
                  alt="Specialty coffee bags displayed on a shelf"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="eyebrow">How we think about sourcing</p>
              <h2 className="mt-5 heading-lg">
                A considered selection, not a single brand.
              </h2>
              <p className="mt-5 body-base">
                Breakroom Coffee Co. is designed to work with a considered selection
                of specialty roasters, giving offices access to a range of
                coffee profiles rather than one default option. The goal is to
                make it easier to discover coffees worth looking forward to.
              </p>
              <p className="mt-4 body-base">
                We do not claim that actual supplier relationships have already
                been established. The coffees shown on this site are
                illustrative examples of the kinds of profiles we intend to
                offer. Sourcing details would be confirmed as the service
                develops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book a conversation */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-content">
          <div className="mx-auto max-w-2xl rounded-2xl border border-taupe/60 bg-ivory p-8 text-center md:p-12">
            <Calendar
              size={32}
              className="mx-auto text-roasted-brown"
              strokeWidth={1.5}
            />
            <h2 className="mt-6 heading-md">
              Let&rsquo;s talk about your office coffee.
            </h2>
            <p className="mt-4 body-base">
              Whether you&rsquo;re stocking a small studio or planning coffee
              for a growing team, start with a conversation about your
              workplace.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a Coffee Consultation
                <ArrowRight size={16} />
              </a>
              <Link to="/pricing" className="btn-secondary">
                Explore Coffee Plans
              </Link>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-soft-charcoal/50">
              The booking link is a placeholder and must be replaced with a real
              calendar URL before launch. The email address{' '}
              {SITE.email} is also a placeholder.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
