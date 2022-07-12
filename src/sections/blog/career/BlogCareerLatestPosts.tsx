// next
import NextLink from 'next/link';
// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// @mui
import { styled } from '@mui/material/styles';
import Masonry from '@mui/lab/Masonry';
import { Container, Typography, Stack, Button, Box } from '@mui/material';
// routes
import Routes from '../../../routes';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// utils
import { fDate } from '../../../utils/formatTime';
// @types
import { BlogPostProps } from '../../../@types/blog';
// components
import { Image, BgOverlay, Iconify, TextMaxLine } from '../../../components';
//
import BlogPostItemMobile from '../BlogPostItemMobile';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

const DotStyle = styled('span')(({ theme }) => ({
  width: 4,
  height: 4,
  borderRadius: '50%',
  backgroundColor: 'currentColor',
  margin: theme.spacing(0, 1),
}));

// ----------------------------------------------------------------------

type Props = {
  posts: BlogPostProps[];
};

export default function BlogCareerLatestPosts({ posts }: Props) {
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
            <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
              Read Our Lates News
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Aenean vulputate eleifend tellus. Mauris turpis nunc, blandit et, volutpat molestie,
              porta ut, ligula.
            </Typography>
          </Stack>

          <NextLink href={Routes.career.posts} passHref>
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
              sm: 'repeat(2, 1fr)',
            },
          }}
        >
          {isDesktop ? (
            <>
              <PostItem post={posts[0]} largePost />

              <Masonry columns={{ xs: 1, md: 2 }} spacing={4}>
                {posts.slice(1, 5).map((post, index) => (
                  <PostItem key={post.slug} post={post} order={index % 2} />
                ))}
              </Masonry>
            </>
          ) : (
            <>
              {posts.slice(0, 5).map((post) => (
                <BlogPostItemMobile key={post.slug} post={post} path="/career" />
              ))}
            </>
          )}
        </Box>

        <Stack
          alignItems="center"
          sx={{
            mt: 8,
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <NextLink href={Routes.career.posts} passHref>
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

// ----------------------------------------------------------------------

type PostItemProps = {
  post: BlogPostProps;
  order?: number;
  largePost?: boolean;
};

function PostItem({ post, order, largePost }: PostItemProps) {
  const { slug, frontmatter } = post;
  const { title, duration, coverImg, description, createdAt } = frontmatter;

  return (
    <Stack
      spacing={2}
      sx={{
        ...(largePost && {
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
        }),
      }}
    >
      <Image
        src={coverImg}
        alt={title}
        ratio={(largePost && '3/4') || (order && '4/3') || '1/1'}
        sx={{ borderRadius: 2 }}
      />

      <Stack
        spacing={largePost ? 2 : 1}
        sx={{
          ...(largePost && {
            p: 5,
            bottom: 0,
            zIndex: 9,
            position: 'absolute',
            color: 'common.white',
          }),
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            typography: 'caption',
            color: 'text.disabled',
            ...(largePost && {
              opacity: 0.72,
              color: 'inherit',
            }),
          }}
        >
          {fDate(createdAt)}
          <DotStyle />
          {duration}
        </Stack>

        <NextLink passHref as={Routes.career.post(slug)} href={Routes.career.post('[slug]')}>
          <TextMaxLine variant={largePost ? 'h3' : 'h6'} asLink>
            {title}
          </TextMaxLine>
        </NextLink>

        {largePost && <Typography sx={{ opacity: 0.48 }}>{description}</Typography>}
      </Stack>

      {largePost && <BgOverlay />}
    </Stack>
  );
}
