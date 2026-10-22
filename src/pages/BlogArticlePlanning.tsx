import { ArrowRight } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { ArticleLayout, buildArticleStructuredData } from '@/components/ArticleLayout';
import { getPostBySlug, getRelatedPost } from '@/config/blog';

export default function BlogArticlePlanning() {
  const post = getPostBySlug('how-much-coffee-does-your-office-really-need')!;
  const relatedPost = getRelatedPost('how-much-coffee-does-your-office-really-need')!;
  const structuredData = buildArticleStructuredData(post);

  return (
    <>
      <Seo
        title="How Much Coffee Does Your Office Really Need?"
        description="Estimate your team's monthly coffee consumption, understand the factors that affect usage, and choose a sensible starting quantity for your workplace."
        path="/blog/how-much-coffee-does-your-office-really-need"
        image={post.image}
        type="article"
        structuredData={structuredData}
      />
      <ArticleLayout post={post} relatedPost={relatedPost} structuredData={structuredData}>
        <p className="text-lg leading-relaxed text-soft-charcoal">
          Buy too little coffee and your team runs out at the worst possible
          moment. Buy too much and you end up with stale beans, wasted budget,
          and a cupboard full of coffee nobody wants to drink. The solution is
          not a perfect formula \u2014 it is a reasonable estimate, adjusted over
          time as you learn how your office actually consumes coffee.
        </p>

        <h2 className="!mt-10 heading-md">
          1. Start with the number of people actually in the office.
        </h2>
        <p className="body-base">
          The first number you need is not your total headcount \u2014 it is the
          number of people typically in the office on a given day. If you have
          30 employees but half are remote on any given day, your daily coffee
          consumption will look more like a 15-person office than a 30-person
          one.
        </p>
        <p className="body-base">
          Think about average daily attendance. If your team has hybrid
          schedules, consider which days are busiest. A team that comes in
          Tuesday through Thursday will have very different coffee needs than
          one that is in every day.
        </p>

        <h2 className="!mt-10 heading-md">2. Estimate coffee consumption.</h2>
        <p className="body-base">
          A useful starting formula for estimating monthly coffee consumption:
        </p>

        {/* Formula box */}
        <div className="my-6 rounded-2xl border border-taupe/60 bg-white p-6 md:p-7">
          <p className="font-serif text-lg text-espresso">
            Monthly coffee (kg) = people &times; cups per day &times; grams per cup &times; working days &divide; 1,000
          </p>
        </div>

        <p className="body-base">
          Let&rsquo;s break down each variable and the assumptions behind it:
        </p>
        <ul className="space-y-2 body-base">
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-roasted-brown" aria-hidden="true" />
            <span><strong className="text-espresso">People:</strong> The average number of people in the office per day.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-roasted-brown" aria-hidden="true" />
            <span><strong className="text-espresso">Cups per person per day:</strong> Typically 2\u20133, but this varies. Some people drink one cup, others drink five.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-roasted-brown" aria-hidden="true" />
            <span><strong className="text-espresso">Grams per cup:</strong> About 10 g of ground coffee per cup is a common starting point for a standard serving.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-roasted-brown" aria-hidden="true" />
            <span><strong className="text-espresso">Working days:</strong> The number of working days in a month \u2014 typically around 22.</span>
          </li>
        </ul>

        <p className="body-base mt-6">
          Here is a worked example:
        </p>

        {/* Worked example */}
        <div className="my-6 rounded-2xl border border-sage/30 bg-sage/10 p-6 md:p-7">
          <h3 className="font-serif text-lg text-espresso">Worked example</h3>
          <ul className="mt-4 space-y-2 text-sm text-soft-charcoal">
            <li>20 employees attending the office</li>
            <li>2 cups per person per day</li>
            <li>10 g of ground coffee per cup</li>
            <li>22 working days per month</li>
          </ul>
          <p className="mt-4 text-sm font-medium text-espresso">
            20 &times; 2 &times; 10 &times; 22 &divide; 1,000 = 8.8 kg per month
          </p>
          <p className="mt-3 text-xs text-soft-charcoal/60">
            This is an estimate, not a universal consumption benchmark. Actual
            usage will vary based on your team&rsquo;s habits.
          </p>
        </div>

        <h2 className="!mt-10 heading-md">3. Adjust for your team&rsquo;s habits.</h2>
        <p className="body-base">
          The formula gives you a starting point, but real offices do not behave
          like averages. Here are the factors that most commonly shift
          consumption up or down:
        </p>
        <ul className="space-y-2 body-base">
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-roasted-brown" aria-hidden="true" />
            <span><strong className="text-espresso">Coffee strength:</strong> If your team prefers stronger coffee, each cup uses more grams.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-roasted-brown" aria-hidden="true" />
            <span><strong className="text-espresso">Brewing method:</strong> Espresso uses less coffee per cup than a French press or filter pot.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-roasted-brown" aria-hidden="true" />
            <span><strong className="text-espresso">Serving size:</strong> A large mug holds more than a standard cup, which means more coffee per serving.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-roasted-brown" aria-hidden="true" />
            <span><strong className="text-espresso">Remote work and holidays:</strong> Fewer people in the office means less consumption.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-roasted-brown" aria-hidden="true" />
            <span><strong className="text-espresso">Visitors and events:</strong> Client meetings or team events can increase usage on specific days.</span>
          </li>
        </ul>

        <h2 className="!mt-10 heading-md">4. Think about storage and delivery frequency.</h2>
        <p className="body-base">
          How often coffee arrives and how much you store are connected. Frequent
          deliveries mean smaller quantities and fresher coffee, but they also
          mean more delivery coordination. Larger, less frequent deliveries
          reduce coordination but require more storage space and increase the
          risk of coffee going stale before it is used.
        </p>
        <p className="body-base">
          A monthly delivery is a common starting point for many offices. If your
          team consumes coffee quickly, more frequent deliveries may keep things
          fresher. If storage space is limited, smaller and more frequent
          deliveries may be preferable. The right cadence is something to discuss
          based on your specific circumstances \u2014 we do not promise delivery
          schedules until arrangements have been confirmed.
        </p>

        <h2 className="!mt-10 heading-md">
          5. Turn the estimate into a sensible office plan.
        </h2>
        <p className="body-base">
          Once you have a rough monthly estimate, you can compare it against
          starting plans to find a reasonable fit. Ember &amp; Oak offers three
          illustrative plans:
        </p>
        <p className="body-base">
          <strong className="text-espresso">The Small Office</strong> covers
          approximately 2\u20134.5 kg per month for teams of 5\u201310 people.
        </p>
        <p className="body-base">
          <strong className="text-espresso">The Growing Team</strong> covers
          approximately 5\u201311 kg per month for teams of 11\u201325 people.
        </p>
        <p className="body-base">
          <strong className="text-espresso">The Office Plus</strong> covers
          approximately 11\u201322 kg per month for teams of 26\u201350 people.
        </p>
        <p className="body-base">
          These quantities and prices are starting points for discussion rather
          than guaranteed fits. If your estimate falls between two plans, that is
          normal \u2014 a consultation can help you decide which direction makes
          more sense.
        </p>

        {/* Brand integration */}
        <div className="my-10 rounded-2xl border border-sage/30 bg-sage/10 p-6 md:p-7">
          <h3 className="font-serif text-xl text-espresso">
            Coffee planning without the guesswork.
          </h3>
          <p className="mt-3 body-base">
            Ember &amp; Oak is intended to help workplaces estimate requirements,
            compare illustrative plans, and discuss recurring coffee supply.
            Instead of guessing how many bags to order, start with a plan based
            on your team size and adjust from there.
          </p>
          <a href="/pricing" className="mt-4 inline-flex btn-link">
            Find Your Office Coffee Plan
            <ArrowRight size={15} />
          </a>
        </div>

        <h2 className="!mt-10 heading-md">6. Revisit your estimate.</h2>
        <p className="body-base">
          No estimate is perfect on the first try. After your office has been
          running on a supply plan for a few weeks, take a look at how it is
          going. Are you running out before the next delivery? Are you ending up
          with leftover coffee at the end of the month? Either way, adjust the
          quantity up or down for the next cycle.
        </p>
        <p className="body-base">
          Consumption changes as teams grow, attendance patterns shift, and
          seasons change. Treat your estimate as a living number \u2014 one you
          refine over time rather than set once and forget.
        </p>
      </ArticleLayout>
    </>
  );
}
