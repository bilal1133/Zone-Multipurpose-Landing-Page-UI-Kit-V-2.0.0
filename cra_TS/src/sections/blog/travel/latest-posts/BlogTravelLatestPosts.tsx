import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Stack, Button, Container, Typography } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// types
import { IBlogPostProps } from 'src/types/blog';
// components
import Iconify from 'src/components/iconify';
//
import PostItemMobile from '../../components/PostItemMobile';
import PostItem from './PostItem';

// ----------------------------------------------------------------------

type Props = {
  posts: IBlogPostProps[];
};

export default function BlogTravelLatestPosts({ posts }: Props) {
  const isMdUp = useResponsive('up', 'md');

  const viewAllBtn = (
    <Button
      component={RouterLink}
      to={paths.travel.posts}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      View All
    </Button>
  );

  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
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
            gap: 3,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {posts
            .slice(0, 4)
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
    </Box>
  );
}
