// @mui
import { Container, Box } from '@mui/material';
// types
import { IBlogPostProps } from 'src/types/blog';
//
import PostItem from './PostItem';

// ----------------------------------------------------------------------

type Props = {
  posts: IBlogPostProps[];
};

export default function BlogTravelFeaturedPosts({ posts }: Props) {
  const featuredPost = posts[0];

  return (
    <Container
      sx={{
        pt: { xs: 0, md: 5 },
        pb: 10,
      }}
    >
      <Box
        sx={{
          gap: 3,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          },
        }}
      >
        <PostItem post={featuredPost} largePost />

        <Box
          sx={{
            gap: 3,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            },
          }}
        >
          {posts.slice(1, 5).map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
