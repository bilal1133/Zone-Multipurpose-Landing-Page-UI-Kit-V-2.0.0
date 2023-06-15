// @mui
import { Divider, Container, Typography, Unstable_Grid2 as Grid } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// _mock
import _mock, { _blogTravelPosts, _tags, _categories } from 'src/_mock';
// components
import Markdown from 'src/components/markdown';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import BlogSidebar from '../../blog/sidebar';
import NewsletterTravel from '../../newsletter/travel';
import { PostTags, PostAuthor, PostSocialsShare } from '../../blog/components';
import { BlogTravelPostHero, BlogTravelLatestPosts } from '../../blog/travel';

// ----------------------------------------------------------------------

export default function TravelPostView() {
  const { title, description, author, tags, content } = _blogTravelPosts[0];

  return (
    <>
      <BlogTravelPostHero post={_blogTravelPosts[0]} />

      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: 'Home', href: '/' },
            { name: 'Blog', href: paths.travel.posts },
            { name: title },
          ]}
        />
      </Container>

      <Divider sx={{ mb: { xs: 6, md: 10 } }} />

      <Container>
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <Typography variant="h5" sx={{ mb: 5 }}>
              {description}
            </Typography>

            <Markdown content={content} firstLetter />

            <PostTags tags={tags} />

            <PostSocialsShare />

            <Divider sx={{ mt: 8 }} />

            <PostAuthor author={author} />
          </Grid>

          <Grid xs={12} md={4}>
            <BlogSidebar
              popularTags={_tags}
              author={author}
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

      <BlogTravelLatestPosts posts={_blogTravelPosts.slice(0, 4)} />

      <NewsletterTravel />
    </>
  );
}
