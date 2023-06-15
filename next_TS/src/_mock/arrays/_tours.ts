import { add } from 'date-fns';
//
import _mock from '../_mock';

// ----------------------------------------------------------------------

const CONTINENTS = [
  'Asia',
  'Europe',
  'Africa',
  'Australia',
  'North America',
  'South America',
  'Antarctica',
  'Asia',
  'Europe',
  'Africa',
  'Australia',
  'North America',
  'South America',
  'Antarctica',
  'South America',
  'Antarctica',
];

export const _tours = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  coverImg: _mock.image.travel(index),
  heroImg: [
    '/assets/images/travel/travel_post_hero.jpg',
    '/assets/images/travel/travel_post_01.jpg',
    '/assets/images/travel/travel_post_02.jpg',
    '/assets/images/travel/travel_post_03.jpg',
    '/assets/images/travel/travel_post_04.jpg',
  ][index],
  slug: _mock.text.tourName(index),
  createdAt: _mock.time(index),
  availableStart: add(new Date(), { months: 2 }),
  availableEnd: add(new Date(), { months: 4 }),
  location: _mock.address.country(index),
  continent: CONTINENTS[index],
  duration: '3 days 2 nights',
  price: (index % 2 && 159.99) || 269.99,
  priceSale: (index === 2 && 89.99) || (index === 5 && 69.99) || 0,
  reviews: 345,
  favorited: index === 2 || index === 4 || false,
  ratings: 3.5 + index / 10,
  tourGuide: {
    name: _mock.name.fullName(index),
    role: _mock.role(index),
    picture: _mock.image.avatar(index),
    phoneNumber: _mock.phoneNumber(index),
    quotes: 'Member since Mar 15, 2021',
    verified: true,
    ratings: 5,
    reviews: 345,
    about:
      'Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem.',
    shareLinks: _mock.shareLinks,
  },
  includes: [
    { label: 'Audio guide', enabled: true },
    { label: 'Entrance fees', enabled: true },
    { label: 'Food and drinks', enabled: true },
    { label: 'Gratuities', enabled: true },
    { label: 'Lunch', enabled: true },
    { label: 'Pick-up and drop off', enabled: false },
    { label: 'Private tour', enabled: false },
    { label: 'Professional guide', enabled: false },
    { label: 'Special activities', enabled: false },
    { label: 'Transport by air-conditioned', enabled: false },
  ],
  languages: ['Russian', 'Spanish'],
  tags: ['Lamp', 'A man', 'Human', 'Lantern', 'Festival'],
  gallery: [...Array(6)].map((__, itemIndex) => _mock.image.travel(itemIndex + 2)),
  description: _mock.text.description(index),
  highlights: [...Array(6)].map((__, itemIndex) => _mock.text.sentence(itemIndex)),
  program: [...Array(3)].map((__, itemIndex) => ({
    label: `Day ${itemIndex + 1}`,
    text: _mock.text.description(itemIndex),
  })),
  shareLinks: _mock.shareLinks,
}));
