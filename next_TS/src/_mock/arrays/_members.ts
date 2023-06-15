import _mock from '../_mock';

// ----------------------------------------------------------------------

export const _members = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  role: _mock.role(index),
  photo: `/assets/images/portrait/portrait_${index + 1}.jpg`,
  socialLinks: {
    facebook: `facebook/${_mock.name.fullName(index)}`,
    instagram: `instagram/${_mock.name.fullName(index)}`,
    linkedin: `linkedin/${_mock.name.fullName(index)}`,
    twitter: `twitter/${_mock.name.fullName(index)}`,
  },
}));
