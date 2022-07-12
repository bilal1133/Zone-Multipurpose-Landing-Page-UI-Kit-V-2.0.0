import { ReactElement } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// utils
import { getAllPosts } from '../../../src/utils/get-mardown/e-learning/posts';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../../src/config';
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
import { NewsletterElearning } from '../../../src/sections/newsletter';
import {
  BlogSidebar,
  BlogElearningPostList,
  BlogElearningFeaturedPosts,
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

export default function ElearningBlogPage({ posts }: Props) {
  return (
    <Page title="Blog - E-Learning">
      <RootStyle>
        <SearchInput
          sx={{
            mx: 2.5,
            display: { xs: 'flex', md: 'none' },
            my: { xs: 4, md: 0 },
          }}
        />

        <BlogElearningFeaturedPosts post={posts[0]} />

        <Container
          sx={{
            mt: { xs: 4, md: 10 },
          }}
        >
          <Grid container spacing={{ md: 8 }}>
            <Grid item xs={12} md={8}>
              <BlogElearningPostList posts={posts} />
            </Grid>

            <Grid item xs={12} md={4}>
              <BlogSidebar
                recentPosts={{
                  list: posts.slice(-4),
                  path: '/e-learning/blog',
                }}
                advertisement={{
                  title: 'Advertisement',
                  description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                  imageUrl: _mock.image.course(7),
                  path: '#',
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <NewsletterElearning />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

ElearningBlogPage.getLayout = function getLayout(page: ReactElement) {
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
