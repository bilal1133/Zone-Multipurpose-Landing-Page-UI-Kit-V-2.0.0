// @mui
import { Container, Unstable_Grid2 as Grid } from '@mui/material';
// _mock
import _mock, { _blogTravelPosts, _tags, _categories } from 'src/_mock';
//
import BlogSidebar from '../../blog/sidebar';
import NewsletterTravel from '../../newsletter/travel';
import { PostSearchMobile } from '../../blog/components';
import {
  BlogTravelPosts,
  BlogTravelFeaturedPosts,
  BlogTravelTrendingTopics,
} from '../../blog/travel';

// ----------------------------------------------------------------------

export default function TravelBlogView() {
  return (
    <>
      <PostSearchMobile />

      <BlogTravelFeaturedPosts posts={_blogTravelPosts.slice(-5)} />

      <BlogTravelTrendingTopics />

      <Container
        sx={{
          mt: { xs: 4, md: 10 },
        }}
      >
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <BlogTravelPosts posts={_blogTravelPosts} />
          </Grid>

          <Grid xs={12} md={4}>
            <BlogSidebar
              popularTags={_tags}
              categories={_categories}
              recentPosts={{ list: _blogTravelPosts.slice(-4) }}
              advertisement={{
                title: 'Advertisement',
                description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                imageUrl: _mock.image.travel(9),
                path: '',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <NewsletterTravel />
    </>
  );
}
