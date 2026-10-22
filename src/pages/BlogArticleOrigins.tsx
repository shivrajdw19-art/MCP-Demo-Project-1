import { Seo } from '@/components/Seo';
import { ArticleLayout, buildArticleStructuredData } from '@/components/ArticleLayout';
import { getPostBySlug, getRelatedPost } from '@/config/blog';

export default function BlogArticleOrigins() {
  const post = getPostBySlug('understanding-coffee-origins-and-flavour')!;
  const relatedPost = getRelatedPost('understanding-coffee-origins-and-flavour')!;
  const structuredData = buildArticleStructuredData(post);

  return (
    <>
      <Seo
        title="Understanding Coffee Origins and Flavour"
        description="Discover how growing conditions, processing, and roasting can shape the character of your coffee. An accessible guide to coffee origins and flavor."
        path="/blog/understanding-coffee-origins-and-flavour"
        image={post.image}
        type="article"
        structuredData={structuredData}
      />
      <ArticleLayout post={post} relatedPost={relatedPost} structuredData={structuredData}>
        <p className="text-lg leading-relaxed text-soft-charcoal">
          Every cup of coffee carries the influence of where it was grown, how
          it was processed, and how it was roasted. Understanding these factors
          will not make you a coffee snob — it will simply help you choose
          coffees you are more likely to enjoy. This guide introduces the key
          ideas in plain language, without pretending that any single factor
          determines the final cup.
        </p>

        <h2 className="!mt-10 heading-md">1. Coffee begins with a place.</h2>
        <p className="body-base">
          Coffee grows in a band around the equator, roughly between the Tropics
          of Cancer and Capricorn. This region — sometimes called the Coffee
          Belt — includes parts of Central and South America, Africa, and
          Asia. Within it, each producing country has its own growing
          conditions, traditions, and varieties.
        </p>
        <p className="body-base">
          The most common species of specialty coffee is Arabica, which tends
          to produce more complex and aromatic cups. Robusta, the other widely
          grown species, is often bolder and more bitter, with higher caffeine
          content. Most specialty coffee focuses on Arabica, but there are
          exceptions and interesting hybrids worth exploring.
        </p>

        <h2 className="!mt-10 heading-md">
          2. How growing conditions shape flavour.
        </h2>
        <p className="body-base">
          Origin can influence flavor, but it does not determine it on its own.
          Altitude, temperature, rainfall, soil, and the specific variety of
          coffee plant all interact. As a general tendency, coffees grown at
          higher altitudes tend to develop more acidity and complexity, because
          the cooler conditions slow the ripening of the cherries and allow
          more sugars and acids to develop.
        </p>
        <p className="body-base">
          But a coffee from Ethiopia and a coffee from Colombia can taste
          similar if they are grown at comparable altitudes, processed the same
          way, and roasted similarly. Origin is a useful clue, not a guarantee.
          The best way to learn what a region tends to taste like is to try
          coffees from different places and pay attention to what you notice.
        </p>

        <h2 className="!mt-10 heading-md">
          3. Washed, natural, and honey processing.
        </h2>
        <p className="body-base">
          After coffee cherries are harvested, the fruit must be removed from
          the seeds — the beans we roast. The way this is done is called
          processing, and it can have a significant influence on flavor.
        </p>
        <p className="body-base">
          <strong className="text-espresso">Washed processing</strong> removes
          the fruit completely before the beans are dried. This tends to
          produce a clean, bright cup where acidity and clarity are
          prominent. It is the most common method for many Latin American
          coffees.
        </p>
        <p className="body-base">
          <strong className="text-espresso">Natural processing</strong> dries
          the cherries with the fruit still on the beans. This can produce a
          cup with more body, sweetness, and pronounced fruit notes — sometimes
          described as berry-like or winey. It is traditional in parts of
          Ethiopia and Brazil.
        </p>
        <p className="body-base">
          <strong className="text-espresso">Honey processing</strong> is a
          middle ground: the skin is removed, but some of the sticky fruit
          layer (called mucilage) is left on during drying. The result can
          combine some of the clarity of washed coffee with some of the
          sweetness and body of natural coffee.
        </p>
        <p className="body-base">
          These are general tendencies, not guarantees. The same processing
          method can produce different results depending on the coffee, the
          climate, and the skill of the people doing the work.
        </p>

        <h2 className="!mt-10 heading-md">4. The role of roasting.</h2>
        <p className="body-base">
          Roasting transforms green coffee into the fragrant brown beans we
          brew. It develops sweetness, acidity, body, and the characteristic
          flavors we associate with roasted coffee. The roaster&apos;s job is to
          find the level of roast that brings out the best in a particular
          coffee.
        </p>
        <p className="body-base">
          Lighter roasts tend to preserve more of a coffee&apos;s original
          character — its acidity, its origin notes, and its finer details.
          They can taste bright, tea-like, or fruity. Darker roasts develop
          more body and roast-driven flavors like chocolate, caramel, and
          toast, but they can also obscure some of the coffee&apos;s inherent
          character. Medium roasts sit in between, aiming for balance.
        </p>
        <p className="body-base">
          Neither light nor dark is inherently better. It depends on the coffee
          and on what you enjoy drinking.
        </p>

        <h2 className="!mt-10 heading-md">
          5. Learn to read tasting notes.
        </h2>
        <p className="body-base">
          Tasting notes — words like citrus, chocolate, floral, nutty, or stone
          fruit — are descriptive sensory references. They describe what a
          coffee reminds you of, not what has been added to it. A coffee with
          citrus notes does not contain citrus. It contains compounds that
          create an aroma or flavor your brain associates with citrus.
        </p>
        <p className="body-base">
          Tasting notes are inherently subjective. Two people can taste the
          same coffee and describe it differently, and both can be right. Think
          of them as hints rather than facts — useful for narrowing down what
          you might enjoy, but no substitute for tasting the coffee yourself.
        </p>

        {/* Flavour reference */}
        <div className="my-8 rounded-2xl border border-taupe/60 bg-white p-6 md:p-7">
          <h3 className="font-serif text-lg text-espresso">
            A quick flavor reference
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-roasted-brown">
                Citrus
              </p>
              <p className="text-sm text-soft-charcoal">
                Bright, zesty — like lemon, orange, or grapefruit. Often found
                in lighter-roasted coffees from East Africa.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-roasted-brown">
                Chocolate
              </p>
              <p className="text-sm text-soft-charcoal">
                Smooth, rich — from milk chocolate to dark cocoa. Common in
                medium and darker roasts.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-roasted-brown">
                Floral
              </p>
              <p className="text-sm text-soft-charcoal">
                Delicate, aromatic — like jasmine or bergamot. Often associated
                with certain Ethiopian coffees.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-roasted-brown">
                Nutty
              </p>
              <p className="text-sm text-soft-charcoal">
                Warm, rounded — like almond, hazelnut, or walnut. Found in many
                balanced blends.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-roasted-brown">
                Stone fruit
              </p>
              <p className="text-sm text-soft-charcoal">
                Sweet, juicy — like peach, apricot, or plum. Can appear in
                naturally processed coffees.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-roasted-brown">
                Caramel
              </p>
              <p className="text-sm text-soft-charcoal">
                Sweet, smooth — a familiar, approachable note in many medium
                roasts.
              </p>
            </div>
          </div>
        </div>

        <h2 className="!mt-10 heading-md">
          6. Choose coffee by preference.
        </h2>
        <p className="body-base">
          If you prefer something balanced and easygoing, look for medium roasts
          with notes of chocolate, caramel, or nuts. These coffees tend to be
          smooth and familiar, and they work well with milk.
        </p>
        <p className="body-base">
          If you enjoy brightness and complexity, explore lighter roasts with
          citrus, floral, or stone fruit notes. These coffees can be surprising
          and are often best without milk.
        </p>
        <p className="body-base">
          If you lean toward richness and depth, darker roasts with chocolate,
          molasses, or toasted nut notes will give you the body and intensity
          you are after.
        </p>

        <h2 className="!mt-10 heading-md">7. Explore with curiosity.</h2>
        <p className="body-base">
          The most enjoyable way to learn about coffee is to drink it
          attentively. Try coffees from different regions. Compare a washed and
          a natural coffee from the same country. Notice how a coffee changes
          as it cools in the cup. Keep a mental note of what you liked and
          what you did not.
        </p>
        <p className="body-base">
          There is no final exam and no universally correct answer. The goal is
          to discover what you enjoy — and to have a little fun along the way.
        </p>
      </ArticleLayout>
    </>
  );
}
