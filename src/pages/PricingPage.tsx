import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Minus, Calendar, BookOpen } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { PLANS, SITE } from '@/config/site';

const COMPARISON_ROWS: {
  label: string;
  values: (string | boolean)[];
}[] = [
  { label: 'Suitable office size', values: ['5\u201310 people', '11\u201325 people', '26\u201350 people'] },
  { label: 'Estimated monthly coffee', values: ['2\u20134.5 kg', '5\u201311 kg', '11\u201322 kg'] },
  { label: 'Curated coffee selection', values: [true, true, true] },
  { label: 'Broader coffee profiles', values: [false, true, true] },
  { label: 'Delivery planning', values: [true, true, true] },
  { label: 'Tailored delivery scheduling', values: [false, true, true] },
  { label: 'Brewing guidance', values: ['Basic', 'Full', 'Full'] },
  { label: 'Consultation', values: [true, true, true] },
  { label: 'Illustrative price', values: ['$99 / month', '$249 / month', '$499 / month'] },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How much coffee does an office need each month?',
    a: 'It depends on your team size, how many cups each person drinks, and how many days a week the office is occupied. A common starting assumption is about 20 g of coffee per person per working day. For 15 people across 22 working days, that works out to roughly 6.6 kg per month. Our blog article on estimating office coffee consumption walks through the calculation in more detail.',
  },
  {
    q: 'Can we choose different coffee brands?',
    a: 'Breakroom Coffee Co. is designed to give offices access to a considered selection of specialty coffees from different roasters, rather than a single brand. The specific coffees available would be discussed during a consultation and depend on confirmed supplier relationships. The coffee profiles shown on the site are illustrative examples.',
  },
  {
    q: 'How often can coffee be delivered?',
    a: 'Delivery frequency is something we discuss during the consultation. The right cadence depends on your storage space, consumption rate, and how your team prefers to receive fresh coffee. We do not promise specific delivery schedules until arrangements have been confirmed.',
  },
  {
    q: 'Are the displayed prices final?',
    a: 'No. All prices shown are illustrative sample pricing for demonstration purposes. Final quotes depend on coffee selection, delivery location, shipping, taxes, and service requirements. The illustrative prices must be validated against supplier costs and delivery expenses before any commercial use.',
  },
  {
    q: 'Can we change the quantity as our team grows?',
    a: 'Yes. The plans are designed as starting points, not fixed contracts. If your team grows or your consumption patterns change, you can discuss adjusting the quantity and plan. Specific subscription management details would be confirmed during the consultation.',
  },
  {
    q: 'Do the plans include coffee machines or equipment?',
    a: 'No. The plans cover coffee supply, delivery planning, and guidance \u2014 not equipment rental or purchase. If you need help choosing brewing equipment, we can discuss that during a consultation, but equipment is not part of the illustrated plan pricing.',
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Seo
        title="Office Coffee Plans & Subscription Pricing"
        description="Three office coffee supply plans \u2014 The Small Office, The Growing Team, and The Office Plus. Compare estimated quantities and illustrative monthly pricing for your workplace."
        path="/pricing"
      />

      {/* Hero */}
      <section className="border-b border-taupe/40">
        <div className="container-content py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Office coffee plans</p>
            <h1 className="mt-5 heading-xl">
              Coffee plans that work as hard as your team.
            </h1>
            <p className="mt-5 body-lg">
              From a small studio to a busy office, find a starting plan for
              your team&rsquo;s coffee needs. Compare estimated quantities and
              monthly costs, then arrange the right supply schedule.
            </p>
            <p className="mt-6 rounded-lg border border-taupe/50 bg-taupe/20 px-4 py-3 text-sm text-soft-charcoal">
              Illustrative pricing for demonstration purposes. Final quotes
              depend on coffee selection, delivery location, shipping, taxes,
              and service requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="section-spacing">
        <div className="container-content">
          <div className="grid gap-6 lg:grid-cols-3">
            {PLANS.map((plan, i) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  i === 1
                    ? 'border-roasted-brown/40 bg-white shadow-[0_8px_30px_rgba(44,33,28,0.05)]'
                    : 'border-taupe/60 bg-white'
                }`}
              >
                {plan.tagline && (
                  <span className="absolute -top-3 left-8 rounded-full bg-sage/20 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-sage">
                    {plan.tagline}
                  </span>
                )}
                <h2 className="font-serif text-2xl text-espresso">
                  {plan.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-soft-charcoal">
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-serif text-4xl text-espresso">
                    {plan.price}
                  </span>
                  <span className="text-sm text-soft-charcoal/60">
                    {plan.cadence}
                  </span>
                </div>

                <div className="mt-4 space-y-1 text-sm">
                  <p className="text-soft-charcoal">
                    <span className="text-soft-charcoal/60">Designed for:</span>{' '}
                    {plan.teamSize}
                  </p>
                  <p className="text-soft-charcoal">
                    <span className="text-soft-charcoal/60">Supply:</span>{' '}
                    {plan.quantity}
                  </p>
                </div>

                <ul className="mt-6 space-y-3 border-t border-taupe/50 pt-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-soft-charcoal"
                    >
                      <Check
                        size={17}
                        className="mt-0.5 shrink-0 text-sage"
                        strokeWidth={2}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-2">
                  <a
                    href={`${SITE.bookingUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full"
                  >
                    Discuss {plan.name}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-soft-charcoal/50">
            Plan CTAs open a placeholder booking link. This is a demonstration
            site \u2014 no checkout, payment, or subscription management is
            available. Illustrative prices must be validated against supplier
            costs and delivery expenses before commercial use.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-content">
          <div className="max-w-2xl">
            <p className="eyebrow">Compare the plans</p>
            <h2 className="mt-5 heading-lg">A side-by-side look.</h2>
          </div>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-taupe">
                  <th className="py-4 pr-6 text-left font-medium text-soft-charcoal">
                    Feature
                  </th>
                  {PLANS.map((plan) => (
                    <th
                      key={plan.name}
                      className="py-4 px-4 text-left font-serif text-base font-normal text-espresso"
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.label} className="border-b border-taupe/40">
                    <td className="py-4 pr-6 text-soft-charcoal">
                      {row.label}
                    </td>
                    {row.values.map((val, i) => (
                      <td key={i} className="py-4 px-4 text-espresso">
                        {typeof val === 'boolean' ? (
                          val ? (
                            <Check
                              size={17}
                              className="text-sage"
                              strokeWidth={2}
                            />
                          ) : (
                            <Minus
                              size={17}
                              className="text-taupe"
                              strokeWidth={2}
                            />
                          )
                        ) : (
                          val
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="section-spacing">
        <div className="container-content">
          <div className="max-w-2xl">
            <p className="eyebrow">How to choose</p>
            <h2 className="mt-5 heading-lg">Which plan is right for you?</h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Small Office',
                body: 'For a small team that wants a simple starting point \u2014 better coffee without overthinking the supply.',
              },
              {
                title: 'Growing Team',
                body: 'For a busier workplace with more coffee variety and regular supply needs. A popular starting point for growing teams.',
              },
              {
                title: 'Office Plus',
                body: 'For a larger office requiring more substantial supply planning and a broader curated coffee selection.',
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-taupe/60 pt-6">
                <h3 className="heading-sm">{item.title}</h3>
                <p className="mt-3 body-base">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="eyebrow">Questions</p>
              <h2 className="mt-5 heading-lg">Frequently asked questions.</h2>
              <p className="mt-4 body-base">
                Everything you might want to know before exploring a plan.
              </p>
            </div>

            <div className="divide-y divide-taupe/50">
              {FAQS.map((faq, i) => (
                <div key={i}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-roasted-brown focus-visible:ring-offset-4 focus-visible:ring-offset-white"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-serif text-lg text-espresso">
                      {faq.q}
                    </span>
                    <span
                      className={`shrink-0 text-roasted-brown transition-transform duration-300 ${
                        openFaq === i ? 'rotate-45' : ''
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <p className="pb-5 pr-8 body-base">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conversion section */}
      <section className="bg-espresso">
        <div className="container-content py-20 text-center md:py-28">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-ivory md:text-4xl lg:text-5xl">
            Not sure how much coffee your office needs?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-ivory/70">
            Tell us about your team, your coffee preferences, and how your
            workplace operates. We can discuss an appropriate supply plan.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ivory px-7 py-3.5 text-sm font-medium tracking-wide text-espresso transition-all duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory focus-visible:ring-offset-2 focus-visible:ring-offset-espresso"
            >
              <Calendar size={16} />
              Book a Coffee Consultation
            </a>
            <Link
              to="/blog/how-much-coffee-does-your-office-really-need"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/30 px-7 py-3.5 text-sm font-medium tracking-wide text-ivory transition-all duration-300 hover:border-ivory/60"
            >
              <BookOpen size={16} />
              Read the Office Coffee Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
