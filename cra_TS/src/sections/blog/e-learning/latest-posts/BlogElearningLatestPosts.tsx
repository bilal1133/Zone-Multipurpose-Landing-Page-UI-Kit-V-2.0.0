import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Container, Typography, Stack, Button } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// routes
import { paths } from 'src/routes/paths';
// types
import { IBlogPostProps } from 'src/types/blog';
// components
import Iconify from 'src/components/iconify';
//
import PostItem from '../posts/PostItem';
import PostItemMobile from '../../components/PostItemMobile';

// ----------------------------------------------------------------------

type Props = {
  posts: IBlogPostProps[];
};

export default function BlogElearningLatestPosts({ posts }: Props) {
  const isMdUp = useResponsive('up', 'md');

  const viewAllBtn = (
    <Button
      component={RouterLink}
      to={paths.eLearning.posts}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      View All
    </Button>
  );

  return (
    <Container
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={{ xs: 'center', md: 'space-between' }}
        sx={{
          mb: { xs: 8, md: 10 },
        }}
      >
        <Typography variant="h3">Latest Posts</Typography>

        {isMdUp && viewAllBtn}
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gap: { xs: 3, md: 4 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {posts
          .slice(0, 3)
          .map((post) =>
            isMdUp ? (
              <PostItem key={post.id} post={post} />
            ) : (
              <PostItemMobile key={post.id} post={post} />
            )
          )}
      </Box>

      {!isMdUp && (
        <Stack alignItems="center" sx={{ mt: 8 }}>
          {viewAllBtn}
        </Stack>
      )}
    </Container>
  );
}
