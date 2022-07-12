// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Stack, Box, Avatar } from '@mui/material';
// routes
import Routes from '../../../routes';
// utils
import { fDate } from '../../../utils/formatTime';
// @types
import { BlogPostProps } from '../../../@types/blog';
// components
import { Image, BgOverlay, TextMaxLine } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingBottom: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
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

export default function BlogTravelFeaturedPosts({ posts }: Props) {
  return (
    <RootStyle>
      <Container>
        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
            },
          }}
        >
          <PostItem post={posts[0]} largePost />

          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              },
            }}
          >
            {posts.slice(1, 5).map((post) => (
              <PostItem key={post.slug} post={post} />
            ))}
          </Box>
        </Box>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

type PostItemProps = {
  post: BlogPostProps;
  largePost?: boolean;
};

function PostItem({ post, largePost }: PostItemProps) {
  const { slug, frontmatter } = post;
  const { title, description, duration, createdAt, author, coverImg } = frontmatter;

  return (
    <Box sx={{ borderRadius: 2, overflow: 'hidden', position: 'relative' }}>
      <Image src={coverImg} alt={title} ratio="1/1" />

      <Stack
        spacing={1}
        sx={{
          p: 3,
          bottom: 0,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
          ...(largePost && {
            p: { xs: 3, md: 5 },
          }),
        }}
      >
        <Stack direction="row" alignItems="center" sx={{ opacity: 0.72, typography: 'caption' }}>
          {fDate(createdAt)}
          <DotStyle />
          {duration}
        </Stack>

        <NextLink passHref as={Routes.travel.post(slug)} href={Routes.travel.post('[slug]')}>
          <TextMaxLine
            asLink
            sx={{
              typography: 'h6',
              ...(largePost && {
                typography: { xs: 'h6', md: 'h4' },
              }),
            }}
          >
            {title}
          </TextMaxLine>
        </NextLink>

        {largePost && <TextMaxLine sx={{ opacity: 0.48 }}>{description}</TextMaxLine>}

        <Stack direction="row" alignItems="center" sx={{ typography: 'body2', pt: 1.5 }}>
          <Avatar
            src={author.picture}
            sx={{
              mr: 1,
              width: 32,
              height: 32,
              ...(largePost && {
                width: { xs: 32, md: 40 },
                height: { xs: 32, md: 40 },
              }),
            }}
          />
          {author.name}
        </Stack>
      </Stack>

      <BgOverlay />
    </Box>
  );
}
