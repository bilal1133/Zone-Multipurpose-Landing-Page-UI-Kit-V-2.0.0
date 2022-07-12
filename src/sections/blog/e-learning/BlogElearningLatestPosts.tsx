// next
import NextLink from 'next/link';
// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// routes
import Routes from '../../../routes';
// @types
import { BlogPostProps } from '../../../@types/blog';
// components
import { Iconify } from '../../../components';
//
import BlogElearningPostItem from './BlogElearningPostItem';
import BlogPostItemMobile from '../BlogPostItemMobile';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  posts: BlogPostProps[];
};

export default function BlogElearningLatestPosts({ posts }: Props) {
  const isDesktop = useResponsive('up', 'md');

  return (
    <RootStyle>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h2">Latest Posts</Typography>

          <NextLink href={Routes.eLearning.posts} passHref>
            <Button
              endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
              sx={{ display: { xs: 'none', md: 'inline-flex' } }}
            >
              View All
            </Button>
          </NextLink>
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
              isDesktop ? (
                <BlogElearningPostItem key={post.slug} post={post} />
              ) : (
                <BlogPostItemMobile key={post.slug} post={post} path="/e-learning/blog" />
              )
            )}
        </Box>

        <Stack
          alignItems="center"
          sx={{
            mt: 8,
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <NextLink href={Routes.eLearning.posts} passHref>
            <Button
              endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
            >
              View All
            </Button>
          </NextLink>
        </Stack>
      </Container>
    </RootStyle>
  );
}
