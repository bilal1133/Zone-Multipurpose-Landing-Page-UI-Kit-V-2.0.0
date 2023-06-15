import { Link as RouterLink } from 'react-router-dom';
// @mui
import Masonry from '@mui/lab/Masonry';
import { Container, Typography, Stack, Button, Box } from '@mui/material';
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

export default function BlogCareerLatestPosts({ posts }: Props) {
  const isMdUp = useResponsive('up', 'md');

  const latestPost = posts[0];

  const viewAllBtn = (
    <Button
      component={RouterLink}
      to={paths.career.posts}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      View All
    </Button>
  );

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
        pb: 10,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={{ xs: 'center', md: 'space-between' }}
        sx={{
          mb: { xs: 8, md: 10 },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Stack
          sx={{
            maxWidth: { md: 460 },
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            BLOG
          </Typography>

          <Typography variant="h2" sx={{ my: 3 }}>
            Read Our Lates News
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Aenean vulputate eleifend tellus. Mauris turpis nunc, blandit et, volutpat molestie,
            porta ut, ligula.
          </Typography>
        </Stack>

        {isMdUp && viewAllBtn}
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gap: { xs: 3, md: 4 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
          },
        }}
      >
        {isMdUp ? (
          <>
            <PostItem post={latestPost} largePost />

            <Masonry columns={{ xs: 1, md: 2 }} spacing={4}>
              {posts.slice(1, 5).map((post, index) => (
                <PostItem key={post.id} post={post} order={index % 2} />
              ))}
            </Masonry>
          </>
        ) : (
          <>
            {posts.slice(0, 5).map((post) => (
              <PostItemMobile key={post.id} post={post} />
            ))}
          </>
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
