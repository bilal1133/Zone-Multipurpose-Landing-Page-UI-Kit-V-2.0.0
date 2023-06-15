// @mui
import { Container, Unstable_Grid2 as Grid } from '@mui/material';
// _mock
import _mock, { _blogCareerPosts, _tags, _categories } from 'src/_mock';
//
import BlogSidebar from '../../blog/sidebar';
import { PostSearchMobile } from '../../blog/components';
import { BlogCareerPosts } from '../../blog/career';
import NewsletterCareer from '../../newsletter/career';

// ----------------------------------------------------------------------

export default function CareerBlogView() {
  return (
    <>
      <PostSearchMobile />

      <Container
        sx={{
          pt: { xs: 0, md: 5 },
          pb: { xs: 8, md: 15 },
        }}
      >
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <BlogCareerPosts posts={_blogCareerPosts} />
          </Grid>

          <Grid xs={12} md={4}>
            <BlogSidebar
              popularTags={_tags}
              categories={_categories}
              recentPosts={{ list: _blogCareerPosts.slice(-4) }}
              advertisement={{
                title: 'Advertisement',
                description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                imageUrl: _mock.image.career(10),
                path: '',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <NewsletterCareer />
    </>
  );
}
