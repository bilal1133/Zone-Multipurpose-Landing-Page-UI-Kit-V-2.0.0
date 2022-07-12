import { ReactElement } from 'react';
// @mui
import { Box, Container } from '@mui/material';
// utils
import { getAllPosts } from '../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../src/hooks';
// @types
import { BlogPostProps } from '../../src/@types/blog';
// _data
import { _testimonials } from '../../_data/mock';
// layouts
import Layout from '../../src/layouts';
// components
import { Page, ErrorScreen } from '../../src/components';
// sections
import { NewsletterTravel } from '../../src/sections/newsletter';
import { TestimonialsTravel } from '../../src/sections/testimonials';
import { BlogTravelLandingLatestPosts } from '../../src/sections/blog';
import {
  TravelLandingHero,
  TravelLandingSummary,
  TravelTourBarFilters,
  TravelLandingIntroduce,
  TravelLandingToursByCity,
  TravelLandingTourFeatured,
  TravelLandingFavoriteDestinations,
} from '../../src/sections/@travel';

// ----------------------------------------------------------------------

type Props = {
  posts: BlogPostProps[];
};

export default function TravelLandingPage({ posts }: Props) {
  const { data: tours = [], error } = useRequest('/api/travel/tours');

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Landing - Travel">
      <Box sx={{ position: 'relative' }}>
        <TravelLandingHero tours={tours.slice(0, 5)} />

        <Container
          sx={{
            left: 0,
            right: 0,
            bottom: 0,
            mx: 'auto',
            position: { md: 'absolute' },
          }}
        >
          <TravelTourBarFilters onDark sx={{ py: { xs: 3, md: 8 } }} />
        </Container>
      </Box>

      <TravelLandingIntroduce />

      <TravelLandingSummary />

      <TravelLandingFavoriteDestinations tours={tours.slice(0, 4)} />

      <TravelLandingTourFeatured tours={tours.slice(0, 4)} />

      <TravelLandingToursByCity tours={tours.slice(0, 8)} />

      <BlogTravelLandingLatestPosts posts={posts.slice(0, 4)} />

      <TestimonialsTravel testimonials={_testimonials} />

      <NewsletterTravel />
    </Page>
  );
}

// ----------------------------------------------------------------------

TravelLandingPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout transparentHeader>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}
