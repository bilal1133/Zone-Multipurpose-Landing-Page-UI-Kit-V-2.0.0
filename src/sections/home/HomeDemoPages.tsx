import { m } from 'framer-motion';
import { useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Tabs, Tab, Container, Typography, Link } from '@mui/material';
// components
import { Image } from '../../components';
import { MotionViewport, MotionContainer, varFade } from '../../components/animate';
//
import { PageLinks } from '../../layouts/nav/NavConfig';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.grey[500_12],
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HomeDemoPages() {
  const [category, setCategory] = useState('All');

  const handleChangeCategory = (event: React.SyntheticEvent, newValue: string) => {
    setCategory(newValue);
  };

  return (
    <RootStyle>
      <Container>
        <MotionViewport sx={{ textAlign: 'center' }}>
          <m.div variants={varFade().inDown}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              50+ Demo pages
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
              Inside The Template
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography sx={{ color: 'text.secondary' }}>
              We have everything to give you a stunning website.
            </Typography>
          </m.div>
        </MotionViewport>

        <Box sx={{ display: 'flex', justifyContent: 'center', my: 6 }}>
          <Tabs
            value={category}
            scrollButtons="auto"
            variant="scrollable"
            allowScrollButtonsMobile
            onChange={handleChangeCategory}
          >
            {CATEGORIES.map((website) => (
              <Tab
                key={website.title}
                value={website.title}
                label={website.title}
                sx={{ typography: 'overline' }}
              />
            ))}
          </Tabs>
        </Box>

        {CATEGORIES.map(
          (website) =>
            website.title === category && GridPages({ key: website.title, array: website.contents })
        )}
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

type GridPagesProps = {
  key: string;
  array: {
    website: string;
    title: string;
    path: string;
    img: string;
  }[];
};

function GridPages({ key, array }: GridPagesProps) {
  return (
    <MotionContainer key={key}>
      <Box
        sx={{
          display: 'grid',
          rowGap: 5,
          columnGap: 4,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {array.map((item) => (
          <m.div key={item.path} variants={varFade().inUp}>
            <Link href={item.path} underline="none" color="inherit" target="_blank" rel="noopener">
              <Box sx={{ textAlign: 'center', cursor: 'pointer' }}>
                <m.div
                  whileTap="tap"
                  whileHover="hover"
                  variants={{
                    hover: { scale: 1.04 },
                    tap: { scale: 0.96 },
                  }}
                >
                  <Image
                    alt={item.title}
                    src={`https://zone-assets-api.vercel.app/assets/images/home/demo-screens/${item.img}.jpg`}
                    sx={{
                      borderRadius: 1.5,
                      transition: (theme) => theme.transitions.create('box-shadow'),
                      '&:hover': {
                        boxShadow: (theme) => theme.customShadows.z24,
                      },
                    }}
                  />
                </m.div>
                <Typography variant="body3" sx={{ mt: 2.5, mb: 0.5, color: 'text.disabled' }}>
                  {item.website === 'Common' ? 'Others' : item.website}
                </Typography>
                <Typography variant="h6">{item.title}</Typography>
              </Box>
            </Link>
          </m.div>
        ))}
      </Box>
    </MotionContainer>
  );
}

// ----------------------------------------------------------------------

function getData(website: string, imgs: string[]) {
  const Arr =
    PageLinks.find((category) => category.subheader === website)?.items.map((item, index) => ({
      ...item,
      website,
      img: imgs[index],
    })) || [];

  return Arr;
}

const MARKETING_PAGES = getData('Marketing', [
  'marketing/landing',
  'marketing/services',
  'marketing/case_studies',
  'marketing/case_study',
  'marketing/blog',
  'marketing/blog_post',
  'marketing/about',
  'marketing/contact',
]);

const TRAVEL_PAGES = getData('Travel', [
  'travel/landing',
  'travel/tours',
  'travel/tour',
  'travel/checkout',
  'travel/checkout_completed',
  'travel/blog',
  'travel/blog_post',
  'travel/about',
  'travel/contact',
]);

const CAREER_PAGES = getData('Career', [
  'career/landing',
  'career/jobs',
  'career/job',
  'career/blog',
  'career/blog_post',
  'career/about',
  'career/contact',
]);

const ELEARNING_PAGES = getData('E-Learning', [
  'e-learning/landing',
  'e-learning/courses',
  'e-learning/course',
  'e-learning/blog',
  'e-learning/blog_post',
  'e-learning/about',
  'e-learning/contact',
]);

const OTHERS_PAGES = getData('Common', [
  'common/login',
  'common/register',
  'common/login_cover',
  'common/register_cover',
  'common/reset_password',
  'common/verify_code',
  'common/error404',
  'common/error500',
  'common/maintenance',
  'common/comingsoon',
  'common/pricing01',
  'common/pricing02',
  'common/checkout',
  'common/support',
]);

const CATEGORIES = [
  {
    title: 'All',
    contents: [
      ...MARKETING_PAGES,
      ...TRAVEL_PAGES,
      ...CAREER_PAGES,
      ...ELEARNING_PAGES,
      ...OTHERS_PAGES,
    ],
  },
  { title: 'Marketing', contents: MARKETING_PAGES },
  { title: 'Travel', contents: TRAVEL_PAGES },
  { title: 'Career', contents: CAREER_PAGES },
  { title: 'E-Learning', contents: ELEARNING_PAGES },
  { title: 'Others', contents: OTHERS_PAGES },
];
