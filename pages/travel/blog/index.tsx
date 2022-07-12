import { ReactElement } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../../src/config';
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/travel/posts';
// @types
import { BlogPostProps } from '../../../src/@types/blog';
// _data
import _mock from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page } from '../../../src/components';
import { SearchInput } from '../../../src/components';
// sections
import { NewsletterTravel } from '../../../src/sections/newsletter';
import {
  BlogSidebar,
  BlogTravelFeaturedPosts,
  BlogTravelPostList,
  BlogTravelTrendingTopics,
} from '../../../src/sections/blog';

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

export default function TravelBlogPage({ posts }: Props) {
  return (
    <Page title="Blog - Travel">
      <RootStyle>
        <SearchInput
          sx={{
            mx: 2.5,
            display: { xs: 'flex', md: 'none' },
            my: { xs: 4, md: 0 },
          }}
        />

        <BlogTravelFeaturedPosts posts={posts.slice(-5)} />
        <BlogTravelTrendingTopics />

        <Container sx={{ mt: { xs: 4, md: 10 } }}>
          <Grid container spacing={{ md: 8 }}>
            <Grid item xs={12} md={8}>
              <BlogTravelPostList posts={posts} />
            </Grid>

            <Grid item xs={12} md={4}>
              <BlogSidebar
                recentPosts={{
                  list: posts.slice(-4),
                  path: '/travel/blog',
                }}
                advertisement={{
                  title: 'Advertisement',
                  description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                  imageUrl: _mock.image.travel(9),
                  path: '#',
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <NewsletterTravel />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

TravelBlogPage.getLayout = function getLayout(page: ReactElement) {
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
