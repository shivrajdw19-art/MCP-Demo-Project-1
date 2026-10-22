import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Coffee,
  PackageCheck,
  CalendarClock,
  Users,
  AlertCircle,
  Hourglass,
} from 'lucide-react';
import { Seo } from '@/components/Seo';
import { BlogCard } from '@/components/BlogCard';
import { COFFEES, IMAGES, PLANS, SITE } from '@/config/site';
import { BLOG_POSTS } from '@/config/blog';

const orgStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  email: SITE.email,
  slogan: SITE.tagline,
};

export default function HomePage() {
  const planningPost = BLOG_POSTS.find(
    (p) => p.slug === 'how-much-coffee-does-your-office-really-need'
  )!;

  return (
    <>
      <Seo
        title={SITE.name}
        description={SITE.description}
        path="/"
        image={IMAGES.officeCoffeeStation}
        structuredData={orgStructuredData}
      />

      {/* A. Hero */}
      <section className="overflow-hidden">
        <div className="container-content pt-12 md:pt-20 lg:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow">Office coffee, thoughtfully sorted</p>
              <h1 className="mt-5 heading-xl">
                Better coffee at work. One less thing to manage.
              </h1>
              <p className="mt-6 max-w-md body-lg">
                From independent specialty roasters to reliable recurring
                deliveries, Breakroom Coffee Co. helps your team enjoy better coffee
                while making office supplies easier to manage.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/pricing" className="btn-primary">
                  Explore Coffee Plans
                  <ArrowRight size={16} />
                </Link>
                <a href="#how-it-works" className="btn-secondary">
                  How It Works
                </a>
              </div>
              <p className="mt-8 text-sm text-soft-charcoal/60">
                Coffee for small teams, growing offices, and shared workspaces.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-taupe/30">
                <img
                  src={IMAGES.officeCoffeeStation}
                  alt="A well-designed office coffee station with coffee makers and mugs"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B. The workplace problem */}
      <section className="section-spacing">
        <div className="container-content">
          <div className="max-w-2xl">
            <p className="eyebrow">The workplace problem</p>
            <h2 className="mt-5 heading-lg">
              Your team deserves better than running out of coffee.
            </h2>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {[
              {
                icon: AlertCircle,
                title: 'The last bag is empty',
                body: 'It always happens when the office gets busy. Someone reaches for the coffee and finds the bag is already gone.',
              },
              {
                icon: Hourglass,
                title: 'Someone has to reorder',
                body: 'Reordering supplies falls to whoever notices \u2014 usually at the worst moment. It becomes a recurring, low-priority task that no one owns.',
              },
              {
                icon: Coffee,
                title: 'The default coffee disappoints',
                body: 'The same bulk coffee every week rarely satisfies everyone. A better selection would make the coffee break something people actually look forward to.',
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

      {/* C. The Breakroom Coffee Co. approach */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-content">
          <div className="max-w-2xl">
            <p className="eyebrow">Our approach</p>
            <h2 className="mt-5 heading-lg">
              A simpler way to keep your office stocked.
            </h2>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {[
              {
                icon: Coffee,
                title: 'Coffee worth looking forward to',
                body: 'Discover a considered selection of specialty coffees from different roasters and flavour profiles \u2014 not just one default blend.',
              },
              {
                icon: Users,
                title: 'Supply that fits your team',
                body: 'Choose a plan based on office size and estimated consumption instead of guessing how many bags to order each month.',
              },
              {
                icon: CalendarClock,
                title: 'Less manual reordering',
                body: 'Arrange a recurring supply schedule that suits your workplace and discuss adjustments when your team\u2019s needs change.',
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

      {/* D. How it works */}
      <section id="how-it-works" className="section-spacing scroll-mt-20">
        <div className="container-content">
          <div className="max-w-2xl">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-5 heading-lg">Three steps to better office coffee.</h2>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Tell us about your office',
                body: 'Choose an approximate team size and tell us about your coffee preferences \u2014 what your team enjoys and how they brew.',
              },
              {
                step: '02',
                title: 'Find your supply plan',
                body: 'Compare estimated quantities, plan inclusions, and indicative monthly prices to find a starting point that fits.',
              },
              {
                step: '03',
                title: 'Arrange recurring deliveries',
                body: 'Discuss your preferred schedule and coffee selection with the Breakroom Coffee Co. team to set up a recurring supply.',
              },
            ].map((item) => (
              <div key={item.step}>
                <span className="font-serif text-4xl text-taupe">
                  {item.step}
                </span>
                <h3 className="mt-4 heading-sm">{item.title}</h3>
                <p className="mt-3 body-base">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E. Coffee for different preferences */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-content">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="eyebrow">Coffee for different preferences</p>
              <h2 className="mt-5 heading-lg">
                A selection that goes beyond one default blend.
              </h2>
              <p className="mt-4 body-base">
                These are illustrative examples of the kinds of coffee you could
                discover through Breakroom Coffee Co. Actual availability depends on
                confirmed suppliers.
              </p>
            </div>
            <Link to="/pricing" className="btn-link shrink-0">
              Explore Coffee Plans
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {COFFEES.map((coffee) => (
              <div
                key={coffee.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-taupe/60"
              >
                <div className="aspect-[4/3] overflow-hidden bg-taupe/30">
                  <img
                    src={coffee.image}
                    alt={coffee.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl text-espresso">
                    {coffee.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-soft-charcoal">
                    {coffee.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {coffee.notes.map((note) => (
                      <span
                        key={note}
                        className="rounded-full bg-taupe/40 px-3 py-1 text-xs font-medium text-roasted-brown"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-soft-charcoal/50">
            Illustrative coffee profiles for demonstration purposes. Breakroom
            Coffee Co. is a sourcing platform, not a coffee manufacturer.
          </p>
        </div>
      </section>

      {/* F. Office plans preview */}
      <section className="section-spacing">
        <div className="container-content">
          <div className="max-w-2xl">
            <p className="eyebrow">Office plans</p>
            <h2 className="mt-5 heading-lg">
              The right amount of coffee for your team.
            </h2>
            <p className="mt-4 body-base">
              Three starting plans based on team size and estimated consumption.
              Final prices depend on coffee selection, delivery arrangements,
              and service requirements.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className="flex flex-col rounded-2xl border border-taupe/60 p-7"
              >
                <h3 className="font-serif text-xl text-espresso">
                  {plan.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-soft-charcoal">
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-serif text-3xl text-espresso">
                    {plan.price}
                  </span>
                  <span className="text-sm text-soft-charcoal/60">
                    {plan.cadence}
                  </span>
                </div>
                <div className="mt-4 space-y-1 text-sm text-soft-charcoal">
                  <p>
                    <span className="text-soft-charcoal/60">Team size:</span>{' '}
                    {plan.teamSize}
                  </p>
                  <p>
                    <span className="text-soft-charcoal/60">Supply:</span>{' '}
                    {plan.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/pricing" className="btn-primary">
              Compare Office Plans
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* G. Editorial feature */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-content">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <p className="eyebrow">From the blogs</p>
              <h2 className="mt-5 heading-lg">
                How much coffee does your office really need?
              </h2>
              <p className="mt-5 body-base">
                Estimate monthly consumption using your team size, average cups
                per day, and working days. A practical starting point for
                avoiding shortages and planning your office coffee budget.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/blog/how-much-coffee-does-your-office-really-need"
                  className="btn-primary"
                >
                  Read the Article
                  <ArrowRight size={16} />
                </Link>
                <Link to="/blog" className="btn-secondary">
                  Read the Blogs
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-taupe/30">
                <img
                  src={planningPost.image}
                  alt={planningPost.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H. Final conversion section */}
      <section className="bg-espresso">
        <div className="container-content py-20 text-center md:py-28">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-ivory md:text-4xl lg:text-5xl">
            Let&rsquo;s make your office coffee better.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-ivory/70">
            Tell us about your team and we&rsquo;ll help you explore a coffee
            supply plan that fits your workplace.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ivory px-7 py-3.5 text-sm font-medium tracking-wide text-espresso transition-all duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory focus-visible:ring-offset-2 focus-visible:ring-offset-espresso"
            >
              Find Your Office Plan
              <ArrowRight size={16} />
            </Link>
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/30 px-7 py-3.5 text-sm font-medium tracking-wide text-ivory transition-all duration-300 hover:border-ivory/60"
            >
              Book a Conversation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
