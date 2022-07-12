import { ReactElement } from 'react';
// @mui
import { styled } from '@mui/material/styles';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../src/config';
// utils
import { getAllPosts } from '../../src/utils/get-mardown/e-learning/posts';
// @types
import { BlogPostProps } from '../../src/@types/blog';
// _data
import { _testimonials, _members, _brandsColor } from '../../_data/mock';
// layouts
import Layout from '../../src/layouts';
// components
import { Page } from '../../src/components';
// sections
import { NewsletterElearning } from '../../src/sections/newsletter';
import { BlogElearningLatestPosts } from '../../src/sections/blog';
import { TestimonialsElearning } from '../../src/sections/testimonials';
import { TeamElearningAbout } from '../../src/sections/team';
import { OurClientsElearning } from '../../src/sections/our-clients';
import {
  ElearningAboutHero,
  ElearningAbout,
  ElearningAboutCoreValues,
} from '../../src/sections/@e-learning';

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

export default function ElearningAboutUsPage({ posts }: Props) {
  return (
    <Page title="About Us - E-Learning">
      <RootStyle>
        <ElearningAboutHero />

        <ElearningAbout />

        <ElearningAboutCoreValues />

        <TeamElearningAbout members={_members} />

        <OurClientsElearning brands={_brandsColor} />

        <TestimonialsElearning testimonials={_testimonials} />

        <BlogElearningLatestPosts posts={posts.slice(0, 4)} />

        <NewsletterElearning />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

ElearningAboutUsPage.getLayout = function getLayout(page: ReactElement) {
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
