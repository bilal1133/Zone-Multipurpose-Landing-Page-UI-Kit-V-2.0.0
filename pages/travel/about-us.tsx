import { ReactElement } from 'react';
// @mui
import { styled } from '@mui/material/styles';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../src/config';
// utils
import { getAllPosts } from '../../src/utils/get-mardown/travel/posts';
// @types
import { BlogPostProps } from '../../src/@types/blog';
// _data
import { _testimonials, _members, _brands } from '../../_data/mock';
// layouts
import Layout from '../../src/layouts';
// components
import { Page } from '../../src/components';
// sections
import { NewsletterTravel } from '../../src/sections/newsletter';
import { BlogTravelLatestPosts } from '../../src/sections/blog';
import { TestimonialsTravel } from '../../src/sections/testimonials';
import { TeamTravelAbout } from '../../src/sections/team';
import { OurClientsTravel } from '../../src/sections/our-clients';
import { TravelAbout, TravelAboutOurVision } from '../../src/sections/@travel';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

type Props = {
  posts: BlogPostProps[];
};

export default function TravelAboutUsPage({ posts }: Props) {
  return (
    <Page title="About Us - Travel">
      <RootStyle>
        <TravelAbout />

        <TravelAboutOurVision />

        <TeamTravelAbout members={_members} />

        <TestimonialsTravel testimonials={_testimonials} />

        <OurClientsTravel brands={_brands} />

        <BlogTravelLatestPosts posts={posts.slice(0, 4)} />

        <NewsletterTravel />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

TravelAboutUsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}
