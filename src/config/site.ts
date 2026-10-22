export const SITE = {
  name: 'Breakroom Coffee Co.',
  tagline: 'Your office coffee, taken care of.',
  description:
    'Breakroom Coffee Co. helps companies arrange recurring office coffee supplies from independent specialty roasters. Discover coffee, estimate your team\u2019s consumption, and choose a supply plan that fits your workplace.',
  // Placeholder — replace with the final public domain before launch
  url: 'https://breakroomcoffee.example',
  email: 'hello@breakroomcoffee.example',
  // Placeholder booking URL — must be replaced with a real calendar link before launch
  bookingUrl: 'https://cal.com/YOUR_USERNAME/breakroom-coffee-office-intro',
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Our Story', path: '/about' },
  { label: 'Blogs', path: '/blog' },
];

export const IMAGES = {
  // Workplace / office
  officeCoffeeStation: 'https://images.pexels.com/photos/8888664/pexels-photo-8888664.jpeg?auto=compress&cs=tinysrgb&w=900',
  officeBreak: 'https://images.pexels.com/photos/8102047/pexels-photo-8102047.jpeg?auto=compress&cs=tinysrgb&w=1200',
  officeColleagues: 'https://images.pexels.com/photos/6340721/pexels-photo-6340721.jpeg?auto=compress&cs=tinysrgb&w=1200',
  officePour: 'https://images.pexels.com/photos/7580959/pexels-photo-7580959.jpeg?auto=compress&cs=tinysrgb&w=1200',
  officeKitchen: 'https://images.pexels.com/photos/7971366/pexels-photo-7971366.jpeg?auto=compress&cs=tinysrgb&w=1200',
  coworkingSpace: 'https://images.pexels.com/photos/3700252/pexels-photo-3700252.jpeg?auto=compress&cs=tinysrgb&w=1200',
  officeCoffeeMachine: 'https://images.pexels.com/photos/19109081/pexels-photo-19109081.jpeg?auto=compress&cs=tinysrgb&w=900',
  officeStation2: 'https://images.pexels.com/photos/36030585/pexels-photo-36030585.jpeg?auto=compress&cs=tinysrgb&w=900',
  officeTwoMugs: 'https://images.pexels.com/photos/7580965/pexels-photo-7580965.jpeg?auto=compress&cs=tinysrgb&w=1200',
  officeWomenCoffee: 'https://images.pexels.com/photos/6457512/pexels-photo-6457512.jpeg?auto=compress&cs=tinysrgb&w=1200',
  // Coffee / equipment
  beansCloseUp: 'https://images.pexels.com/photos/16556498/pexels-photo-16556498.jpeg?auto=compress&cs=tinysrgb&w=1200',
  beansDark: 'https://images.pexels.com/photos/30444143/pexels-photo-30444143.jpeg?auto=compress&cs=tinysrgb&w=1200',
  beansWood: 'https://images.pexels.com/photos/4081092/pexels-photo-4081092.jpeg?auto=compress&cs=tinysrgb&w=800',
  coffeeBag: 'https://images.pexels.com/photos/4829068/pexels-photo-4829068.jpeg?auto=compress&cs=tinysrgb&w=800',
  coffeeBagsShelf: 'https://images.pexels.com/photos/28458009/pexels-photo-28458009.jpeg?auto=compress&cs=tinysrgb&w=1200',
  espressoMachine: 'https://images.pexels.com/photos/6032787/pexels-photo-6032787.jpeg?auto=compress&cs=tinysrgb&w=1200',
  espressoKitchen: 'https://images.pexels.com/photos/33389378/pexels-photo-33389378.jpeg?auto=compress&cs=tinysrgb&w=1200',
  scaleBeans: 'https://images.pexels.com/photos/33100845/pexels-photo-33100845.jpeg?auto=compress&cs=tinysrgb&w=1200',
  pourOver: 'https://images.pexels.com/photos/7658092/pexels-photo-7658092.jpeg?auto=compress&cs=tinysrgb&w=1200',
  coffeeSack: 'https://images.pexels.com/photos/29795387/pexels-photo-29795387.jpeg?auto=compress&cs=tinysrgb&w=1200',
  // Farm / origin (retained for blog articles)
  farmCoffee: 'https://images.pexels.com/photos/30658793/pexels-photo-30658793.jpeg?auto=compress&cs=tinysrgb&w=1200',
  roaster: 'https://images.pexels.com/photos/4820676/pexels-photo-4820676.jpeg?auto=compress&cs=tinysrgb&w=1200',
  morningLight: 'https://images.pexels.com/photos/15569230/pexels-photo-15569230.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

export const COFFEES = [
  {
    name: 'The Everyday Blend',
    description: 'Balanced and approachable, with chocolate and caramel notes. A reliable choice for an all-day office pot.',
    notes: ['Chocolate', 'Caramel', 'Smooth'],
    image: IMAGES.beansWood,
    alt: 'Roasted coffee beans on a wooden surface',
  },
  {
    name: 'The Morning Light',
    description: 'Bright and lively, with citrus and stone-fruit notes. For the early risers who like a little lift.',
    notes: ['Citrus', 'Stone fruit', 'Bright'],
    image: IMAGES.beansCloseUp,
    alt: 'Close-up of light roasted coffee beans',
  },
  {
    name: 'The After Hours',
    description: 'Rich and full-bodied, with dark chocolate and toasted-nut notes. For afternoon focus and late sessions.',
    notes: ['Dark chocolate', 'Toasted nuts', 'Full-bodied'],
    image: IMAGES.beansDark,
    alt: 'Close-up of dark roasted coffee beans',
  },
];

export const PLANS = [
  {
    name: 'The Small Office',
    price: '$99',
    cadence: 'per month',
    teamSize: '5\u201310 people',
    quantity: 'approx. 2\u20134.5 kg / month',
    description: 'A simple starting point for small teams that want better coffee without the hassle.',
    features: [
      'Curated coffee selection',
      'A suggested monthly supply quantity',
      'Scheduled delivery arrangements',
      'Basic brewing and storage guidance',
      'A consultation to discuss preferences',
    ],
    tagline: null,
  },
  {
    name: 'The Growing Team',
    price: '$249',
    cadence: 'per month',
    teamSize: '11\u201325 people',
    quantity: 'approx. 5\u201311 kg / month',
    description: 'For busier workplaces that need more variety and a reliable recurring supply.',
    features: [
      'A broader choice of coffee profiles',
      'A suggested monthly supply quantity',
      'Delivery scheduling tailored to the office',
      'Brewing guidance and storage recommendations',
      'Support discussing changes in team consumption',
    ],
    tagline: 'A popular starting point for growing teams',
  },
  {
    name: 'The Office Plus',
    price: '$499',
    cadence: 'per month',
    teamSize: '26\u201350 people',
    quantity: 'approx. 11\u201322 kg / month',
    description: 'For larger offices that require more substantial supply planning and a wider selection.',
    features: [
      'A broader curated coffee selection',
      'Higher-volume supply planning',
      'Delivery scheduling discussions',
      'Coffee selection guidance',
      'A consultation for workplace requirements',
    ],
    tagline: null,
  },
];
