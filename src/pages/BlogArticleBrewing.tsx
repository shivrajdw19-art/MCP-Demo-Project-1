import { Seo } from '@/components/Seo';
import { ArticleLayout, buildArticleStructuredData } from '@/components/ArticleLayout';
import { getPostBySlug, getRelatedPost } from '@/config/blog';
import { IMAGES } from '@/config/site';

export default function BlogArticleBrewing() {
  const post = getPostBySlug('how-to-brew-better-coffee-at-home')!;
  const relatedPost = getRelatedPost('how-to-brew-better-coffee-at-home')!;
  const structuredData = buildArticleStructuredData(post);

  return (
    <>
      <Seo
        title="How to Brew Better Coffee at Home"
        description="Small changes to grind size, water, and technique can make your daily cup taste noticeably better. A practical guide for beginners."
        path="/blog/how-to-brew-better-coffee-at-home"
        image={post.image}
        type="article"
        structuredData={structuredData}
      />
      <ArticleLayout post={post} relatedPost={relatedPost} structuredData={structuredData}>
        <p className="text-lg leading-relaxed text-soft-charcoal">
          Making good coffee at home does not require expensive equipment or
          years of practice. It comes down to a handful of choices — fresh
          beans, the right grind, clean water, and a willingness to taste and
          adjust. This guide walks through each one in plain terms, so you can
          spend less time reading and more time brewing.
        </p>

        <h2 className="!mt-10 heading-md">1. Start with fresh coffee.</h2>
        <p className="body-base">
          Coffee is at its best within a few weeks of roasting. Once ground, it
          loses aroma and flavor much faster — sometimes within minutes. If you
          can, buy whole beans and grind just before brewing. A simple burr
          grinder will give you more consistent results than a blade grinder,
          but even pre-ground coffee from a good roaster will taste noticeably
          better if it is fresh.
        </p>
        <p className="body-base">
          Store your coffee in an airtight container away from light, heat, and
          moisture. A cool cupboard is fine. The freezer is not necessary for
          coffee you will use within a few weeks, and repeated freezing and
          thawing can introduce condensation that dulls the flavor.
        </p>

        <h2 className="!mt-10 heading-md">2. Find the right grind size.</h2>
        <p className="body-base">
          Grind size controls how quickly water extracts flavor from the coffee.
          A finer grind exposes more surface area, so extraction happens faster.
          A coarser grind slows it down. The goal is to match the grind to your
          brewing method and your preferred brewing time.
        </p>
        <p className="body-base">
          As a starting point: use a medium-fine grind for pour-over, a medium
          grind for drip machines, a coarse grind for French press, and a fine
          grind for AeroPress-style brewing. If your coffee tastes sour or
          weak, try grinding a little finer. If it tastes harsh or bitter, try
          grinding a little coarser. Small adjustments make a real difference.
        </p>

        <h2 className="!mt-10 heading-md">
          3. Pay attention to your water.
        </h2>
        <p className="body-base">
          Coffee is mostly water, so the water you use matters. If your tap
          water tastes good on its own, it will probably make decent coffee. If
          it tastes chlorinated, metallic, or very hard, filtered or bottled
          water may improve your cup noticeably.
        </p>
        <p className="body-base">
          Temperature matters too. Water that is too cool will under-extract,
          leaving coffee tasting thin and sour. Water at a rolling boil can
          scald more delicate coffees. A good range to aim for is just off the
          boil — let your kettle rest for about 30 seconds after boiling before
          pouring. There is no single universally correct temperature, but
          consistency from cup to cup will help you learn what you prefer.
        </p>

        <h2 className="!mt-10 heading-md">
          4. Start with a sensible coffee-to-water ratio.
        </h2>
        <p className="body-base">
          A ratio of 1:16 is a widely used starting point — that means one part
          coffee to sixteen parts water by weight. For a single cup (about 240
          g of water), that works out to roughly 15 g of coffee. A kitchen scale
          makes this easy and repeatable, but you can also measure by volume if
          you accept a little more variation.
        </p>
        <p className="body-base">
          If the coffee tastes too strong, use a little less coffee or a little
          more water. If it tastes too weak, do the opposite. The ratio is a
          tool, not a rule — once you find a proportion you enjoy, stick with
          it until you want to experiment.
        </p>

        {/* Tip box */}
        <div className="my-8 rounded-2xl border border-sage/30 bg-sage/10 p-6 md:p-7">
          <h3 className="font-serif text-lg text-espresso">
            Quick reference
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-soft-charcoal">
            <li>
              <strong className="text-espresso">Fresh beans:</strong>{' '}
              Use within 4 weeks of roasting. Grind just before brewing.
            </li>
            <li>
              <strong className="text-espresso">Grind:</strong>{' '}
              Finer for faster methods, coarser for longer brews. Adjust by
              taste.
            </li>
            <li>
              <strong className="text-espresso">Water:</strong>{' '}
              Clean-tasting, just off the boil. Be consistent.
            </li>
            <li>
              <strong className="text-espresso">Ratio:</strong>{' '}
              Start at 1:16 (e.g. 15 g coffee to 240 g water). Adjust for
              strength.
            </li>
            <li>
              <strong className="text-espresso">Taste:</strong>{' '}
              Sour = grind finer or brew longer. Bitter = grind coarser or brew
              shorter.
            </li>
          </ul>
        </div>

        <h2 className="!mt-10 heading-md">
          5. Choose a brewing method that suits you.
        </h2>
        <p className="body-base">
          There is no best brewing method — only the one that fits your
          routine, your taste, and the equipment you enjoy using. Here is a
          high-level comparison of three popular approaches:
        </p>
        <p className="body-base">
          <strong className="text-espresso">Pour-over</strong> produces a clean,
          detailed cup that highlights clarity and individual flavor notes. It
          requires a little attention to pouring technique but rewards it with
          precision. A gooseneck kettle helps, but is not strictly necessary.
        </p>
        <p className="body-base">
          <strong className="text-espresso">French press</strong> makes a full,
          rich cup with more body and texture. It is forgiving and
          straightforward — add coffee, add water, wait, press. The metal filter
          lets more oils through, which gives the coffee its characteristic
          weight.
        </p>
        <p className="body-base">
          <strong className="text-espresso">AeroPress-style brewing</strong> is
          fast, versatile, and easy to clean up. It can produce anything from a
          strong, espresso-like concentrate to a lighter, tea-like cup depending
          on how you use it. It is a good choice if you want flexibility without
          much equipment.
        </p>

        <h2 className="!mt-10 heading-md">6. Taste, adjust, repeat.</h2>
        <p className="body-base">
          The most useful skill in home brewing is learning to taste and adjust.
          If your coffee tastes sour — thin, sharp, or lacking sweetness — it is
          likely under-extracted. Try a finer grind, a slightly longer brew
          time, or a little more coffee.
        </p>
        <p className="body-base">
          If it tastes bitter — harsh, dry, or astringent — it is likely
          over-extracted. Try a coarser grind, a shorter brew time, or slightly
          less coffee. When the flavors feel balanced and nothing dominates
          unpleasantly, you are in a good place.
        </p>

        <h2 className="!mt-10 heading-md">
          7. Build a ritual, not a rulebook.
        </h2>
        <p className="body-base">
          Good coffee at home is less about getting everything perfect and more
          about paying attention. Make a cup. Taste it. Change one thing next
          time. Over weeks and months, you will develop a routine that reliably
          produces coffee you enjoy — and that is the real goal.
        </p>
        <p className="body-base">
          Experimentation matters more than perfection. The best cup of coffee
          is the one you look forward to making tomorrow morning.
        </p>
      </ArticleLayout>
    </>
  );
}
