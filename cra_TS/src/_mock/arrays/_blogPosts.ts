import _mock from '../_mock';

// ----------------------------------------------------------------------

const TITLE = [
  `The A - Z Of Event`,
  `Believing These 7 Myths About Event Keeps You From Growing`,
  `Don't Waste Time! 7 Facts Until You Reach Your Event`,
  `How 7 Things Will Change The Way You Approach Event`,
  `Event Doesn't Have To Be Hard. Read These 7 Tips`,
  `The 7 Biggest Event Mistakes You Can Easily Avoid`,
  `Best 30 Tips For Event`,
  `Apply These 7 Secret Techniques To Improve Event`,
  `Best Event Android Apps`,
  `Best Event Tips You Will Read This Year`,
  `Top 7 Lessons About Event To Learn Before You Hit 30`,
  `How To Make More Event By Doing Less`,
];

const content = (name: string) => `
<p>Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.</p>

<p>Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh. Donec posuere vulputate arcu. Quisque rutrum.</p>

<p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>

<p>Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.</p>

<p><img alt="alt marketing" src="/assets/images/${name}/${name}_post_01.jpg" /></p>

<h4>Curabitur suscipit suscipit tellus</h4>

<p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>

<h4>Nullam accumsan lorem in</h4>

<p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>

<p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo.</p>

<p><img alt="alt marketing" src="/assets/images/${name}/${name}_post_02.jpg" /></p>

<p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>

<p>Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.</p>

<p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>

`;

const base = (index: number) => ({
  id: _mock.id(index),
  title: TITLE[index],
  description: _mock.text.description(index),
  category: 'Marketing',
  favorited: _mock.boolean(index),
  createdAt: _mock.time(index),
  duration: '8 minutes read',
  tags: [
    { label: 'Marketing', path: '' },
    { label: 'Development', path: '' },
    { label: 'HR & Recruiting', path: '' },
    { label: 'Design', path: '' },
    { label: 'Management', path: '' },
  ],
  author: {
    name: _mock.name.fullName(index),
    role: _mock.role(index),
    picture: _mock.image.avatar(index),
    quotes: 'Member since Mar 15, 2021',
    about:
      'Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem.',
  },
});

// ----------------------------------------------------------------------

export const _blogMarketingPosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('marketing'),
  coverImg: _mock.image.marketing(index),
  heroImg: `/assets/images/marketing/marketing_post_hero.jpg`,
}));

export const _blogTravelPosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('travel'),
  coverImg: _mock.image.travel(index),
  heroImg: `/assets/images/travel/travel_post_hero.jpg`,
}));

export const _blogCareerPosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('career'),
  coverImg: _mock.image.career(index),
  heroImg: `/assets/images/career/career_post_hero.jpg`,
}));

export const _blogCoursePosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('course'),
  coverImg: _mock.image.course(index),
  heroImg: `/assets/images/course/course_post_hero.jpg`,
}));
