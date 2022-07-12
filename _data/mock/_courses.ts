import _mock from './_mock';

// ----------------------------------------------------------------------

const teachers = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  role: _mock.role(index),
  name: _mock.name.fullName(index),
  picture: _mock.image.avatar(index),
  courses: 48,
  reviews: 3458,
  students: 18000,
  ratings: 3.5 + index / 10,
}));

const lessons = [...Array(9)].map((_, index) => ({
  id: _mock.id(index),
  description: _mock.text.sentence(index),
  videoPath:
    index === 0 ? _mock.video : `https://www.dropbox.com/s/6trnqlpmih364l8/zone_video_02.mp4?dl=0`,
  duration: 60 - index,
  title: `Lesson ${index + 1}`,
  isUnLock: index !== 0 && index !== 1,
}));

export const _courses = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  createdAt: new Date(),
  slug: _mock.text.courseTitle(index),
  coverImg: _mock.image.course(index),
  category: _mock.text.jobCategories(index),
  description: _mock.text.description(index),
  price: (index % 2 && 159.99) || 269.99,
  priceSale: (index === 2 && 89.99) || (index === 5 && 69.99) || 0,
  lessons,
  teachers,
  quizzes: 100,
  resources: 12,
  totalHours: 100,
  reviews: 3458,
  students: 180000,
  ratings: 3.5 + index / 10,
  bestSeller: index === 2 || false,
  level:
    (index % 2 && 'Intermediate') ||
    (index % 4 && 'Expert') ||
    (index % 5 && 'All Levels') ||
    'Beginner',
  languages: ['Russian', 'Spanish', 'English'],
  skills: ['Photography', 'Design', 'Art', 'History', 'Museums', 'Creativity', 'Art History'],
  learnList: [
    'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
    'Vulputate placerat amet pulvinar lorem nisl.',
    'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
    'Etiam duis lobortis in fames ultrices commodo nibh.',
    'Fusce neque. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.',
    'Curabitur a felis in nunc fringilla tristique. Praesent congue erat at massa.',
  ],
  shareLinks: _mock.shareLinks,
}));

// ----------------------------------------------------------------------

const NAMES = [
  'Python',
  'Design',
  'History',
  'Photoshop',
  'Management',
  'Cyber Security',
  'Web Development',
  'Machine Learning',
  'Photography',
];

export const _coursesByCategories = [...Array(9)].map((_, index) => ({
  id: _mock.id(index),
  name: NAMES[index],
  students: 101 + index,
}));
