import { IMAGES } from '@/config/site';

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  excerpt: string;
  date: string;
  datePublished: string;
  dateModified: string;
  readingTime: string;
  image: string;
  imageAlt: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-to-build-a-better-office-coffee-station',
    title: 'How to Build a Better Office Coffee Station',
    subtitle:
      'From choosing the right coffee to organizing your shared kitchen \u2014 practical ways to make your office coffee station more useful and welcoming.',
    category: 'Workplace Coffee',
    excerpt:
      'From choosing the right coffee to organizing your shared kitchen, discover practical ways to make your office coffee station more useful, welcoming, and easier to maintain.',
    date: 'October 8, 2026',
    datePublished: '2026-10-08',
    dateModified: '2026-10-08',
    readingTime: '6 min read',
    image: IMAGES.officeCoffeeStation,
    imageAlt: 'A well-designed office coffee station with coffee makers and mugs',
  },
  {
    slug: 'how-much-coffee-does-your-office-really-need',
    title: 'How Much Coffee Does Your Office Really Need?',
    subtitle:
      'Estimate your team\u2019s monthly coffee consumption, understand the factors that affect usage, and choose a sensible starting quantity.',
    category: 'Coffee Planning',
    excerpt:
      'Estimate your team\u2019s monthly coffee consumption, understand the factors that affect usage, and choose a sensible starting quantity for your workplace.',
    date: 'September 22, 2026',
    datePublished: '2026-09-22',
    dateModified: '2026-09-22',
    readingTime: '6 min read',
    image: IMAGES.scaleBeans,
    imageAlt: 'A digital scale with coffee beans for measuring coffee portions',
  },
  {
    slug: 'is-small-batch-fresh-roasted-coffee-worth-it',
    title:
      'Is Paying Extra for Small-Batch Fresh Roasted Coffee Worth It, or Is a Supermarket Bag Just as Good?',
    subtitle:
      'A side-by-side comparison of freshness, flavor, cost per cup, and storage \u2014 with a blind tasting, a cost breakdown, and a practical checklist for spotting a genuine fresh roast.',
    category: 'Small-Batch Fresh Roasted Coffee',
    excerpt:
      'Fresh roasted small-batch coffee costs more, but is it actually better? We compare freshness, flavor decline, cost per cup, and when a supermarket bag is good enough.',
    date: 'October 22, 2026',
    datePublished: '2026-10-22',
    dateModified: '2026-10-22',
    readingTime: '12 min read',
    image: IMAGES.roaster,
    imageAlt: 'A coffee roaster pouring freshly roasted beans into a cooling tray',
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug !== slug);
}
