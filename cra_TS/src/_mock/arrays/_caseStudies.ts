import _mock from '../_mock';

// ----------------------------------------------------------------------

const TITLE = [
  'Bank of America',
  'Technology Nixon',
  'Turn Key Smart',
  'Digital Shose',
  'Action Car',
  'The Zone UI',
  'Minimal UI',
  'Network Firefox',
];

const CATEGORY = [
  'Branding',
  'Digital',
  'Digital',
  'Marketing',
  'SEO',
  'SEO',
  'Digital',
  'Development',
];

const CONTENT = `
<h4>Project Brief</h4>
<p>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.</p>
<p></p>
<h4>How We Work</h4>
<p>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.</p>
<p></p>
<ul>
    <li>Medical Assistant</li>
    <li>Web Designer</li>
    <li>Dog Trainer</li>
    <li>Nursing Assistant</li>
    <li>President of Sales</li>
</ul>
<h4>Results</h4>
<p>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.</p>
<p></p>
<ul>
    <li>Medical Assistant</li>
    <li>Web Designer</li>
    <li>Dog Trainer</li>
    <li>Nursing Assistant</li>
    <li>President of Sales</li>
</ul>

`;

export const _caseStudies = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  title: TITLE[index],
  description: 'Praesent vestibulum dapibus nibh. Vestibulum fringilla pede sit amet augue.',
  category: CATEGORY[index],
  coverImg: `/assets/images/marketing/marketing_${index + 1}.jpg`,
  heroImg: '/assets/images/marketing/marketing_post_hero.jpg',
  createdAt: _mock.time(index),
  website: 'https://example.com/',
  content: CONTENT,
  how_we_work:
    'Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringi',
  results:
    'Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringi',
  galleryImgs: [
    '/assets/images/marketing/marketing_1.jpg',
    '/assets/images/marketing/marketing_2.jpg',
    '/assets/images/marketing/marketing_3.jpg',
    '/assets/images/marketing/marketing_4.jpg',
    '/assets/images/marketing/marketing_5.jpg',
    '/assets/images/marketing/marketing_6.jpg',
    '/assets/images/marketing/marketing_7.jpg',
    '/assets/images/marketing/marketing_8.jpg',
  ],
}));
